import { Box } from '@mui/material';
import CampaignTile from '../CampaignTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionWrapper from '../SectionWrapper';
import { useNavigate } from 'react-router-dom';
import { useGetData } from '../../../customHooks/reactQuery/useGetData';
import { filterCampaigns } from '../../../services/campaigns';
import CampaignTileSkeleton from '../../../Skeleton/CampaignTileSkeleton';

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const UpcomingCampaigns = () => {
  const navigate = useNavigate();

  const payload = new FormData();
  payload.append('status[]', 'جديدة');

  const { data: campaignsData, isFetching: isLoading } = useGetData({
    queryKey: ['campaigns', 'upcoming'],
    queryFn: () => filterCampaigns(payload),
  });
  const campaigns = campaignsData?.data || [];

  const slides = chunkArray(campaigns, 7);

  const getContent = (slide) =>
    isLoading
      ? Array.from({ length: 7 }).map((_, index) => (
          <CampaignTileSkeleton key={index} isBig={index === 0} />
        ))
      : slide.map((campaignData, i) => {
          const campaign = campaignData?.campaing;
          return (
            <CampaignTile
              key={campaign.uuid}
              campaign={campaign}
              isBig={i === 0} // أول عنصر بس كبير
            />
          );
        });

  if (!campaigns?.length) return null;

  return (
    <SectionWrapper
      title='الحملات القادمة'
      description='استعد للمشاركة في حملات جديدة تُطلق قريبًا.'
      buttonText='تابع الحملات القادمة'
      onButtonClick={() => navigate('/news?category=حملات جديدة')}
    >
      {/* SWIPER */}
      {/*   <Box
        sx={{
          '& .swiper-wrapper': {
            paddingTop: '10px',
            paddingLeft: '20px',
          },
        }}
      >
      </Box> */}
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
                marginBottom:
                  slides.length === campaigns.length ? '64px' : '0px',
              }}
            >
              {getContent(slide)}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default UpcomingCampaigns;
