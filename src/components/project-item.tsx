"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItemProps {
  index: string;
  title: string;
  description: string;
  approach: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectItem({
  index,
  title,
  description,
  approach,
  tags,
  githubUrl,
  liveUrl,
}: ProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="flex flex-col space-y-4 py-8 px-6 border border-border-custom hover:border-accent/40 bg-zinc-950/20 hover:bg-zinc-950/60 transition-all duration-300 rounded-lg group hover:-translate-y-0.5 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.12)]">
      <div className="flex items-center justify-between">
        <span className="text-accent font-mono text-xs tracking-wider">{index}</span>
        <div className="flex items-center space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-xs font-mono transition-colors duration-200 focus-visible:outline-accent"
              aria-label={`View ${title} code on GitHub`}
            >
              GitHub ↗
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover text-xs font-mono transition-colors duration-200 focus-visible:outline-accent"
              aria-label={`View ${title} live demo`}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary text-base leading-relaxed mt-2">
          {description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-xs font-mono bg-zinc-900 text-secondary border border-border-custom/80 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group/btn inline-flex items-center text-white hover:text-accent text-sm font-medium focus-visible:outline-accent py-1"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show Less" : "Case Study"}
          <span
            className={`inline-block transition-transform duration-200 ease-out ml-1 ${
              isExpanded ? "rotate-90 text-accent" : "group-hover/btn:translate-x-1"
            }`}
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border-custom/60 mt-2 text-secondary text-sm leading-relaxed space-y-2">
              <p className="font-mono text-accent text-xs uppercase tracking-wider">Approach & Implementation</p>
              <p>{approach}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
