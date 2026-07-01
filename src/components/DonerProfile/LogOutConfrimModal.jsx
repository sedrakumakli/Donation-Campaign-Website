import { AlertTriangle } from "lucide-react";

const LogOutConfrimModal = ({ open , onCancel, onConfirm })=>{
    if (!open) return null;
    return(
    <div className="hf-modal-overlay" onClick={onCancel}>
      <div
        className="hf-modal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="hf-logout-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hf-modal__icon">
          <AlertTriangle size={22} strokeWidth={2} />
        </div>
        <h2 className="hf-modal__title" id="hf-logout-title">
          تسجيل الخروج
        </h2>
        <p className="hf-modal__text">
          هل أنت متأكدة من تسجيل الخروج من حسابك؟
        </p>
        <div className="hf-modal__actions">
          <button className="hf-btn hf-btn--ghost" onClick={onCancel}>
            إلغاء
          </button>
          <button className="hf-btn hf-btn--danger" onClick={onConfirm}>
            تسجيل خروج
          </button>
        </div>
      </div>
    </div>
    )
}
export default LogOutConfrimModal;

// function Toast({ message, onClose }) {
//   React.useEffect(() => {
//     const timer = setTimeout(onClose, 2800);
//     return () => clearTimeout(timer);
//   }, [onClose]);
 
//   return (
//     <div className="hf-toast" role="status">
//       <span className="hf-toast__icon">
//         <CheckCircle size={18} strokeWidth={2} />
//       </span>
//       {message}
//     </div>
//   );
// }