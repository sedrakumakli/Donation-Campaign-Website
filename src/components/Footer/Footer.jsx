import { Box, Typography, Stack, IconButton, Divider } from '@mui/material';

import {
  Instagram,
  Facebook,
  Twitter,
  LocationOnOutlined,
  PhoneOutlined,
  MailOutlineOutlined,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const Footer = () => {
  const pages = [
    {
      label: 'الرئيسية',
      path: '/',
    },
    {
      label: 'الحملات',
      path: '/campaigns',
    },
    {
      label: 'آخر الأخبار',
      path: '/news',
    },
    {
      label: 'من نحن',
      path: '/about',
    },
  ];

  const importantLinks = [
    {
      label: 'الأسئلة الشائعة',
      path: '/FAQSection',
    },
    {
      label: 'سياسة الخصوصية',
      path: '/privacy',
    },
    {
      label: 'الشروط والأحكام',
      path: '/terms',
    },
    {
      label: 'تواصل معنا',
      path: '/contactUs',
    },
  ];

  return (
    <Box
      component='footer'
      sx={{
        background: '#f4f7f7',
        color: 'var(--main-color)',
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: 1200,
          mx: 'auto',
          py: { xs: 6, md: 7 },
        }}
      >
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1.6fr 1fr 1fr 1.25fr',
            },

            gap: {
              xs: 5,
              md: 7,
            },
          }}
        >
          {/* ================= BRAND ================= */}

          <Box>
            <Typography
              sx={{
                color: 'var(--main-color)',
                fontSize: {
                  xs: 34,
                  md: 38,
                },

                fontWeight: 900,
                lineHeight: 1,
                mb: 2,
              }}
            >
              أثر
              <Box
                component='span'
                sx={{
                  color: 'var(--gold)',
                }}
              >
                .
              </Box>
            </Typography>

            <Typography
              sx={{
                color: 'var(--desc-color)',
                fontSize: 14,
                lineHeight: 2,

                maxWidth: 340,

                mx: {
                  xs: 'auto',
                  md: 0,
                },
              }}
            >
              منصة إنسانية تهدف إلى تنظيم العطاء وربط المتبرعين بالحملات
              والمشاريع التي تصنع أثراً حقيقياً في المجتمع.
            </Typography>

            {/* SOCIAL */}

            <Stack
              direction='row'
              spacing={1}
              sx={{
                mt: 3,

                justifyContent: {
                  xs: 'center',
                  md: 'flex-start',
                },
              }}
            >
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,

                    color: 'var(--main-color)',

                    bgcolor: '#f5f8f8',

                    border: '1px solid #e1e8e8',

                    transition: 'all .25s ease',

                    '&:hover': {
                      color: 'var(--gold)',
                      borderColor: 'rgba(201,162,75,.45)',
                      bgcolor: 'rgba(201,162,75,.06)',
                      transform: 'translateY(-2px)',
                    },

                    '& svg': {
                      fontSize: 18,
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* ================= PAGES ================= */}

          <Box>
            <FooterTitle>صفحاتنا</FooterTitle>

            <Stack spacing={1.7}>
              {pages.map((item) => (
                <FooterLink key={item.path} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </Stack>
          </Box>

          {/* ================= IMPORTANT ================= */}

          <Box>
            <FooterTitle>روابط مهمة</FooterTitle>

            <Stack spacing={1.7}>
              {importantLinks.map((item) => (
                <FooterLink key={item.path} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </Stack>
          </Box>

          {/* ================= CONTACT ================= */}

          <Box>
            <FooterTitle>معلومات التواصل</FooterTitle>

            <Stack spacing={2.2}>
              <ContactItem icon={<PhoneOutlined />} text='+963 988 136 449' />

              <ContactItem
                icon={<MailOutlineOutlined />}
                text='info@donation.com'
              />

              <ContactItem icon={<LocationOnOutlined />} text='سوريا - حمص' />
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* ================= RIGHTS ================= */}

      <Divider
        sx={{
          borderColor: '#e1e8e8',
        }}
      />

      <Box
        sx={{
          background: '#f4f7f7',
          py: 2.2,
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: 1200,
            mx: 'auto',

            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            gap: 2,

            flexDirection: {
              xs: 'column',
              sm: 'row',
            },

            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#718183',
              fontSize: 12.5,
            }}
          >
            © 2026 أثر — جميع الحقوق محفوظة
          </Typography>

          <Typography
            sx={{
              color: '#718183',
              fontSize: 12.5,
            }}
          >
            العطاء حين يُنظَّم، يصبح أثراً لا يُنسى
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

/* ================= HELPERS ================= */

const FooterTitle = ({ children }) => (
  <Typography
    sx={{
      color: 'var(--main-color)',
      fontSize: 15,
      fontWeight: 800,
      mb: 2.5,

      display: 'flex',
      alignItems: 'center',
      gap: 1,

      '&::before': {
        content: '""',

        width: 20,
        height: 2,

        borderRadius: 2,

        bgcolor: 'var(--gold)',
      },
    }}
  >
    {children}
  </Typography>
);

const FooterLink = ({ to, children }) => (
  <Box
    component={Link}
    to={to}
    sx={{
      width: 'fit-content',

      color: 'var(--desc-color)',

      textDecoration: 'none',

      fontSize: 14,

      transition: 'all .2s ease',

      '&:hover': {
        color: 'var(--main-color)',
        transform: 'translateX(-3px)',
      },
    }}
  >
    {children}
  </Box>
);

const ContactItem = ({ icon, text }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.3,
    }}
  >
    <Box
      sx={{
        width: 38,
        height: 38,

        flexShrink: 0,

        borderRadius: 2,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        color: 'var(--gold)',

        bgcolor: 'rgba(201,162,75,.07)',

        border: '1px solid rgba(201,162,75,.16)',

        '& svg': {
          fontSize: 18,
        },
      }}
    >
      {icon}
    </Box>

    <Typography
      sx={{
        color: 'var(--desc-color)',
        fontSize: 13.5,
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default Footer;
