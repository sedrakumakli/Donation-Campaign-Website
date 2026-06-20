import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatArabicDate } from '../../utils/methods';
import config from '../../constants/enviroment';
import NewsChip from './NewsChip';

const NewsCard = ({
  uuid,
  cover_image,
  title,
  excerpt,
  publish_date,
  category,
  on_the_other_hand,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 3,
        /* backgroundColor: '#f4f8f8', */
        /* border: '1px solid #e7eeee', */
        transition: '.3s',
        /*  '&:hover': {
          transform: 'translateY(-4px)',
        }, */
        '&:hover .news-card-image': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/news/${uuid}`)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: '12px',
          }}
        >
          <CardMedia
            component='img'
            image={config.baseUrl + cover_image}
            alt={title}
            height='300'
            sx={{
              transition: '.4s',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
            className='news-card-image'
          />
        </Box>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            gap: 0.5,
          }}
        >
          <Box>
            <NewsChip
              label={on_the_other_hand ?? category}
              styles={{
                mr: 1,
              }}
            />
            <Typography
              variant='h6'
              fontWeight={700}
              sx={{
                /* height: '64px', */
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                my: 0.5,
                color: 'var(--main-color)',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: 'var(--desc-color)',
                lineHeight: 1.8,
              }}
            >
              {excerpt}
            </Typography>
          </Box>
          <Typography
            variant='caption'
            sx={{
              display: 'block',
              color: '#8c9ea0',
              fontWeight: 500,
              letterSpacing: '0.3px',
              textAlign: 'right',
            }}
          >
            تم النشر في {formatArabicDate(publish_date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
