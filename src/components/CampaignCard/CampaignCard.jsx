import { Button } from '@mui/material';
import './CampaignCard.css';
import { useNavigate } from 'react-router-dom';
import DonateButton from '../DonateButton/DonateButton';

const CampaignCard = ({
  id,
  image,
  title,
  target,
  collected,
  progress,
  status,
}) => {
  const navigate = useNavigate();

  const statusStyles = {
    نشطة: 'active',
    مكتملة: 'completed',
    منتهية: 'ended',
    جديدة: 'new',
    متوقفة: 'stopped',
  };
  console.log(progress);
  return (
    <div className='campaignCard'>
      {/* Header  */}
      <div className='card-header'>
        <div className={`status-badge ${statusStyles[status]}`}>{status}</div>
        <img src={image} alt='حملة المياه' className='cover-image' />
      </div>

      {/* Content  */}
      <div className='card-body'>
        <h6 className='title'>{title}</h6>

        <div className='stats'>
          <div className='stat'>
            <span className='label'>المبلغ المجموع</span>
            <span className='value green'>{collected}</span>
          </div>

          <div className='stat'>
            <span className='label'>الهدف</span>
            <span className='value'>{target}</span>
          </div>
        </div>

        {/* Progress  */}
        <div className='progress-wrapper'>
          <div className='progress-bar'>
            <div
              className='progress-fill'
              style={{ width: `${parseInt(progress)}%` }}
            />
          </div>
          <div className='percentage'>
            <p> نسبة الإنجاز :</p>
            <span>{progress}</span>
          </div>
        </div>

        {/* Info Cards 
        <div class="info-grid">
          <div class="info-box">
            <div class="text">المشاريع المرتبطة</div>
            <div class="number">{relatedProjects}</div>
          </div>

          <div class="info-box">
            <div class="text">المشاريع المنجزة</div>
            <div class="number">{completedProjects}</div>
          </div>
        </div> */}
        <hr />
        {/* Buttons  */}
        <div className='actions'>
          {status === 'نشطة' && (
            <DonateButton
              options={[
                {
                  label: 'تبرع مباشر',
                  onClick: () => navigate(`/donate?id=${id}`),
                },
                {
                  label: 'تعهد',
                  onClick: () => navigate(`/pledge?id=${id}`),
                },
              ]}
              sx={{
                fontSize: '16px',
                flex: '1',
              }}
            />
          )}
          <Button
            variant='outlined'
            sx={{
              borderRadius: '8px',
              border: '1px solid #E0E0E0',
              px: 4,
              display: { xs: 'none', md: 'flex' },
              bgcolor: '#fff',
              color: 'var(--main-color)',
              width: status === 'نشطة' ? '120px' : '100%',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
            onClick={() => navigate(`/campaign/${id}`)}
          >
            المزيد
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CampaignCard;
