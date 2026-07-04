import {
  Box,
  Chip,
  CircularProgress,
  Fade,
  FormHelperText,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { PRIMARY } from "./theme";
import { FieldLabel, SectionTitle } from "./SharedComponents";

export default function StepDonation({
  form,
  setForm,
  types,
  loadingTypes,
  nameError,
  setNameError,
  typeError,
  setTypeError,
}) {

  const handleQty = (delta) =>
    setForm((f) => ({ ...f, quantity: Math.max(1, (f.quantity || 1) + delta) }));

  const handleTypeSelect = (t) => {
    setTypeError("");
    if (t === "غير ذلك") {
      setForm((f) => ({ ...f, typeName: "", isCustomType: true }));
    } else {
      setForm((f) => ({ ...f, typeName: t, isCustomType: false }));
    }
  };

  return (
    <Fade in>
      <Stack spacing={3}>

        <SectionTitle>
          <CardGiftcardIcon fontSize="small" />
          بيانات التبرع
        </SectionTitle>

        {/* اسم التبرع */}
        <Box>
          <FieldLabel required>اسم التبرع</FieldLabel>
          <TextField
            fullWidth
            variant="standard"
            placeholder="مثال: براد كهربائي، بطانيات..."
            value={form.name}
            error={!!nameError}
            onChange={(e) => {
              setForm((f) => ({ ...f, name: e.target.value }));
              if (nameError) setNameError("");
            }}
            slotProps={{ htmlInput: { dir: "rtl" } }}
          />
          {nameError && (
            <FormHelperText error sx={{ fontFamily: "'Cairo', sans-serif", mt: 0.5 }}>
              {nameError}
            </FormHelperText>
          )}
        </Box>

        {/* نوع التبرع */}
        <Box>
          <FieldLabel required>نوع التبرع</FieldLabel>
          {loadingTypes ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 2.5 }}>
              <CircularProgress size={22} sx={{ color: PRIMARY }} />
            </Box>
          ) : (
            <Stack spacing={1.5} sx={{ mt: 0.5 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {types.map((t, index) => {
                  const isSelected =
                    t === "غير ذلك"
                      ? form.isCustomType
                      : form.typeName === t && !form.isCustomType;
                  return (
                    <Chip
                      key={`type-${index}`}
                      label={t}
                      clickable
                      variant={isSelected ? "filled" : "outlined"}
                      color={isSelected ? "primary" : "default"}
                      onClick={() => handleTypeSelect(t)}
                      sx={{
                        fontSize: 13,
                        fontWeight: isSelected ? 600 : 400,
                        height: 32,
                      }}
                    />
                  );
                })}
              </Box>

              {typeError && (
                <FormHelperText error sx={{ fontFamily: "'Cairo', sans-serif" }}>
                  {typeError}
                </FormHelperText>
              )}

              {form.isCustomType && (
                <TextField
                  fullWidth
                  autoFocus
                  variant="standard"
                  placeholder="اكتب نوع التبرع..."
                  value={form.typeName}
                  error={!!typeError}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, typeName: e.target.value }));
                    if (typeError) setTypeError("");
                  }}
                  slotProps={{ htmlInput: { dir: "rtl" } }}
                />
              )}
            </Stack>
          )}
        </Box>

        {/* الكمية */}
        <Box>
          <FieldLabel required>الكمية</FieldLabel>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => handleQty(-1)}
              sx={{
                border: `1.5px solid ${PRIMARY}`,
                color: PRIMARY,
                width: 34,
                height: 34,
                borderRadius: 1.5,
                "&:hover": { bgcolor: `${PRIMARY}10` },
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>

            <TextField
              variant="standard"
              value={form.quantity || 1}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  quantity: Math.max(1, parseInt(e.target.value) || 1),
                }))
              }
              slotProps={{
                htmlInput: {
                  style: {
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 15,
                    width: 52,
                    padding: "6px 0",
                  },
                },
              }}
            />

            <IconButton
              size="small"
              onClick={() => handleQty(1)}
              sx={{
                border: `1.5px solid ${PRIMARY}`,
                color: PRIMARY,
                width: 34,
                height: 34,
                borderRadius: 1.5,
                "&:hover": { bgcolor: `${PRIMARY}10` },
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

      </Stack>
    </Fade>
  );
}