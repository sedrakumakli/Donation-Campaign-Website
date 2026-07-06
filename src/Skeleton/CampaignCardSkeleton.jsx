import { Card, CardContent, Skeleton, Box, Stack } from '@mui/material';

const CampaignCardSkeleton = () => {
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid #E0E0E0',
        boxShadow: 'none',
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative' }}>
        <Skeleton variant='rectangular' height={200} animation='wave' />

        <Skeleton
          variant='rounded'
          width={70}
          height={28}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            borderRadius: 10,
          }}
          animation='wave'
        />
      </Box>

      <CardContent sx={{ px: 2 }}>
        {/* Title */}
        <Skeleton
          variant='text'
          height={40}
          width='80%'
          sx={{ mx: 'auto' }}
          animation='wave'
        />

        <Skeleton
          variant='text'
          height={40}
          width='55%'
          sx={{ mx: 'auto', mb: 2 }}
          animation='wave'
        />

        {/* Amounts */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box>
            <Skeleton width={80} height={20} animation='wave' />
            <Skeleton width={90} height={30} animation='wave' />
          </Box>

          <Box>
            <Skeleton width={60} height={20} animation='wave' />
            <Skeleton width={80} height={30} animation='wave' />
          </Box>
        </Box>

        {/* Progress */}
        <Box sx={{ mt: 3 }}>
          <Skeleton
            variant='rounded'
            height={10}
            sx={{ borderRadius: 5 }}
            animation='wave'
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
            }}
          >
            <Skeleton width={80} height={20} animation='wave' />
            <Skeleton width={35} height={20} animation='wave' />
          </Box>
        </Box>

        {/* Buttons */}
        <Stack direction='row' spacing={2} sx={{ mt: 3 }}>
          <Skeleton
            variant='rounded'
            height={42}
            sx={{
              flex: 1,
              borderRadius: 2,
            }}
            animation='wave'
          />

          <Skeleton
            variant='rounded'
            width={120}
            height={42}
            sx={{
              borderRadius: 2,
            }}
            animation='wave'
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CampaignCardSkeleton;
