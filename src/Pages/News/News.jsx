import { useState } from 'react';
import { Box, Grid, Typography, Chip, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NewsCard from '../../components/News/NewsCard';
import CustomPagination from '../../components/CustomPagination';
import BreadCrumb from '../../components/BreadCrumb';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import { filterNews, getNews, getNewsCategories } from '../../services/news.js';
import CustomContainer from '../../components/common/CustomContainer.jsx';

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

  const isCategoryFilterEnabled = category !== 'الكل';

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
      url('https://images.unsplash.com/photo-1504711434969-e33886168f5c')
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            /* alignItems: 'end', */
            gap: 3,
            flexWrap: 'wrap',
            mb: 4,
          }}
        >
          {/* LEFT: Search */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', sm: '400px' },
                borderBottom: '1px solid #d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: 1,
                '&:focus-within': {
                  borderBottom: '2px solid #014a5b',
                },
              }}
            >
              <SearchIcon sx={{ color: '#8c9ea0' }} />

              <InputBase
                placeholder='ابحث حسب العنوان...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                  flex: 1,
                  fontSize: '18px',
                }}
              />
            </Box>
            <Typography
              sx={{
                color: 'var(--desc-color)',
                fontSize: '14px',
                fontWeight: 500,
                order: { xs: 2, md: 1 },
              }}
            >
              {allNews.length} أخبار
            </Typography>
          </Box>

          {/* RIGHT: Filter + Count */}
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <Chip
              key='الكل'
              label='الكل'
              onClick={() => setCategory('الكل')}
              variant={!isCategoryFilterEnabled ? 'filled' : 'outlined'}
              sx={{
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '8px',

                transition: '0.3s',

                /* ACTIVE */
                ...(!isCategoryFilterEnabled && {
                  backgroundColor: '#014a5b',
                  color: '#fff',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: '#014a5b',
                  },
                }),

                /* INACTIVE */
                ...(isCategoryFilterEnabled && {
                  /* borderColor: '#8c9ea0', */
                  border: 'none',
                  color: '#8c9ea0',
                  '&:hover': {
                    backgroundColor: 'transparent!important',
                    color: '#014a5b',
                  },
                }),
              }}
            />
            {categories.map((cat) => {
              const isActive = category === cat;

              return (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setCategory(cat)}
                  variant={isActive ? 'filled' : 'outlined'}
                  sx={{
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: '8px',

                    transition: '0.3s',

                    /* ACTIVE */
                    ...(isActive && {
                      backgroundColor: '#014a5b',
                      color: '#fff',
                      border: 'none',
                      '&:hover': {
                        backgroundColor: '#014a5b',
                      },
                    }),

                    /* INACTIVE */
                    ...(!isActive && {
                      /* borderColor: '#8c9ea0', */
                      border: 'none',
                      color: '#8c9ea0',
                      '&:hover': {
                        backgroundColor: 'transparent!important',
                        color: '#014a5b',
                      },
                    }),
                  }}
                />
              );
            })}
          </Box>
        </Box>

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
