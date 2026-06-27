import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import NewsCard from '../../components/News/NewsCard';
import CustomPagination from '../../components/CustomPagination';
import BreadCrumb from '../../components/BreadCrumb';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import { filterNews, getNews } from '../../services/news.js';
import CustomContainer from '../../components/common/CustomContainer.jsx';
import FilterNews from '../../components/News/FilterNews.jsx';
import NewsCardSkeleton from '../../Skeleton/NewsCardSkeleton.jsx';

const News = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('الكل');

  const cardsPerPage = 6;

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
      <CustomContainer
        styles={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <FilterNews
          news={news}
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          resultsCount={allNews.length}
        />

        {isFetchingNews || isFiltering ? (
          <NewsCardSkeleton />
        ) : allNews.length === 0 ? (
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
