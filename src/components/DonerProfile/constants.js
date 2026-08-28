import { Briefcase, Building2, User } from "lucide-react";

const DONOR_TYPES = {
  "فرد": { label: "فرد", icon: User, color: "#00718A" },
  "رجال أعمال": { label: "رجال أعمال", icon: Briefcase, color: "#B8860B" },
  "منظمة": { label: "منظمة ", icon: Building2, color: "#5B4B8A" },
};

const PAYMENT_STATUS = {
  "مدفوع": { label: "مدفوع", tone: "success" },
  "غير مدفوع": { label: "غير مدفوع", tone: "danger" },
};

const DONATION_COMPLIANCE = {
  "متوافق": { label: "مقبول", tone: "success" },
  "غير متوافق": { label: "غير مقبول", tone: "danger" },
};

const DONATION_TYPE = {
  "تعهد": { label: "تعهد", tone: "warning" },
  "تبرع": { label: "تبرع مباشر", tone: "info" },
};

const ITEM_CONDITION = {
  "جديدة": { label: "جديدة", tone: "success" },
  "مستعملة": { label: "مستعملة", tone: "warning" },
};

const DELIVERY_STATUS = {
  "تم استلامه": { label: "تم التسليم", tone: "success" },
  "لم يتم استلامه بعد": { label: "لم يتم التسليم", tone: "danger" },
};
const CURRENCY_TYPE = {
 "USD": { label: "دولار" },
  euro: { label: "يورو" },
  syrian_pound: { label: "ليرة سورية" },
}
export {
  DONOR_TYPES,
  PAYMENT_STATUS,
  DONATION_COMPLIANCE,
  DONATION_TYPE,
  ITEM_CONDITION,
  DELIVERY_STATUS,
  CURRENCY_TYPE,
}