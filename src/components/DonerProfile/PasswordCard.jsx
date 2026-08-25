import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { postUpdatepass } from "../../services/profile";
const PasswordCard = () => {
  const [editing, setEditing] = useState(false);

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("يرجى تعبئة جميع الحقول");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("كلمة السر الجديدة غير متطابقة مع التأكيد");
      return;
    }
    try {
      setIsLoading(true);

      const formData = new FormData();

      formData.append("oldpassword", oldPassword);
      formData.append("newpassword", newPassword);
      formData.append(
        "newpassword_confirmation",
        confirmPassword
      );
      const response = await postUpdatepass(formData);

      console.log("CHANGE PASSWORD:", response);

      toast.success("تم تغيير كلمة السر بنجاح");

      // تنظيف الحقول
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

      // إغلاق وضع التعديل
      setEditing(false);
    }
    catch (error) {
      console.error("CHANGE PASSWORD ERROR:", error);

      toast.error(
        error?.message || "حدث خطأ أثناء تغيير كلمة السر"
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleCancel = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setEditing(false);
  };
  return (
    <div className="hf-password">
      <div className="hf-password__header">
        <div className="hf-password__title">
          <Lock size={18} strokeWidth={2} />
          <span>كلمة السر</span>
        </div>
        {!editing && (
          <button className="hf-link-btn" onClick={() => setEditing(true)}>
            تعديل كلمة السر
          </button>
        )}
      </div>

      {!editing ? (
        <div className="hf-password__dots" aria-hidden="true">
          ••••••••••
        </div>
      ) : (
        <div className="hf-password__form">
          <div style={{"display":"grid" , "gridTemplateColumns" :"repeat(3,1fr)" , "gap":"16px" , "alignItems" :"start"}}>
          <label className="hf-field">
            <span className="hf-field__label">كلمة السر الحالية</span>
            <div className="hf-field__input-wrap">
              <input
                type={showCurrent ? "text" : "password"}
                className="hf-field__input"
                placeholder="ادخل كلمة السر الحالية"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                className="hf-field__toggle"
                onClick={() => setShowCurrent((s) => !s)}
                aria-label="إظهار كلمة السر"
              >
                {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </label>
          <div style={{"minWidth": "0"}}>
          <label className="hf-field">
            <span className="hf-field__label">كلمة السر الجديدة</span>
            <div className="hf-field__input-wrap">
              <input
                type={showNew ? "text" : "password"}
                className="hf-field__input"
                placeholder="ادخل كلمة السر الجديدة"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="hf-field__toggle"
                onClick={() => setShowNew((s) => !s)}
                aria-label="إظهار كلمة السر"
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </label>
           <small className="password-note" style={{
              "display": "block",
              " marginTop": "8px",
              "fontSize": "12px",
              "color": " #6b7280",
              "textAlign": "right",
            }}>
             يجب أن تكون 8 أحرف على الأقل وتحتوي على حرف على الأقل
            </small>
            </div>
          <label className="hf-field">
            <span className="hf-field__label"> تأكيد كلمة السر </span>
            <div className="hf-field__input-wrap">
              <input
                type={showNew ? "text" : "password"}
                className="hf-field__input"
                placeholder="تأكيد كلمة السر"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="hf-field__toggle"
                onClick={() => setShowNew((s) => !s)}
                aria-label="إظهار كلمة السر"
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </label>
</div>
          <div className="hf-password__actions">
            <button
              className="hf-btn hf-btn--ghost"
              onClick={handleCancel}
              disabled={isLoading}
            >
              إلغاء
            </button>
            <button
              className="hf-btn hf-btn--primary"
              onClick={handleChangePassword}
              disabled={isLoading}
            >
              {isLoading ? "جاري حفظ كلمة السر..." : "حفظ كلمة السر"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default PasswordCard;