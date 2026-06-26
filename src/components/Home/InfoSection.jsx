import { Grid, Box } from '@mui/material';
import CustomContainer from '../common/CustomContainer';

const InfoSection = ({ children, image, order }) => {
  return (
    <CustomContainer styles={{ my: 8 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 5, lg: 8 }}
        sx={{ alignItems: order ? 'center' : 'start' }}
      >
        {/* IMAGE */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ order: order }}>
          <Box
            component='img'
            src={image}
            alt='donation'
            sx={{
              width: '100%',
              height: { xs: 220, sm: 300, md: ' 100%' },
              borderRadius: 4,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Grid>

        {children}
      </Grid>
    </CustomContainer>
  );
};

export default InfoSection;
