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
        className="flex flex-col space-y-10"
      >
        <h1 className="text-white text-5xl sm:text-7xl md:text-[80px] lg:text-[96px] font-semibold tracking-tight leading-[1.05] max-w-[850px]">
          Software Engineer.
          <span className="block text-secondary">
            Building enterprise systems and AI-powered products.
          </span>
          <span className="block text-secondary font-normal text-3xl sm:text-4xl md:text-5xl mt-6">
            Currently solving complex customer problems at AppViewX.
          </span>
        </h1>
        <div className="pt-4">
          <a
            href="#work"
            className="group inline-flex items-center text-white text-base sm:text-lg font-medium focus-visible:outline-white"
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
