import { Box, Button, Stack, Typography } from '@mui/material';
import {
  ArrowBackRounded,
  VolunteerActivismRounded,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../../components/common/CustomContainer';

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 480, md: 605 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.62),
            rgba(0,0,0,0.62)
          ),
          url('/homehero.png.png')
        `,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CustomContainer>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: '100%',
              maxWidth: 820,
              alignItems: 'center',
              color: '#fff',
            }}
          >
            {/* LABEL */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <VolunteerActivismRounded
                sx={{
                  color: 'var(--gold)',
                  fontSize: 22,
                }}
              />

              <Typography
                sx={{
                  color: 'var(--gold)',
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                أثرٌ يبدأ منك
              </Typography>
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: {
                  xs: '2.2rem',
                  sm: '3rem',
                  md: '4rem',
                },
                fontWeight: 900,
                lineHeight: 1.3,
                color: '#fff',
              }}
            >
              العطاء حين يُنظَّم،
              <Box
                component='span'
                sx={{
                  color: '#d0e7ea',
                  display: 'block',
                }}
              >
                يصبح أثراً لا يُنسى
              </Box>
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 680,
                color: 'rgba(255,255,255,0.88)',
                fontSize: {
                  xs: 16,
                  md: 18,
                },
                lineHeight: 2,
              }}
            >
              في أثر، نعمل على تنظيم العطاء وربط المتبرعين بالمبادرات الإنسانية،
              ضمن منصة واضحة وموثوقة تتيح متابعة المساهمات ومعرفة الأثر الذي
              تصنعه.
            </Typography>

            {/* BUTTONS */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                mt: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                variant='contained'
                endIcon={<ArrowBackRounded />}
                onClick={() => navigate('/campaigns')}
                sx={{
                  bgcolor: 'var(--main-color)',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  minWidth: 170,
                  borderRadius: 2.5,
                  fontWeight: 700,
                  fontSize: 15,
                  boxShadow: '0 8px 25px rgba(1,74,91,0.4)',

                  '&:hover': {
                    bgcolor: '#003744',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 28px rgba(1,74,91,0.5)',
                  },
                }}
              >
                استكشف حملاتنا
              </Button>

              <Button
                variant='outlined'
                onClick={() => navigate('/contactUs')}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.75)',
                  px: 4,
                  py: 1.5,
                  minWidth: 170,
                  borderRadius: 2.5,
                  fontWeight: 700,
                  fontSize: 15,

                  '&:hover': {
                    color: '#fff',
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                تواصل معنا
              </Button>
            </Stack>
          </Stack>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default HomeHero;
