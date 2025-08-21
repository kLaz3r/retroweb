import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[var(--lighter-background)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
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
        </div>
      </div>
    </header>
  );
}
