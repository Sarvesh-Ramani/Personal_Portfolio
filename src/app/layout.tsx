import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Sarvesh Ramani — Software Engineer",
  description:
    "Software Engineer building enterprise systems and AI-powered products. Currently solving complex customer problems at AppViewX.",
  authors: [{ name: "Sarvesh Ramani" }],
  keywords: [
    "Sarvesh Ramani",
    "Software Engineer",
    "AppViewX",
    "Backend Engineer",
    "Enterprise Systems",
    "AI Products",
  ],
  openGraph: {
    title: "Sarvesh Ramani — Software Engineer",
    description:
      "Software Engineer building enterprise systems and AI-powered products. Currently solving complex customer problems at AppViewX.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Sarvesh Ramani — Software Engineer",
    description:
      "Software Engineer building enterprise systems and AI-powered products. Currently solving complex customer problems at AppViewX.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
