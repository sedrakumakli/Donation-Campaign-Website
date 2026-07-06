import { Grid } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import CampaignCard from '../CampaignCard';
import SectionWrapper from '../SectionWrapper';
import { useGetData } from '../../../customHooks/reactQuery/useGetData';
import { filterCampaigns } from '../../../services/campaigns';
import { useNavigate } from 'react-router-dom';
import CampaignCardSkeleton from '../../../Skeleton/CampaignCardSkeleton';

const chunkArray = (array, size) => {
  const result = [];

  for (let i = 0; i < array?.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const CurrentCampaigns = () => {
  const navigate = useNavigate();

  const payload = new FormData();
  payload.append('status[]', 'نشطة');

  const { data: campaignsData, isFetching: isLoading } = useGetData({
    queryKey: ['campaigns', 'current'],
    queryFn: () => filterCampaigns(payload),
  });
  const campaigns = campaignsData?.data || [];

  const slides = chunkArray(campaigns, 8);

  const getContent = (group) =>
    isLoading
      ? Array.from({ length: 8 }).map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CampaignCardSkeleton />
          </Grid>
        ))
      : group.map((campaign) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CampaignCard campaign={campaign} />
          </Grid>
        ));

  if (!campaigns?.length) return null;

  return (
    <SectionWrapper
      title='الحملات الحالية'
      description='ساهم اليوم في الحملات الإنسانية الجارية وكن جزءًا من صناعة أثر حقيقي.'
      buttonText='عرض جميع الحملات'
      onButtonClick={() => navigate('/campaigns')}
    >
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <Grid
              container
              spacing={3}
              sx={{ mb: campaigns.length === slides.length ? 0 : 8 }}
            >
              {getContent(group)}
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default CurrentCampaigns;
