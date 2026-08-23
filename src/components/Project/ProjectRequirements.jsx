import React from "react";
import { Box, Card, Typography } from "@mui/material";

import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

import FadeSection from "../ProjectShared/FadeSection";
import { requirements } from "../ProjectShared/projectData";

/* =========================
   REQUIREMENTS
========================= */

export default function ProjectRequirements() {
  return (
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
  );
}
