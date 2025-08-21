import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-5rem)] flex-row items-center justify-between px-6">
      <div className="flex w-1/2 flex-col gap-2">
        <h2 className="font-display text-brand-secondary text-2xl font-bold">
          RETROWEB
        </h2>
        <h1 className="font-display text-6xl leading-tight font-black">
          Play Retro Games right in your web browser
        </h1>
        <p className="font-body text-text-secondary relative w-2/3 text-2xl">
          Turn back the clock with your favorite retro games. Play instantly and
          bring the nostalgia wherever you are.
          <Image
            className="absolute top-0 right-0 translate-x-35"
            src={"/peace.svg"}
            width={90}
            height={90}
            alt="peace"
          />
        </p>
        <Link
          href="/emulator"
          className="font-display text-foreground relative mt-3 w-48 px-6 py-3 text-center text-4xl font-bold"
        >
          <Image
            src={"/arrow-left.svg"}
            height={60}
            width={60}
            alt="arrow"
            className="absolute right-0 bottom-0 translate-x-20 translate-y-20"
          />
          PLAY
          <div className="bg-foreground absolute top-0 left-0 h-full w-full translate-x-2 translate-y-2"></div>
          <div className="bg-brand-secondary absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
            PLAY
          </div>
        </Link>
      </div>
      <div className="flex max-w-1/2 flex-col items-center justify-center">
        <div className="relative h-[650px] w-[650px]">
          <Image
            alt="bg"
            src="/images/retro-sun-with-eyes.svg"
            fill
            className="object-contain"
          />
          <Image
            src={"/pacman-with-food.svg"}
            width={280}
            height={80}
            alt="pacman with food"
            className="absolute bottom-0 translate-x-40 translate-y-20"
          />
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
    </main>
  );
}
