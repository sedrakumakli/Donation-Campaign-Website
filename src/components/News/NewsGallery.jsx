import { Box, Button, Grid, Typography } from '@mui/material';
import config from '../../constants/enviroment';
import { useState } from 'react';

const NewsGallery = ({ images = [], onImageClick }) => {
  const [showAllImages, setShowAllImages] = useState(false);

  const displayedImages = showAllImages ? images : images.slice(0, 5);

  if (images.length === 0) return null;
  return (
    <Box>
      <Typography
        variant='h5'
        fontWeight={700}
        sx={{
          mb: 4,
          color: '#014a5b',
        }}
      >
        معرض الصور
      </Typography>

      {/* First Image */}

      <Box
        component='img'
        src={config.baseUrl + displayedImages[0].url}
        onClick={() => onImageClick(displayedImages[0].url)}
        alt=''
        sx={{
          width: '100%',
          height: 500,
          objectFit: 'cover',
          borderRadius: 4,
          mb: 3,
          cursor: 'pointer',
        }}
      />

      {/* Grid Images */}

      <Grid container spacing={2}>
        {displayedImages.slice(1).map((img, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <Box
              component='img'
              src={config.baseUrl + img.url}
              alt=''
              onClick={() => onImageClick(img.url)}
              sx={{
                width: '100%',
                height: 250,
                objectFit: 'cover',
                borderRadius: 3,
                cursor: 'pointer',

                transition: 'all .3s ease',

                '&:hover': {
                  transform: 'scale(1.03)',
                  filter: 'brightness(0.85)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Show More */}

      {images.length > 5 && (
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            borderRadius: 1,
          }}
        >
          <Button
            variant='outlined'
            size='large'
            sx={{
              borderColor: 'var(--main-color)',
              color: 'var(--main-color)',
              transition: 0.5,
              '&:hover': {
                color: 'white',
                backgroundColor: 'var(--main-color)',
              },
            }}
            onClick={() => setShowAllImages((prev) => !prev)}
          >
            {showAllImages
              ? 'العودة للعرض المختصر'
              : `عرض جميع الصور (${images.length})`}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NewsGallery;
