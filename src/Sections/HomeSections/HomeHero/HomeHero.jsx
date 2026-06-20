import { Button } from '@mui/material';
import './HomeHero.css';
import Experts from '../../../components/Experts/Experts';
import { HeartHandshake } from 'lucide-react';
function HomeHero() {
  return (
    <div className='home-hero'>
      <section>
        <h1>معاً نصنع فارقاً حقيقياً في حياة الآخرين</h1>
        <p className='desc'>
          كل تبرع — مهما كان صغيراً — يُشعل شمعة أمل في حياة أسرة تحتاج دعمك.
          انضم إلى آلاف المتبرعين حول العالم.
        </p>
        <div className='btns'>
          <Button
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
          </Button>
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
      </section>
      <Experts />
    </div>
  );
}
export default HomeHero;
