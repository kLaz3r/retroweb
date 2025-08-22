import Link from "next/link";
import { db } from "~/server/db";
import { games } from "~/server/db/schema";

interface Game {
  id: number;
  title: string;
  link: string;
}

interface Platform {
  id: number;
  platformName: string;
  games: Game[];
}

async function getGamesFromDatabase(): Promise<Platform[]> {
  try {
    const allGames = await db.select().from(games);

    // Group games by platform
    const gamesByPlatform = allGames.reduce(
      (acc: Record<string, Game[]>, game) => {
        const platformName = game.platform ?? "Unknown";
        if (!acc[platformName]) {
          acc[platformName] = [];
        }
        acc[platformName].push({
          id: game.id,
          title: game.name ?? "Unknown Game",
          link: game.link ?? "/emulator",
        });
        return acc;
      },
      {},
    );

    // Convert to the format expected by the UI
    const platforms: Platform[] = Object.entries(gamesByPlatform).map(
      ([platformName, games], index) => ({
        id: index + 1,
        platformName,
        games,
      }),
    );

    return platforms;
  } catch (error) {
    console.error("Error fetching games from database:", error);
    return [];
  }
}

const GamesList = async () => {
  const platforms = await getGamesFromDatabase();

  if (platforms.length === 0) {
    return (
      <div className="border-background-secondary min-h-screen w-1/4 border-r-2 px-6">
        <div className="flex h-full items-center justify-center">
          <p className="text-gray-500">No games found in database</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-background-secondary min-h-screen w-1/4 border-r-2 px-6">
      {platforms.map((platform) => {
        return (
          <div key={platform.id}>
            <h3 className="font-display text-brand-secondary pt-6 text-2xl font-bold md:text-2xl">
              {platform.platformName}
            </h3>
            {platform.games.map((game) => {
              return (
                <Link className="pl-4" key={game.id} href={game.link}>
                  {game.title} <br />
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const GameScreen = () => {
  return (
    <div className="flex min-h-screen w-3/4 items-center justify-center text-9xl">
      <div className="bg-background-secondary font-display flex h-[800px] w-[1000px] items-center justify-center font-black">
        {" "}
        GAME
      </div>
    </div>
  );
};
const EmulatorPage = () => {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-row items-start justify-center">
      <GamesList />
      <GameScreen />
    </main>
  );
};

export default EmulatorPage;
