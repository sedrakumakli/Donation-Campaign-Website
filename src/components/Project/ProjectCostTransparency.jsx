import React, { useState } from "react";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";

import AutoAwesome from "@mui/icons-material/AutoAwesome";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import FadeSection from "../ProjectShared/FadeSection";
import { costItems, totalCost } from "../ProjectShared/projectData";

/* =========================
   COST TRANSPARENCY
========================= */

export default function ProjectCostTransparency() {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
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
                transform: showBreakdown ? "rotate(180deg)" : "rotate(0deg)",
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
              const percentage = Math.round((item.amount / totalCost) * 100);

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
  );
}
