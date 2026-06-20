import { Box, Button, Typography } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DonationSuccess = ({ onHome }) => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <CheckCircleIcon
        sx={{
          fontSize: 90,
          color: 'var(--main-color)',
        }}
      />

      <Typography variant='h4' sx={{ fontWeight: 700, mt: 3 }}>
        تم إرسال طلب التبرع
      </Typography>

      <Typography sx={{ mt: 2, color: 'var(--secondary-color)' }}>
        سيتم مراجعة إثبات الدفع واعتماد التبرع من قبل الإدارة.
      </Typography>

      <Button variant='contained' sx={{ mt: 4 }} onClick={onHome}>
        العودة للرئيسية
      </Button>
    </Box>
  );
};

export default DonationSuccess;
