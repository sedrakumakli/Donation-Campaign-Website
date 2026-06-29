import { Button, Menu, MenuItem } from "@mui/material";
import "./CampaignCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonateButton from "../DonateButton/DonateButton";

const CampaignCard = ({
  id,
  image,
  title,
  target,
  collected,
  progress,
  completedProjects,
  relatedProjects,
  status
}) => {
  const navigate = useNavigate();
  // const [anchorElDonate, setAnchorElDonate] = useState(null);

  // const handleOpenDonateMenu = (event) => {
  //   setAnchorElDonate(event.currentTarget);
  // };

  // const handleCloseDonateMenu = () => {
  //   setAnchorElDonate(null);
  // };
  // const [openDirectModal, setOpenDirectModal] = useState(false);
  // const [openPledgeModal, setOpenPledgeModal] = useState(false);

  const statusStyles = {
    "نشطة": "active",
    "مكتملة": "completed",
    "منتهية": "ended",
    "جديدة": "new",
  };

  console.log(status);
  console.log(statusStyles[status]);
  return (
    <div className="campaignCard">
      {/* Header  */}
      <div className="card-header">
        <div className={`status-badge ${statusStyles[status]}`}>
          {status}
        </div>
        <img
          src={image}
          alt="حملة المياه"
          className="cover-image"
        />
      </div>

      {/* Content  */}
      <div className="card-body">

        <h2 className="title">{title}</h2>

        <div className="stats">
          <div className="stat">
            <span className="label">المبلغ المجموع</span>
            <span className="value green">{collected}$</span>
          </div>

          <div className="stat">
            <span className="label">الهدف</span>
            <span className="value">{target}$</span>
          </div>
        </div>

        {/* Progress  */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="percentage">
            <p> نسبة الإنجاز :</p>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Info Cards  */}
        {/* <div class="info-grid">
          <div class="info-box">
            <div class="text">المشاريع المرتبطة</div>
            <div class="number">{completedProjects}</div>
          </div>

          <div class="info-box">
            <div class="text">المشاريع المنجزة</div>
            <div class="number">{relatedProjects}</div>
          </div>
        </div> */}
        <hr />
        {/* Buttons  */}
        <div className="actions">
          <DonateButton
            options={[
              {
                label: "تبرع مباشر",
                onClick: () =>
                  navigate(`/donate/:id`),
              },
              {
                label: "تعهد",
                onClick: () =>
                  navigate(`/campaign/${id}/pledge`),
              },
            ]}
            sx={{
              fontSize:'16px',
              flex:'1',
            }}
          />
          <Button
            variant='outlined'
            sx={{
              borderRadius: '8px',
              border: '1px solid #E0E0E0',
              px: 4,
              display: { xs: 'none', md: 'flex' },
              bgcolor: '#fff',
              color: 'var(--main-color)',
              width: '120px',
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

  )
}
export default CampaignCard;