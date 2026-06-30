import React from "react";

interface ExperienceItemProps {
  period: string;
  role: string;
  company: string;
  location?: string;
  points: string[];
}

export function ExperienceItem({
  period,
  role,
  company,
  location,
  points,
}: ExperienceItemProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 first:pt-0 last:pb-0">
      <div className="text-secondary text-xs sm:text-sm font-mono tracking-wider pt-1.5 flex flex-col">
        <span>{period}</span>
        {location && <span className="text-[10px] sm:text-xs text-zinc-500 mt-1">{location}</span>}
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          <h3 className="text-white text-xl font-medium tracking-tight">
            {role}
          </h3>
          <p className="text-accent text-sm font-mono mt-1">
            {company}
          </p>
        </div>
        <ul className="list-none space-y-2 text-secondary text-sm sm:text-base leading-relaxed max-w-[620px]">
          {points.map((point, index) => (
            <li key={index} className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-accent">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
