import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Section({ id, children, className, as: Component = "section" }: SectionProps) {
  return (
    <Component
      id={id}
      className={twMerge("py-20 sm:py-24 md:py-28 outline-none", className)}
    >
      {children}
    </Component>
  );
}
