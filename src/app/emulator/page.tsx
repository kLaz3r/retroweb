import { type Metadata } from "next";
import GamesList from "~/components/GamesList";

export const metadata: Metadata = {
  title: "Emulator | Retroweb",
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
