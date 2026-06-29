import { Button } from '@mui/material';
import './HomeHero.css';
import Experts from '../../../components/Experts/Experts';
import { HeartHandshake } from 'lucide-react';
import DonateButton from '../../../components/DonateButton/DonateButton';
import CustomContainer from '../../../components/common/CustomContainer';
import { useNavigate } from 'react-router-dom';
function HomeHero() {
  const navigate = useNavigate();
  return (
    <>
      <div className='home-hero'>
        <CustomContainer styles={{ textAlign: 'center' }}>
          <h1>معاً نصنع فارقاً حقيقياً في حياة الآخرين</h1>
          <p className='desc'>
            كل تبرع — مهما كان صغيراً — يُشعل شمعة أمل في حياة أسرة تحتاج دعمك.
            انضم إلى آلاف المتبرعين حول العالم.
          </p>
          <div className='btns'>
            {/* <Button
            variant='contained'
            sx={{
              borderRadius: '8px',
              px: 4,
              display: { xs: 'none', md: 'flex' },
              background: 'linear-gradient(135deg, var(--teal-800), var(--teal-600))',
              color:'var(--bg)',
              height: '60px',
              width: '300px',
              fontSize: '24px',
              displayPrint:"flex",
              alignItems:"center",
              gap:'8px',
            }}
          >
            <HeartHandshake size={20}/>
            تبرع الآن
          </Button> */}
            <DonateButton
              options={[
                {
                  label: 'تبرع مادي',
                  onClick: () => navigate('/donate'),
                },
                {
                  label: 'تبرع عيني',
                  onClick: () => navigate('/in-kind-donation'),
                },
              ]}
              sx={{
                height: '60px',
                width: '300px',
                fontSize: '24px',
              }}
            />
            <Button
              variant='outlined'
              sx={{
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                px: 4,
                display: { xs: 'none', md: 'flex' },
                bgcolor: ' rgba(255, 255, 255, 0.1)',
                color: '#fff',
                height: '60px',
                width: '300px',
                fontSize: '24px',
              }}
            >
              اسكتشف الحملات
            </Button>
          </div>
        </CustomContainer>
      </div>
      <Experts />
    </>
  );
}
export default HomeHero;
