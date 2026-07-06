import { Card, CardContent, Skeleton, Box } from '@mui/material';

function ProjectCardSkeleton() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height: '100%',
        boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: 'relative' }}>
        <Skeleton variant='rectangular' height={220} animation='wave' />

        {/* STATUS BADGE */}
        <Skeleton
          variant='rounded'
          width={90}
          height={28}
          animation='wave'
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            borderRadius: 20,
          }}
        />
      </Box>

      <CardContent>
        {/* TITLE */}
        <Skeleton variant='text' width='80%' height={40} animation='wave' />

        {/* LOCATION */}
        <Skeleton
          variant='text'
          width='60%'
          height={28}
          animation='wave'
          sx={{ mt: 1 }}
        />

        {/* PROGRESS BAR */}
        <Skeleton
          variant='rounded'
          height={10}
          animation='wave'
          sx={{
            mt: 3,
            borderRadius: 5,
          }}
        />

        {/* PERCENTAGE */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1.5,
          }}
        >
          <Skeleton width={100} height={24} animation='wave' />

          <Skeleton width={40} height={24} animation='wave' />
        </Box>

        {/* FOOTER */}
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Skeleton width={90} height={22} animation='wave' />

            <Skeleton width={120} height={30} animation='wave' />
          </Box>

          <Skeleton
            variant='rounded'
            width={90}
            height={36}
            animation='wave'
            sx={{
              borderRadius: 2,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCardSkeleton;
