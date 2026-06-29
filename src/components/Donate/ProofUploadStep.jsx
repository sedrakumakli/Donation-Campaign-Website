import { useRef } from 'react';

import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { FaUpload } from 'react-icons/fa';
import { backBtnStyles, donateBtnStyles } from '../../utils/styles';
import { IoMdClose } from 'react-icons/io';

const ProofUploadStep = ({
  formData,
  setFormData,
  preview,
  setPreview,
  onBack,
  onSubmit,
  isSubmitting,
}) => {
  const fileInputRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setPreview(null);
  };

  return (
    <>
      <Typography variant='h5' sx={{ fontWeight: 700, mb: 1 }}>
        إثبات الدفع
      </Typography>
      <Typography
        sx={{
          color: 'var(--desc-color)',
          mb: 4,
          lineHeight: 1.8,
        }}
      >
        ارفع صورة واضحة لوصل الدفع بعد إتمام العملية. يجب أن تكون المعلومات
        الأساسية ظاهرة داخل الصورة، وسيتم التحقق من أن الملف المرفوع هو وصل دفع
        أو إثبات عملية قبل متابعة الطلب.
      </Typography>

      <Box>
        <Box
          sx={{
            height: '350px',
            overflowY: 'auto',
            border: '2px dashed',
            borderColor: preview ? '#d1d5db' : 'var(--main-color)',
            borderRadius: 4,
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.3s',

            '&:hover': {
              backgroundColor: '#f3f3f3',
              borderColor: 'var(--main-color)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              transform: 'translateY(-2px)',
            },
          }}
          onClick={() => !preview && fileInputRef.current?.click()}
        >
          {preview ? (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                component='img'
                src={preview}
                alt='proof'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeImage();
                }}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  bgcolor: 'rgba(0,0,0,.4)',
                  color: '#fff',

                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,.6)',
                  },
                }}
              >
                <IoMdClose />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
                px: 3,
              }}
            >
              <FaUpload size={30} />

              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  اضغط لرفع صورة إثبات الدفع
                </Typography>

                <Typography
                  sx={{
                    color: 'var(--secondary-color)',
                  }}
                >
                  JPG - PNG - WEBP
                </Typography>
              </Box>
            </Box>
          )}

          <input
            hidden
            id='payment-proof'
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handleUpload}
          />
        </Box>

        {preview && (
          <Stack spacing={1.5} sx={{ mt: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography color='success.main'>✓</Typography>

              <Typography>تم رفع صورة الوصل</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography color='warning.main'>⏳</Typography>

              <Typography>جاري التحقق من الصورة</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography color='text.secondary'>⌛</Typography>

              <Typography>بانتظار مراجعة الإدارة</Typography>
            </Box>
          </Stack>
        )}
      </Box>

      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant='outlined' onClick={onBack} sx={backBtnStyles}>
          رجوع
        </Button>

        <Button
          variant='contained'
          disabled={!formData?.image}
          onClick={onSubmit}
          sx={donateBtnStyles}
        >
          {isSubmitting ? <div className='btn-loader'></div> : ' إرسال التبرع'}
        </Button>
      </Box>
    </>
  );
};

export default ProofUploadStep;
