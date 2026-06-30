import { Button } from '@mui/material';
import './HomeHero.css';
import Experts from '../../../components/Experts/Experts';
import DonateButton from '../../../components/DonateButton/DonateButton';
import CustomContainer from '../../../components/common/CustomContainer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InKindDonationForm from '../../../Pages/InKindDonation/InKindDonationForm';

function HomeHero() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
            <DonateButton
              options={[
                {
                  label: 'تبرع مادي',
                  onClick: () => navigate('/donate'),
                },
                {
                  label: 'تبرع عيني',
                  onClick: () => setIsOpen(true), 
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
                bgcolor: 'rgba(255, 255, 255, 0.1)',
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

     
      <InKindDonationForm
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default HomeHero;