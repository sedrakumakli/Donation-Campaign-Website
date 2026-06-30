import { Box, Typography, Chip } from '@mui/material';
import { getCampaignStatusText } from '../../utils/methods';
import { useNavigate } from 'react-router-dom';

const CampaignTile = ({ campaign, isBig }) => {
  const statusInfo = getCampaignStatusText(campaign);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: 'relative',
        height: 320,
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundImage: `url(${campaign.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: '0.3s',
        gridColumn: isBig ? 'span 2' : 'span 1',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          color: 'white',
        }}
      >
        <Chip
          label={statusInfo.text}
          size='small'
          sx={{
            mb: 1,
            bgcolor: 'rgba(255,255,255,0.2)',
            color: 'white',
          }}
        />

        <Typography variant={isBig ? 'h6' : 'body1'} sx={{ fontWeight: '600' }}>
          {campaign.name}
        </Typography>

        <Typography variant='caption' sx={{ opacity: 0.85 }}>
          يبدأ في {campaign.start_date}
        </Typography>
      </Box>
    </Box>
  );
};

export default CampaignTile;
