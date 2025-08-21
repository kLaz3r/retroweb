import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between gap-12 px-6 md:flex-row">
      <div className="order-1 flex w-full flex-col gap-2 pt-4 md:order-1 md:w-1/2">
        <h2 className="font-display text-brand-secondary text-2xl font-bold md:text-2xl">
          RETROWEB
        </h2>
        <h1 className="font-display text-5xl leading-tight font-black md:text-6xl">
          Play Retro Games right in your web browser
        </h1>
        <p className="font-body text-text-secondary relative w-full text-xl md:w-2/3 md:text-2xl">
          Turn back the clock with your favorite retro games. Play instantly and
          bring the nostalgia wherever you are.
          <Image
            className="absolute top-0 right-0 translate-y-30 md:translate-x-35 md:translate-y-0"
            src={"/peace.svg"}
            width={60}
            height={60}
            alt="peace"
          />
        </p>
        <Link
          href="/emulator"
          className="font-display text-foreground relative mt-3 w-50 px-6 py-3 text-center text-3xl font-bold md:w-48 md:text-4xl"
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
      <div className="order-2 flex max-w-full flex-col items-center justify-center md:order-2 md:max-w-1/2">
        <div className="relative h-[400px] w-[400px] pt-8 md:h-[650px] md:w-[650px] md:pt-0">
          <Image
            alt="bg"
            src="/images/retro-sun-with-eyes.svg"
            fill
            className="object-contain"
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
