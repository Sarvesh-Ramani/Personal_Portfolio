import React from "react";

interface ProjectItemProps {
  index: string;
  title: string;
  description: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export function ProjectItem({
  index,
  title,
  description,
  githubUrl,
  caseStudyUrl,
}: ProjectItemProps) {
  return (
    <article className="flex flex-col space-y-5 py-12 first:pt-0 last:pb-0">
      <div className="text-secondary text-sm font-mono tracking-widest">{index}</div>
      <h3 className="text-white text-3xl font-medium tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-[640px]">
        {description}
      </p>
      <div className="flex items-center space-x-6 pt-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-white text-sm font-medium focus-visible:outline-white"
          >
            GitHub
            <span
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 ml-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        )}
        {caseStudyUrl && (
          <a
            href={caseStudyUrl}
            className="group inline-flex items-center text-white text-sm font-medium focus-visible:outline-white"
          >
            Case Study
            <span
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 ml-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
