import "./CampaignCard.css";

const CampaignCard = ( {
  image,
  title,
  target,
  collected,
  progress,
  completedProjects,
  relatedProjects,
  status
}) => {
  return (
    <div className="campaignCard">
      {/* Header  */}
      <div class="card-header">
        <div class="status-badge">
          <span class="dot"></span>
        {status}
        </div>
        <img
          src={image}
          alt="حملة المياه"
          class="cover-image"
        />
      </div>

      {/* Content  */}
      <div class="card-body">

        <h2 class="title">{title}</h2>

        <div class="stats">
          <div class="stat">
            <span class="label">المبلغ المجموع</span>
            <span class="value green">{collected}$</span>
          </div>

          <div class="stat">
            <span class="label">الهدف</span>
            <span class="value">{target}$</span>
          </div>
        </div>

        {/* Progress  */}
        <div class="progress-wrapper">
            <div class="percentage">{progress}%</div>

            <div class="progress-bar">
                <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
            </div>
        </div>

        {/* Info Cards  */}
        <div class="info-grid">
          <div class="info-box">
            {/* <div class="icon">📁</div> */}
            <div class="text">المشاريع المرتبطة</div>
            <div class="number">{completedProjects}</div>
          </div>

          <div class="info-box">
            {/* <div class="icon">📂</div> */}
            <div class="text">المشاريع المنجزة</div>
            <div class="number">{relatedProjects}</div>
          </div>
        </div>

        {/* Buttons  */}
        <div class="actions">
          <button class="btn primary">تبرع الآن</button>
          <button class="btn secondary">المزيد</button>
        </div>

      </div>
    </div>

  )
}
export default CampaignCard;