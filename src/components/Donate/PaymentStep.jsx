import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  Stack,
  Card,
} from '@mui/material';
import QRCodeCard from './QRCodeCard';

const steps = [
  'افتح تطبيق شام كاش',
  'امسح رمز QR',
  'تأكد من المبلغ',
  'أكمل عملية الدفع',
  'احتفظ بصورة الإيصال',
];

const PaymentStep = ({ amount, onNext, onBack }) => {
  const paymentUrl = 'shamcash://pay?to=014ed0aaa36700fc36e139f272dddfca';

  return (
    <>
      <Typography variant='h5' sx={{ fontWeight: 700, mb: 4 }}>
        الدفع
      </Typography>

      <Grid container spacing={4}>
        {/* QR */}
        <Grid size={{ xs: 12, md: 6 }}>
          <QRCodeCard amount={amount} paymentUrl={paymentUrl} />
        </Grid>

        {/* STEPS */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          {steps.map((step, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                width: '100%',
                p: 2,
                borderRadius: 2,
                border: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: '0.2s',
                '&:hover': {
                  borderColor: 'var(--secondary-color)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: 'var(--main-color)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </Box>

              <Typography sx={{ fontSize: 15, color: '#374151' }}>
                {step}
              </Typography>
            </Card>
          ))}
        </Grid>
      </Grid>

      {/* BUTTONS */}
      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant='outlined' onClick={onBack}>
          رجوع
        </Button>

        <Button variant='contained' onClick={onNext}>
          لقد أتممت الدفع
        </Button>
      </Box>
    </>
  );
};

export default PaymentStep;
