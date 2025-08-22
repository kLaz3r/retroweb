"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between gap-12 px-6 md:flex-row">
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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

export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
    </main>
  );
}
