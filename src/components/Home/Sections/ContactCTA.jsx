import { Box, Typography, Button, Stack } from '@mui/material';
import { MailOutlineOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../common/CustomContainer';

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        my: { xs: 8, md: 10 },
        /* background: '#eef2f3', */
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CustomContainer>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* small label */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 1.5,
                bgcolor: 'var(--gold)',
              }}
            />

            <Typography
              sx={{
                color: 'var(--gold)',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              نحن هنا من أجلك
            </Typography>

            <Box
              sx={{
                width: 28,
                height: 1.5,
                bgcolor: 'var(--gold)',
              }}
            />
          </Box>
          <Typography
            variant='h3'
            sx={{
              /* color: 'var(--main-color)', */
              fontWeight: 700,
              mb: 2,
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
            }}
          >
            لديك استفسار أو ترغب بالتعاون معنا؟
          </Typography>

          <Typography
            sx={{
              color: 'var(--desc-color)',
              lineHeight: 2,
              fontSize: {
                xs: '1rem',
                md: '1.1rem',
              },
              maxWidth: 650,
              mx: 'auto',
            }}
          >
            فريقنا جاهز للإجابة عن أسئلتك واستقبال اقتراحاتك، ومساعدتك في
            المشاركة بالحملات الإنسانية أو تقديم التبرعات العينية والمادية.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 5, justifyContent: 'center' }}
          >
            <Button
              variant='contained'
              startIcon={<MailOutlineOutlined />}
              onClick={() => navigate('/contact')}
              sx={{
                mt: 4,

                bgcolor: 'var(--main-color)',
                color: '#fff',

                px: { xs: 3, md: 4 },
                py: 1.5,

                borderRadius: 2,

                fontWeight: 700,
                fontSize: 15,

                boxShadow: '0 8px 22px rgba(1,74,91,0.16)',

                '&:hover': {
                  bgcolor: '#003b49',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 25px rgba(1,74,91,0.22)',
                },

                transition: 'all .25s ease',

                '& .MuiButton-startIcon': {
                  marginInlineEnd: 0.5,
                },

                '& .MuiButton-endIcon': {
                  marginInlineStart: 0.5,
                },
              }}
            >
              تواصل معنا
            </Button>
          </Stack>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default ContactCTA;
