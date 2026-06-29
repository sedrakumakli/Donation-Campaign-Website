import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Stack,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import DonateButton from '../DonateButton/DonateButton';
import config from '../../constants/enviroment';

const statusColors = {
  نشطة: 'success',
  مكتملة: 'primary',
  منتهية: 'warning',
  جديدة: 'default',
};

const CampaignCard = ({ campaign }) => {
  const campaignInfo = campaign?.campaing;
  const navigate = useNavigate();
  if (!campaignInfo) return null;

  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 3,
        border: '1px solid #E0E0E0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          height='200'
          image={config.baseUrl + campaignInfo?.image}
          alt={campaignInfo.name}
        />

        <Chip
          label={campaignInfo.status}
          color={statusColors[campaignInfo.status] || 'default'}
          size='small'
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            fontWeight: 'bold',
          }}
        />
      </Box>

      {/* BODY */}
      <CardContent sx={{ px: 2 }}>
        {/* TITLE */}
        <Typography
          variant='h6'
          sx={{ fontWeight: '600', height: '64px' }}
          textAlign='center'
        >
          {campaignInfo.name}
        </Typography>

        {/* AMOUNTS */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box>
            <Typography sx={{ color: 'var(--desc-color)' }} variant='caption'>
              المبلغ المجموع
            </Typography>
            <Typography
              sx={{ fontWeight: '600' }}
              fontWeight='bold'
              color='var(--main-color)'
            >
              {campaignInfo.collected_amount}
            </Typography>
          </Box>

          <Box textAlign='right'>
            <Typography variant='caption' sx={{ color: 'var(--desc-color)' }}>
              الهدف
            </Typography>
            <Typography sx={{ fontWeight: '600' }}>
              {campaignInfo.target_amount}
            </Typography>
          </Box>
        </Box>

        {/* PROGRESS */}
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              height: 10,
              background: '#E0E0E0',
              borderRadius: 5,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: `${campaignInfo.progress || 0}%`,
                height: '100%',
                background: 'var(--main-color)',
              }}
            />
          </Box>

          <Typography
            mt={1}
            sx={{
              mt: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            fontWeight='bold'
          >
            <Typography
              variant='caption'
              sx={{ color: 'var(--secondary-color)' }}
            >
              نسبة الإنجاز:
            </Typography>
            <Typography variant='caption'>
              {campaignInfo.progress || 0}%
            </Typography>
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Stack direction='row' spacing={2} sx={{ mt: 3 }}>
          <DonateButton
            options={[
              {
                label: 'تبرع مباشر',
                onClick: () => navigate(`/donate?id=${campaignInfo.uuid}`),
              },
              {
                label: 'تعهد',
                onClick: () => navigate(`/pledge?id=${campaignInfo.uuid}`),
              },
            ]}
            sx={{ flex: 1, fontSize: '14px' }}
            buttonText='تبرع'
          />

          <Button
            variant='outlined'
            sx={{
              width: 120,
              fontWeight: 'bold',
              color: 'var(--main-color)',
              border: '1px solid #E0E0E0',
              borderRadius: 2,
              display: 'flex',
            }}
            onClick={() => navigate(`/campaign/${campaignInfo.uuid}`)}
          >
            المزيد
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
