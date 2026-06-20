import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import NewsCard from '../../components/News/NewsCard';
import CustomPagination from '../../components/CustomPagination';
import BreadCrumb from '../../components/BreadCrumb';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import { filterNews, getNews, getNewsCategories } from '../../services/news.js';
import CustomContainer from '../../components/common/CustomContainer.jsx';
import FilterNews from '../../components/News/FilterNews.jsx';

const News = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('الكل');

  const cardsPerPage = 6;

  const {
    data: categoriesData,
    isFetching: isFetchingCategories,
    error: categoriesErr,
  } = useGetData({
    queryKey: ['news-categories'],
    queryFn: getNewsCategories,
  });

  const categories = categoriesData?.data || [];
  const {
    data: newsData,
    isFetching: isFetchingNews,
    error: newsErr,
  } = useGetData({
    queryKey: ['news'],
    queryFn: getNews,
  });

  const news = newsData?.data || [];

  const formData = new FormData();

  if (search !== '') formData.append('title', search);
  if (category !== 'الكل') formData.append('category[]', category);

  const isFilterEnabled = search !== '' || category !== 'الكل';

  const {
    data: filteredNewsData,
    isFetching: isFiltering,
    error: filterErr,
  } = useGetData({
    queryKey: ['news', 'filter', search, category],
    queryFn: () => filterNews(formData),
    enabled: isFilterEnabled,
  });

  const filteredNews = filteredNewsData?.data || [];

  const allNews = isFilterEnabled ? filteredNews : news;

  const totalPages = Math.ceil(allNews.length / cardsPerPage);

  const currentNews = allNews.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage,
  );
  const emptyCards = cardsPerPage - currentNews.length;

  return (
    <>
      <BreadCrumb dynamicItems={[{ label: 'آخر الأخبار', path: '/news' }]} />
      <Box
        sx={{
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 4,
          py: 8,
          mb: 4,

          backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
      ),
      url('/newsHero.jpg')
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          /*  borderRadius: 3, */
          color: '#fff',
        }}
      >
        <Box>
          <Typography variant='h3' fontWeight={700} color='#ffffff'>
            آخر الأخبار والتحديثات
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '700px',
              lineHeight: 1.8,
            }}
          >
            تابع آخر المستجدات حول حملات التبرع، والتحديثات الجديدة على المنصة،
            بالإضافة إلى قصص العطاء والمبادرات الإنسانية التي يتم تنفيذها عبر
            نظامنا.
          </Typography>
        </Box>
      </Box>
      <CustomContainer
        styles={{
          pb: 4,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <FilterNews
          categories={categories}
          news={news}
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          resultsCount={allNews.length}
        />

        {allNews.length === 0 ? (
          <Typography
            variant='h5'
            align='center'
            sx={{
              minHeight: '50vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            No news found.
          </Typography>
        ) : (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                {currentNews.map((blog) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
                    <NewsCard {...blog} />
                  </Grid>
                ))}

                {Array.from({ length: emptyCards }).map((_, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`empty-${index}`}>
                    <Box sx={{ visibility: 'hidden' }}>
                      <NewsCard />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {totalPages > 1 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 6,
                  pt: 4,
                  borderTop: '1px solid #e7eeee',
                }}
              >
                <CustomPagination
                  totalPages={totalPages}
                  currentPage={page - 1}
                  goToPage={(value) => setPage(value + 1)}
                  nextPage={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  isBtnDisabled={page >= totalPages}
                />
              </Box>
            )}
          </>
        )}
      </CustomContainer>
    </>
  );
};

export default News;
