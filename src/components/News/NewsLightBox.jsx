import { Box } from '@mui/material';

const NewsLightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(0,0,0,.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        p: 3,
      }}
    >
      <Box
        component='img'
        src={image}
        alt='preview'
        sx={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: 4,
        }}
      />
    </Box>
  );
};

export default NewsLightbox;
