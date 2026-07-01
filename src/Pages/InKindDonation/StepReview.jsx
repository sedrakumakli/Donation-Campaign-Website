import { Box, Divider, Fade, Paper, Stack, Typography } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { SectionTitle } from "./SharedComponents";

export default function StepReview({ form }) {
  const rows = [
    { label: "اسم التبرع",   value: form.name || "—" },
    { label: "نوع التبرع",   value: form.typeName || "—" },
    { label: "الكمية",       value: `${form.quantity || 1} قطعة` },
    { label: "المحافظة",     value: form.governorateName || "—" },
    { label: "حالة المواد", value: form.conditionName || "—" },
    { label: "عدد الصور",    value: `${form.images?.length || 0} صورة` },
    ...(form.notes ? [{ label: "ملاحظات", value: form.notes }] : []),
  ];

  return (
    <Fade in>
      <Stack spacing={2}>
        <SectionTitle>
          <FactCheckIcon fontSize="small" />
          مراجعة التبرع
        </SectionTitle>

        <Paper variant="outlined" sx={{ p: 0, overflow: "hidden" }}>
          {rows.map((r, i) => (
            <Box key={i}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  px: 2,
                  py: 1.2,
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0 }}>
                  {r.label}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  textAlign="left"
                  sx={{ wordBreak: "break-word" }}
                >
                  {r.value}
                </Typography>
              </Box>
              {i < rows.length - 1 && <Divider />}
            </Box>
          ))}
        </Paper>
      </Stack>
    </Fade>
  );
}