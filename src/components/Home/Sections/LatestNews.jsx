import { Grid } from '@mui/material';

import { useGetData } from '../../../customHooks/reactQuery/useGetData';
import { getLastestNews } from '../../../services/news';
import NewsCard from '../../News/NewsCard';
import SectionWrapper from '../SectionWrapper';
import NewsCardSkeleton from '../../../Skeleton/NewsCardSkeleton';

const LastestNews = () => {
  const {
    data: newsData,
    isFetching: isFetchingNews,
    error: newsErr,
  } = useGetData({
    queryKey: ['letest-news'],
    queryFn: getLastestNews,
  });

  const latestNews = newsData?.data.slice(0, 3) || [];

  const content = isFetchingNews ? (
    <NewsCardSkeleton size={3} />
  ) : (
    <Grid container spacing={3}>
      {latestNews.map((item) => (
        <Grid
          key={item.uuid || item.id}
          size={{
            xs: 12,
            sm: 6,
            lg: 4,
          }}
        >
          <NewsCard {...item} />
        </Grid>
      ))}
    </Grid>
  );

  if (!latestNews?.length) return null;

  return (
    <SectionWrapper
      title='آخر الأخبار'
      description='تابع آخر المستجدات والتحديثات الخاصة بالجمعية.'
      buttonText='جميع الأخبار'
    >
      {/* News */}
      {content}
    </SectionWrapper>
  );
};

export default LastestNews;
