import { Box, Button, Stack, Typography } from '@mui/material';
import './HomeHero.css';
import CustomContainer from '../../../components/common/CustomContainer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InKindDonationForm from '../../../Pages/InKindDonation/InKindDonationForm';

const C = {
  tealDeep: '#003744',
  tealMain: '#014a5b',
  tealMid: '#0a5c6e',
  tealLight: '#1a7186',
  slate: '#8c9ea0',
  slateDark: '#6c7d7f',
  bg: '#f7f9f9',
  tint: '#d0e7ea',
  tintDeep: '#b9dade',
  border: '#d1d6d6',
  ink: '#0f2a30',
  muted: '#5d7274',
  white: '#ffffff',
  gold: '#c9a24b',
  radiusLg: '12px',
  radiusMd: '10px',
  shadow1: '0 2px 10px rgba(0,55,68,0.06)',
  shadow2: '0 14px 34px rgba(0,55,68,0.14)',
};

const IMAGES = {
  hero: '/hero2ContactUS.jpg',
  story: '../../../public/aboutus.avif',
};

function HomeHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 605 },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(100deg, rgba(0,55,68,0.93) 0%, rgba(0,55,68,0.78) 45%, rgba(0,55,68,0.45) 100%), url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CustomContainer>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              py: { xs: 10, md: 0 },
            }}
          >
            <Stack
              spacing={3}
              sx={{
                width: { xs: '100%', md: '60%' },
                textAlign: 'right',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 34, md: 54 },
                  fontWeight: 900,
                  lineHeight: 1.3,
                  color: C.white,
                }}
              >
                العطاء حين يُنظَّم،
                <br />
                <Box component='span' sx={{ color: C.tint }}>
                  يصبح أثراً لا يُنسى
                </Box>
              </Typography>
              <Stack
                sx={{
                  textAlign: 'right',
                  alignItems: 'flex-start',
                  gap: 4,
                }}
              >
                <Typography
                  sx={{
                    width: '100%',
                    maxWidth: 620,
                    fontSize: { xs: 17, md: 19 },
                    color: 'rgba(247,249,249,0.88)',
                    lineHeight: 2,
                    textAlign: 'left',
                  }}
                >
                  لأن الخير يستحق أن يصل بالشكل الصحيح، نوفر منصة تربط المتبرعين
                  بالمبادرات الإنسانية وتتابع أثر كل مساهمة.
                </Typography>
                <Button
                  variant='contained'
                  size='large'
                  component={Link}
                  to='/donate'
                  sx={{
                    bgcolor: C.gold,
                    color: C.white,
                    px: 4,
                    py: 1.5,
                    /* borderRadius: '30px', */
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '1rem',
                    boxShadow: '0 8px 24px rgba(201,162,75,0.35)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(201,162,75,0.35)',
                    },
                    transition: 'all .3s ease',
                  }}
                >
                  كن جزءًا من الأثر
                </Button>
              </Stack>
            </Stack>
          </Box>
        </CustomContainer>
      </Box>

      <InKindDonationForm open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default HomeHero;
