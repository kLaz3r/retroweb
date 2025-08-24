import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Classic Retro Games Online | RetroWeb",
  description:
    "Relive gaming nostalgia with RetroWeb! Play thousands of classic retro games directly in your browser. Emulate GBA, SNES, NES, and DOS games instantly - no downloads required.",
  keywords: [
    "retro games online",
    "play old games browser",
    "free online games",
    "classic video games",
    "GBA emulator online",
    "SNES games online",
    "NES games online",
    "DOS games browser",
    "retro gaming website",
    "nostalgic games",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Play Classic Retro Games Online | RetroWeb",
    description:
      "Relive gaming nostalgia with RetroWeb! Play thousands of classic retro games directly in your browser.",
    type: "website",
    images: [
      {
        url: "/images/retro-sun-with-eyes.svg",
        width: 1200,
        height: 630,
        alt: "RetroWeb - Play Classic Games Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Classic Retro Games Online | RetroWeb",
    description:
      "Relive gaming nostalgia with RetroWeb! Play thousands of classic retro games directly in your browser.",
    images: ["/images/retro-sun-with-eyes.svg"],
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
