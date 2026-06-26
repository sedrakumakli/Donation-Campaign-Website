import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useGetData } from '../../../customHooks/reactQuery/useGetData';
import { getNews } from '../../../services/news';
import NewsCard from '../../News/NewsCard';
import CustomContainer from '../../common/CustomContainer';
import SectionWrapper from '../SectionWrapper';

const LastestNews = () => {
  const navigate = useNavigate();
  const {
    data: newsData,
    isFetching: isFetchingNews,
    error: newsErr,
  } = useGetData({
    queryKey: ['news'],
    queryFn: getNews,
  });

  const news = newsData?.data || [];

  /* if (!news?.length) return null; */

  const latestNews = news.slice(0, 3);

  return (
    <SectionWrapper
      title='آخر الأخبار'
      description='تابع آخر المستجدات والتحديثات الخاصة بالجمعية.'
      buttonText='جميع الأخبار'
    >
      {/* News */}
      <Grid container spacing={3}>
        {latestNews.map((item) => (
          <Grid
            key={item.uuid || item.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <NewsCard {...item} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default LastestNews;
