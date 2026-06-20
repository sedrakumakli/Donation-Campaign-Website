import { Box, IconButton, Stack, Typography } from '@mui/material';
import NewsChip from './NewsChip';
import { formatArabicDate } from '../../utils/methods';
import { LuCopy } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewsDetailsHeader = ({
  title,
  excerpt,
  publish_date,
  category,
  on_the_other_hand,
}) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const handleCopyURL = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(currentUrl);
    toast.success('تم نسخ الرابط بنجاح!');
  };

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 4,
        flexWrap: 'wrap',
        mb: 5,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <NewsChip
          label={on_the_other_hand ?? category}
          styles={{
            mb: 2,
            fontWeight: 600,
            py: 1.5,
            px: 0.5,
          }}
        />

        <Typography
          variant='h3'
          sx={{
            fontWeight: 700,
            color: '#014a5b',
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: 'var(--desc-color)',
            lineHeight: 1.9,
            mb: 1,
            mt: 1,
          }}
        >
          {excerpt}
        </Typography>

        <Typography
          sx={{
            color: '#8c9ea0',
            fontWeight: 500,
          }}
        >
          {formatArabicDate(publish_date)}
        </Typography>
      </Box>

      {/* Share Buttons */}

      <Stack direction='row' spacing={1} flexWrap='wrap'>
        <IconButton onClick={handleCopyURL} sx={{ fontSize: '18px' }}>
          <LuCopy />
        </IconButton>

        <IconButton sx={{ fontSize: '18px' }}>
          <FaInstagram />
        </IconButton>

        <IconButton
          sx={{ fontSize: '18px' }}
          onClick={() => handleShare(`https://wa.me/?text=${currentUrl}`)}
        >
          <FaWhatsapp />
        </IconButton>

        <IconButton
          sx={{ fontSize: '18px' }}
          onClick={() =>
            handleShare(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl,
              )}`,
            )
          }
        >
          <FaFacebook />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default NewsDetailsHeader;
