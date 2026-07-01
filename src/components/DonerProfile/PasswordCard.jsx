import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
const  PasswordCard = () => {
  const [editing, setEditing] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

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
          <label className="hf-field">
            <span className="hf-field__label">كلمة السر الحالية</span>
            <div className="hf-field__input-wrap">
              <input
                type={showCurrent ? "text" : "password"}
                className="hf-field__input"
                placeholder="ادخل كلمة السر الحالية"
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

          <label className="hf-field">
            <span className="hf-field__label">كلمة السر الجديدة</span>
            <div className="hf-field__input-wrap">
              <input
                type={showNew ? "text" : "password"}
                className="hf-field__input"
                placeholder="ادخل كلمة السر الجديدة"
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
          <label className="hf-field">
            <span className="hf-field__label"> تأكيد كلمة السر </span>
            <div className="hf-field__input-wrap">
              <input
                type={showNew ? "text" : "password"}
                className="hf-field__input"
                placeholder="تأكيد كلمة السر"
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

          <div className="hf-password__actions">
            <button
              className="hf-btn hf-btn--ghost"
              onClick={() => setEditing(false)}
            >
              إلغاء
            </button>
            <button
              className="hf-btn hf-btn--primary"
              onClick={() => setEditing(false)}
            >
              حفظ كلمة السر
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default PasswordCard;