import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import DonateButton from "../DonateButton/DonateButton";
import FadeSection from "../ProjectShared/FadeSection";
import { totalCost, completion, raised } from "../ProjectShared/projectData";

/* =========================
   DONATE CTA
========================= */

export default function ProjectDonateCTA() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const quickAmounts = [25, 50, 100, 250];

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const circumference = 2 * Math.PI * 42;

  const dashOffset = circumference - (circumference * completion) / 100;

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

  return (
    <FadeSection
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
          تبرعك، مهما كان حجمه، يقرّب أكثر من ٣٠٠ طالب وطالبة خطوة من العودة إلى
          صفوف آمنة ومجهزة بالكامل.
        </Typography>

        {/* نسبة الإنجاز */}

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

        {/* اختيار المبلغ */}

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
    </FadeSection>
  );
}
