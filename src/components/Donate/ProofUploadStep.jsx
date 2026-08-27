import { useRef } from 'react';

import {
  Alert,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { FaFileUpload, FaCheck, FaClock } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdWarning } from 'react-icons/md';

import { backBtnStyles, donateBtnStyles } from '../../utils/styles';

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

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const fileUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      file: file,
    }));

    setPreview(fileUrl);
  };

  const removeFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setFormData((prev) => ({
      ...prev,
      file: null,
    }));

    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChangeFile = () => {
    fileInputRef.current?.click();
  };

  const uploadedFile = formData?.file;

  const isPdf = uploadedFile?.type === 'application/pdf';

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 KB';

    const kb = bytes / 1024;

    if (kb < 1024) {
      return `${kb.toFixed(1)} KB`;
    }

    return `${(kb / 1024).toFixed(2)} MB`;
  };

  return (
    <>
      <Typography
        variant='h5'
        sx={{
          fontWeight: 700,
          mb: 1,
        }}
      >
        إثبات الدفع
      </Typography>

      <Box sx={{ height: '440px', overflowY: 'auto' }}>
        <Typography
          sx={{
            color: 'var(--desc-color)',
            mb: 3,
            lineHeight: 1.9,
          }}
        >
          بعد إتمام عملية التبرع، قم برفع ملف الوصل أو إثبات الدفع. سيتم مراجعة
          الملف من قبل الإدارة للتأكد من صحة عملية التبرع قبل اعتمادها.
        </Typography>

        {/* Important Warning */}
        <Alert
          icon={<MdWarning size={24} />}
          severity='warning'
          sx={{
            mb: 3,
            borderRadius: 3,
            alignItems: 'flex-start',

            '& .MuiAlert-message': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              mb: 0.7,
            }}
          >
            تنبيه مهم قبل رفع الوصل
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.8,
              fontSize: '0.95rem',
            }}
          >
            يجب أن يكون الوصل المرفوع خاصاً بعملية التبرع الحالية وأن يكون
            صادراً في <strong>نفس يوم التبرع</strong>. كما يجب التأكد من أن
            <strong> المبلغ الموجود في الوصل يطابق المبلغ الذي أدخلته</strong>.
            في حال كان الوصل قديماً، أو لا يخص هذه العملية، أو كان المبلغ
            مختلفاً، سيتم رفض الوصل من قبل الإدارة ولن يتم اعتماد التبرع.
          </Typography>
        </Alert>

        <Box>
          {!uploadedFile ? (
            /* Upload Button */
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <Button
                variant='outlined'
                startIcon={<FaFileUpload />}
                onClick={handleChangeFile}
                sx={{
                  minHeight: 52,
                  px: 4,
                  borderRadius: 3,
                  borderWidth: 1.5,
                  borderColor: 'var(--main-color)',
                  color: 'var(--main-color)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'none',

                  '&:hover': {
                    borderWidth: 1.5,
                    borderColor: 'var(--main-color)',
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  },
                }}
              >
                رفع ملف الوصل
              </Button>
            </Box>
          ) : (
            /* Uploaded File Preview */
            <Box>
              <Box
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: '#fafafa',
                }}
              >
                {/* File Header */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    px: 2,
                    py: 1.5,
                    borderBottom: '1px solid #e5e5e5',
                    backgroundColor: '#fff',
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {uploadedFile.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'var(--desc-color)',
                        fontSize: '0.85rem',
                        mt: 0.3,
                      }}
                    >
                      {formatFileSize(uploadedFile.size)}
                    </Typography>
                  </Box>

                  <IconButton
                    onClick={removeFile}
                    aria-label='حذف الملف'
                    sx={{
                      flexShrink: 0,
                      backgroundColor: '#f3f3f3',

                      '&:hover': {
                        backgroundColor: '#e9e9e9',
                      },
                    }}
                  >
                    <IoMdClose />
                  </IconButton>
                </Box>

                {/* File Content */}
                <Box
                  sx={{
                    width: '100%',
                    minHeight: 400,
                    maxHeight: 650,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    overflow: 'auto',
                  }}
                >
                  {isPdf ? (
                    <Box
                      component='iframe'
                      src={preview}
                      title='ملف إثبات الدفع'
                      sx={{
                        width: '100%',
                        height: 600,
                        border: 'none',
                        backgroundColor: '#fff',
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        textAlign: 'center',
                        px: 3,
                        py: 8,
                      }}
                    >
                      <FaFileUpload
                        size={45}
                        style={{
                          marginBottom: 16,
                        }}
                      />

                      <Typography
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        تم رفع الملف بنجاح
                      </Typography>

                      <Typography
                        sx={{
                          color: 'var(--desc-color)',
                        }}
                      >
                        سيتم إرسال الملف إلى الإدارة لمراجعته والتحقق من صحة
                        عملية التبرع.
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>

              {/* Change File Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 2,
                }}
              >
                <Button
                  variant='text'
                  startIcon={<FaFileUpload />}
                  onClick={handleChangeFile}
                  sx={{
                    color: 'var(--main-color)',
                    fontWeight: 600,
                    textTransform: 'none',
                  }}
                >
                  استبدال الملف
                </Button>
              </Box>
            </Box>
          )}

          {/* Hidden File Input */}
          <input
            id='payment-proof'
            ref={fileInputRef}
            type='file'
            accept='application/pdf,.pdf'
            onChange={handleUpload}
            style={{ display: 'none' }}
          />

          {/* Upload Status */}
          {uploadedFile && (
            <Stack
              spacing={1.5}
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 3,
                backgroundColor: '#fafafa',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                }}
              >
                <FaCheck
                  size={16}
                  style={{
                    color: '#2e7d32',
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  تم رفع ملف الوصل بنجاح
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                }}
              >
                <FaClock
                  size={16}
                  style={{
                    color: '#ed6c02',
                  }}
                />

                <Typography
                  sx={{
                    color: 'var(--desc-color)',
                  }}
                >
                  سيتم التحقق من صحة الوصل ومطابقة بياناته مع عملية التبرع.
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: 'var(--desc-color)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                بعد إرسال التبرع، سيقوم فريق الإدارة بمراجعة الوصل واعتماده أو
                رفضه بناءً على صحة العملية والمبلغ وتاريخ الوصل.
              </Typography>
            </Stack>
          )}
        </Box>
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          gap: 2,
        }}
      >
        <Button
          variant='outlined'
          onClick={onBack}
          disabled={isSubmitting}
          sx={backBtnStyles}
        >
          رجوع
        </Button>

        <Button
          variant='contained'
          disabled={!formData?.file || isSubmitting}
          onClick={onSubmit}
          sx={donateBtnStyles}
        >
          {isSubmitting ? <div className='btn-loader'></div> : 'إرسال التبرع'}
        </Button>
      </Box>
    </>
  );
};

export default ProofUploadStep;
