import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";
import React from "react";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
});

export const metadata: Metadata = {
  title: "Jay Wayne Fairey – Portfolio Data, IA & Web",
  description: "Développeur Data, Machine Learning & Solutions Web – Projets, pipelines ELT, IA et architectures modernes.",
  metadataBase: new URL("https://riddlerjoke.github.io/react-github-page/"),
  openGraph: {
    title: "Jay Wayne Fairey – Portfolio Data, IA & Web",
    description: "Développeur Data, Machine Learning & Solutions Web – Projets, pipelines ELT, IA et architectures modernes.",
    url: "https://riddlerjoke.github.io/react-github-page/",
    siteName: "Jay Wayne Fairey Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Bannière Jay Wayne Fairey Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Wayne Fairey – Portfolio",
    description: "Designer / Développeur – Sélection de projets, contact, et parcours.",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/logotwitch2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${philosopher.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
