import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecentNewsItem = ({ id, title, date, category }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/news/${id}`)}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,

        '&:hover .news-title': {
          fontWeight: 700,
          color: '#014a5b',
        },
      }}
    >
      <Typography
        className='news-title'
        sx={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#0e1a2b',
          transition: '.3s',
          lineHeight: 1.6,

          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#8c9ea0',
          }}
        >
          {category}
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#8c9ea0',
          }}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecentNewsItem;
