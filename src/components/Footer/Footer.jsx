import {
  Box,
  Typography,
  Grid,
  IconButton,
  Link,
  Stack,
  Divider,
} from '@mui/material';

import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

import { Link as RouterLink } from 'react-router-dom';
import CustomContainer from '../common/CustomContainer';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'var(--main-color)',
        color: '#fff',
        pt: 8,
      }}
    >
      <CustomContainer>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
            color: 'white',
            mb: 4,
          }}
        >
          تبرع
        </Typography>
        <Divider
          sx={{
            borderColor: 'rgba(255,255,255,.1)',
            mb: 3,
          }}
        />
        <Grid container spacing={5}>
          {/* Logo */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                color: 'rgba(255,255,255,.72)',
                lineHeight: 2,
                maxWidth: 350,
              }}
            >
              منصة إنسانية تهدف إلى تسهيل التبرعات المادية والعينية وربط
              المتبرعين بالمشاريع والحملات التي تصنع أثرًا حقيقيًا في المجتمع.
            </Typography>

            <Stack direction='row' spacing={1} sx={{ mt: 3 }}>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,.08)',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: 'var(--gold)',
                  },
                }}
              >
                <Facebook />
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,.08)',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: 'var(--gold)',
                  },
                }}
              >
                <Instagram />
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,.08)',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: 'var(--gold)',
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Stack>
          </Grid>

          {/* Pages */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              الصفحات
            </Typography>

            <Stack spacing={2}>
              <Link
                component={RouterLink}
                to='/'
                underline='none'
                color='inherit'
              >
                الرئيسية
              </Link>

              <Link
                component={RouterLink}
                to='/campaigns'
                underline='none'
                color='inherit'
              >
                الحملات
              </Link>

              <Link
                component={RouterLink}
                to='/news'
                underline='none'
                color='inherit'
              >
                آخر الأخبار
              </Link>

              <Link
                component={RouterLink}
                to='/about'
                underline='none'
                color='inherit'
              >
                من نحن
              </Link>
            </Stack>
          </Grid>

          {/* More */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              روابط مهمة
            </Typography>

            <Stack spacing={2}>
              <Link underline='none' color='inherit'>
                سياسة الخصوصية
              </Link>

              <Link underline='none' color='inherit'>
                الشروط والأحكام
              </Link>

              <Link
                component={RouterLink}
                to='/contact'
                underline='none'
                color='inherit'
              >
                تواصل معنا
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              معلومات التواصل
            </Typography>

            <Stack spacing={2}>
              <Stack direction='row' spacing={1}>
                <Phone
                  sx={{
                    color: 'var(--gold)',
                  }}
                />
                <Typography color='rgba(255,255,255,.72)'>
                  +963 988 136 449
                </Typography>
              </Stack>

              <Stack direction='row' spacing={1}>
                <Email
                  sx={{
                    color: 'var(--gold)',
                  }}
                />
                <Typography color='rgba(255,255,255,.72)'>
                  info@donation.com
                </Typography>
              </Stack>

              <Stack direction='row' spacing={1}>
                <LocationOn
                  sx={{
                    color: 'var(--gold)',
                  }}
                />
                <Typography color='rgba(255,255,255,.72)'>
                  سوريا - حمص
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CustomContainer>
      <Typography
        align='center'
        sx={{
          backgroundColor: 'var(--secondary-color)',
          color: 'rgba(255,255,255,.55)',
          mt: 5,
          py: 3,
        }}
      >
        © 2026 جميع الحقوق محفوظة لمنصة التبرعات.
      </Typography>
    </Box>
  );
};

export default Footer;
