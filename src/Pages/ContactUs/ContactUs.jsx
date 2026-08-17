import { useState } from "react";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import BreadCrumb from "../../components/BreadCrumb";
const IMAGES = {
  hero: "/hero2ContactUS.jpg",
  story: "../../../public/aboutus.avif",
};

//  EmailJS
const EMAILJS_SERVICE_ID = "service_njm7a1k";
const EMAILJS_TEMPLATE_ID = "template_enmqn4k";
const EMAILJS_PUBLIC_KEY = "XCNzZ9RX84NDTAlU3";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "var(--radius-md)",
    backgroundColor: "var(--white)",
    fontFamily: "Cairo",
    "& fieldset": {
      borderColor: "var(--border-grey)",
    },
    "&:hover fieldset": {
      borderColor: "var(--slate)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--main-color)",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "Cairo",
    color: "var(--ink)",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "var(--secondary-color)",
    opacity: 1,
  },
};

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("الرجاء تعبئة الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject || "بدون موضوع",
      message,
      reply_to: email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      toast.success("تم إرسال رسالتك بنجاح، سنتواصل معك قريباً");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.log(err);
      toast.error("تعذر إرسال الرسالة، حاول مرة أخرى لاحقاً");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaPhoneAlt />, label: "اتصل بنا", value: "+963 949 828 958" },
    {
      icon: <FaEnvelope />,
      label: "البريد الإلكتروني",
      value: "DonationCampaign.com",
    },
    {
      icon: <FaGlobe />,
      label: "الموقع الإلكتروني",
      value: "www.DonationCampaign.com",
    },
    { icon: <FaMapMarkerAlt />, label: "العنوان", value: "حمص، سوريا" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {" "}
      <BreadCrumb
        dynamicItems={[{ label: "تواصل معنا", path: "/contactUs" }]}
      />
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 200, md: 605 },
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(100deg, rgba(0,55,68,0.93) 0%, rgba(0,55,68,0.78) 45%, rgba(0,55,68,0.45) 100%), url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          width: "100%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{
              fontFamily: "Cairo",
              fontWeight: 700,
              fontSize: { xs: "32px", md: "44px" },
              color: "var(--white)",
              mb: 1,
            }}
          >
            تواصل{" "}
            <Box component="span" sx={{ color: "var(--gold)" }}>
              معنا
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "14px",
              color: "var(--tint)",
            }}
          >
            الرئيسية / تواصل معنا
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "20px", md: "60px" },
          py: { xs: "50px", md: "90px" },
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "50px", md: "80px" },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ flex: 1, minWidth: { xs: "100%", md: "0" } }}
        >
          <Box sx={{ mb: "20px" }}>
            <Typography
              sx={{
                fontFamily: "Cairo",
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--ink)",
                mb: "8px",
              }}
            >
              الاسم الكامل
            </Typography>
            <TextField
              fullWidth
              placeholder="الاسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={inputStyles}
            />
          </Box>

          <Box sx={{ mb: "20px" }}>
            <Typography
              sx={{
                fontFamily: "Cairo",
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--ink)",
                mb: "8px",
              }}
            >
              البريد الإلكتروني
            </Typography>
            <TextField
              fullWidth
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={inputStyles}
            />
          </Box>

          <Box sx={{ mb: "20px" }}>
            <Typography
              sx={{
                fontFamily: "Cairo",
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--ink)",
                mb: "8px",
              }}
            >
              الموضوع
            </Typography>
            <TextField
              fullWidth
              placeholder="الموضوع"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={inputStyles}
            />
          </Box>

          <Box sx={{ mb: "24px" }}>
            <Typography
              sx={{
                fontFamily: "Cairo",
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--ink)",
                mb: "8px",
              }}
            >
              رسالتك
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="اكتب رسالتك هنا"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={inputStyles}
            />
          </Box>

          <Button
            type="submit"
            disabled={isSubmitting}
            sx={{
              fontFamily: "Cairo",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              px: "36px",
              py: "14px",
              bgcolor: "var(--gold)",
              color: "var(--white)",
              borderRadius: "6px",
              boxShadow: "var(--shadow-1)",
              "&:hover": { bgcolor: "var(--gold)", opacity: 0.9 },
              "&.Mui-disabled": { opacity: 0.6, color: "var(--white)" },
            }}
          >
            {isSubmitting ? "جارِ الإرسال..." : "إرسال الرسالة"}
          </Button>
        </Box>

        {/* --- معلومات التواصل --- */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "0" } }}>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--gold)",
              mb: "8px",
            }}
          >
            تواصل معنا
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Cairo",
              fontSize: { xs: "26px", md: "32px" },
              fontWeight: 700,
              color: "var(--ink)",
              mb: "16px",
            }}
          >
            ابقَ على تواصل معنا
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "15px",
              lineHeight: "28px",
              color: "var(--desc-color)",
              mb: "36px",
              maxWidth: "480px",
            }}
          >
            يسعدنا تواصلك معنا لأي استفسار عن حملات التبرع أو للمساهمة بدعم
            القضايا التي تهمك. فريقنا جاهز للرد عليك بأقرب وقت ممكن.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "28px",
              mb: "36px",
            }}
          >
            {contactInfo.map((item, i) => (
              <Box
                key={i}
                sx={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    borderRadius: "50%",
                    bgcolor: "var(--tint)",
                    color: "var(--main-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Cairo",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Cairo",
                      fontSize: "14px",
                      color: "var(--muted)",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "15px",
              fontWeight: 700,
              color: "var(--ink)",
              mb: "14px",
            }}
          >
            تابعونا على
          </Typography>
          <Box sx={{ display: "flex", gap: "12px" }}>
            {socialLinks.map((social, i) => (
              <IconButton
                key={i}
                component="a"
                href={social.href}
                sx={{
                  width: "42px",
                  height: "42px",
                  bgcolor: "var(--gold)",
                  color: "var(--white)",
                  fontSize: "18px",
                  "&:hover": { bgcolor: "var(--main-color)" },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
      {/* ===== Map Section ===== */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", md: "420px" },
          lineHeight: 0,
        }}
      >
        <iframe
          title="موقعنا على الخريطة"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423583.7683143482!2d36.10188!3d33.5106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6b5f21b1e5f%3A0x0!2z2K/Zhdi02YIsINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1620000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
}
