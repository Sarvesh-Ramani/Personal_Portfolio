"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Magnetic } from "./magnetic";

interface HeroProps {
  photoExists?: boolean;
}

export function Hero({ photoExists = false }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isReduced = useReducedMotion();

  // Mouse tilt tracking values (0 to 1 range, default center 0.5)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Transform normalized mouse positions into gentle rotate degrees (-6deg to 6deg)
  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);

  // Spring animation definitions for lag/smooth physics
  const springX = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 80, damping: 20 });

  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    // Detect device cursor fine pointing (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    requestAnimationFrame(() => {
      setHasFinePointer(mediaQuery.matches);
    });

    const listener = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current || !hasFinePointer || isReduced) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Smooth snap back to central perspective
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const shouldTilt = hasFinePointer && !isReduced;

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col justify-center pt-24 pb-12 outline-none"
    >
      <div className={`w-full flex flex-col-reverse ${photoExists ? "md:flex-row md:items-center md:justify-between gap-12" : "gap-8"}`}>
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col space-y-8 ${photoExists ? "w-full md:w-[58%] text-left" : "w-full max-w-[850px]"}`}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <span className="inline-flex items-center text-xs font-mono text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
                3+ years building production PKI & enterprise systems
              </span>
            </div>
            <h1 className="text-white text-5xl sm:text-7xl md:text-[76px] lg:text-[90px] font-semibold tracking-tight leading-[1.05]">
              Software Engineer.
              <span className="block text-secondary">
                Building enterprise systems and AI-powered products.
              </span>
            </h1>
          </div>

          <p className="text-secondary font-normal text-lg sm:text-xl md:text-2xl leading-relaxed">
            Currently a <span className="text-white font-medium">Software Development Engineer II at AppViewX</span>, based in Chennai, India, focusing on security and scalability.
          </p>

          <div className="pt-4">
            <Magnetic range={50} strength={0.3}>
              <a
                href="#work"
                className="group inline-flex items-center text-accent hover:text-accent-hover text-base sm:text-lg font-semibold focus-visible:outline-accent py-2 px-4 border border-accent/20 rounded-md bg-accent/5 hover:bg-accent/10 transition-all duration-300"
              >
                View Work
                <span
                  className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-1.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Column: Parallax Photo Cutout & Drift Glow */}
        {photoExists && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[38%] flex justify-center items-center relative py-6 md:py-0"
          >
            {/* Drifting gradient backdrop blob */}
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-accent/15 blur-[80px] sm:blur-[100px] pointer-events-none animate-drift z-0" />

            {/* Tiltable Photo Container */}
            <motion.div
              style={{
                rotateX: shouldTilt ? springX : 0,
                rotateY: shouldTilt ? springY : 0,
                transformStyle: "preserve-3d",
              }}
              className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] aspect-[4/5] will-change-transform"
            >
              <picture className="select-none pointer-events-none block w-full h-full">
                <source srcSet="/images/sarvesh-cutout.webp" type="image/webp" />
                <img
                  src="/images/sarvesh-cutout.png"
                  alt="Sarvesh Ramani"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  style={{ transform: "translateZ(30px)" }} // Pop effect in 3D
                />
              </picture>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
