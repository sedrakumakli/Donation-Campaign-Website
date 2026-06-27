import { Box, Grid, Skeleton } from '@mui/material';

const NewsCardSkeleton = ({ size = 6 }) => {
  return (
    <Grid container spacing={4}>
      {Array.from({ length: size }).map((_, index) => (
        <Grid
          key={index}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
        >
          <Box>
            <Skeleton variant='rounded' height={240} sx={{ borderRadius: 4 }} />

            <Skeleton variant='text' height={40} sx={{ mt: 2 }} />

            <Skeleton variant='text' width='70%' height={30} />

            <Skeleton variant='text' width='40%' height={25} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsCardSkeleton;
