import { Box, Typography } from "@mui/material";
import CustomContainer from "../../common/CustomContainer";

const C = {
  tealDeep: "#003744",
  tealMain: "#014a5b",
  gold: "#c9a24b",
  white: "#ffffff",
};

const SECTION_GAP = "90px";

export default function ImpactStats({ stats }) {
  return (
    <Box
      sx={{
        py: SECTION_GAP,
        background: `linear-gradient(135deg, ${C.tealDeep} 0%, ${C.tealMain} 100%)`,
      }}
    >
      <CustomContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: { xs: 3, md: 2 },
          }}
        >
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <Box
                key={i}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  color: C.white,
                  position: "relative",
                  px: 1.5,
                  minWidth: "20%",
                  "&:not(:last-child)::before": {
                    content: '""',
                    position: "absolute",
                    right: "100%",
                    top: "20%",
                    height: "60%",
                    width: "1px",
                    bgcolor: "rgba(255,255,255,0.12)",
                    display: { xs: "none", md: "block" },
                  },

                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Icon
                  sx={{
                    color: C.gold,
                    fontSize: 28,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 28 },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {item.n}
                  {item.s}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CustomContainer>
    </Box>
  );
}
