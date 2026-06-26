import { Typography, Box, Button, Grid } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import CustomContainer from '../../common/CustomContainer';
import CampaignCard from '../CampaignCard';

const chunkArray = (array, size) => {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const CurrentCampaigns = ({ campaigns }) => {
  if (!campaigns?.length) return null;

  const slides = chunkArray(campaigns, 8);

  return (
    <CustomContainer styles={{ my: 10 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 5,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant='h4' sx={{ fontWeight: 700 }}>
            الحملات الحالية
          </Typography>

          <Typography sx={{ mt: 1, maxWidth: 550, color: 'var(--desc-color)' }}>
            ساهم اليوم في الحملات الإنسانية الجارية، وكن جزءًا من صناعة أثر
            حقيقي يصل إلى مستحقيه.
          </Typography>
        </Box>

        <Button
          variant='outlined'
          sx={{
            color: 'var(--main-color)',
            borderColor: 'var(--main-color)',
            borderRadius: 2,
          }}
        >
          تصفح الحملات
        </Button>
      </Box>

      {/* SWIPER */}
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {group.map((campaign) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <CampaignCard campaign={campaign} />
                </Grid>
              ))}
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomContainer>
  );
};

export default CurrentCampaigns;
