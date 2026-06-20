import { Box, Button, Typography } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DonationSuccess = ({ onHome }) => {
  return (
    <Box textAlign='center' py={8}>
      <CheckCircleIcon
        sx={{
          fontSize: 90,
          color: 'success.main',
        }}
      />

      <Typography variant='h4' fontWeight={700} mt={3}>
        تم إرسال طلب التبرع
      </Typography>

      <Typography color='text.secondary' mt={2}>
        سيتم مراجعة إثبات الدفع واعتماد التبرع من قبل الإدارة.
      </Typography>

      <Button variant='contained' sx={{ mt: 4 }} onClick={onHome}>
        العودة للرئيسية
      </Button>
    </Box>
  );
};

export default DonationSuccess;
