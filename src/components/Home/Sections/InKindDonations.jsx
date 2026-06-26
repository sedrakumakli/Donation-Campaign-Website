import { Grid, Typography, Button } from '@mui/material';
import InfoSection from '../InfoSection';

const InKindDonations = () => {
  return (
    <InfoSection order={1} image='/inKind.jpg'>
      {/* CONTENT */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant='h4' sx={{ fontWeight: 700 }}>
          التبرعات العينية
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: 'var(--desc-color)',
            lineHeight: 2,
            fontSize: { xs: 15, md: 17 },
            maxWidth: 600,
          }}
        >
          كل تبرع عيني يصل عبر منصتنا يمر بسلسلة واضحة تبدأ من التسجيل
          الإلكتروني، مرورًا بمرحلة الاستلام والفحص، وصولًا إلى التوزيع الفعلي
          على المستفيدين الأكثر حاجة. نحن نؤمن أن الشفافية ليست خيارًا، لذلك
          نشارك بشكل مستمر نتائج التوزيع وقصص الأثر الحقيقي التي تصنعها
          تبرعاتكم.
        </Typography>

        {/* extra CTA hint */}
        <Typography
          sx={{
            mt: 2,
            color: 'var(--secondary-color)',
            maxWidth: 550,
          }}
        >
          يمكنك تسجيل تبرعك العيني بسهولة عبر نموذج مخصص لتحديد نوع المواد ومكان
          الاستلام بكل شفافية وسرعة.
        </Typography>

        {/* CTA */}
        <Button
          variant='contained'
          sx={{
            mt: 4,
            bgcolor: 'var(--main-color)',
            borderRadius: 2,
            px: 4,
            '&:hover': {},
          }}
        >
          سجّل تبرعك العيني
        </Button>
      </Grid>
    </InfoSection>
  );
};

export default InKindDonations;
