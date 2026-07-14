"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export function Magnetic({ children, range = 50, strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    // Enable magnetic hover on fine pointer (mouse) devices only
    const mediaQuery = window.matchMedia("(pointer: fine)");
    requestAnimationFrame(() => {
      setHasFinePointer(mediaQuery.matches);
    });

    const listener = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || !hasFinePointer) return;

    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    
    // Find absolute center coordinates of element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      // Gentle translation towards cursor inside proximity range
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    } else {
      // Spring back
      setPosition({ x: 0, y: 0 });
    }
  }, [hasFinePointer, range, strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (el && hasFinePointer) {
      window.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        window.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [hasFinePointer, handleMouseMove, handleMouseLeave]);

  // Clone element, append ref and translate styles safely
  const child = React.Children.only(children) as React.ReactElement<{
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLElement>;
  }>;
  
  // Combine custom styles
  const combinedStyle = {
    ...child.props.style,
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    // Snap/lerp spring physics on release vs tracking
    transition: position.x === 0 && position.y === 0
      ? "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)"
      : "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
    willChange: "transform",
  };

  return React.cloneElement(child, {
    ref,
    style: combinedStyle,
  });
}
