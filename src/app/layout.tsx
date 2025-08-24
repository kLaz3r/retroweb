import Footer from "~/components/Footer";
import Header from "~/components/Header";
import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Montserrat, Orbitron } from "next/font/google";
import Script from "next/script";

// Structured Data for the website
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RetroWeb",
  description:
    "Play classic retro games online in your browser. Emulate GBA, SNES, NES, and DOS games instantly.",
  url: "https://retroweb.dev",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://retroweb.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  sameAs: ["https://github.com/kLaz3r/retroweb"],
};

export const metadata: Metadata = {
  title: "RetroWeb - Play Classic Games Online in Your Browser",
  description:
    "Relive the nostalgia with RetroWeb! Play thousands of classic retro games online directly in your browser. Emulate GBA, SNES, NES, and DOS games instantly without downloads.",
  keywords: [
    "retro games online",
    "play old games",
    "browser emulator",
    "classic games",
    "GBA games",
    "SNES games",
    "NES games",
    "DOS games",
    "free online games",
    "retro gaming",
  ],
  authors: [{ name: "RetroWeb Team" }],
  creator: "RetroWeb",
  publisher: "RetroWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://retroweb.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RetroWeb - Play Classic Games Online in Your Browser",
    description:
      "Relive the nostalgia with RetroWeb! Play thousands of classic retro games online directly in your browser. Emulate GBA, SNES, NES, and DOS games instantly without downloads.",
    url: "https://retroweb.dev",
    siteName: "RetroWeb",
    images: [
      {
        url: "/images/retro-sun-with-eyes.svg",
        width: 1200,
        height: 630,
        alt: "RetroWeb - Classic Gaming Online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RetroWeb - Play Classic Games Online in Your Browser",
    description:
      "Relive the nostalgia with RetroWeb! Play thousands of classic retro games online directly in your browser.",
    images: ["/images/retro-sun-with-eyes.svg"],
    creator: "@retroweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" },
  ],
  manifest: "/manifest.json",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${montserrat.variable} ${orbitron.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script src="/js-dos/js-dos.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
