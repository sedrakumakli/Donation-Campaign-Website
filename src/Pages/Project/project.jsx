import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import {
  LocationOn,
  Share,
  Check,
  KeyboardArrowDown,
  ChevronLeft,
  ChevronRight,
  School,
  AutoAwesome,
  Link as LinkIcon,
  Facebook,
} from "@mui/icons-material";

import DonateButton from "../../components/DonateButton/DonateButton";

/* =========================
   DATA
========================= */

const requirements = [
  {
    title: "ترميم الفصول الدراسية",
    desc: "إصلاح الجدران والأرضيات وطلاء الصفوف لبيئة تعليمية آمنة",
  },
  {
    title: "تأهيل دورات المياه",
    desc: "إعادة تجهيز المرافق الصحية بالكامل لتلبية احتياجات الطلاب",
  },
  {
    title: "تجهيز مختبر الحاسوب",
    desc: "توفير أجهزة حاسوب حديثة لتعليم المهارات الرقمية",
  },
  {
    title: "إصلاح الأسقف",
    desc: "معالجة التسريبات وتقوية البنية العلوية لضمان السلامة",
  },
];

const costItems = [
  { label: "ترميم الفصول الدراسية", amount: 3000 },
  { label: "إصلاح الأسقف", amount: 2000 },
  { label: "تأهيل دورات المياه", amount: 1000 },
  { label: "تجهيز مختبر الحاسوب", amount: 1700 },
  { label: "أعمال الطلاء", amount: 3000 },
  { label: "شراء المقاعد المدرسية", amount: 1800 },
];

/* =========================
   HERO IMAGES
========================= */

const heroImages = ["/school.jpeg", "/image 5.png"];

/* =========================
   SECTION TITLE
========================= */

const SECTION_TITLE_SX = {
  fontFamily: "'Cairo', sans-serif",
  fontSize: { xs: 22, md: 24 },
  fontWeight: 800,
  color: "var(--teal-900)",
};

/* =========================
   ANIMATION HELPERS
========================= */

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(node);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function FadeSection({ children, sx, delay = 0 }) {
  const [ref, inView] = useInView(0.15);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function Counter({ end, suffix = "", prefix = "", duration = 1200 }) {
  const [ref, inView] = useInView(0.5);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;

    started.current = true;

    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* =========================
   PROJECT PAGE
========================= */

export default function Project() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showBreakdown, setShowBreakdown] = useState(false);

  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const [shareOpen, setShareOpen] = useState(false);

  const [copied, setCopied] = useState(false);

  const [activeImg, setActiveImg] = useState(0);

  /* =========================
     CALCULATIONS
  ========================= */

  const totalCost = costItems.reduce((sum, item) => sum + item.amount, 0);

  const completion = 21;

  const raised = Math.round((totalCost * completion) / 100);

  const supportersCount = 34;

  const quickAmounts = [25, 50, 100, 250];

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const circumference = 2 * Math.PI * 42;

  const dashOffset = circumference - (circumference * completion) / 100;

  /* =========================
     HERO CAROUSEL
  ========================= */

  const nextImg = () => {
    setActiveImg((current) => (current + 1) % heroImages.length);
  };

  const prevImg = () => {
    setActiveImg(
      (current) => (current - 1 + heroImages.length) % heroImages.length,
    );
  };

  /* =========================
     COPY LINK
  ========================= */

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error(error);
    }

    setCopied(true);

    setTimeout(() => setCopied(false), 1800);
  };

  /* =========================
     DONATION OPTIONS
  ========================= */

  const donateOptions = [
    {
      label: "تبرع مباشر",
      onClick: () => navigate("/donate"),
    },
    {
      label: "تعهد",
      onClick: () => navigate(`/campaign/${id}/pledge`),
    },
  ];

  /* =========================
     STATS
  ========================= */

  const stats = [
    {
      icon: VerifiedRoundedIcon,
      isNumber: true,
      num: completion,
      suffix: "%",
      label: "نسبة الإنجاز",
    },
    {
      icon: VolunteerActivismRoundedIcon,
      isNumber: true,
      num: raised,
      prefix: "$",
      label: "تم جمعه",
    },
    {
      icon: GroupsRoundedIcon,
      isNumber: true,
      num: supportersCount,
      label: "داعم ساهم بالمشروع",
    },
    {
      icon: CampaignRoundedIcon,
      isNumber: false,
      value: "مؤسسة التعليم والتنمية",
      label: "الجهة الممولة",
    },
    {
      icon: GroupsRoundedIcon,
      isNumber: false,
      value: "منظمات محلية شريكة",
      label: "الجهة المنفذة",
    },
  ];

  return (
    <Box
      dir="rtl"
      sx={{
        fontFamily: "'Cairo', sans-serif",
        backgroundColor: "var(--bg)",
        color: "var(--ink)",
        overflowX: "hidden",
        pb: 4,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(201,162,75,0.35);
          }

          100% {
            box-shadow: 0 0 0 18px rgba(201,162,75,0);
          }
        }

        @keyframes fadeInImage {
          from {
            opacity: 0;
            transform: scale(1.03);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {/* =========================
          HERO
      ========================= */}

      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: 480,
            md: 600,
          },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          key={activeImg}
          component="img"
          src={heroImages[activeImg]}
          alt="صورة المشروع"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            animation: "fadeInImage .5s ease",
          }}
        />

        {/* الطبقة الخفيفة فوق الصورة */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: 1,
          }}
        />

        {/* حالة المشروع */}
        <Chip
          icon={
            <CampaignRoundedIcon
              sx={{
                color: "var(--gold) !important",
              }}
            />
          }
          label="قيد التنفيذ"
          sx={{
            position: "absolute",
            top: 28,
            right: 24,
            zIndex: 3,
            bgcolor: "rgba(255,255,255,0.12)",
            color: "var(--white)",
            fontWeight: 700,
            px: 1.5,
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
          }}
        />

        {/* المشاركة */}
        <Box
          sx={{
            position: "absolute",
            top: 28,
            left: 24,
            zIndex: 3,
          }}
        >
          <IconButton
            onClick={() => setShareOpen((current) => !current)}
            aria-label="مشاركة المشروع"
            sx={{
              width: 42,
              height: 42,
              color: "var(--white)",
              backgroundColor: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(6px)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.25)",
              },
            }}
          >
            <Share sx={{ fontSize: 18 }} />
          </IconButton>

          {shareOpen && (
            <Paper
              elevation={0}
              sx={{
                position: "absolute",
                left: 0,
                mt: 1,
                width: 208,
                p: 1,
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--white)",
                boxShadow: "var(--shadow-2)",
              }}
            >
              <Button
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  gap: 1,
                  px: 1.5,
                  py: 1.2,
                  borderRadius: "var(--radius-sm)",
                  color: "var(--ink)",
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "14.5px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                واتساب
              </Button>

              <Button
                fullWidth
                startIcon={
                  <Facebook
                    sx={{
                      color: "#3b5998",
                    }}
                  />
                }
                sx={{
                  justifyContent: "flex-start",
                  gap: 1,
                  px: 1.5,
                  py: 1.2,
                  borderRadius: "var(--radius-sm)",
                  color: "var(--ink)",
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "14.5px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                فيسبوك
              </Button>

              <Button
                fullWidth
                onClick={handleCopy}
                startIcon={
                  copied ? (
                    <Check
                      sx={{
                        color: "var(--teal-700)",
                      }}
                    />
                  ) : (
                    <LinkIcon
                      sx={{
                        color: "var(--muted)",
                      }}
                    />
                  )
                }
                sx={{
                  justifyContent: "flex-start",
                  gap: 1,
                  px: 1.5,
                  py: 1.2,
                  borderRadius: "var(--radius-sm)",
                  color: "var(--ink)",
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "14.5px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                {copied ? "تم نسخ الرابط" : "نسخ الرابط"}
              </Button>
            </Paper>
          )}
        </Box>

        {/* أسهم الصور */}
        {heroImages.length > 1 && (
          <>
            <IconButton
              onClick={prevImg}
              aria-label="الصورة السابقة"
              sx={{
                position: "absolute",
                top: "50%",
                right: 20,
                transform: "translateY(-50%)",
                zIndex: 3,
                width: 40,
                height: 40,
                color: "var(--white)",
                backgroundColor: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.28)",
                },
              }}
            >
              <ChevronRight sx={{ fontSize: 20 }} />
            </IconButton>

            <IconButton
              onClick={nextImg}
              aria-label="الصورة التالية"
              sx={{
                position: "absolute",
                top: "50%",
                left: 20,
                transform: "translateY(-50%)",
                zIndex: 3,
                width: 40,
                height: 40,
                color: "var(--white)",
                backgroundColor: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.28)",
                },
              }}
            >
              <ChevronLeft sx={{ fontSize: 20 }} />
            </IconButton>
          </>
        )}

        {/* محتوى Hero */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Stack
            spacing={2.5}
            sx={{
              width: "100%",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 32,
                  md: 54,
                },
                fontWeight: 900,
                lineHeight: 1.3,
                color: "var(--white)",
              }}
            >
              إعادة تأهيل مدرسة الوعر الابتدائية
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              gap={2.5}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <LocationOn
                  sx={{
                    fontSize: 20,
                    color: "var(--gold)",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(247,249,249,0.9)",
                    fontSize: 15.5,
                  }}
                >
                  حمص، مدينة حمص — حي الوعر
                </Typography>
              </Stack>

              <Stack direction="row" spacing={0.75} alignItems="center">
                <School
                  sx={{
                    fontSize: 20,
                    color: "var(--gold)",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(247,249,249,0.9)",
                    fontSize: 15.5,
                  }}
                >
                  القطاع التعليمي
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* =========================
          STATS
      ========================= */}

      <FadeSection
        sx={{
          px: {
            xs: 2.5,
            sm: 5,
          },
          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
            gap: {
              xs: 4,
              md: 5,
            },
          }}
        >
          {stats.map((s, i) => (
            <Box
              key={i}
              sx={{
                flex: {
                  xs: "0 0 calc(50% - 16px)",
                  md: "1 1 0",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
              }}
            >
              <Stack
                spacing={1}
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    color: "var(--gold)",
                    height: 34,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <s.icon
                    sx={{
                      fontSize: 34,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: s.isNumber ? 24 : 15,
                    fontWeight: 800,
                    color: "var(--teal-900)",
                    fontFamily: "'Cairo', sans-serif",
                    minHeight: 34,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {s.isNumber ? (
                    <Counter
                      end={s.num}
                      suffix={s.suffix || ""}
                      prefix={s.prefix || ""}
                    />
                  ) : (
                    s.value
                  )}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13.5,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    textAlign: "center",
                  }}
                >
                  {s.label}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </FadeSection>

      {/* =========================
          BODY
      ========================= */}

      <Box
        sx={{
          px: {
            xs: 2.5,
            sm: 5,
          },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* =========================
            ABOUT PROJECT
        ========================= */}

        <FadeSection>
          <Card
            elevation={0}
            sx={{
              borderRadius: "24px",
              p: {
                xs: 3,
                md: 5,
              },
              backgroundColor: "var(--white)",
              border: "1px solid var(--border-grey)",
              boxShadow: "var(--shadow-1)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* الخط الذهبي الجانبي */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 5,
                height: "100%",
                backgroundColor: "var(--gold)",
              }}
            />

            <Grid
              container
              spacing={{
                xs: 3,
                md: 6,
              }}
              alignItems="center"
            >
              {/* النص */}
              <Grid item xs={12} md={8}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    {/* <InfoRoundedIcon
                      sx={{
                        color: "var(--gold)",
                        fontSize: 28,
                      }}
                    /> */}

                    <Typography
                      sx={{
                        ...SECTION_TITLE_SX,
                        fontSize: {
                          xs: 22,
                          md: 26,
                        },
                      }}
                    >
                      عن المشروع
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      color: "var(--desc-color)",
                      fontSize: {
                        xs: "14.5px",
                        md: 15,
                      },
                      lineHeight: 2.2,
                      maxWidth: 1400,
                    }}
                  >
                    تعرضت مدرسة الوعر الابتدائية لأضرار جسيمة أثرت على قدرتها
                    على استقبال الطلاب في بيئة آمنة. يهدف هذا المشروع إلى إعادة
                    تأهيل المدرسة بالكامل، بدءاً من ترميم الفصول الدراسية وصولاً
                    إلى تجهيز مختبر حاسوب حديث، ليعود أكثر من ٣٠٠ طالب وطالبة
                    إلى مقاعد الدراسة في مطلع العام الدراسي القادم.
                  </Typography>
                </Stack>
              </Grid>

              {/* عدد المستفيدين */}
              {/* <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    backgroundColor: "var(--bg)",
                    borderRadius: "18px",
                    p: 3,
                    textAlign: "center",
                    border: "1px solid var(--border-grey)",
                  }}
                >
                  <School
                    sx={{
                      fontSize: 38,
                      color: "var(--gold)",
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: "var(--teal-900)",
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    +300
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      color: "var(--muted)",
                      fontSize: 13.5,
                      lineHeight: 1.8,
                    }}
                  >
                    طالب وطالبة
                    <br />
                    مستفيدون من المشروع
                  </Typography>
                </Box>
              </Grid> */}
            </Grid>
          </Card>
        </FadeSection>

        {/* =========================
            REQUIREMENTS
        ========================= */}

        <FadeSection delay={0.05}>
          <Card
            elevation={0}
            sx={{
              borderRadius: "24px",
              p: {
                xs: 3,
                md: 5,
              },
              backgroundColor: "var(--white)",
              border: "1px solid var(--border-grey)",
              boxShadow: "var(--shadow-1)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {" "}
            {/* الخط الذهبي الجانبي */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 5,
                height: "100%",
                backgroundColor: "var(--gold)",
              }}
            />
            <Typography
              component="h2"
              sx={{
                mb: 2,
                color: "var(--ink)",
                fontFamily: "'Cairo', sans-serif",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              ماذا سيشمل تبرعك
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: 1.5,
              }}
            >
              {requirements.map((requirement) => (
                <Box
                  key={requirement.title}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    p: 1.75,
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border-grey)",

                    transition: "transform .25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VolunteerActivismRoundedIcon
                      sx={{
                        fontSize: 24,
                        color: "var(--gold)",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "var(--ink)",
                        fontSize: "14.5px",
                        fontWeight: 600,
                      }}
                    >
                      {requirement.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.25,
                        color: "var(--desc-color)",
                        fontSize: "14.5px",
                        lineHeight: 2,
                        fontWeight: 400,
                      }}
                    >
                      {requirement.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </FadeSection>

        {/* =========================
            COST TRANSPARENCY
        ========================= */}

        <FadeSection delay={0.1}>
          <Card
            elevation={0}
            sx={{
              borderRadius: "24px",
              p: {
                xs: 3,
                md: 5,
              },
              backgroundColor: "var(--white)",
              border: "1px solid var(--border-grey)",
              boxShadow: "var(--shadow-1)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {" "}
            {/* الخط الذهبي الجانبي */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 5,
                height: "100%",
                backgroundColor: "var(--gold)",
              }}
            />
            <Button
              onClick={() => setShowBreakdown((current) => !current)}
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 0,
                color: "var(--ink)",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <AutoAwesome
                  sx={{
                    fontSize: 18,
                    color: "var(--gold)",
                  }}
                />

                <Typography
                  sx={{
                    color: "var(--ink)",
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  شفافية الإنفاق
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.5,
                  py: 0.75,
                  borderRadius: "999px",
                  backgroundColor: "var(--bg)",
                  color: "var(--ink)",
                  fontSize: "14.5px",
                  lineHeight: 2,
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                {showBreakdown ? "إخفاء التفاصيل" : "عرض تفاصيل التكلفة"}

                <KeyboardArrowDown
                  sx={{
                    fontSize: "14.5px",
                    transition: "transform 0.2s ease",
                    transform: showBreakdown
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </Box>
            </Button>
            {!showBreakdown && (
              <Typography
                sx={{
                  mt: 1.5,
                  color: "var(--desc-color)",
                  fontSize: "14.5px",
                  lineHeight: 2,
                }}
              >
                التكلفة الإجمالية للمشروع{" "}
                <Box
                  component="strong"
                  sx={{
                    color: "var(--ink)",
                  }}
                >
                  ${totalCost.toLocaleString()}
                </Box>
                . اضغط لعرض توزيع المبلغ على كل بند.
              </Typography>
            )}
            {showBreakdown && (
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                {costItems.map((item) => {
                  const percentage = Math.round(
                    (item.amount / totalCost) * 100,
                  );

                  return (
                    <Box key={item.label}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "var(--ink)",
                            fontSize: "14.5px",
                          }}
                        >
                          {item.label}
                        </Typography>

                        <Typography
                          sx={{
                            color: "var(--muted)",
                            fontSize: "14.5px",
                          }}
                        >
                          ${item.amount.toLocaleString()}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          height: 6,
                          borderRadius: "999px",
                          overflow: "hidden",
                          backgroundColor: "var(--bg)",
                        }}
                      >
                        <Box
                          sx={{
                            width: `${percentage}%`,
                            height: "100%",
                            borderRadius: "999px",
                            backgroundColor: "var(--teal-700)",
                            transition: "width .6s ease",
                          }}
                        />
                      </Box>
                    </Box>
                  );
                })}

                <Divider
                  sx={{
                    borderColor: "var(--border-grey)",
                    mt: 0.5,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "var(--ink)",
                      fontSize: "14.5px",
                      fontWeight: 700,
                    }}
                  >
                    الإجمالي
                  </Typography>

                  <Typography
                    sx={{
                      color: "var(--teal-800)",
                      fontSize: "14.5px",
                      fontWeight: 700,
                    }}
                  >
                    ${totalCost.toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            )}
          </Card>
        </FadeSection>
      </Box>

      {/* =========================
          DONATE CTA
      ========================= */}

      {/* <FadeSection
        sx={{
          px: {
            xs: 2.5,
            sm: 5,
          },
          py: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 640,
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 24,
                md: 30,
              },
              fontWeight: 800,
              color: "var(--teal-900)",
              mb: 2,
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            كن جزءاً من إعادة إعمار هذه المدرسة
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              color: "var(--muted)",
              lineHeight: 2,
              mb: 4,
            }}
          >
            تبرعك، مهما كان حجمه، يقرّب أكثر من ٣٠٠ طالب وطالبة خطوة من العودة
            إلى صفوف آمنة ومجهزة بالكامل.
          </Typography>


          <Stack
            direction="row"
            spacing={3}
            sx={{ mb: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                width: 92,
                height: 92,
                flexShrink: 0,
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 100 100"
                sx={{
                  width: "100%",
                  height: "100%",
                  transform: "rotate(-90deg)",
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="var(--border-grey)"
                  strokeWidth="8"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-dashoffset 1s ease",
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "var(--teal-900)",
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: 18,
                    fontWeight: 800,
                  }}
                >
                  {completion}%
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                textAlign: "right",
              }}
            >
              <Typography
                sx={{
                  color: "var(--muted)",
                  fontSize: "14.5px",
                  mb: 0.5,
                }}
              >
                تم جمعه من أصل ${totalCost.toLocaleString()}
              </Typography>

              <Typography
                sx={{
                  color: "var(--teal-900)",
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                ${raised.toLocaleString()}
              </Typography>
            </Box>
          </Stack>


          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1.25,
              maxWidth: 420,
              mx: "auto",
              mb: 2,
            }}
          >
            {quickAmounts.map((quickAmount) => {
              const selected = amount === quickAmount && !customAmount;

              return (
                <Button
                  key={quickAmount}
                  onClick={() => {
                    setAmount(quickAmount);
                    setCustomAmount("");
                  }}
                  sx={{
                    py: 1.2,
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: selected ? "var(--gold)" : "var(--tint)",
                    color: selected ? "var(--ink)" : "var(--teal-800)",
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: "none",
                    transition: "all .2s ease",
                    "&:hover": {
                      backgroundColor: selected
                        ? "var(--gold)"
                        : "var(--tint-deep)",
                    },
                  }}
                >
                  ${quickAmount}
                </Button>
              );
            })}
          </Box>

          <Paper
            elevation={0}
            sx={{
              maxWidth: 420,
              mx: "auto",
              mb: 3.5,
              px: 2,
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--bg)",
              border: "1px solid var(--border-grey)",
            }}
          >
            <InputBase
              value={customAmount}
              onChange={(event) =>
                setCustomAmount(event.target.value.replace(/\D/g, ""))
              }
              placeholder="مبلغ آخر بالدولار"
              fullWidth
              sx={{
                textAlign: "center",
                color: "var(--ink)",
                fontSize: "14.5px",
                "& input": {
                  py: 1.2,
                  textAlign: "center",
                },
                "& input::placeholder": {
                  color: "var(--muted)",
                  opacity: 1,
                  fontSize: 13,
                },
              }}
            />
          </Paper>

          <DonateButton
            buttonText={`تبرع الآن بـ $${finalAmount || 0}`}
            options={donateOptions}
            sx={{
              height: 60,
              width: 300,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "var(--radius-md)",
              background: "var(--gold)",
              color: "var(--ink)",
              fontFamily: "'Cairo', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              animation: "pulseRing 2.4s infinite",
              "&:hover": {
                background: "var(--gold)",
                opacity: 0.9,
              },
            }}
          />
        </Box>
      </FadeSection> */}
    </Box>
  );
}
