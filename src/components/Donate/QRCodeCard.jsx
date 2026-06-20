import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import { Box, Button, Card, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { getCurrency } from '../../utils/methods';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import { getQRData } from '../../services/donate';

const QRCodeCard = ({ amount, currency }) => {
  const downloadQR = async () => {
    const qrElement = document.getElementById('qr-card');
    qrElement.style.paddingTop = '24px';

    const dataUrl = await toPng(qrElement, {
      cacheBust: true,
      pixelRatio: 3,
    });

    const link = document.createElement('a');
    link.download = 'donation-qr.png';
    link.href = dataUrl;
    link.click();
    qrElement.style.paddingTop = '0px';
  };

  const {
    data: paymentUrlData,
    isFetching: isFetchingQr,
    error: QrErr,
  } = useGetData({ queryKey: ['QrCode'], queryFn: getQRData });
  const paymentUrl = paymentUrlData?.data || '';

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        border: '1px solid #eee',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          borderRadius: '24px',
          backgroundColor: '#fff',
          px: 3,
        }}
        id='qr-card'
      >
        <Box
          id='payment-qr'
          style={{
            background: '#fff',
            padding: 12,
            borderRadius: 12,
            display: 'inline-flex',
          }}
        >
          <QRCode value={paymentUrl} size={220} />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{ fontWeight: 600, color: 'var(--secondary-color)', mt: 1 }}
          >
            مبلغ الدفع
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: 700 }}>
            {amount} {getCurrency(currency)}
          </Typography>
        </Box>
      </Box>
      <Button
        startIcon={<DownloadIcon />}
        variant='outlined'
        onClick={downloadQR}
        sx={{
          borderColor: 'var(--main-color)',
          color: 'var(--main-color)',
          transition: '0.5s',
          borderRadius: 1.5,
          '&:hover': {
            color: 'white',
            backgroundColor: 'var(--main-color)',
          },
        }}
      >
        تحميل QR
      </Button>
    </Card>
  );
};

export default QRCodeCard;
