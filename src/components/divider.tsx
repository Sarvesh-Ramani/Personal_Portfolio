import React from "react";
import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={twMerge("border-t border-border-custom w-full my-12 sm:my-16", className)}
      aria-hidden="true"
    />
  );
}
