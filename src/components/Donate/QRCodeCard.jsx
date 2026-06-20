import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

import { Box, Button, Card, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const QRCodeCard = ({ amount, paymentUrl }) => {
  const downloadQR = async () => {
    const qrElement = document.getElementById('qr-card');

    const dataUrl = await toPng(qrElement, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
    });

    const link = document.createElement('a');
    link.download = 'donation-qr.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <Card
      id='qr-card'
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

      <Typography sx={{ fontWeight: 700, mt: 2 }}>{amount} ل.س</Typography>

      <Button
        startIcon={<DownloadIcon />}
        variant='outlined'
        onClick={downloadQR}
        sx={{
          mt: 3,
          borderColor: 'var(--main-color)',
          color: 'var(--main-color)',
          transition: '0.5s',
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
