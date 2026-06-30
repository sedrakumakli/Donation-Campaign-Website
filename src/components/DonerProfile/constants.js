import { Briefcase, Building2, User } from "lucide-react";

const DONOR_TYPES = {
  individual: { label: "فرد", icon: User, color: "#00718A" },
  business: { label: "رجال أعمال", icon: Briefcase, color: "#B8860B" },
  organization: { label: "منظمة داعمة", icon: Building2, color: "#5B4B8A" },
};

const PAYMENT_STATUS = {
  paid: { label: "مدفوع", tone: "success" },
  unpaid: { label: "غير مدفوع", tone: "danger" },
};

const DONATION_COMPLIANCE = {
  compliant: { label: "متوافق", tone: "success" },
  non_compliant: { label: "غير متوافق", tone: "danger" },
};

const DONATION_TYPE = {
  pledge: { label: "تعهد", tone: "warning" },
  direct: { label: "تبرع مباشر", tone: "info" },
};

const ITEM_CONDITION = {
  new: { label: "جديدة", tone: "success" },
  used: { label: "مستعملة", tone: "warning" },
};

const DELIVERY_STATUS = {
  delivered: { label: "تم التسليم", tone: "success" },
  pending: { label: "لم يتم التسليم", tone: "danger" },
};

export {
DONOR_TYPES,
PAYMENT_STATUS,
DONATION_COMPLIANCE,
DONATION_TYPE,
ITEM_CONDITION,
DELIVERY_STATUS
}