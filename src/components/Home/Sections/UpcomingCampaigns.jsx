import { Box, Button, Typography } from '@mui/material';
import CampaignTile from '../CampaignTile';
import CustomContainer from '../../common/CustomContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const UpcomingCampaigns = ({ campaigns }) => {
  if (!campaigns?.length) return null;

  const slides = chunkArray(campaigns, 7);

  return (
    <CustomContainer styles={{ my: 8 }}>
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
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            الحملات القادمة
          </Typography>

          <Typography sx={{ mt: 1, maxWidth: 550, color: 'var(--desc-color)' }}>
            استعد للمشاركة في حملات جديدة تُطلق قريبًا لدعم مشاريع إنسانية
            وتنموية.
          </Typography>
        </Box>

        <Button
          variant='outlined'
          sx={{
            borderColor: 'var(--main-color)',
            color: 'var(--main-color)',
            borderRadius: 2,
          }}
        >
          اكتشف الحملات القادمة
        </Button>
      </Box>

      {/* SWIPER */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        style={{
          '--swiper-pagination-color': 'var(--main-color)',
          '--swiper-pagination-bullet-inactive-color': '#c4c4c4',
          '--swiper-pagination-bullet-inactive-opacity': 1,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* RESPONSIVE FLEX GRID */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: 2,
                height: '100%',
                marginBottom: '64px',
              }}
            >
              {slide.map((campaign, i) => (
                <CampaignTile
                  key={campaign.uuid}
                  campaign={campaign}
                  isBig={i === 0} // أول عنصر بس كبير
                />
              ))}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomContainer>
  );
};

export default UpcomingCampaigns;
