export const formatArabicDate = (dateStr) => {
  if (!dateStr) return '-';

  const date = new Date(dateStr);

  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
export const formatArabicTime = (timeStr) => {
  if (!timeStr) return '-';

  const [h, m] = timeStr.split(':');

  const date = new Date();
  date.setHours(h);
  date.setMinutes(m);

  return new Intl.DateTimeFormat('ar-EG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
};
export const getCurrency = (currency) => {
  return currency === 'SYP' ? 'ل.س' : currency === 'USD' ? '$' : '€';
};

/* --------------------------- Campaigns ---------------------------- */

export const formatRemainingTime = (days) => {
  if (days <= 0) return 'اليوم';

  if (days === 1) return 'غداً';
  if (days === 2) return 'بعد غد';

  if (days < 30) {
    return `بعد ${days} أيام`;
  }

  const months = Math.floor(days / 30);

  if (months === 1) return 'بعد شهر';
  if (months === 2) return 'بعد شهرين';

  return `بعد ${months} أشهر`;
};
export const getCampaignStatusText = (campaign) => {
  if (!campaign) return { type: 'empty', text: '' };

  const today = new Date();
  const start = new Date(campaign.start_date);
  const end = new Date(campaign.end_date);

  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const msPerDay = 1000 * 60 * 60 * 24;

  const daysToStart = Math.floor((start - today) / msPerDay);
  const daysToEnd = Math.floor((end - today) / msPerDay);

  // 🔥 الحالة الأساسية
  const status = campaign.status?.trim();

  switch (status) {
    case 'جديدة':
    case 'قادمة':
      return {
        type: 'upcoming',
        text:
          daysToStart > 0
            ? `تبدأ ${formatRemainingTime(daysToStart)}`
            : 'تبدأ قريباً',
      };

    case 'نشطة':
    case 'قيد التنفيذ':
      return {
        type: 'ongoing',
        text:
          daysToEnd > 0
            ? `تنتهي ${formatRemainingTime(daysToEnd)}`
            : 'تنتهي اليوم',
      };

    case 'مخطط له':
      return {
        type: 'planned',
        text:
          daysToStart > 0
            ? `مجدولة ${formatRemainingTime(daysToStart)}`
            : 'قريباً',
      };

    case 'متوقفة':
      return {
        type: 'paused',
        text: 'الحملة متوقفة حالياً',
      };

    case 'مكتملة':
      return {
        type: 'finished',
        text: 'تمت الحملة بنجاح',
      };

    case 'منتهية':
      return {
        type: 'finished',
        text: 'انتهت الحملة',
      };

    default:
      return {
        type: 'default',
        text: '',
      };
  }
};
