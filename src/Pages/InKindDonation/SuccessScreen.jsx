import { Box, Fade, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { PRIMARY } from "./theme";

export default function SuccessScreen() {
  return (
    <Fade in>
      <Box sx={{ textAlign: "center", py: 4 }}>
        {/* أيقونة النجاح */}
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            bgcolor: PRIMARY,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 36, color: "#fff" }} />
        </Box>

        <Typography variant="h6" fontWeight={700} gutterBottom>
          تم إرسال تبرعك
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          شكراً لك على تبرعك الكريم.
          <br />
          سيتواصل معك فريقنا خلال 24 ساعة.
        </Typography>

      
      </Box>
    </Fade>
  );
}