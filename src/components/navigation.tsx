"use client";

import React from "react";
import { Container } from "./container";

export function Navigation() {
  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border-custom">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-white font-medium text-sm tracking-widest hover:opacity-80 transition-opacity focus-visible:outline-white"
            aria-label="Sarvesh Ramani — Go to Hero"
          >
            SARVESH RAMANI
          </a>
          <nav className="flex items-center space-x-6 sm:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-secondary text-sm font-medium hover:text-white transition-colors duration-200 focus-visible:outline-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
