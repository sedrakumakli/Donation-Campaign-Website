import { Box, Divider, Typography } from '@mui/material';
import BreadCrumb from '../../components/BreadCrumb';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import { useParams } from 'react-router-dom';
import { getLastestNews, getSingleNews } from '../../services/news';
import config from '../../constants/enviroment';
import CustomContainer from '../../components/common/CustomContainer';
import { useMemo, useState } from 'react';
import NewsDetailsHeader from '../../components/News/NewsDetailsHeader';
import NewsGallery from '../../components/News/NewsGallery';
import NewsLightbox from '../../components/News/NewsLightBox';
import LatestNewsSection from '../../components/News/LatestNewsSection';
import NewsDetailsSkeleton from '../../Skeleton/NewsDetailsSkeleton';

const getParagraphs = (text) => {
  return text
    .trim()
    .split(/\r?\n\s*\r?\n+/) // split into paragraphs
    .map((p) =>
      p
        .replace(/\r?\n+/g, ' ') // Merge line breaks داخل الفقرة إلى مسافات (keep it as one paragraph)
        .replace(/\s+/g, ' ') // clean up the res
        .trim(),
    );
};

const NewsDetails = () => {
  const [lightboxMedia, setLightboxMedia] = useState(null);

  const params = useParams();
  const id = params.id;

  //   Fetch News
  const {
    data: newsData,
    isFetching: isFetchingNews,
    error: newsErr,
  } = useGetData({ queryKey: ['news', id], queryFn: () => getSingleNews(id) });

  const news = newsData?.data || {};

  // content

  const articlesArr = getParagraphs(news?.content || '');

  const articles = articlesArr.map((paragraph, i) => (
    <Typography
      key={i}
      dangerouslySetInnerHTML={{ __html: paragraph }}
      sx={{
        color: '#374151',
        fontSize: {
          xs: '16px',
          md: '18px',
        },
        lineHeight: 2,
        textAlign: 'justify',

        '& a': {
          color: '#014a5b',
          textDecoration: 'underline',
          fontWeight: 600,
        },

        '& a:hover': {
          opacity: 0.8,
        },

        '& strong, & b': {
          fontWeight: 700,
          color: '#111827',
        },

        '& ul, & ol': {
          paddingRight: '24px',
          marginTop: '12px',
          marginBottom: '12px',
        },

        '& li': {
          marginBottom: '8px',
        },
      }}
    />
  ));

  // fetch latest News
  const {
    data: latestNewsData,
    isFetching: isFetchingLatestNews,
    error: latestNewsErr,
  } = useGetData({
    queryKey: ['news', 'latest'],
    queryFn: () => getLastestNews(),
  });

  const latestNews = useMemo(() => {
    if (!latestNewsData?.data) return [];

    return latestNewsData.data.filter((item) => item.uuid !== id);
  }, [latestNewsData, id]);

  if (isFetchingNews) {
    return <NewsDetailsSkeleton />;
  }

  return (
    <>
      <BreadCrumb
        dynamicItems={[
          { label: 'آخر الأخبار', path: '/news' },
          { label: news.title },
        ]}
      />

      <CustomContainer
        styles={{
          py: 6,
        }}
      >
        {/* Header */}
        <NewsDetailsHeader {...news} />

        {/* Cover Image */}
        <Box
          component='img'
          src={config.baseUrl + news.cover_image}
          alt={news.title}
          sx={{
            width: '100%',
            height: { xs: 250, md: 500 },
            objectFit: 'cover',
            borderRadius: 4,
            mb: 4,
          }}
        />

        {/* Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {articles}
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Gallery */}
        <NewsGallery images={news.images} onImageClick={setLightboxMedia} />
        <NewsLightbox
          image={lightboxMedia ? config.baseUrl + lightboxMedia : null}
          onClose={() => setLightboxMedia(null)}
        />

        <Divider sx={{ my: 8 }} />

        {/* Related News */}
        <LatestNewsSection latestNews={latestNews} />
      </CustomContainer>
    </>
  );
};

export default NewsDetails;
