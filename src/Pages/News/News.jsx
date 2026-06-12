import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Chip,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NewsCard from '../../components/News/NewsCard';
import CustomPagination from '../../components/CustomPagination';
import FilterNews from '../../components/News/FilterNews';
import BreadCrumb from '../../components/BreadCrumb';

const newsData = [
  {
    id: 1,
    title: 'بدء استقبال طلبات مشاريع التخرج للعام الدراسي الجديد',
    excerpt:
      'أعلنت الكلية عن بدء استقبال طلبات مشاريع التخرج إلكترونياً عبر المنصة، مع إمكانية متابعة حالة الطلب بشكل مباشر.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    date: '10 تموز 2026',
    category: 'تعليم',
  },
  {
    id: 2,
    title: 'إطلاق تحديث جديد لمنصة إدارة مشاريع التخرج',
    excerpt:
      'يتضمن التحديث تحسينات على واجهة المستخدم وإضافة إشعارات فورية للطلاب والمشرفين.',
    image: '/homehero.png.png',
    date: '8 تموز 2026',
    category: 'تكنولوجيا',
  },
  {
    id: 3,
    title: 'نصائح مهمة لكتابة تقرير مشروع التخرج',
    excerpt:
      'مجموعة من الإرشادات العملية التي تساعد الطلاب على إعداد تقرير أكاديمي منظم واحترافي.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    date: '5 تموز 2026',
    category: 'تعليم',
  },
  {
    id: 4,
    title: 'جدولة مناقشات مشاريع التخرج للفصل الحالي',
    excerpt:
      'تم نشر الجدول الأولي لمناقشات مشاريع التخرج، ويمكن للطلاب الاطلاع على مواعيدهم عبر المنصة.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
    date: '1 تموز 2026',
    category: 'تعليم',
  },
  {
    id: 5,
    title: 'تكريم المشاريع المتميزة في كلية الهندسة المعلوماتية',
    excerpt:
      'شهد الحفل عرض عدد من المشاريع المبتكرة التي قدمت حلولاً تقنية لمشكلات واقعية.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    date: '28 حزيران 2026',
    category: 'تعليم',
  },
  {
    id: 6,
    title: 'إرشادات اختيار المشرف الأكاديمي المناسب',
    excerpt:
      'تعرف على أهم المعايير التي تساعدك في اختيار مشرف يتناسب مع فكرة مشروعك وأهدافك البحثية.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    date: '25 حزيران 2026',
    category: 'تعليم',
  },
  {
    id: 7,
    title: 'بدء استقبال طلبات مشاريع التخرج للعام الدراسي الجديد',
    excerpt:
      'أعلنت الكلية عن بدء استقبال طلبات مشاريع التخرج إلكترونياً عبر المنصة، مع إمكانية متابعة حالة الطلب بشكل مباشر.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    date: '10 تموز 2026',
    category: 'تعليم',
  },
  {
    id: 8,
    title: 'إطلاق تحديث جديد لمنصة إدارة مشاريع التخرج',
    excerpt:
      'يتضمن التحديث تحسينات على واجهة المستخدم وإضافة إشعارات فورية للطلاب والمشرفين.',
    image: '/homehero.png.png',
    date: '8 تموز 2026',
    category: 'تعليم',
  },
  {
    id: 9,
    title: 'نصائح مهمة لكتابة تقرير مشروع التخرج',
    excerpt:
      'مجموعة من الإرشادات العملية التي تساعد الطلاب على إعداد تقرير أكاديمي منظم واحترافي.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    date: '5 تموز 2026',
    category: 'تعليم',
  },
  /*  {
    id: 10,
    title: 'جدولة مناقشات مشاريع التخرج للفصل الحالي',
    excerpt:
      'تم نشر الجدول الأولي لمناقشات مشاريع التخرج، ويمكن للطلاب الاطلاع على مواعيدهم عبر المنصة.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
    date: '1 تموز 2026',
  },
  {
    id: 11,
    title: 'تكريم المشاريع المتميزة في كلية الهندسة المعلوماتية',
    excerpt:
      'شهد الحفل عرض عدد من المشاريع المبتكرة التي قدمت حلولاً تقنية لمشكلات واقعية.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    date: '28 حزيران 2026',
  },
  {
    id: 12,
    title: 'إرشادات اختيار المشرف الأكاديمي المناسب',
    excerpt:
      'تعرف على أهم المعايير التي تساعدك في اختيار مشرف يتناسب مع فكرة مشروعك وأهدافك البحثية.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    date: '25 حزيران 2026',
  }, */
];
const categories = ['الكل', 'تعليم', 'تكنولوجيا', 'أخبار'];

const News = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('الكل');

  const cardsPerPage = 6;

  const filteredNews = newsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredNews.length / cardsPerPage);

  const currentNews = filteredNews.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage,
  );

  return (
    <>
      <BreadCrumb dynamicItems={[{ label: 'آخر الأخبار', path: '/news' }]} />
      <Container
        maxWidth='xl'
        sx={{
          py: 4,
          px: { xs: 2, md: 6, lg: 8 },
        }}
      >
        {/*  <Box
        sx={{
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
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
          borderRadius: 3,
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
      </Box> */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            gap: 2,
            flexWrap: 'wrap',
            mb: 4,
          }}
        >
          {/* LEFT: Search */}
          <Box
            sx={{
              width: '400px',
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

          {/* RIGHT: Filter + Count */}
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
            }}
          >
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

        {filteredNews.length === 0 ? (
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
            <Box sx={{ height: '1024px' }}>
              <Grid container spacing={4}>
                {currentNews.map((blog) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
                    <NewsCard {...blog} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {totalPages > 1 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 4,
                  pt: 4,
                  borderTop: '1px solid #e7eeee',
                }}
              >
                {/* <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                siblingCount={1}
                boundaryCount={1}
                hidePrevButton
                hideNextButton
                sx={{
                  '& .MuiPaginationItem-root': {
                    fontSize: '18px',
                    color: '#8c9ea0',
                    transition: '0.3s',
                    padding: '0px',
                  },

                  '& .MuiPaginationItem-root:hover': {
                    color: '#014a5b',
                    backgroundColor: 'transparent',
                  },

                  '& .Mui-selected': {
                    color: '#014a5b',
                    fontWeight: 600,
                    borderBottom: '2px solid #014a5b',
                    borderRadius: 0,
                    backgroundColor: 'transparent !important',
                  },
                }}
              /> */}
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
      </Container>
    </>
  );
};

export default News;
