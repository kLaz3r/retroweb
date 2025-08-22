import Link from "next/link";

const MockGames = [
  {
    id: 1,
    platformName: "SNES",
    games: [
      {
        id: 1,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 4,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
    ],
  },
  {
    id: 2,
    platformName: "NES",
    games: [
      {
        id: 1,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 4,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
    ],
  },
  {
    id: 3,
    platformName: "DOS",
    games: [
      {
        id: 1,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 4,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
    ],
  },
  {
    id: 4,
    platformName: "GBA",
    games: [
      {
        id: 1,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
      {
        id: 4,
        title: "Lorem Ipsum",
        link: "/emulator/lorem",
      },
    ],
  },
];

const GamesList = () => {
  return (
    <div className="border-background-secondary min-h-screen w-1/4 border-r-2 px-6">
      {MockGames.map((platform) => {
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
