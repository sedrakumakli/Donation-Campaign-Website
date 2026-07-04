import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InfoSection from '../InfoSection';
import { Link, useNavigate } from 'react-router-dom';

const DonationFlow = () => {
  const navigate = useNavigate();

  return (
    <InfoSection image='/DonateFlowSection.jpg' isFull={true}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
            fontSize: { xs: 24, md: 34 },
          }}
        >
          كيف يمكنك المساهمة؟
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: 'var(--desc-color)',
            lineHeight: 2,
            fontSize: { xs: 15, md: 16 },
          }}
        >
          تتيح لك منصة أثر أكثر من طريقة للمشاركة في دعم المبادرات الإنسانية،
          سواء من خلال التبرع المباشر أو تسجيل تعهد بالتبرع في وقت لاحق، مع
          توثيق جميع المساهمات ومتابعة أثرها بشفافية كاملة.
        </Typography>

        {/* Cards */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {/* Donation */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                border: '1px solid rgba(1,74,91,0.12)',
                transition: '.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  bgcolor: 'rgba(201,162,75,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <VolunteerActivismOutlinedIcon
                  sx={{
                    color: 'var(--gold)',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                التبرع المباشر
              </Typography>

              <Typography
                sx={{
                  color: 'var(--desc-color)',
                  lineHeight: 1.9,
                  fontSize: 14,
                }}
              >
                قدّم مساهمتك مباشرة لدعم مشروع أو حملة إنسانية، مع إمكانية
                متابعة مراحل التنفيذ والاطلاع على أثر تبرعك.
              </Typography>

              <Button
                component={Link}
                to='/donate'
                variant='contained'
                sx={{
                  mt: 3,
                  bgcolor: 'var(--main-color)',
                  borderRadius: 2,
                }}
              >
                تبرع الآن
              </Button>
            </Paper>
          </Grid>

          {/* Pledge */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                border: '1px solid rgba(1,74,91,0.12)',
                transition: '.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  bgcolor: 'rgba(1,74,91,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <HandshakeOutlinedIcon
                  sx={{
                    color: 'var(--main-color)',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                التعهد بالتبرع
              </Typography>

              <Typography
                sx={{
                  color: 'var(--desc-color)',
                  lineHeight: 1.9,
                  fontSize: 14,
                }}
              >
                إذا كنت ترغب بالمساهمة لاحقاً، يمكنك تسجيل تعهد بالتبرع ليتم
                التواصل معك واستكمال مساهمتك عندما تصبح جاهزاً.
              </Typography>

              <Button
                variant='outlined'
                sx={{
                  mt: 3,
                  borderColor: 'var(--main-color)',
                  color: 'var(--main-color)',
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: 'var(--main-color)',
                    bgcolor: 'rgba(1,74,91,0.05)',
                  },
                }}
              >
                قدّم تعهداً
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          sx={{
            mt: 3,
            color: 'var(--secondary-color)',
            lineHeight: 1.8,
            fontSize: 14,
          }}
        >
          سواء اخترت التبرع المباشر أو التعهد بالمساهمة لاحقاً، فإن منصة أثر
          تضمن توثيق جميع المساهمات وربطها بالمشاريع المناسبة بشفافية كاملة.
        </Typography>
      </Grid>
    </InfoSection>
  );
};

export default DonationFlow;
