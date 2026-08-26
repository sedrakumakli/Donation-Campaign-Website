import "./CompletePaymentModal.css";
const CompletePaymentModal = ({
  donation,
  onClose,
  onContinue,
}) => {
  if (!donation) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <h3>تعذر إتمام التبرع</h3>

        <p>
          {donation.reason || "التبرع غير متوافق"}
        </p>

        <div className="payment-modal-actions">
          <button onClick={onClose}>
            إلغاء
          </button>

          <button onClick={onContinue}>
            متابعة
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletePaymentModal;