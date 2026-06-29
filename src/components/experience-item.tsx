import React from "react";

interface ExperienceItemProps {
  period: string;
  role: string;
  company: string;
  description: string;
}

export function ExperienceItem({
  period,
  role,
  company,
  description,
}: ExperienceItemProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-10 first:pt-0 last:pb-0">
      <div className="text-secondary text-sm font-mono tracking-widest pt-1">{period}</div>
      <div className="flex flex-col space-y-3">
        <div>
          <h3 className="text-white text-xl font-medium tracking-tight">
            {role}
          </h3>
          <p className="text-secondary text-base font-normal mt-1">
            {company}
          </p>
        </div>
        <p className="text-secondary text-base leading-relaxed max-w-[580px]">
          {description}
        </p>
      </div>
    </article>
  );
}
