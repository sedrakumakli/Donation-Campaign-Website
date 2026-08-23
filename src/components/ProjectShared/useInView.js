import { useEffect, useRef, useState } from "react";

/* =========================
   useInView — يراقب ظهور العنصر بالشاشة لتفعيل الأنيميشن مرّة واحدة
========================= */

export default function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(node);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}
