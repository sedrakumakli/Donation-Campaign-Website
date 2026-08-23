/* =========================
   DATA — كما هي بدون أي تغيير
========================= */

export const requirements = [
  {
    title: "ترميم الفصول الدراسية",
    desc: "إصلاح الجدران والأرضيات وطلاء الصفوف لبيئة تعليمية آمنة",
  },
  {
    title: "تأهيل دورات المياه",
    desc: "إعادة تجهيز المرافق الصحية بالكامل لتلبية احتياجات الطلاب",
  },
  {
    title: "تجهيز مختبر الحاسوب",
    desc: "توفير أجهزة حاسوب حديثة لتعليم المهارات الرقمية",
  },
  {
    title: "إصلاح الأسقف",
    desc: "معالجة التسريبات وتقوية البنية العلوية لضمان السلامة",
  },
];

export const costItems = [
  { label: "ترميم الفصول الدراسية", amount: 3000 },
  { label: "إصلاح الأسقف", amount: 2000 },
  { label: "تأهيل دورات المياه", amount: 1000 },
  { label: "تجهيز مختبر الحاسوب", amount: 1700 },
  { label: "أعمال الطلاء", amount: 3000 },
  { label: "شراء المقاعد المدرسية", amount: 1800 },
];

export const heroImages = ["/school.jpeg", "/image 5.png"];

/* =========================
   CALCULATIONS — نفس الحسابات الأصلية، بمكان واحد
========================= */

export const totalCost = costItems.reduce((sum, item) => sum + item.amount, 0);
export const completion = 21;
export const raised = Math.round((totalCost * completion) / 100);
export const supportersCount = 34;
