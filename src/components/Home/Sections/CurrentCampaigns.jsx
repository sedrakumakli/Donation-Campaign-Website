import { Grid } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import CampaignCard from '../CampaignCard';
import SectionWrapper from '../SectionWrapper';
import { useGetData } from '../../../customHooks/reactQuery/useGetData';
import { getCampaigns } from '../../../services/campaigns';

const chunkArray = (array, size) => {
  const result = [];

  for (let i = 0; i < array?.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const CurrentCampaigns = () => {
  const { data: campaignsData } = useGetData({
    queryKey: ['campaigns'],
    queryFn: getCampaigns,
  });
  const campaigns = campaignsData?.data;
  /* if (!campaigns?.length) return null; */

  const slides = chunkArray(campaigns, 8);

  return (
    <SectionWrapper
      title='الحملات الحالية'
      description='ساهم اليوم في الحملات الإنسانية الجارية وكن جزءًا من صناعة أثر حقيقي.'
      buttonText='عرض جميع الحملات'
    >
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
    </SectionWrapper>
  );
};

export default CurrentCampaigns;
