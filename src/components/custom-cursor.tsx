"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Position reference to avoid triggering trailing logic issues
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check initial device and accessibility capabilities
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    requestAnimationFrame(() => {
      setHasFinePointer(pointerQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    });

    const onPointerChange = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    pointerQuery.addEventListener("change", onPointerChange);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      pointerQuery.removeEventListener("change", onPointerChange);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!hasFinePointer || prefersReducedMotion) return;

    // Apply cursor hiding class globally to document body
    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("article"); // Highlight on project cards

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hasFinePointer, prefersReducedMotion, isVisible]);

  // Easing/lerp animation loop for trailing outer circle
  useEffect(() => {
    if (!hasFinePointer || prefersReducedMotion) return;

    let animFrameId: number;

    const updateTrail = () => {
      setTrail((prev) => {
        const dx = positionRef.current.x - prev.x;
        const dy = positionRef.current.y - prev.y;
        // Ease constant: smaller value = slower trailing
        const ease = 0.15;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animFrameId = requestAnimationFrame(updateTrail);
    };

    animFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrameId);
  }, [hasFinePointer, prefersReducedMotion]);

  if (!hasFinePointer || prefersReducedMotion || !isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${isHovered ? 0.8 : 1})`,
        }}
      />
      {/* Outer trailing dynamic ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.04)" : "transparent",
          borderColor: isHovered ? "rgba(6, 182, 212, 0.8)" : "rgba(6, 182, 212, 0.4)",
        }}
      />
    </>
  );
}
