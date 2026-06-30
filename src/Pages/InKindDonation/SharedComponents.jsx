import { Typography } from "@mui/material";


export function SectionTitle({ children }) {
  return (
    <Typography
      variant="subtitle1"
      fontWeight={700}
      color="primary"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.75,
        mb: 1.5,
        pb: 1,
        borderBottom: "1.5px solid",
        borderColor: "divider",
        fontSize: "0.95rem",
      }}
    >
      {children}
    </Typography>
  );
}

// label الحقل
export function FieldLabel({ children, required }) {
  return (
    <Typography
      variant="caption"
      fontWeight={600}
      color="text.secondary"
      sx={{
        mb: 0.75,
        display: "block",
        fontSize: "0.78rem",
        letterSpacing: 0.1,
      }}
    >
      {required && (
        <span style={{ color: "#d32f2f", marginLeft: 4, fontSize: "0.85rem" }}>*</span>
      )}
      {children}
    </Typography>
  );
}