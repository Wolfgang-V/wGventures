import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://w-gventures.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Adedotun Ibrahim Adekunle — Full-Stack Web & Mobile Developer, Lagos",
    template: "%s — Adedotun Ibrahim Adekunle",
  },
  description:
    "Full-stack web and mobile developer in Lagos. Marketplaces, e-commerce, banking, real-time apps and 3D diagnostics — built end to end.",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23DCE0D8'/%3E%3Crect x='2.5' y='2.5' width='59' height='59' fill='none' stroke='%2312160F' stroke-width='3'/%3E%3Cpolygon points='15,11 53,11 47,21 9,21' fill='%23A0491F'/%3E%3Cpolygon points='15,27 53,27 47,37 9,37' fill='%231B3CB0'/%3E%3Cpolygon points='15,43 53,43 47,53 9,53' fill='%238A5A00'/%3E%3C/svg%3E",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "wG Ventures",
    url: SITE,
    title: "Adedotun Ibrahim Adekunle — Full-stack web & mobile developer",
    description:
      "Marketplaces and payments, real-time apps, 3D diagnostics. Built end to end. Lagos, Nigeria.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adedotun Ibrahim Adekunle — Full-stack web & mobile developer",
    description:
      "Marketplaces and payments, real-time apps, 3D diagnostics. Built end to end. Lagos, Nigeria.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400;12..96,75..100,700;12..96,75..100,800&family=JetBrains+Mono:wght@400;500;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
