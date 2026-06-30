"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 outline-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col space-y-8"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex">
            <span className="inline-flex items-center text-xs font-mono text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
              3+ years building production PKI & enterprise systems
            </span>
          </div>
          <h1 className="text-white text-5xl sm:text-7xl md:text-[80px] lg:text-[96px] font-semibold tracking-tight leading-[1.05] max-w-[850px]">
            Software Engineer.
            <span className="block text-secondary">
              Building enterprise systems and AI-powered products.
            </span>
          </h1>
        </div>

        <p className="text-secondary font-normal text-lg sm:text-2xl md:text-3xl max-w-[750px] leading-relaxed">
          Currently a <span className="text-white font-medium">Software Development Engineer II at AppViewX</span>, based in Chennai, India, focusing on security and scalability.
        </p>

        <div className="pt-4">
          <a
            href="#work"
            className="group inline-flex items-center text-accent hover:text-accent-hover text-base sm:text-lg font-semibold focus-visible:outline-accent"
          >
            View Work
            <span
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-1.5"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
