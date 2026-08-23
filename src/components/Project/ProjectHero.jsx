import React from "react";
import { Box } from "@mui/material";

import ProjectHero from "../../components/ProjectHero/ProjectHero";
import ProjectStats from "../../components/ProjectStats/ProjectStats";
import ProjectAbout from "../../components/ProjectAbout/ProjectAbout";
import ProjectRequirements from "../../components/ProjectRequirements/ProjectRequirements";
import ProjectCostTransparency from "../../components/ProjectCostTransparency/ProjectCostTransparency";
import ProjectDonateCTA from "../../components/ProjectDonateCTA/ProjectDonateCTA";

/* =========================
   PROJECT PAGE
========================= */

export default function Project() {
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

      <ProjectHero />

      <ProjectStats />

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
        <ProjectAbout />
        <ProjectRequirements />
        <ProjectCostTransparency />
      </Box>

      <ProjectDonateCTA />
    </Box>
  );
}
