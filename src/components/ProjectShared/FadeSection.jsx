import React from "react";
import { Box } from "@mui/material";

import useInView from "./useInView";

/* =========================
   FadeSection — يلف أي سكشن بأنيميشن دخول (fade + slide up)
   عند وصوله لمنتصف الشاشة
========================= */

export default function FadeSection({ children, sx, delay = 0 }) {
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
