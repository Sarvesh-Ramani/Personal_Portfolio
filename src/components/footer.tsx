import React from "react";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border-custom bg-black">
      <Container>
        <p className="text-secondary text-sm font-normal">
          © 2026 Sarvesh Ramani
        </p>
      </Container>
    </footer>
  );
}
