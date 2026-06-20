import { Box, Card, Chip, Divider, Typography } from '@mui/material';
import { getCurrency } from '../../utils/methods';

const DonationSummary = ({ formData, activeStep }) => {
  const getStatus = () => {
    if (activeStep === 0)
      return {
        label: 'بانتظار إدخال البيانات',
        color: '#35618f',
        bg: '#eaf2ff',
      };

    if (activeStep === 1)
      return {
        label: 'بانتظار الدفع',
        color: '#ed6c02',
        bg: '#fff3e0',
      };

    if (activeStep === 2)
      return {
        label: 'بانتظار رفع الإثبات',
        color: '#6a1b9a',
        bg: '#f3e5f5',
      };

    return {
      label: 'تم الإرسال',
      color: '#2e7d32',
      bg: '#e8f5e9',
    };
  };

  const status = getStatus();

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        position: 'sticky',
        top: 20,
        boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: 700, mb: 3 }}>
        ملخص التبرع
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography sx={{ color: 'var(--secondary-color)', pl: 1 }}>
          المبلغ
        </Typography>

        <Typography sx={{ fontWeight: 700, pr: 1.5 }}>
          {formData?.contribution_amount
            ? Number(formData?.contribution_amount).toLocaleString()
            : 0}
          {getCurrency(formData?.currency_type)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography sx={{ color: 'var(--secondary-color)', pl: 1 }}>
          طريقة الدفع
        </Typography>

        <Typography sx={{ fontWeight: 700, pr: 1.5 }}>ShamCash</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography sx={{ color: 'var(--secondary-color)', pl: 1 }}>
          الحالة
        </Typography>
        <Chip
          label={status.label}
          sx={{
            fontWeight: 600,
            color: status.color,
            backgroundColor: status.bg,
          }}
        />
      </Box>
    </Card>
  );
};

export default DonationSummary;
