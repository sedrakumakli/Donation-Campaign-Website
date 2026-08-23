import React from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";

import FadeSection from "../ProjectShared/FadeSection";
import { SECTION_TITLE_SX } from "../ProjectShared/projectStyles";

/* =========================
   ABOUT PROJECT
========================= */

export default function ProjectAbout() {
  return (
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
                تعرضت مدرسة الوعر الابتدائية لأضرار جسيمة أثرت على قدرتها على
                استقبال الطلاب في بيئة آمنة. يهدف هذا المشروع إلى إعادة تأهيل
                المدرسة بالكامل، بدءاً من ترميم الفصول الدراسية وصولاً إلى تجهيز
                مختبر حاسوب حديث، ليعود أكثر من ٣٠٠ طالب وطالبة إلى مقاعد
                الدراسة في مطلع العام الدراسي القادم.
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
  );
}
