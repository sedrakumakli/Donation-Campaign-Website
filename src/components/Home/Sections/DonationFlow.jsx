import { Grid, Box, Typography, Button } from '@mui/material';

import CustomContainer from '../../common/CustomContainer';

import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LinkIcon from '@mui/icons-material/Link';
import UpdateIcon from '@mui/icons-material/Update';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const points = [
  {
    title: 'تتبع كل تبرع بشكل مباشر',
    desc: 'يمكنك معرفة أين وصل تبرعك في كل مرحلة',
    icon: TrackChangesIcon,
  },
  {
    title: 'ربط التبرعات بالمشاريع الفعلية',
    desc: 'كل تبرع يُخصص مباشرة لمشروع محدد وواضح',
    icon: LinkIcon,
  },
  {
    title: 'تحديث مستمر عبر آخر الأخبار',
    desc: 'نشارك التقدم بشكل دوري وشفاف',
    icon: UpdateIcon,
  },
  {
    title: 'إشراف من منظمات معتمدة',
    desc: 'ضمان وصول التبرعات عبر جهات موثوقة',
    icon: VerifiedUserIcon,
  },
];

const DonationFlow = () => {
  return (
    <CustomContainer styles={{ my: 8 }}>
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }} alignItems='center'>
        {/* IMAGE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c'
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

        {/* CONTENT */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              fontSize: { xs: 22, sm: 28, md: 34 },
            }}
          >
            كيف نضمن وصول تبرعاتك؟
          </Typography>

          <Typography sx={{ mt: 2, color: 'var(--desc-color)' }}>
            نحن نعمل على ربط كل تبرع مباشرة بالمشاريع الإنسانية داخل المجتمع، مع
            متابعة شفافة لكل مرحلة من التنفيذ حتى الوصول للمستفيدين.
          </Typography>

          {/* POINTS */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{ xs: 12, md: 12, sm: 6 }}
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'flex-start',
                  }}
                >
                  <Icon sx={{ color: 'var(--gold)' }} />

                  <Box>
                    <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                      {item.title}
                    </Typography>

                    <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/* CTA */}
          <Button
            variant='contained'
            size='large'
            sx={{
              mt: 3,
              bgcolor: 'var(--main-color)',
              borderRadius: 2,
              px: 4,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                bgcolor: '#0e7a5a',
              },
            }}
          >
            ابدأ التبرع الآن
          </Button>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default DonationFlow;
