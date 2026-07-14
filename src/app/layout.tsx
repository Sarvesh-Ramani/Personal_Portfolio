import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sarvesh Ramani — Software Development Engineer II",
  description:
    "Software Development Engineer II at AppViewX building secure enterprise PKI systems, scalable backends, and AI integrations. M.Tech AI/ML candidate at BITS Pilani.",
  authors: [{ name: "Sarvesh Ramani" }],
  keywords: [
    "Sarvesh Ramani",
    "Software Development Engineer II",
    "AppViewX",
    "BITS Pilani M.Tech",
    "Backend Engineer",
    "PKI Developer",
    "Digital Certificates Security",
    "LIGO Gravitational Wave Glitch",
    "Enterprise Systems",
    "AI Products Developer",
  ],
  openGraph: {
    title: "Sarvesh Ramani — Software Development Engineer II",
    description:
      "Software Development Engineer II at AppViewX building secure enterprise PKI systems, scalable backends, and AI integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvesh Ramani — Software Development Engineer II",
    description:
      "Software Development Engineer II at AppViewX building secure enterprise PKI systems, scalable backends, and AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white font-sans selection:bg-white selection:text-black">
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
