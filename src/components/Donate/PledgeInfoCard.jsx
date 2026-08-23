import { Box, Stack, Typography } from '@mui/material';

import { FaFileSignature, FaCreditCard, FaFileUpload } from 'react-icons/fa';

const PledgeInfoCard = () => {
  const steps = [
    {
      icon: <FaFileSignature />,
      title: 'أنشئ تعهدك',
      description:
        'اختر الحملة وحدد المبلغ الذي ترغب بالتعهد بتقديمه، ثم أرسل التعهد.',
    },
    {
      icon: <FaCreditCard />,
      title: 'أكمل الدفع لاحقاً',
      description:
        'يمكنك العودة إلى ملفك الشخصي، ثم الدخول إلى تعهداتك واختيار التعهد لإكمال دفع المبلغ.',
    },
    {
      icon: <FaFileUpload />,
      title: 'ارفع إثبات الدفع',
      description:
        'بعد إتمام الدفع، ارفع ملف الوصل ليتم التحقق منه ومراجعته من قبل الإدارة.',
    },
  ];

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        backgroundColor: '#fff',
        boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          fontWeight: 700,
          mb: 1,
        }}
      >
        كيف يعمل التعهد؟
      </Typography>

      <Typography
        sx={{
          color: 'var(--desc-color)',
          fontSize: '0.9rem',
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        التعهد هو التزام منك بتقديم مبلغ معين للحملة، ويمكنك إكمال دفعه لاحقاً.
      </Typography>

      <Stack spacing={3}>
        {steps.map((step, index) => (
          <Box
            key={step.title}
            sx={{
              display: 'flex',
              gap: 2,
              position: 'relative',
            }}
          >
            {/* Step Number / Icon */}
            <Box
              sx={{
                width: 42,
                height: 42,
                minWidth: 42,
                borderRadius: '50%',
                backgroundColor: 'var(--main-color)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {step.icon}
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                }}
              >
                {index + 1}. {step.title}
              </Typography>

              <Typography
                sx={{
                  color: 'var(--desc-color)',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      {/* Important Note */}
      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 3,
          backgroundColor: '#fff8e6',
          border: '1px solid #f3d58a',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '0.9rem',
            mb: 0.5,
          }}
        >
          ملاحظة مهمة
        </Typography>

        <Typography
          sx={{
            fontSize: '0.85rem',
            lineHeight: 1.8,
            color: '#66551f',
          }}
        >
          هذا التعهد لا يعني أنك دفعت المبلغ الآن، ولن يتم اعتبار المبلغ تبرعاً
          مدفوعاً حتى تقوم بإكمال عملية الدفع ورفع إثبات الدفع.
        </Typography>
      </Box>
    </Box>
  );
};

export default PledgeInfoCard;
