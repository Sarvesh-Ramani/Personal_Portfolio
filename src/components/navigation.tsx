"use client";

import React, { useState, useEffect } from "react";
import { Container } from "./container";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      
      // Check which section is in view
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
      
      // Fallback for hero section near the top
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border-custom transition-all duration-300">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-white font-mono font-semibold text-xs tracking-widest hover:text-accent transition-colors focus-visible:outline-accent"
            aria-label="Sarvesh Ramani — Go to Hero"
          >
            SARVESH RAMANI
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const itemId = item.href.substring(1);
              const isActive = activeSection === itemId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, itemId)}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-accent relative py-2 ${
                    isActive ? "text-accent" : "text-secondary hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary hover:text-white focus-visible:outline-accent p-2 rounded-md"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border-custom bg-black/95 backdrop-blur-lg px-6 py-6 absolute top-16 left-0 right-0 w-full flex flex-col space-y-4 shadow-xl z-40">
          {NAV_ITEMS.map((item) => {
            const itemId = item.href.substring(1);
            const isActive = activeSection === itemId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, itemId)}
                className={`text-base font-medium py-2 border-b border-border-custom/50 transition-colors focus-visible:outline-accent ${
                  isActive ? "text-accent font-semibold" : "text-secondary hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
