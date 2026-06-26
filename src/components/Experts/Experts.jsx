import CustomContainer from '../common/CustomContainer';
import './Experts.css';
function Experts() {
  return (
    <CustomContainer styles={{ transform: 'translateY(-100px)' }}>
      <div className='experts-holder'>
        <div className='experts'>
          <div className='card'>
            <p className='num'>15</p>
            <p className='text'>عدد الحملات</p>
          </div>
          <div className='card'>
            <p className='num'>120</p>
            <p className='text'>المشاريع المنجزة</p>
          </div>
          <div className='card'>
            <p className='num'>500</p>
            <p className='text'>عدد المتبرعين</p>
          </div>
          <div className='card'>
            <p className='num'>260+مليون</p>
            <p className='text'>إجمالي التبرعات</p>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}
export default Experts;
