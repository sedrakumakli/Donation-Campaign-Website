import { Box, Skeleton } from '@mui/material';

const CampaignTileSkeleton = ({ isBig }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 320,
        borderRadius: 4,
        overflow: 'hidden',
        gridColumn: isBig ? 'span 2' : 'span 1',
      }}
    >
      {/* Image */}
      <Skeleton
        variant='rectangular'
        animation='wave'
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: 4,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
        }}
      >
        <Skeleton
          variant='rounded'
          width={80}
          height={28}
          sx={{
            mb: 2,
            borderRadius: 10,
          }}
        />

        <Skeleton variant='text' width='70%' height={35} sx={{ mb: 1 }} />

        <Skeleton variant='text' width='45%' height={22} />
      </Box>
    </Box>
  );
};

export default CampaignTileSkeleton;
