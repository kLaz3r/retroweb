import { eq } from "drizzle-orm";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Dosplayer from "~/components/DosPlayer";

import GamesList from "~/components/GamesList";
import { db } from "~/server/db";
import { games } from "~/server/db/schema";

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  try {
    const { game: gameSlug } = await params;
    const gameId = parseInt(gameSlug, 10);

    if (isNaN(gameId)) {
      return {
        title: "Game Not Found | Retroweb",
      };
    }

    const gameData = await db
      .select()
      .from(games)
      .where(eq(games.id, gameId))
      .limit(1);

    if (!gameData || gameData.length === 0) {
      return {
        title: "Game Not Found | Retroweb",
      };
    }

    const gameRecord = gameData[0];

    if (!gameRecord?.name || gameRecord.platform?.toLowerCase() !== "dos") {
      return {
        title: "Game Not Found | Retroweb",
      };
    }

    return {
      title: `${gameRecord.name} | Retroweb`,
    };
  } catch (error) {
    console.error(
      "Error generating metadata:",
      error instanceof Error ? error.message : String(error),
    );
    return {
      title: "Retroweb",
    };
  }
}

const getEmulatorCore = (platform: string): string => {
  const coreMap: Record<string, string> = {
    gba: "gba",
    nes: "nes",
    snes: "snes",
    dos: "dos",
  };
  return coreMap[platform.toLowerCase()] ?? platform.toLowerCase();
};

interface GamePageProps {
  params: Promise<{
    game: string;
  }>;
}

const GameScreen = ({ game }: { game: typeof games.$inferSelect }) => {
  if (!game.platform || !game.link || !game.name) {
    throw new Error("Game data is incomplete");
  }

  const core = getEmulatorCore(game.platform);
  console.log(core);

  return (
    <>
      {/* Mobile message */}
      <div className="flex w-full items-center justify-center md:hidden">
        <div className="bg-background-secondary font-display flex h-[400px] w-full max-w-[1000px] items-center justify-center p-4 sm:h-[600px]">
          <div className="max-w-md text-center">
            <h2 className="mb-4 text-2xl font-bold">
              DOS Games Not Supported on Mobile
            </h2>
            <p className="mb-6">
              DOS games require a keyboard and are not optimized for mobile
              devices.
            </p>
            <p className="mb-4">
              Please visit this page on a desktop computer to play DOS games, or
              try our other platforms:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/emulator/gba"
                className="bg-brand-secondary rounded px-4 py-2 text-white transition hover:opacity-80"
              >
                GBA
              </Link>
              <Link
                href="/emulator/nes"
                className="bg-brand-secondary rounded px-4 py-2 text-white transition hover:opacity-80"
              >
                NES
              </Link>
              <Link
                href="/emulator/snes"
                className="bg-brand-secondary rounded px-4 py-2 text-white transition hover:opacity-80"
              >
                SNES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop emulator */}
      <div className="hidden w-full items-center justify-center md:block">
        <div className="bg-background-secondary font-display flex h-[400px] w-full max-w-[1000px] items-center justify-center p-4 sm:h-[600px] md:h-[800px]">
          <div className="gameContainer aspect-4/3 h-full w-full max-w-[640px] overflow-hidden">
            <Dosplayer bundleUrl={game.link} />
          </div>
        </div>
      </div>
    </>
  );
};

const EmulatorPage = async ({ params }: GamePageProps) => {
  try {
    const { game: gameSlug } = await params;

    const gameId = parseInt(gameSlug, 10);

    if (isNaN(gameId)) {
      notFound();
    }

    const gameData = await db
      .select()
      .from(games)
      .where(eq(games.id, gameId))
      .limit(1);

    if (!gameData || gameData.length === 0) {
      notFound();
    }

    const gameRecord = gameData[0];

    if (!gameRecord?.platform || !gameRecord.link || !gameRecord.name) {
      notFound();
    }

    if (gameRecord.platform.toLowerCase() !== "dos") {
      notFound();
    }

    return (
      <main className="bg-background text-foreground flex min-h-screen flex-col items-start justify-center md:flex-row">
        <div className="flex w-full justify-center md:order-2 md:w-3/4">
          <GameScreen game={gameRecord} />
        </div>
        <div className="md:order-1">
          <GamesList />
        </div>
      </main>
    );
  } catch (error) {
    console.error(
      "Error fetching game data:",
      error instanceof Error ? error.message : String(error),
    );
    notFound();
  }
};

export default EmulatorPage;
