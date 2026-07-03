import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  MenuItem,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CustomContainer from "../../components/common/CustomContainer";
import CustomInput from "../../components/common/CustomInput";
import SuccessDialog from "../../components/common/SuccessDialog";
import { registerUser } from "../../services/authService";
import { getAll } from "../../services/crudService";

import signupImg from "../../assets/child.jpg";
import SyrianFlag from "../../assets/SyrianFlag.svg";

export default function SignUpPage() {
  const [areas, setAreas] = useState([]);
  const [isLoadingAreas, setIsLoadingAreas] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectUserType, setSelectUserType] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [areaError, setAreaError] = useState("");
  const [userTypeError, setUserTypeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoadingAreas(true);
    getAll("areas") // TODO: تأكدي من اسم الـ endpoint الصحيح لجلب المناطق
      .then((res) => {
        console.log("رد المناطق:", res); // 👈 ضيفي هاد السطر مؤقتاً
        setAreas(res || []);
        setIsLoadingAreas(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingAreas(false);
      });
  }, []);

  const resetErrors = () => {
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setAreaError("");
    setUserTypeError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const validate = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("الاسم مطلوب");
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError("البريد الإلكتروني مطلوب");
      isValid = false;
    }
    if (!phone.trim()) {
      setPhoneError("رقم الهاتف مطلوب");
      isValid = false;
    }
    if (!selectedArea) {
      setAreaError("الرجاء اختيار المنطقة");
      isValid = false;
    }
    if (!selectUserType) {
      setUserTypeError("الرجاء اختيار نوع المستخدم");
      isValid = false;
    }
    if (!password) {
      setPasswordError("كلمة المرور مطلوبة");
      isValid = false;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("كلمتا المرور غير متطابقتين");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();

    if (!validate()) return;

    // القيمة المرسلة لـ type هي نفسها القيمة المختارة من select (متبرع / رجل أعمال / منظمة)
    const payload = {
      name,
      email,
      phone,
      city: selectedArea,
      type: selectUserType,
      password,
      password_confirmation: confirmPassword, // شائع بمشاريع Laravel، تأكدي إنه الاسم الصحيح عندكم
    };

    setIsSubmitting(true);
    const result = await registerUser(payload);
    setIsSubmitting(false);

    if (!result.success) {
      const { fieldErrors, generalError } = result;

      if (fieldErrors?.name) setNameError(fieldErrors.name);
      if (fieldErrors?.email) setEmailError(fieldErrors.email);
      if (fieldErrors?.phone) setPhoneError(fieldErrors.phone);
      if (fieldErrors?.city) setAreaError(fieldErrors.city);
      if (fieldErrors?.type) setUserTypeError(fieldErrors.type);
      if (fieldErrors?.password) setPasswordError(fieldErrors.password);
      if (fieldErrors?.password_confirmation)
        setConfirmPasswordError(fieldErrors.password_confirmation);

      if (generalError) toast.error(generalError);
      return;
    }

    const { user, token } = result.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setSelectedArea("");
    setSelectUserType("");

    setOpenSuccess(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "calc(100vh - 122px)",
        mt: "20px",
        flexWrap: { xs: "wrap-reverse", md: "nowrap" },
      }}
    >
      {/* القسم الأيمن - الصورة */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: { xs: "none", md: "block" },
          backgroundImage: `url(${signupImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            transform: "translateY(-50%)",
            bgcolor: "var(--white)",
            opacity: 0.6,
            wordSpacing: "4px",
            mx: "10%",
            p: "32px 64px",
            width: "fit-content",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "Cairo",
              fontSize: "35px",
              fontWeight: 600,
              color: "var(--ink)",
              mb: "24px",
            }}
          >
            انضم إلينا وابدأ التغيير
          </Typography>
          <Box component="ul" sx={{ pr: "20px", m: 0 }}>
            {[
              "أنشئ حملات تبرع غير محدودة",
              "استخدم قوالب جاهزة لحملتك",
              "مساحة تخزين كافية لصورك ومستنداتك",
              "تابع إحصائيات حملتك أولاً بأول",
            ].map((item, i) => (
              <Typography
                component="li"
                key={i}
                sx={{
                  fontFamily: "Cairo",
                  color: "var(--ink)",
                  fontSize: "17px",
                  maxWidth: "370px",
                  lineHeight: "30px",
                  p: "10px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* القسم الأيسر - الفورم */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomContainer
          styles={{
            maxWidth: "90% !important",
            mx: "auto",
            px: { xs: "20px", md: "0" },
            py: "20px",
          }}
        >
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              fontFamily: "Cairo",
              fontWeight: 600,
              fontSize: "30px",
              mb: "20px",
              color: "var(--ink)",
            }}
          >
            إنشاء حساب جديد
          </Typography>

          <Button
            fullWidth
            startIcon={<FaFacebook style={{ width: 18, height: 18 }} />}
            sx={{
              height: "60px",
              borderRadius: "2px",
              bgcolor: "#1877f2",
              color: "var(--white)",
              fontWeight: "bold",
              fontFamily: "Cairo",
              boxShadow: "var(--shadow-1)",
              mb: "16px",
              "&:hover": { bgcolor: "#1877f2", opacity: 0.9 },
            }}
          >
            التسجيل عبر فيسبوك
          </Button>

          <Button
            fullWidth
            startIcon={<FcGoogle style={{ width: 18, height: 18 }} />}
            sx={{
              height: "60px",
              borderRadius: "2px",
              bgcolor: "var(--white)",
              border: "1px solid var(--border-grey)",
              fontWeight: "bold",
              fontFamily: "Cairo",
              boxShadow: "var(--shadow-1)",
              "&:hover": { bgcolor: "var(--bg)" },
            }}
          >
            التسجيل عبر جوجل
          </Button>

          <Divider
            sx={{
              my: "20px",
              fontFamily: "Cairo",
              fontSize: "14px",
              color: "var(--muted)",
              "&::before, &::after": { borderColor: "var(--border-grey)" },
            }}
          >
            أو
          </Divider>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <CustomInput
                label="البريد الإلكتروني"
                inputType="email"
                value={email}
                setValue={setEmail}
                placeholder="ادخل بريدك الإلكتروني"
                errorMsg={emailError}
                isRequired
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <CustomInput
                label="الاسم الكامل"
                inputType="input"
                value={name}
                setValue={setName}
                placeholder="ادخل اسمك الكامل"
                errorMsg={nameError}
                isRequired
              />
            </Box>

            {/* رقم الهاتف */}
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  mb: 1,
                  fontFamily: "Cairo",
                  fontSize: "16px",
                  color: "#374151",
                }}
              >
                رقم الهاتف
                <span style={{ color: "var(--error-color)" }}>*</span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "48px",
                  px: "10px",
                  border: "1px solid",
                  borderColor: phoneError
                    ? "var(--error-color)"
                    : "var(--border-grey)",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={SyrianFlag}
                  alt="سوريا"
                  style={{ width: "30px", height: "22px" }}
                />
                <InputBase
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{ fontFamily: "Cairo", color: "#333" }}
                />
                <Typography
                  sx={{ mx: "8px", fontFamily: "Cairo", color: "var(--muted)" }}
                >
                  963+
                </Typography>
              </Box>
              {phoneError && (
                <FormHelperText sx={{ color: "var(--error-color)" }}>
                  {phoneError}
                </FormHelperText>
              )}
            </Box>

            {/* المنطقة */}
            <Box sx={{ mb: 2 }}>
              <CustomInput
                label="المنطقة"
                inputType="select"
                value={selectedArea}
                setValue={setSelectedArea}
                errorMsg={areaError}
                isRequired
              >
                {isLoadingAreas ? (
                  <MenuItem disabled>جاري تحميل المناطق...</MenuItem>
                ) : (
                  [
                    <MenuItem key="1" value="حمص">
                      حمص
                    </MenuItem>,
                    <MenuItem key="2" value="دمشق">
                      دمشق
                    </MenuItem>,
                    <MenuItem key="3" value="حلب">
                      حلب
                    </MenuItem>,
                  ]
                )}
              </CustomInput>
            </Box>

            {/* نوع المستخدم */}
            <Box sx={{ mb: 2 }}>
              <CustomInput
                label="نوع المستخدم"
                inputType="select"
                value={selectUserType}
                setValue={setSelectUserType}
                errorMsg={userTypeError}
                isRequired
              >
                <MenuItem value="متبرع">متبرع</MenuItem>
                <MenuItem value="رجل أعمال">رجال أعمال</MenuItem>
                <MenuItem value="منظمة">منظمة</MenuItem>
              </CustomInput>
            </Box>

            <Box sx={{ mb: 2 }}>
              <CustomInput
                label="كلمة المرور"
                inputType="password"
                value={password}
                setValue={setPassword}
                placeholder="ادخل كلمة المرور"
                errorMsg={passwordError}
                isRequired
              />
            </Box>

            <Box sx={{ mb: 1 }}>
              <CustomInput
                label="تأكيد كلمة المرور"
                inputType="password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                placeholder="أعد إدخال كلمة المرور"
                errorMsg={confirmPasswordError}
                isRequired
              />
            </Box>

            <Button
              fullWidth
              type="submit"
              disabled={isSubmitting}
              sx={{
                fontFamily: "Cairo",
                fontSize: "17px",
                fontWeight: 100,
                py: "15px",
                mt: 1,
                bgcolor: "var(--secondary-color)",
                color: "var(--white)",
                borderRadius: "4px",
                "&:hover": { bgcolor: "var(--main-color)" },
                "&.Mui-disabled": { opacity: 0.7, color: "var(--white)" },
              }}
            >
              {isSubmitting ? "جارِ إنشاء الحساب..." : "إنشاء الحساب"}
            </Button>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              mt: "15px",
              fontFamily: "Cairo",
              fontSize: "14px",
            }}
          >
            لديك حساب بالفعل؟{" "}
            <Link
              to="/login"
              style={{
                color: "var(--ink)",
                textDecoration: "underline",
                fontFamily: "Cairo",
              }}
            >
              تسجيل الدخول
            </Link>
          </Typography>
        </CustomContainer>
      </Box>

      <SuccessDialog
        open={openSuccess}
        title="تم إنشاء حسابك بنجاح"
        description="مرحبًا بك في منصة حملات التبرع، يمكنك الآن البدء"
        buttonText="الذهاب للرئيسية"
        onClose={() => setOpenSuccess(false)}
        onAction={() => navigate("/")}
      />
    </Box>
  );
}
