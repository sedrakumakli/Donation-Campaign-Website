import { Box, Typography, Button, Stack } from '@mui/material';
import { Campaign, MailOutlineOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../common/CustomContainer';

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: '#eef2f3',
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
                bgcolor: 'var(--gold)',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 700,
                '&:hover': {
                  /* bgcolor: '#b8923f', */
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
