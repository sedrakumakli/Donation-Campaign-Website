const  StatusPill = ({ tone, label }) => {
  return (
    <>
    <span className={`hf-pill hf-pill--${tone}`}>
      {/* <span className="hf-pill__dot" /> */}
      {label}
    </span>
    </>
  );
}
export default StatusPill;