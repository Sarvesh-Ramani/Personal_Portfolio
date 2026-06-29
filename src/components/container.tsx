import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component
      className={twMerge(
        "mx-auto w-full max-w-[800px] px-6 sm:px-8 md:px-0",
        className
      )}
    >
      {children}
    </Component>
  );
}
