import { Box, Button, Grid, Typography } from '@mui/material';
import NewsCard from './NewsCard';
import { useState } from 'react';

const LatestNewsSection = ({ latestNews }) => {
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);

  const visibleNews = latestNews.slice(0, visibleNewsCount);
  const hasMoreNews = visibleNewsCount < latestNews.length;

  return (
    <Box>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{
          mb: 4,
          color: '#014a5b',
        }}
      >
        آخر الأخبار
      </Typography>

      <Grid container spacing={4}>
        {visibleNews.map((item) => (
          <Grid
            key={item.id}
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <NewsCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          mt: 5,
        }}
      >
        {hasMoreNews && (
          <Box
            sx={{
              textAlign: 'center',
              mt: 5,
            }}
          >
            <Button
              variant='contained'
              onClick={() => setVisibleNewsCount((prev) => prev + 3)}
              sx={{
                borderRadius: 1,
                backgroundColor: '#014a5b',
              }}
            >
              عرض المزيد
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LatestNewsSection;
