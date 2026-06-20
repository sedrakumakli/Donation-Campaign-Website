import { useRef } from 'react';

import { Box, Button, IconButton, Typography } from '@mui/material';
import { FaUpload } from 'react-icons/fa';
import { LuDelete } from 'react-icons/lu';

const ProofUploadStep = ({
  proofImage,
  setProofImage,
  preview,
  setPreview,
  onBack,
  onSubmit,
}) => {
  const fileInputRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setProofImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setProofImage(null);
    setPreview(null);
  };

  return (
    <>
      <Typography variant='h5' fontWeight={700} mb={4}>
        إثبات الدفع
      </Typography>

      {!preview ? (
        <Box
          onClick={() => fileInputRef.current?.click()}
          sx={{
            border: '2px dashed',
            borderColor: 'primary.main',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            cursor: 'pointer',
            transition: '.3s',

            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <FaUpload
            sx={{
              fontSize: 60,
              color: 'primary.main',
              mb: 2,
            }}
          />

          <Typography fontWeight={600} mb={1}>
            اضغط لرفع صورة إثبات الدفع
          </Typography>

          <Typography color='text.secondary'>JPG - PNG - WEBP</Typography>

          <input
            hidden
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handleUpload}
          />
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              position: 'relative',
              width: 'fit-content',
            }}
          >
            <Box
              component='img'
              src={preview}
              alt='proof'
              sx={{
                width: '100%',
                maxWidth: 500,
                borderRadius: 4,
              }}
            />

            <IconButton
              onClick={removeImage}
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                bgcolor: 'background.paper',
              }}
            >
              <LuDelete />
            </IconButton>
          </Box>

          <Typography color='success.main' mt={2} fontWeight={600}>
            ✓ تم اختيار الصورة بنجاح
          </Typography>
        </Box>
      )}

      <Box mt={4} display='flex' gap={2}>
        <Button variant='outlined' onClick={onBack}>
          رجوع
        </Button>

        <Button variant='contained' disabled={!proofImage} onClick={onSubmit}>
          إرسال التبرع
        </Button>
      </Box>
    </>
  );
};

export default ProofUploadStep;
