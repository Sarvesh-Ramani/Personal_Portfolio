"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasRevealItems, setHasRevealItems] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if there are reveal-item classes in children
    if (ref.current && ref.current.querySelectorAll(".reveal-item").length > 0) {
      setHasRevealItems(true);
    }

    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      requestAnimationFrame(() => {
        setIsIntersecting(true);
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px", // Trigger slightly before element enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      const items = ref.current.querySelectorAll(".reveal-item");
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const isReduced = mediaQuery.matches;

      if (items.length > 0) {
        items.forEach((item, index) => {
          const htmlItem = item as HTMLElement;
          if (isReduced) {
            htmlItem.style.opacity = "1";
            htmlItem.style.transform = "none";
            htmlItem.style.transition = "none";
          } else {
            htmlItem.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
            htmlItem.style.transitionDelay = `${index * 60}ms`;
            htmlItem.style.opacity = "1";
            htmlItem.style.transform = "translateY(0)";
          }
        });
      }
    }
  }, [isIntersecting]);

  const parentAnimationClass = hasRevealItems
    ? "" // Let children stagger in instead of moving the parent
    : `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`;

  return (
    <div
      ref={ref}
      className={`${className || ""} ${parentAnimationClass}`}
    >
      {children}
    </div>
  );
}
