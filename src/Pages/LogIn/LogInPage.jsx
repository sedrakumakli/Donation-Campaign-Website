import { useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CustomContainer from "../../components/common/CustomContainer";
import CustomInput from "../../components/common/CustomInput";
import SuccessDialog from "../../components/common/SuccessDialog";
import { loginUser } from "../../services/authService";

import loginImg from "../../assets/child.jpg";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const navigate = useNavigate();

  const resetErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();

    if (!email.trim()) {
      setEmailError("البريد الإلكتروني مطلوب");
      return;
    }
    if (!password) {
      setPasswordError("كلمة المرور مطلوبة");
      return;
    }

    setIsSubmitting(true);
    const result = await loginUser({ email, password });
    setIsSubmitting(false);

    if (!result.success) {
      // أخطاء مرتبطة بحقل معين (لو الباك رجع object)
      if (result.fieldErrors?.email) setEmailError(result.fieldErrors.email);
      if (result.fieldErrors?.password)
        setPasswordError(result.fieldErrors.password);

      if (result.generalError) toast.error(result.generalError);
      return;
    }

    const { user, token } = result.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setOpenSuccess(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "calc(100vh - 122px)",
        flexWrap: { xs: "wrap-reverse", md: "nowrap" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${loginImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            wordSpacing: "4px",
            maxWidth: "450px",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "Cairo",
              fontSize: "40px",
              fontWeight: 500,
              color: "var(--white)",
              mb: "20px",
            }}
          >
            حوّل عطائك إلى أثرٍ حقيقي{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "17px",
              lineHeight: "30px",
              color: "var(--white)",
            }}
          >
            منصة تجمع المتبرعين وأصحاب المبادرات الإنسانية في مكان واحد، وتوفر
            حملات موثوقة وتقارير شفافة تضمن أن يصل عطاؤك إلى من يحتاجه.
          </Typography>
        </Box>
      </Box>

      {/* القسم الأيسر - الفورم */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          mt: "20px",
        }}
      >
        <CustomContainer
          styles={{
            maxWidth: "90% !important",
            mx: "auto",
            px: { xs: "20px", md: "0" },
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
            تسجيل الدخول
          </Typography>

          {/* <Button
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
            الدخول عبر فيسبوك
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
            الدخول عبر جوجل
          </Button> */}
          {/* <Divider
            sx={{
              my: "20px",
              fontFamily: "Cairo",
              fontSize: "14px",
              color: "var(--gold)",
              "&::before, &::after": { borderColor: "var(--border-grey)" },
            }}
          >
            أو
          </Divider> */}
          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mb: 2, marginTop: "60px" }}>
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

            <Box sx={{ mb: 1 }}>
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

            <Box sx={{ textAlign: "left", mb: "10px" }}>
              <Link
                to="/updatePassword"
                style={{
                  color: "var(--gold)",
                  textDecoration: "underline",
                  fontSize: "13px",
                  fontFamily: "Cairo",
                }}
              >
                نسيت كلمة المرور؟
              </Link>
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
                bgcolor: "var(--secondary-color)",
                color: "var(--white)",
                borderRadius: "4px",
                "&:hover": { bgcolor: "var(--main-color)" },
                "&.Mui-disabled": { opacity: 0.7, color: "var(--white)" },
              }}
            >
              {isSubmitting ? "جارِ تسجيل الدخول..." : "تسجيل الدخول"}
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
            ليس لديك حساب؟{" "}
            <Link
              to="/signup"
              style={{
                color: "var(--ink)",
                textDecoration: "underline",
                fontFamily: "Cairo",
              }}
            >
              إنشاء حساب جديد
            </Link>
          </Typography>
        </CustomContainer>
      </Box>

      <SuccessDialog
        open={openSuccess}
        title="تم تسجيل الدخول بنجاح"
        description="مرحبًا بك مجددًا في منصة حملات التبرع"
        buttonText="الذهاب للرئيسية"
        onClose={() => setOpenSuccess(false)}
        onAction={() => navigate("/")}
      />
    </Box>
  );
}
