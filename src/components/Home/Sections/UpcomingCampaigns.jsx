import { Box } from '@mui/material';
import CampaignTile from '../CampaignTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionWrapper from '../SectionWrapper';

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
    <SectionWrapper
      title='الحملات القادمة'
      description='استعد للمشاركة في حملات جديدة تُطلق قريبًا.'
      buttonText='تابع الحملات القادمة'
    >
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
    </SectionWrapper>
  );
};

export default UpcomingCampaigns;
