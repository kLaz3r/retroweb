import { eq } from "drizzle-orm";
import { type Metadata } from "next";
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
    <div className="flex h-full min-h-[95vh] items-center justify-start p-2">
      <div className="gameContainer aspect-4/3 h-auto w-full overflow-hidden bg-black">
        <Dosplayer bundleUrl={game.link} />
      </div>
    </div>
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
      <main className="bg-background text-foreground flex min-h-screen flex-row items-start">
        <div className="flex-shrink-0">
          <GamesList />
        </div>
        <div className="flex min-h-screen flex-1 items-center justify-center">
          <GameScreen game={gameRecord} />
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
