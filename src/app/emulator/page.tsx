import { type Metadata } from "next";
import GamesList from "~/components/GamesList";

// Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Retro Game Emulator - Play Classic Games Online | RetroWeb",
  description:
    "Choose your favorite retro gaming platform and start playing! RetroWeb supports GBA, SNES, NES, and DOS games. Play thousands of classic games directly in your browser.",
  keywords: [
    "retro game emulator",
    "play classic games online",
    "GBA emulator online",
    "SNES emulator online",
    "NES emulator online",
    "DOS games browser",
    "free online gaming",
    "retro gaming platform",
  ],
  alternates: {
    canonical: "/emulator",
  },
  openGraph: {
    title: "Retro Game Emulator - Play Classic Games Online | RetroWeb",
    description:
      "Choose your favorite retro gaming platform and start playing! RetroWeb supports GBA, SNES, NES, and DOS games.",
    type: "website",
    images: [
      {
        url: "/images/controller.svg",
        width: 1200,
        height: 630,
        alt: "RetroWeb - Game Emulator Selection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retro Game Emulator - Play Classic Games Online | RetroWeb",
    description:
      "Choose your favorite retro gaming platform and start playing! RetroWeb supports GBA, SNES, NES, and DOS games.",
    images: ["/images/controller.svg"],
  },
};

const GameScreen = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center text-9xl">
      <div className="bg-background-secondary font-display flex h-[400px] w-full max-w-[1000px] items-center justify-center p-4 font-black sm:h-[600px] md:h-[800px]">
        <div className="text-center text-2xl sm:text-4xl md:text-6xl">
          Select a game from the list to start playing
        </div>
      </div>
    </div>
  );
};
const EmulatorPage = () => {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-start justify-center md:flex-row">
      <div className="flex w-full justify-center md:order-2 md:w-3/4">
        <GameScreen />
      </div>
      <div className="md:order-1">
        <GamesList />
      </div>
    </main>
  );
};

export default EmulatorPage;
