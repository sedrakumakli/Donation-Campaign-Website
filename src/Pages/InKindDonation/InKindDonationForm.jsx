import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from "@mui/material/styles";

import axios from "../../services/axios";

import theme from "./theme";
import StepDonation  from "./StepDonation";
import StepLocation  from "./StepLocation";
import StepImages    from "./StepImages";
import StepReview    from "./StepReview";
import SuccessScreen from "./SuccessScreen";

const STEPS = ["بيانات التبرع", "الموقع والحالة", "الصور", "مراجعة"];

const INITIAL_FORM = {
  name: "",
  typeName: "",
  isCustomType: false,
  quantity: 1,
  governorateId: null,
  governorateName: "",
  condition: null,
  conditionName: "",
  images: [],
  notes: "",
};

const ARABIC_ONLY = /^[\u0600-\u06FF\s\،\,\.\-]+$/;

export default function InKindDonationForm({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL_FORM);

  const [types,        setTypes]        = useState([]);
  const [governorates, setGovernorates] = useState([]);
  const [conditions,   setConditions]   = useState([]);

  const [loadingTypes, setLoadingTypes] = useState(true);
  const [loadingGov,   setLoadingGov]   = useState(true);
  const [loadingCond,  setLoadingCond]  = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [error,      setError]      = useState("");
  const [success,    setSuccess]    = useState(false);
  const [refCode,    setRefCode]    = useState("");
  const [nameError,  setNameError]  = useState("");
  const [typeError,  setTypeError]  = useState("");

  const handleClose = () => {
    if (submitting) return;
    setStep(0);
    setForm(INITIAL_FORM);
    setError("");
    setSuccess(false);
    setRefCode("");
    setNameError("");
    setTypeError("");
    onClose();
  };

  useEffect(() => {
    if (!open) return;

    const fetchData = async () => {
      try {
        const [typesRes, govRes, condRes] = await Promise.all([
          axios.get("/inkinddonation/type"),
          axios.get("/governorates/all"),
          axios.get("/inkinddonation/statusmaterail"),
        ]);

        setTypes(
          Array.isArray(typesRes.data?.data) ? typesRes.data.data
          : Array.isArray(typesRes.data)     ? typesRes.data
          : []
        );

        setGovernorates(
          Array.isArray(govRes.data?.data) ? govRes.data.data
          : Array.isArray(govRes.data)     ? govRes.data
          : []
        );

        const condArr =
          Array.isArray(condRes.data?.data) ? condRes.data.data
          : Array.isArray(condRes.data)     ? condRes.data
          : [];

        setConditions(condArr.map((item) => ({ label: item, value: item })));

      } catch (e) {
        console.error("خطأ في جلب البيانات:", e.message);
        setError("تعذّر تحميل البيانات، تأكد من تسجيل الدخول وأعد المحاولة");
      } finally {
        setLoadingTypes(false);
        setLoadingGov(false);
        setLoadingCond(false);
      }
    };

    fetchData();
  }, [open]);

  const validate = () => {
    if (step === 0) {
      if (!form.name.trim()) return "أدخل اسم التبرع";
      if (form.name.trim().length < 3) return "اسم التبرع يجب أن يكون 3 أحرف على الأقل";
      if (!ARABIC_ONLY.test(form.name.trim())) return "اسم التبرع يجب أن يكون باللغة العربية فقط";
      if (form.isCustomType && !form.typeName.trim()) return "أدخل نوع التبرع";
      if (form.isCustomType && form.typeName.trim().length < 3) return "نوع التبرع يجب أن يكون 3 أحرف على الأقل";
      if (!form.isCustomType && !form.typeName) return "اختر نوع التبرع";
    }
    if (step === 1) {
      if (!form.governorateId) return "اختر المحافظة";
      if (!form.condition)     return "اختر حالة المواد";
    }
    return "";
  };

  const handleNext = () => {
    const err = validate();
    if (err) {
      setError(err);
      if (
        err === "أدخل اسم التبرع" ||
        err === "اسم التبرع يجب أن يكون 3 أحرف على الأقل" ||
        err === "اسم التبرع يجب أن يكون باللغة العربية فقط"
      ) {
        setNameError(err);
      }
      if (
        err === "أدخل نوع التبرع" ||
        err === "اختر نوع التبرع" ||
        err === "نوع التبرع يجب أن يكون 3 أحرف على الأقل"
      ) {
        setTypeError(err);
      }
      return;
    }
    setError("");
    setNameError("");
    setTypeError("");
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError("");
    setNameError("");
    setTypeError("");
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name_of_material",   form.name);
      formData.append("amount",             form.quantity);
      formData.append("governorate_uuid",   form.governorateId);
      formData.append("type",               form.isCustomType ? "غير ذلك" : form.typeName);
      formData.append("status_of_materail", form.condition);

      if (form.isCustomType && form.typeName.trim()) {
        formData.append("on_the_other_hand", form.typeName);
      }

      form.images.forEach((img) => formData.append("images[]", img.file));

      const res = await axios.post("/donation/add", formData);
      setRefCode(res.data?.data?.reference_code || res.data?.reference_code || "");
      setSuccess(true);

    } catch (e) {
      const apiMessage =
        e.response?.data?.message ||
        e.response?.data?.error ||
        e.message ||
        "حدث خطأ أثناء الإرسال";
      setError(apiMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>

      <Dialog
        open={open && success}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        slotProps={{ paper: { sx: { borderRadius: 3 } } }}
      >
        <DialogTitle sx={{ pb: 0 }}>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{ position: "absolute", left: 10, top: 10 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 1, px: 3, pb: 3 }}>
          <SuccessScreen onClose={handleClose} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={open && !success}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              pointerEvents: submitting ? "none" : "auto",
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "1rem",
            py: 1.5,
            px: 2.5,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <IconButton
            onClick={handleClose}
            disabled={submitting}
            size="small"
            sx={{ color: "text.secondary" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <Box component="span">تبرع عيني</Box>
        </DialogTitle>

        <DialogContent dir="rtl" sx={{ px: 3, pt: 3, pb: 3 }}>

          <Stepper activeStep={step} alternativeLabel sx={{ mt: 3, mb: 3 }}>
            {STEPS.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Paper
            elevation={0}
            variant="outlined"
            sx={{ p: { xs: 2, sm: 2.5 }, mb: 2.5, borderRadius: 2 }}
          >
            {step === 0 && (
              <StepDonation
                form={form}
                setForm={setForm}
                types={types}
                loadingTypes={loadingTypes}
                nameError={nameError}
                setNameError={setNameError}
                typeError={typeError}
                setTypeError={setTypeError}
              />
            )}
            {step === 1 && (
              <StepLocation
                form={form}
                setForm={setForm}
                governorates={governorates}
                conditions={conditions}
                loadingGov={loadingGov}
                loadingCond={loadingCond}
              />
            )}
            {step === 2 && <StepImages form={form} setForm={setForm} />}
            {step === 3 && <StepReview form={form} />}
          </Paper>

          {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2, fontSize: 13 }}>
              {error}
            </Alert>
          )}

          <Box sx={{ display: "flex", gap: 1.5 }}>
            {step > 0 && (
              <Button
                variant="outlined"
                color="primary"
                onClick={handleBack}
                disabled={submitting}
                sx={{ minWidth: 88, height: 40 }}
              >
                رجوع
              </Button>
            )}

            {step < STEPS.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                fullWidth
                disableElevation
                sx={{ height: 40 }}
              >
                التالي
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                disabled={submitting}
                disableElevation
                sx={{ height: 40 }}
                startIcon={
                  submitting
                    ? <CircularProgress size={16} sx={{ color: "#fff" }} />
                    : null
                }
              >
                {submitting ? "جارٍ الإرسال..." : "إرسال التبرع"}
              </Button>
            )}
          </Box>

        </DialogContent>
      </Dialog>

    </ThemeProvider>
  );
}