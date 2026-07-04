import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Collapse,
  Chip,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

/* ----------------------------------------------------------------
   نفس نظام الألوان المستخدم بباقي الصفحة
----------------------------------------------------------------- */
const C = {
  tealDeep: "#003744",
  tealMain: "#014a5b",
  tealMid: "#0a5c6e",
  tealLight: "#1a7186",
  slate: "#8c9ea0",
  bg: "#f7f9f9",
  tint: "#d0e7ea",
  border: "#d1d6d6",
  ink: "#0f2a30",
  muted: "#5d7274",
  white: "#ffffff",
  gold: "#c9a24b",
};

/* ----------------------------------------------------------------
   محتوى الأسئلة — مقسّم على فئات حقيقية (مش رقم وهمي)
----------------------------------------------------------------- */
const FAQ_DATA = [
  {
    category: "عام",
    items: [
      {
        q: "ما هي المنصة وكيف تعمل؟",
        a: "منصة إلكترونية تتيح لأصحاب القضايا الإنسانية إطلاق حملات تبرع منظّمة، مقسّمة إلى مشاريع واضحة بأهداف مالية محددة، ليتابع كل متبرع بدقة أين ذهب عطاؤه وما الأثر الذي صنعه.",
      },
      {
        q: "هل التسجيل في المنصة مجاني؟",
        a: "نعم، إنشاء حساب كمتبرع أو متابعة الحملات لا يتطلب أي رسوم. الرسوم الإدارية البسيطة تُخصم فقط من الحملات لتغطية تكاليف التشغيل والمعالجة، وتظهر بوضوح في تقرير كل حملة.",
      },
      {
        q: "هل يمكنني التبرع دون إنشاء حساب؟",
        a: "يمكنك التبرع كزائر في معظم الحملات، لكن إنشاء حساب يتيح لك متابعة تبرعاتك السابقة، واستلام تقارير الأثر، والتواصل المباشر مع الحملات التي دعمتها.",
      },
    ],
  },
  {
    category: "التبرع",
    items: [
      {
        q: "ما الفرق بين التبرع المادي والعيني؟",
        a: "التبرع المادي هو مبلغ مالي يُوجَّه مباشرة لمشروع أو حملة محددة. أما التبرع العيني فهو تقديم سلع أو مواد، ويُقدَّر ضمن المنصة ويُسجَّل في تقرير الحملة كجزء من إجمالي الدعم المُقدَّم لها.",
      },
      {
        q: "هل يمكنني اختيار مشروع فرعي محدد ضمن الحملة؟",
        a: "نعم، كل حملة تتفرع إلى مشاريع فرعية بأهداف وأرقام واضحة، ويمكنك توجيه تبرعك إلى المشروع الذي تثق به تحديداً بدلاً من الحملة ككل.",
      },
      {
        q: "ما طرق الدفع المتاحة؟",
        a: "تدعم المنصة البطاقات البنكية المحلية والدولية، والتحويل البنكي المباشر، إضافة إلى محافظ الدفع الإلكترونية الشائعة، وجميعها تتم عبر بوابات دفع آمنة ومرخّصة.",
      },
      {
        q: "هل تبرعي يُعفى من الضريبة؟",
        a: "يعتمد ذلك على الجهة المستفيدة وأنظمة بلدك. الحملات الصادرة عن منظمات مرخّصة توفّر إيصالاً رسمياً قابلاً للاستخدام في حال انطبقت عليه الأنظمة الضريبية المحلية.",
      },
    ],
  },
  {
    category: "الشفافية والتقارير",
    items: [
      {
        q: "كيف أعرف أن تبرعي وصل فعلاً؟",
        a: "كل حملة تنشر تقارير دورية موثّقة بالصور والفواتير توضح كيفية صرف المبلغ، كما يصلك إشعار مباشر عند تحقّق أي مرحلة من مراحل المشروع الذي دعمته.",
      },
      {
        q: "من يراقب الحملات المنشورة على المنصة؟",
        a: "تخضع كل حملة لمراجعة من فريق متخصص قبل النشر، إضافة إلى تدقيق دوري مستمر طوال فترة الحملة، لضمان مطابقتها لمعايير الشفافية والمصداقية المعتمدة لدينا.",
      },
      {
        q: "ماذا لو لم تحقق الحملة هدفها المالي؟",
        a: "تُستخدم المبالغ المجمّعة في تنفيذ ما أمكن من المشروع وفق أولوياته المعلنة، ويُعاد توجيه أي فائض أو يُسترد بحسب السياسة المعلنة لكل حملة، وتصلك تفاصيل ذلك في التقرير الختامي.",
      },
    ],
  },
  {
    category: "الحسابات والمنظمات",
    items: [
      {
        q: "كيف تنضم منظمتنا كجهة مستفيدة؟",
        a: "عبر تقديم طلب توثيق يتضمن الأوراق الرسمية للمنظمة وتفاصيل المشروع المقترح. يراجع فريقنا الطلب خلال أيام عمل قليلة، وبعد الاعتماد يحصل حسابكم على شارة موثّقية وتُفعَّل صلاحية إطلاق الحملات.",
      },
      {
        q: "هل يمكن لرجال الأعمال رعاية حملة كاملة؟",
        a: "نعم، نوفّر شراكات رعاية مخصصة تشمل تغطية تكاليف التشغيل أو دعم مشروع بعينه، مع تقرير أثر مفصّل وتوثيق إعلامي للمساهمة بحسب ما يتفق عليه مع فريق الشراكات.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const activeItems = FAQ_DATA[activeCategory].items;

  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        bgcolor: C.bg,
        py: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* زخرفة خلفية خفيفة جداً */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          insetInlineStart: -120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.tint} 0%, transparent 70%)`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* ===== عنوان القسم ===== */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{ mb: 1.5 }}
          >
            <Box
              sx={{
                width: 40,
                height: 4,
                borderRadius: 10,
                background: `linear-gradient(90deg, ${C.gold}, ${C.tealLight})`,
              }}
            />
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 900,
                color: C.tealMid,
                letterSpacing: 0.8,
              }}
            >
              الأسئلة الشائعة
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 900,
              color: C.tealDeep,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.4,
            }}
          >
            كل ما تحتاج معرفته قبل أن تتبرع
          </Typography>
        </Box>

        {/* ===== الجسم: تبويبات فئات + أسئلة ===== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "flex-start",
          }}
        >
          {/* ---------- العمود الجانبي: الفئات ---------- */}
          <Box
            sx={{
              width: { xs: "100%", md: 240 },
              flexShrink: 0,
              position: { md: "sticky" },
              top: { md: 32 },
            }}
          >
            <Stack
              direction={{ xs: "row", md: "column" }}
              spacing={1}
              sx={{
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              {FAQ_DATA.map((cat, i) => {
                const active = i === activeCategory;
                return (
                  <Box
                    key={cat.category}
                    onClick={() => {
                      setActiveCategory(i);
                      setOpenIndex(0);
                    }}
                    sx={{
                      cursor: "pointer",
                      px: 2.5,
                      py: 1.5,
                      borderRadius: "10px",
                      fontSize: 15,
                      fontWeight: active ? 800 : 600,
                      color: active ? C.white : C.tealDeep,
                      bgcolor: active ? C.tealDeep : "transparent",
                      border: `1px solid ${active ? C.tealDeep : C.border}`,
                      transition: "all .25s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&:hover": {
                        borderColor: C.tealDeep,
                        bgcolor: active ? C.tealDeep : C.tint,
                      },
                    }}
                  >
                    <span>{cat.category}</span>
                    <Box
                      component="span"
                      sx={{
                        fontSize: 12,
                        fontWeight: 700,
                        opacity: active ? 0.85 : 0.5,
                        ml: 1,
                      }}
                    >
                      {cat.items.length}
                    </Box>
                  </Box>
                );
              })}
            </Stack>

            {/* بطاقة تواصل — تظهر فقط على الشاشات الكبيرة ضمن العمود الجانبي */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                mt: 4,
                p: 3,
                borderRadius: "14px",
                background: `linear-gradient(135deg, ${C.tealDeep}, ${C.tealMain})`,
                color: C.white,
              }}
            >
              <HelpCenterRoundedIcon sx={{ color: C.gold, fontSize: 28, mb: 1 }} />
              <Typography sx={{ fontSize: 14.5, fontWeight: 700, mb: 0.5 }}>
                ما لقيت جوابك؟
              </Typography>
              <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,.75)", lineHeight: 1.8, mb: 2 }}>
                فريقنا جاهز يساعدك بأي استفسار خلال دقائق.
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WhatsAppIcon sx={{ fontSize: 18, color: C.gold }} />
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,.9)" }}>
                    تواصل واتساب
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <MailOutlineRoundedIcon sx={{ fontSize: 18, color: C.gold }} />
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,.9)" }}>
                    support@platform.com
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* ---------- عمود الأسئلة ---------- */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Stack spacing={2}>
              {activeItems.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <Box
                    key={item.q}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      borderRadius: "14px",
                      bgcolor: C.white,
                      border: `1px solid ${isOpen ? C.tealDeep : C.border}`,
                      boxShadow: isOpen
                        ? "0 14px 34px rgba(0,55,68,0.12)"
                        : "0 2px 10px rgba(0,55,68,0.04)",
                      transition: "all .3s ease",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        width: 4,
                        background: isOpen
                          ? `linear-gradient(180deg, ${C.gold}, ${C.tealLight})`
                          : C.border,
                        transition: "background .3s ease",
                      },
                    }}
                  >
                    {/* رقم خفيف بالخلفية — يدل على ترتيب السؤال ضمن فئته */}
                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: -6,
                        insetInlineEnd: 18,
                        fontSize: 56,
                        fontWeight: 900,
                        color: "rgba(0,55,68,0.035)",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={2}
                      sx={{ px: 3, py: 2.5, position: "relative" }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 15.5, md: 17 },
                          fontWeight: 800,
                          color: isOpen ? C.tealDeep : C.ink,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.q}
                      </Typography>

                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: isOpen ? C.tealDeep : C.tint,
                          transition: "all .3s ease",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <AddRoundedIcon
                          sx={{
                            fontSize: 20,
                            color: isOpen ? C.white : C.tealDeep,
                          }}
                        />
                      </Box>
                    </Stack>

                    <Collapse in={isOpen} timeout={250}>
                      <Box sx={{ px: 3, pb: 3, position: "relative" }}>
                        <Typography
                          sx={{
                            fontSize: 14.5,
                            color: C.muted,
                            lineHeight: 2,
                            maxWidth: 640,
                          }}
                        >
                          {item.a}
                        </Typography>
                      </Box>
                    </Collapse>
                  </Box>
                );
              })}
            </Stack>

            {/* بطاقة تواصل للموبايل فقط */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                mt: 4,
                p: 3,
                borderRadius: "14px",
                background: `linear-gradient(135deg, ${C.tealDeep}, ${C.tealMain})`,
                color: C.white,
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 14.5, fontWeight: 700, mb: 0.5 }}>
                  ما لقيت جوابك؟
                </Typography>
                <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,.75)" }}>
                  تواصل معنا مباشرة
                </Typography>
              </Box>
              <Chip
                icon={<WhatsAppIcon sx={{ color: `${C.gold} !important` }} />}
                label="واتساب"
                sx={{
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: C.white,
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}