import { useEffect, useState } from 'react';

const useCountdown = (startDate) => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const target = new Date(startDate);

    const update = () => {
      const now = new Date();
      const diff = target - now;
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    };

    update();
    const interval = setInterval(update, 86400000);

    return () => clearInterval(interval);
  }, [startDate]);

  return daysLeft;
};

export default useCountdown;
