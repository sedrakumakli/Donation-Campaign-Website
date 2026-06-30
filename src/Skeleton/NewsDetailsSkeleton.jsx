import { Box, Divider, Grid, Skeleton, Stack } from '@mui/material';
import CustomContainer from '../components/common/CustomContainer';

const NewsDetailsSkeleton = () => {
  return (
    <CustomContainer
      styles={{
        py: 6,
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Skeleton variant='rounded' width={120} height={34} />
          <Stack direction='row' spacing={1} mt={3}>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} variant='circular' width={40} height={40} />
            ))}
          </Stack>
        </Box>

        <Skeleton variant='text' width='70%' height={70} sx={{ mb: 2 }} />

        <Skeleton variant='text' width='100%' height={30} />

        <Skeleton variant='text' width='85%' height={30} />

        <Skeleton variant='text' width={180} height={30} sx={{ mt: 2 }} />
      </Box>

      {/* Cover Image */}
      <Skeleton
        variant='rounded'
        width='100%'
        height={500}
        sx={{
          borderRadius: 4,
          mb: 5,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {[...Array(7)].map((_, i) => (
          <Skeleton
            key={i}
            variant='text'
            height={35}
            width={i % 2 === 0 ? '100%' : '92%'}
          />
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Gallery */}
      <Skeleton variant='text' width={180} height={45} sx={{ mb: 4 }} />

      <Skeleton
        variant='rounded'
        width='100%'
        height={500}
        sx={{
          borderRadius: 4,
          mb: 3,
        }}
      />

      <Grid container spacing={2}>
        {[...Array(4)].map((_, i) => (
          <Grid
            key={i}
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <Skeleton
              variant='rounded'
              width='100%'
              height={250}
              sx={{ borderRadius: 3 }}
            />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 8 }} />

      {/* Latest News */}
      <Skeleton variant='text' width={200} height={50} sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {[...Array(3)].map((_, i) => (
          <Grid
            key={i}
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <Skeleton
              variant='rounded'
              width='100%'
              height={420}
              sx={{ borderRadius: 4 }}
            />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default NewsDetailsSkeleton;
