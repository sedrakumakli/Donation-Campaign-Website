const ProfileTabs = ({ activeTab,
  setActiveTab,
  financialCount,
  inKindCount, }) => {
  return (
    <div className="hf-tabs">
      <button
        className={`hf-tab ${activeTab === "financial" ? "hf-tab--active" : ""}`}
        onClick={() => setActiveTab("financial")}
      >
        التبرعات المادية
        <span className="hf-tab__count">{financialCount.length}</span>
      </button>
      <button
        className={`hf-tab ${activeTab === "inkind" ? "hf-tab--active" : ""}`}
        onClick={() => setActiveTab("inkind")}
      >
        التبرعات العينية
        <span className="hf-tab__count">{inKindCount.length}</span>
      </button>
    </div>
      // <div className="hf-tabs-divider" />

  )

}
export default ProfileTabs;