import { Dialog, Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SuccessDialog = ({
  open,
  title,
  description,
  buttonText = 'العودة للرئيسية',
  onClose,
  onAction,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 4,
          textAlign: 'center',
          width: 420,
          maxWidth: '90%',
        },
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <CheckCircleIcon
          sx={{
            fontSize: 90,
            color: 'var(--main-color)',
          }}
        />

        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            mt: 2,
            fontFamily: 'Cairo',
            color: '#111827',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: 'var(--secondary-color)',
            fontSize: '14px',
            fontFamily: 'Cairo',
          }}
        >
          {description}
        </Typography>

        <Button
          variant='contained'
          onClick={onAction}
          sx={{
            mt: 4,
            backgroundColor: 'var(--main-color)',
            borderRadius: '999px',
            px: 4,
            py: 1.2,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'var(--main-color)',
              opacity: 0.9,
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Dialog>
  );
};

export default SuccessDialog;
