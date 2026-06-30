const  StatCounter = ({ icon: Icon, value, label }) => {
  return (
    <div className="hf-stat">
      <div className="hf-stat__icon">
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className="hf-stat__text">
        <span className="hf-stat__value">{value}</span>
        <span className="hf-stat__label">{label}</span>
      </div>
    </div>
  );
}
export default StatCounter;