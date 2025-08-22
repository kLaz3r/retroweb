"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between gap-12 overflow-clip px-6 md:flex-row">
      <div className="order-1 flex w-full flex-col gap-2 pt-4 md:order-1 md:w-1/2">
        <motion.h2
          className="font-display text-brand-secondary text-2xl font-bold md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          RETROWEB
        </motion.h2>
        <motion.h1
          className="font-display text-5xl leading-tight font-black md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Play Retro Games right in your web browser
        </motion.h1>
        <motion.p
          className="font-body text-text-secondary relative w-full text-xl md:w-2/3 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Turn back the clock with your favorite retro games. Play instantly and
          bring the nostalgia wherever you are.
          <motion.span
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <Image
              className="absolute top-0 right-0 translate-y-30 md:translate-x-35 md:translate-y-0"
              src={"/peace.svg"}
              width={90}
              height={90}
              alt="peace"
            />
          </motion.span>
        </motion.p>
        <motion.div
          className="relative mt-3 w-50 md:w-48"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{
            scale: 1.05,
            opacity: 0.9,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            opacity: 0.8,
            transition: { duration: 0.1 },
          }}
        >
          <Link
            href="/emulator"
            className="font-display text-foreground relative block px-6 py-3 text-center text-3xl font-bold md:text-4xl"
          >
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/arrow-left.svg"}
                height={60}
                width={60}
                alt="arrow"
                className="absolute right-0 bottom-0 translate-x-20 translate-y-20"
              />
            </motion.div>
            PLAY
            <div className="bg-foreground absolute top-0 left-0 h-full w-full translate-x-2 translate-y-2"></div>
            <div className="bg-brand-secondary absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
              PLAY
            </div>
          </Link>
        </motion.div>
      </div>
      <div className="order-2 flex max-w-full flex-col items-center justify-center md:order-2 md:max-w-1/2">
        <div className="relative h-[400px] w-[400px] pt-8 md:h-[650px] md:w-[650px] md:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.6,
              type: "spring",
              bounce: 0.4,
            }}
            className="relative h-full w-full"
          >
            <Image
              alt="bg"
              src="/images/retro-sun-with-eyes.svg"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 1.4,
              type: "spring",
              bounce: 0.5,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            className="absolute right-0 bottom-0 hidden md:block"
          >
            <Image
              src={"/pacman-with-food.svg"}
              width={280}
              height={80}
              alt="pacman with food"
              className="-translate-x-45 translate-y-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const games = [
  {
    id: 1,
    img: "/images/zelda.png",
    title: "The Legend Of Zelda",
    href: "/emulator",
  },
  {
    id: 2,
    img: "/images/mario.png",
    title: "Super Mario World",
    href: "/emulator",
  },
  {
    id: 3,
    img: "/images/metroid.png",
    title: "Metroid Zero Mission",
    href: "/emulator",
  },
  {
    id: 4,
    img: "/images/pokemon.png",
    title: "Pokemon Emerald",
    href: "/emulator",
  },
];

const GamesSection = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-24 px-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-brand-secondary pt-12 text-center text-2xl font-bold md:text-2xl">
          FAN FAVOURITES
        </h2>
        <h1 className="font-display relative pt-4 text-center text-5xl leading-tight font-black md:text-6xl">
          Start Playing Today
        </h1>
      </motion.div>

      {/* Desktop: 4 in a row, Mobile: 2x2 grid */}
      <div className="w-full">
        {/* Desktop Layout */}
        <div className="hidden w-full flex-row gap-6 md:flex">
          {games.map((game, index) => {
            return (
              <motion.div
                key={game.id}
                className="group relative flex flex-grow cursor-pointer items-center justify-center"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, type: "spring", bounce: 0.3 },
                }}
                whileTap={{
                  scale: 0.95,
                  y: -5,
                  transition: { duration: 0.1 },
                }}
              >
                <Link href={game.href} className="relative block h-full w-full">
                  {/* Glow effect on hover */}
                  <motion.div
                    className="bg-brand-secondary/20 absolute inset-0 opacity-0 blur-xl group-hover:opacity-100"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Game image */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={game.img}
                      alt={game.title}
                      width={200}
                      height={300}
                      className="group-hover:shadow-3xl h-full w-full object-cover shadow-2xl transition-shadow duration-300"
                    />
                  </motion.div>

                  {/* Background shadow layer */}
                  <motion.div
                    className="bg-brand-secondary absolute top-0 left-0 h-full w-full translate-x-2 translate-y-2"
                    whileHover={{
                      translateX: 4,
                      translateY: 4,
                      transition: { duration: 0.3 },
                    }}
                  />

                  {/* Click ripple effect */}
                  <motion.div
                    className="absolute inset-0 z-30 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileTap={{
                      scale: 2,
                      opacity: 0,
                      transition: { duration: 0.4 },
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout: 2x2 grid */}
        <div className="grid w-full grid-cols-2 gap-4 md:hidden">
          {games.map((game, index) => {
            return (
              <motion.div
                key={game.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2, type: "spring", bounce: 0.4 },
                }}
                whileTap={{
                  scale: 0.97,
                  y: -2,
                  transition: { duration: 0.1 },
                }}
              >
                <Link
                  href={game.href}
                  className="relative block aspect-[2/3] w-full"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="bg-brand-secondary/20 absolute inset-0 opacity-0 blur-lg group-hover:opacity-100"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Game image */}
                  <motion.div
                    className="relative z-10 h-full w-full"
                    whileHover={{ rotateY: 3, rotateX: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={game.img}
                      alt={game.title}
                      fill
                      className="object-cover shadow-xl transition-shadow duration-300 group-hover:shadow-2xl"
                    />
                  </motion.div>

                  {/* Background shadow layer */}
                  <motion.div
                    className="bg-brand-secondary absolute top-0 left-0 h-full w-full translate-x-1 translate-y-1"
                    whileHover={{
                      translateX: 2,
                      translateY: 2,
                      transition: { duration: 0.2 },
                    }}
                  />

                  {/* Click ripple effect */}
                  <motion.div
                    className="absolute inset-0 z-30 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileTap={{
                      scale: 2,
                      opacity: 0,
                      transition: { duration: 0.3 },
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const PlatformsSection = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 px-6 pb-12 md:flex-row md:justify-between">
      {/* Mobile Layout: Image on top, text below */}
      <div className="flex w-full flex-col items-center gap-8 md:hidden">
        <div className="w-full max-w-xs">
          <Image
            src={"/gba.svg"}
            alt="gba"
            width={500}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative flex w-full flex-col items-start justify-center gap-4 text-left">
          <h2 className="font-display text-brand-secondary text-2xl font-bold">
            RETROWEB
          </h2>
          <h1 className="font-display text-4xl leading-tight font-black sm:text-5xl">
            A Retro Collection in Your Browser
          </h1>
          <p className="font-body text-text-secondary relative w-full max-w-md text-lg sm:text-xl">
            Whether you grew up on GBA handhelds or MS-DOS computer games,
            RetroWeb lets you experience them all. Emulate the GBA, SNES, NES,
            and MS-DOS with ease, right from your browser.
          </p>
        </div>
      </div>

      {/* Desktop Layout: Original side-by-side */}
      <div className="hidden w-1/2 md:block">
        <Image src={"/gba.svg"} alt="gba" width={500} height={700} />
      </div>
      <div className="relative hidden w-1/2 flex-col items-end justify-center gap-4 md:flex">
        <h2 className="font-display text-brand-secondary text-right text-2xl font-bold md:text-2xl">
          RETROWEB
        </h2>
        <h1 className="font-display text-right text-5xl leading-tight font-black md:text-6xl">
          A Retro Collection in Your Browser
        </h1>
        <p className="font-body text-text-secondary relative w-full text-right text-xl md:text-2xl">
          Whether you grew up on GBA handhelds or MS-DOS computer games,
          RetroWeb lets you experience them all. Emulate the GBA, SNES, NES, and
          MS-DOS with ease, right from your browser.
        </p>
        <span className="absolute right-0 bottom-0 translate-y-40">
          <Image
            src={"/pacman-with-food-2.svg"}
            width={300}
            height={100}
            alt="pacman-with-food"
          />
        </span>
      </div>
    </section>
  );
};
export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <GamesSection />
      <PlatformsSection />
    </main>
  );
}
