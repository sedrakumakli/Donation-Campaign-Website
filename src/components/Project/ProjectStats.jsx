import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

import FadeSection from "../ProjectShared/FadeSection";
import Counter from "../ProjectShared/Counter";
import {
  completion,
  raised,
  supportersCount,
} from "../ProjectShared/projectData";

/* =========================
   STATS
========================= */

export default function ProjectStats() {
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
  );
}
