"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface StatCounterProps {
  targetValue: number;
  duration?: number; // Duration of animation in ms
  prefix?: string;
  suffix?: string;
  label: string;
}

export function StatCounter({
  targetValue,
  duration = 1200,
  prefix = "",
  suffix = "",
  label,
}: StatCounterProps) {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const startCounting = useCallback(() => {
    // Instantly set value if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setValue(targetValue);
      return;
    }

    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quadratic progression curve
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetValue);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setValue(targetValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [targetValue, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startCounting();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startCounting]);

  return (
    <div
      ref={containerRef}
      className="reveal-item flex flex-col items-center md:items-start space-y-1.5 p-5 rounded-lg bg-zinc-950/20 border border-border-custom/50 hover:border-accent/30 transition-all duration-300"
    >
      <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white font-mono flex items-baseline">
        {prefix && <span className="text-2xl sm:text-3xl text-accent mr-0.5">{prefix}</span>}
        <span>{value}</span>
        {suffix && <span className="text-2xl sm:text-3xl text-accent ml-0.5">{suffix}</span>}
      </span>
      <span className="text-secondary text-xs sm:text-sm font-normal max-w-[140px] text-center md:text-left leading-snug">
        {label}
      </span>
    </div>
  );
}
