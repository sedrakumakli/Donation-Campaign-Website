import {
  Box,
  CircularProgress,
  Fade,
  Grid,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { PRIMARY } from "./theme";
import { FieldLabel, SectionTitle } from "./SharedComponents";

export default function StepLocation({
  form,
  setForm,
  governorates,
  conditions,
  loadingGov,
  loadingCond,
}) {
  const itemStyle = (isSelected) => ({
    border: "1.5px solid",
    borderColor: isSelected ? PRIMARY : "divider",
    borderRadius: 2,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: isSelected ? 700 : 400,
    color: isSelected ? "#fff" : "text.primary",
    bgcolor: isSelected ? PRIMARY : "background.paper",
    transition: "all 0.15s ease",
  p:1,
    "&:hover": {
      borderColor: PRIMARY,
      bgcolor: isSelected ? PRIMARY : `${PRIMARY}10`,
    },
  });

  return (
    <Fade in>
      <Stack spacing={3}>

        <SectionTitle>
          <LocationOnIcon fontSize="small" />
          الموقع والحالة
        </SectionTitle>

        {/* المحافظة */}
        <Box>
          <FieldLabel required>المحافظة</FieldLabel>
          {loadingGov ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 2.5 }}>
              <CircularProgress size={22} sx={{ color: PRIMARY }} />
            </Box>
          ) : (
            <Grid container spacing={1} sx={{ mt: 0.5 }}>
              {governorates.map((g) => (
                <Grid item xs={4} sm={3} key={g.uuid}>
                  <Box
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        governorateId: g.uuid,
                        governorateName: g.governorate_name,
                      }))
                    }
                    sx={itemStyle(form.governorateId === g.uuid)}
                  >
                    {g.governorate_name}
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* حالة المواد */}
        <Box>
          <FieldLabel required>حالة المواد</FieldLabel>
          {loadingCond ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 2.5 }}>
              <CircularProgress size={22} sx={{ color: PRIMARY }} />
            </Box>
          ) : (
            <Grid container spacing={1} sx={{ mt: 0.5 }}>
              {conditions.map((c) => {
                const value = typeof c === "string" ? c : c.value;
                const label = typeof c === "string" ? c : c.label;
                return (
                  <Grid item xs={4} sm={3} key={value}>
                    <Box
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          condition: value,
                          conditionName: label,
                        }))
                      }
                      sx={itemStyle(form.condition === value)}
                    >
                      {label}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>

      </Stack>
    </Fade>
  );
}