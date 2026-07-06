import { Grid, Typography, Button } from '@mui/material';
import InfoSection from '../InfoSection';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <InfoSection order={2} image='/about-section.jpg'>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
          }}
        >
          من نحن
        </Typography>
        <Typography
          sx={{
            mt: 2,
            color: 'var(--desc-color)',
            lineHeight: 2,
            fontSize: { xs: 15, md: 17 },
            maxWidth: 650,
          }}
        >
          نحن منصة إنسانية تعمل على تحويل التبرعات من مجرد مبادرات فردية إلى
          عملية منظمة وشفافة يمكن تتبع أثرها من البداية حتى الوصول للمستفيد.
          نؤمن أن العطاء الحقيقي لا يُقاس بحجمه فقط، بل بوضوح أثره، لذلك نربط
          المتبرعين مباشرة بالحملات والمشاريع ونوفر رؤية كاملة لكل مرحلة من
          مراحل التبرع، ونؤمن أن العطاء الحقيقي لا يُقاس بحجمه فقط، بل بوضوح
          أثره، ورؤيتنا هي بناء مجتمع يكون فيه كل تبرع قابل للمتابعة والقياس
          والشفافية.
        </Typography>

        <Button
          component={Link}
          to='/about'
          variant='contained'
          size='large'
          sx={{
            mt: 4,
            bgcolor: 'var(--main-color)',
            borderRadius: 2,
            px: 4,
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          تعرف علينا أكثر
        </Button>
      </Grid>
    </InfoSection>
  );
};

export default About;
