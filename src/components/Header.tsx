"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-background border-background-secondary relative z-40 border-b">
        <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="/images/Logo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden space-x-8 md:flex">
              <Link
                href="/"
                className="font-display text-text-secondary hover:text-foreground px-3 py-2 text-2xl transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="#games"
                className="font-display text-text-secondary hover:text-foreground px-3 py-2 text-2xl transition-colors duration-200"
              >
                Games
              </Link>
              <Link
                href="#about"
                className="font-display text-text-secondary hover:text-foreground px-3 py-2 text-2xl transition-colors duration-200"
              >
                About
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center justify-center md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-text-secondary hover:text-foreground focus:outline-none"
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "x" : "hamburger"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <Image
                      src={
                        isMobileMenuOpen
                          ? "/images/x.svg"
                          : "/images/Hamburger.svg"
                      }
                      alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="bg-opacity-50 fixed inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            ></motion.div>

            {/* Mobile Menu */}
            <motion.div
              className="bg-background border-background-secondary absolute top-20 right-0 left-0 border-b shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {/* Mobile Navigation Links */}
              <motion.nav
                className="flex flex-col space-y-10 px-8 py-12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/"
                    className="font-display text-text-secondary hover:text-foreground block py-4 text-center text-6xl transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="#games"
                    className="font-display text-text-secondary hover:text-foreground block py-4 text-center text-6xl transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Games
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="#about"
                    className="font-display text-text-secondary hover:text-foreground block py-4 text-center text-6xl transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
