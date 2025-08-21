"use client";
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
      <header className="relative z-40 border-b border-[var(--lighter-background)] bg-[var(--background)]">
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
                className="font-display px-3 py-2 text-2xl text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--text)]"
              >
                Home
              </Link>
              <Link
                href="#games"
                className="font-display px-3 py-2 text-2xl text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--text)]"
              >
                Games
              </Link>
              <Link
                href="#about"
                className="font-display px-3 py-2 text-2xl text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--text)]"
              >
                About
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center justify-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-[var(--body-text)] hover:text-[var(--text)] focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <Image
                  src={
                    isMobileMenuOpen ? "/images/x.svg" : "/images/Hamburger.svg"
                  }
                  alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div
            className="bg-opacity-50 fixed inset-0 bg-black"
            onClick={closeMobileMenu}
          ></div>

          {/* Mobile Menu */}
          <div className="absolute top-20 right-0 left-0 border-b border-[var(--lighter-background)] bg-[var(--background)] shadow-lg">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6 px-8 py-8">
              <Link
                href="/"
                className="font-display py-3 text-center text-4xl text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--text)]"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="#games"
                className="font-display py-3 text-center text-4xl text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--text)]"
                onClick={closeMobileMenu}
              >
                Games
              </Link>
              <Link
                href="#about"
                className="font-display py-3 text-center text-4xl text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--text)]"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
