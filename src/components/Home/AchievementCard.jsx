import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from '@mui/material';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const AchievementCard = ({ project }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid #E0E0E0',
        transition: '.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          height='180'
          image={project.image}
          alt={project.name}
        />

        <Chip
          icon={<CheckCircleRoundedIcon />}
          label='مكتمل'
          color='success'
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            fontWeight: 600,
          }}
        />
      </Box>

      <CardContent>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {project.name}
        </Typography>

        <Stack spacing={1.5}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
            }}
          >
            <PlaceOutlinedIcon fontSize='small' />
            {project.district} - {project.governorate}
          </Typography>

          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
            }}
          >
            <CalendarMonthOutlinedIcon fontSize='small' />
            {project.completionDate}
          </Typography>

          <Typography
            sx={{
              color: 'var(--main-color)',
              fontWeight: 600,
            }}
          >
            {project.sector}
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            ضمن {project.campaign}
          </Typography>
        </Stack>

        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: '1px dashed #E0E0E0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'success.main',
              fontWeight: 700,
            }}
          >
            تم الإنجاز 100%
          </Typography>

          <Button
            endIcon={<ArrowBackIosNewRoundedIcon />}
            sx={{
              color: 'var(--main-color)',
            }}
          >
            التفاصيل
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
