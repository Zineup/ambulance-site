"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedNumber({ value, prefix = "", suffix = "", duration = 2000 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    let hasRun = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          hasRun = true;
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out expo
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOutExpo * value));

            if (progress < 1) {
              animationFrame = window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  // Format with space as thousand separator e.g 10000 -> 10 000
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
