import React, { useEffect, useRef, useState } from "react";

import useInView from "./useInView";

/* =========================
   Counter — عداد متحرك للأرقام
========================= */

export default function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 1200,
}) {
  const [ref, inView] = useInView(0.5);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;

    started.current = true;

    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
