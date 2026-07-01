import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import DonateButton from "../../components/DonateButton/DonateButton";
import { useNavigate } from "react-router-dom";
import InKindDonationForm from "../InKindDonation/InKindDonationForm";
/* ----------------------------------------------------------------
   1) نظام الألوان — مأخوذ حرفياً من متغيرات CSS التي زوّدتني بها
----------------------------------------------------------------- */
const C = {
  tealDeep: "#003744",
  tealMain: "#014a5b",
  tealMid: "#0a5c6e",
  tealLight: "#1a7186",
  slate: "#8c9ea0",
  slateDark: "#6c7d7f",
  bg: "#f7f9f9",
  tint: "#d0e7ea",
  tintDeep: "#b9dade",
  border: "#d1d6d6",
  ink: "#0f2a30",
  muted: "#5d7274",
  white: "#ffffff",
  gold: "#c9a24b",
  radiusLg: "12px",
  radiusMd: "10px",
  shadow1: "0 2px 10px rgba(0,55,68,0.06)",
  shadow2: "0 14px 34px rgba(0,55,68,0.14)",
};


const IMAGES = {
  hero: "../../../public/hero2ContactUS.jpg",
  story:"../../../public/aboutus.avif",
};


const SECTION_GAP = "80px";

function Section({ children, bg, first, ...rest }) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: bg || "transparent",
        pt: first ? 0 : SECTION_GAP,
        pb: SECTION_GAP,
        ...rest.sx,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}

/* ----------------------------------------------------------------
   عداد متحرك للإحصائيات
----------------------------------------------------------------- */
function Counter({ end, suffix = "", duration = 1400 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * end));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("ar")}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------
   عنوان قسم موحّد: eyebrow + عنوان رئيسي، بمحاذاة وسط دائماً
----------------------------------------------------------------- */
function SectionHeading({ eyebrow, title, center = true }) {
  return (
    <Box
      sx={{
        textAlign: center ? "center" : "right",
        mb: { xs: 4, md: 5 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        justifyContent={center ? "center" : "flex-start"}
        sx={{ mb: 1.5 }}
      >
        <Box
          sx={{
            width: 40,
            height: 4,
            borderRadius: 10,
            background: `linear-gradient(90deg, ${C.gold}, ${C.tealLight})`,
            flexShrink: 0,
            alignSelf: "center"
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: 24, md: 24 },
            fontWeight: 900,
            color: C.tealMid,
            letterSpacing: 0.8,
            lineHeight: 1,
          }}
        >
          {eyebrow}
        </Typography>
      </Stack>

      {title && (
        <Typography
          sx={{
            fontSize: { xs: 28, md: 36 },
            fontWeight: 900,
            color: C.tealDeep,
            lineHeight: 1.4,
            maxWidth: center ? 700 : "100%",
            mx: center ? "auto" : 0,
          }}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
}

export default function AboutUsPage() {
     const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      dir="rtl"
      sx={{
        fontFamily: "'Cairo', sans-serif",
        backgroundColor: C.bg,
        color: C.ink,
        overflowX: "hidden",
        textAlign: "right",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Cairo', sans-serif; box-sizing: border-box; }
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(201,162,75,0.35); }
          100% { box-shadow: 0 0 0 18px rgba(201,162,75,0); }
        }
      `}</style>

      {/* ============================= HERO — بصورة حقيقية ============================= */}
  <Box
  sx={{
    position: "relative",
    minHeight: { xs: 480, md: 600 },
    display: "flex",
    alignItems: "center",
    backgroundImage: `linear-gradient(100deg, rgba(0,55,68,0.93) 0%, rgba(0,55,68,0.78) 45%, rgba(0,55,68,0.45) 100%), url(${IMAGES.hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Container maxWidth="lg">
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        py: { xs: 10, md: 0 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          width: { xs: "100%", md: "60%" },
          textAlign: "right",
          alignItems: "flex-start",
        }}
      >
        <Chip
          icon={
            <FavoriteRoundedIcon
              sx={{ color: `${C.gold} !important` }}
            />
          }
          label="من نحن"
          sx={{
            bgcolor: "rgba(255,255,255,0.12)",
            color: C.white,
            fontWeight: 700,
            px: 1.5,
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: 34, md: 54 },
            fontWeight: 900,
            lineHeight: 1.3,
            color: C.white,
          }}
        >
          العطاء حين يُنظَّم،
          <br />
          <Box component="span" sx={{ color: C.tint }}>
            يصبح أثراً لا يُنسى
          </Box>
        </Typography>
  <Stack
       
        sx={{
          
          textAlign: "right",
          alignItems: "flex-start",
        }}
      >
      <Typography
      sx={{
        width: "100%",
        maxWidth: 620,
        fontSize: { xs: 17, md: 19 },
        color: "rgba(247,249,249,0.88)",
        lineHeight: 2,
        textAlign: "left",
      }}
    >منصة لتنظيم حملات التبرع وربط أصحاب القضايا الإنسانية بمن يؤمن بها  لتصبح عملية العطاء أكثر وضوحًا وشفافية من خلال حملات موثوقة،  ومشاريع مُجزَّأة، وتقارير تعكس أثر كل مساهمة.
    </Typography>
</Stack>
      </Stack>
    </Box>
  </Container>
</Box>

      {/* ============================= قصتنا ============================= */}
   <Section>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      gap: { xs: 5, md: 8 },
    }}
  >
  
    {/* النص - يمين */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        textAlign: "left",
      }}
    >
      <SectionHeading
        eyebrow="قصتنا"
        title=""
        center={false}
      />

      <Typography
        sx={{
          fontSize: { xs: 30, md: 46 },
          fontWeight: 900,
          color: C.tealDeep,
          lineHeight: 1.4,
          mb: 3,
        }}
      >
        كل تبرع يبدأ بقصة...
        <br />
        وكل قصة تستحق منصة تليق بها
      </Typography>

      <Typography
        sx={{
          fontSize: 17,
          color: C.muted,
          lineHeight: 2.2,
          mb: 3,
        }}
      >
        رأينا حملات تبرع كثيرة تضيع جهودها بسبب غياب الشفافية،
        ورأينا متبرعين أصحاب نوايا صادقة لا يجدون الطريق الصحيح
        لإيصال مساعدتهم. ومن هنا قررنا أن نبني جسراً حقيقياً بين
        من يملك القدرة على العطاء، ومن ينتظر يداً تمتد إليه.
      </Typography>

      <Typography
        sx={{
          fontSize: 17,
          color: C.tealDeep,
          fontWeight: 700,
          lineHeight: 2,
        }}
      >
        نحن لسنا مجرد منصة إلكترونية، بل مساحة يلتقي فيها الأمل بالفعل،
        لتصبح كل مساهمة بدايةً لحياة أفضل.
      </Typography>
    </Box>
     <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: 320, md: 500 },
          borderRadius: C.radiusLg,
          overflow: "hidden",
          boxShadow: C.shadow2,
        }}
      >
        <Box
          component="img"
          src={IMAGES.story}
          alt="قصتنا"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,55,68,.45), transparent 60%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,.15)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FavoriteRoundedIcon
            sx={{
              color: C.gold,
              fontSize: 34,
            }}
          />
        </Box>
      </Box>
    </Box>
  </Box>
</Section>

      {/* ===================== الرسالة و الرؤية ===================== */}
     <Section bg={C.white}>
  <SectionHeading
    eyebrow="هويتنا"
    title="مهمتنا ورؤيتنا وقيمنا"
  />

  <Grid
    container
    spacing={3}
    justifyContent="center"
    // alignItems="stretch"
  >
    {[
      {
        icon: <FlagRoundedIcon sx={{ color: C.white }} />,
        title: "مهمتنا",
        text:
          "أن نجعل التبرع أسهل وأكثر شفافية وأعمق أثراً، عبر حملات منظمة تُقسَّم إلى مشاريع محددة يتابع فيها كل متبرع تأثير مساهمته بدقة.",
      },
      {
        icon: <VisibilityRoundedIcon sx={{ color: C.white }} />,
        title: "رؤيتنا",
        text:
          "مجتمع لا تقف فيه القدرة المالية حائلاً دون مساعدة الآخرين، ولا يقف فيه غياب الثقة عائقاً أمام الكرم.",
      },
      {
        icon: <FavoriteRoundedIcon sx={{ color: C.white }} />,
        title: "قيمنا",
        text:
          "الشفافية، المصداقية، والمسؤولية هي المبادئ التي تقود جميع أعمالنا، لنضمن وصول كل مساهمة إلى المكان الذي تستحقه.",
      },
    ].map((item, i) => (
   <Grid size={4} key={i} sx={{ display: "flex" }}>
       <Card
  elevation={0}
  sx={{
    width: "100%",
    height: "100%",
    minHeight: 300,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    px: 4,
    py: 2,

    bgcolor: C.white,
    borderRadius: "24px",
    border: `1px solid ${C.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

    transition: "all .3s ease",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
    },
  }}
>
  <Avatar
    sx={{
      bgcolor: C.gold,
      width: 60,
      height: 60,
      mb: 3,

      "& svg": {
        fontSize: 30,
      },
    }}
  >
    {item.icon}
  </Avatar>

  <Typography
    sx={{
      fontSize: 26,
      fontWeight: 800,
      color: C.tealDeep,
      mb: 2,
    }}
  >
    {item.title}
  </Typography>

  <Typography
    sx={{
      fontSize: 17,
      color: C.muted,
      lineHeight: 2,
      maxWidth: 280,
      flexGrow: 1,
    }}
  >
    {item.text}
  </Typography>
</Card>
      </Grid>
    ))}
  </Grid>
   </Section>


  {/* ===================== لماذا نحن مختلفون ===================== */}
   <Section bg={C.white}>
  <SectionHeading eyebrow="لماذا نحن مختلفون" title="نبني الثقة قبل أن نطلب العطاء" />

  <Box
    sx={{
      display: "flex",
      flexWrap: { xs: "wrap", md: "nowrap" },
      gap: 12,
    }}
  >
    {[
      { icon: <VerifiedRoundedIcon />, title: "الشفافية أولاً", text: "تعرف بالضبط إلى أين ذهب تبرعك وما الأثر الذي صنعه." },
      { icon: <AccountTreeRoundedIcon />, title: "تنظيم لا فوضى", text: "حملات مقسّمة إلى مشاريع واضحة بأهداف قابلة للقياس." },
      { icon: <GroupsRoundedIcon />, title: "مساحة للجميع", text: "من الفرد إلى المؤسسة، كل عطاء له مكانه هنا." },
      { icon: <FavoriteRoundedIcon />, title: "الأثر فوق كل شيء", text: "نقيس نجاحنا بعدد الأرواح التي لمسناها، لا عدد الحملات." },
    ].map((f, i) => (
      <Box
        key={i}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: { xs: "calc(50% - 8px)", md: 0 },
        }}
      >
        <Stack spacing={1} sx={{ height: "100%", textAlign: "center", alignItems: "center" }}>
          <Box
            sx={{
              color: C.gold,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {React.cloneElement(f.icon, { sx: { fontSize: 32 } })}
          </Box>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 800,
              color: C.tealDeep,
              minHeight: { xs: "auto", md: 40 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {f.title}
          </Typography>
          <Typography sx={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>
            {f.text}
          </Typography>
        </Stack>
      </Box>
    ))}
  </Box>
   </Section>
   {/* ===================== إحصائيات حية ===================== */}
<Box
  sx={{
    py: SECTION_GAP,
    background: `linear-gradient(135deg, ${C.tealDeep} 0%, ${C.tealMain} 100%)`,
  }}
>
  <Container maxWidth="xl">
    <Typography
      sx={{
        textAlign: "center",
        color: C.white,
        fontSize: { xs: 28, md: 32 },
        fontWeight: 800,
        mb: 1,
      }}
    >
      أثر عطائكم بالأرقام
    </Typography>

    <Typography
      sx={{
        textAlign: "center",
        color: "rgba(255,255,255,.75)",
        maxWidth: 650,
        mx: "auto",
        mb: 4,
        fontSize: 16,
        lineHeight: 1.8,
      }}
    >
      نؤمن أن الشفافية تبدأ بالأرقام، لذلك نشارككم باستمرار نتائج
      حملاتنا وتأثير مساهماتكم على أرض الواقع.
    </Typography>
  </Container>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
      px: { xs: 2, md: 0 },
    }}
  >
    {[
      { n: 120, s: "+", label: "حملة خيرية", icon: <CampaignRoundedIcon /> },
      { n: 480, s: "+", label: "مشروع مكتمل", icon: <TaskAltRoundedIcon /> },
      { n: 15000, s: "+", label: "متبرع وداعم", icon: <VolunteerActivismRoundedIcon /> },
      { n: 3250, s: "+", label: "تبرع عيني", icon: <Inventory2RoundedIcon /> },
      { n: 8400, s: "+", label: "أسرة مستفيدة", icon: <GroupsRoundedIcon /> },
      { n: 530, s: "+", label: "متطوع", icon: <Diversity3RoundedIcon /> },
      { n: 97, s: "%", label: "شفافية التوزيع", icon: <VerifiedRoundedIcon /> },
      { n: 2.8, s: "M", label: "قيمة التبرعات", icon: <SavingsRoundedIcon /> },
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          flex: { xs: "0 0 50%", sm: "0 0 25%", md: "0 0 12.5%" },
          maxWidth: { xs: "50%", sm: "25%", md: "12.5%" },
          textAlign: "center",
          position: "relative",
          py: { xs: 3, md: 1 },
          px: 1.5,

          "&::after": {
            content: '""',
            position: "absolute",
            top: "25%",
            bottom: "25%",
            insetInlineEnd: 0,
            width: "1px",
            bgcolor: "rgba(255,255,255,.15)",
            display: i === 7 ? "none" : { xs: i % 2 === 0 ? "block" : "none", sm: "block" },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: ".3s",
            "&:hover": {
              transform: "translateY(-3px)",
              "& svg": { color: C.white },
            },
          }}
        >
          <Box
            sx={{
              mb: 1.5,
              "& svg": {
                fontSize: 26,
                color: C.gold,
                opacity: 0.85,
                transition: ".3s",
              },
            }}
          >
            {item.icon}
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 26, md: 34 },
              fontWeight: 800,
              color: C.white,
              mb: 0.5,
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            <Counter end={item.n} suffix={item.s} />
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,.7)",
              fontSize: 13.5,
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Box>
         {/* ===================== أنواع المتبرعين ===================== */}
    <Section>
  <SectionHeading eyebrow="مجتمع العطاء" title="مساحة لكل أشكال العطاء" />

  <Grid container spacing={3}>
    {[
      {
        icon: <PersonRoundedIcon />,
        num: "01",
        title: "الأفراد",
        text: "كل من يريد إحداث فرق ولو بسيط، بثقة وسهولة.",
      },
      {
        icon: <ApartmentRoundedIcon />,
        num: "02",
        title: "المنظمات",
        text: "شريك موثوق لتنفيذ المبادرات والوصول لمتبرعين حقيقيين.",
      },
      {
        icon: <WorkspacePremiumRoundedIcon />,
        num: "03",
        title: "رجال الأعمال",
        text: "استثمار اجتماعي له صدى حقيقي وأثر موثّق.",
      },
    ].map((d, i) => (
      <Grid item xs={12} md={4} key={i}>
        <Card
          elevation={0}
          sx={{
            position: "relative",
            p: 4,
            pt: 5,
            borderRadius: C.radiusLg,
            border: `1px solid ${C.border}`,
            bgcolor: C.white,
            boxShadow: C.shadow1,
            height: "100%",
            overflow: "hidden",
            transition: "all .3s ease",
            "&:hover": {
              boxShadow: C.shadow2,
              transform: "translateY(-4px)",
              "& .num-bg": { color: C.tint },
              "& .icon-box": {
                bgcolor: C.tealDeep,
                "& svg": { color: C.white },
              },
            },
          }}
        >
          {/* رقم خلفي كبير شفاف */}
          <Typography
            className="num-bg"
            sx={{
              position: "absolute",
              top: -10,
              insetInlineEnd: 16,
              fontSize: 80,
              fontWeight: 900,
              color: "rgba(0,0,0,.04)",
              lineHeight: 1,
              userSelect: "none",
              transition: "color .3s ease",
            }}
          >
            {d.num}
          </Typography>

          <Box sx={{ position: "relative" }}>
            <Box
              className="icon-box"
              sx={{
                width: 52,
                height: 52,
                borderRadius: "14px",
                bgcolor: C.tint,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
                transition: "all .3s ease",
                "& svg": { fontSize: 26, color: C.tealDeep, transition: "color .3s ease" },
              }}
            >
              {d.icon}
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1, color: C.tealDeep }}>
                {d.title}
              </Typography>

              <Typography sx={{ fontSize: 14, color: C.muted, lineHeight: 1.9 }}>
                {d.text}
              </Typography>

              <Box
                sx={{
                  width: 32,
                  height: 3,
                  borderRadius: 2,
                  bgcolor: C.gold,
                  mt: 2.5,
                  mr: 0,
                  ml: "auto",
                }}
              />
            </Box>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
    </Section>
      {/* ===================== كيف نعمل ===================== */}
      <Section>
  <SectionHeading eyebrow="آلية العمل" title="من القضية إلى الأثر، بثلاث خطوات" />

  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "stretch",
      justifyContent: "center",
      gap: { xs: 3, md: 2 },
    }}
  >
    {[
      {
        icon: <CampaignRoundedIcon sx={{ fontSize: 28, color: C.white }} />,
        title: "الحملة",
        text: "تُطلَق بهدف مالي واضح ومحدد، يراه المتبرع منذ اللحظة الأولى.",
      },
      {
        icon: <AccountTreeRoundedIcon sx={{ fontSize: 28, color: C.white }} />,
        title: "المشاريع",
        text: "تتفرع كل حملة لمشاريع فرعية، فيختار المتبرع بدقة أين يذهب عطاؤه.",
      },
      {
        icon: <GroupsRoundedIcon sx={{ fontSize: 28, color: C.white }} />,
        title: "المتبرعون",
        text: "أفراد ومنظمات ورجال أعمال، كل عطاء — مهما كان حجمه — له مكان هنا.",
      },
    ].map((step, i, arr) => (
      <React.Fragment key={i}>
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "1 1 0" },
            width: { xs: "100%", md: "auto" },
            maxWidth: { xs: "100%", md: 320 },
          }}
        >
          <Card
            elevation={0}
            sx={{
              p: 4,
              borderRadius: C.radiusLg,
              textAlign: "center",
              border: `1px solid ${C.border}`,
              boxShadow: C.shadow1,
              height: "100%",
              transition: "all .25s ease",
              "&:hover": { boxShadow: C.shadow2, transform: "translateY(-4px)" },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                mx: "auto",
                mb: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${C.tealMid}, ${C.tealDeep})`,
              }}
            >
              {step.icon}
            </Box>
            <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1, color: C.tealDeep }}>
              {step.title}
            </Typography>
            <Typography sx={{ fontSize: 14, color: C.muted, lineHeight: 1.9 }}>
              {step.text}
            </Typography>
          </Card>
        </Box>

        {i < arr.length - 1 && (
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            <ArrowBackRoundedIcon sx={{ color: C.slate, fontSize: 24 }} />
          </Box>
        )}
      </React.Fragment>
    ))}
  </Box>
      </Section>


      {/* ===================== دعوة للانضمام ===================== */}
      <Section>
        <Box sx={{ textAlign: "center", maxWidth: 640, mx: "auto" }}>
          <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, color: C.tealDeep, mb: 2 }}>
            الأثر يبدأ من هنا
          </Typography>
          <Typography sx={{ fontSize: 16, color: C.muted, lineHeight: 2, mb: 4 }}>
            سواء كنت متبرعاً يبحث عن قضية يؤمن بها، أو منظمة تبحث عن وصول
            أوسع — معاً، نصنع أثراً لا يُنسى.
          </Typography>
         
              <DonateButton
              options={[
                {
                  label: 'تبرع مادي',
                  onClick: () => navigate('/donate'),
                },
                {
                  label: 'تبرع عيني',
                  onClick: () => setIsOpen(true), 
                },
              ]}
              sx={{
                height: '60px',
                width: '300px',
                fontSize: '24px',
              }}
            />
          
        </Box>
      </Section>
           <InKindDonationForm
              open={isOpen}
              onClose={() => setIsOpen(false)}
            />
    </Box>
    
  );
}