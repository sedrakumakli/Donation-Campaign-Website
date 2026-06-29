import { Box, Skeleton } from '@mui/material';

const NewsCategoriesSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        flexWrap: 'wrap',
      }}
    >
      {[...Array(6)].map((_, index) => (
        <Skeleton
          key={index}
          variant='rounded'
          width={90}
          height={36}
          sx={{ borderRadius: '8px' }}
        />
      ))}
    </Box>
  );
};

export default NewsCategoriesSkeleton;
