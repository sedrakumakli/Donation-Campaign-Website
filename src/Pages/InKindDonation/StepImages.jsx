import {
  Box,
  Fade,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { PRIMARY } from "./theme";
import { FieldLabel, SectionTitle } from "./SharedComponents";

export default function StepImages({ form, setForm }) {
  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    const remaining = 10 - (form.images?.length || 0);
    const toAdd = files.slice(0, remaining).map((f) => ({
      file: f,
      preview: URL.createObjectURL(f),
      id: Math.random().toString(36).slice(2),
    }));
    setForm((f) => ({ ...f, images: [...(f.images || []), ...toAdd] }));
  };

  const removeImg = (id) =>
    setForm((f) => ({
      ...f,
      images: f.images.filter((img) => img.id !== id),
    }));

  return (
    <Fade in>
      <Stack spacing={2.5}>
        <SectionTitle>
          <PhotoCameraIcon fontSize="small" />
          صور التبرع
        </SectionTitle>

        {/* منطقة الرفع */}
        <Box
          component="label"
          sx={{
            border: `2px dashed ${PRIMARY}55`,
            borderRadius: 3,
            p: 3,
            textAlign: "center",
            cursor: "pointer",
            bgcolor: `${PRIMARY}08`,
            transition: "all .2s",
            display: "block",
            "&:hover": {
              borderColor: PRIMARY,
              bgcolor: `${PRIMARY}12`,
            },
          }}
        >
          <input
            type="file"
            multiple
            accept="image/*"
            hidden
            onChange={handleFiles}
          />
          <CloudUploadIcon
            sx={{ fontSize: 40, color: PRIMARY, opacity: 0.6, mb: 1 }}
          />
          <Typography variant="body2" fontWeight={600} color="text.secondary">
            اسحب الصور هنا أو انقر للاختيار
          </Typography>
          <Typography variant="caption" color="text.disabled">
            PNG, JPG, WEBP · حتى 10 صور
          </Typography>
        </Box>

        {/* معاينة الصور */}
        {form.images?.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {form.images.map((img) => (
              <Box
                key={img.id}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box
                  component="img"
                  src={img.preview}
                  alt=""
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <IconButton
                  size="small"
                  onClick={() => removeImg(img.id)}
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    bgcolor: "rgba(211,47,47,0.85)",
                    color: "#fff",
                    width: 20,
                    height: 20,
                    "&:hover": { bgcolor: "error.dark" },
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 13 }} />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}

        {/* ملاحظات */}
        <Box>
          <FieldLabel>ملاحظات إضافية</FieldLabel>
          <TextField
            fullWidth
            multiline
            minRows={3}
            placeholder="أي تفاصيل إضافية عن التبرع..."
            value={form.notes}
            onChange={(e) =>
              setForm((f) => ({ ...f, notes: e.target.value }))
            }
            inputProps={{ dir: "rtl" }}
          />
        </Box>
      </Stack>
    </Fade>
  );
}