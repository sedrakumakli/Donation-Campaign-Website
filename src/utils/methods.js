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
