import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Briefcase",
      href: "https://stefannasturas.com",
      icon: "/images/Briefcase.svg",
      alt: "Portfolio/Work",
    },
    {
      name: "GitHub",
      href: "https://github.com/kLaz3r",
      icon: "/images/Github.svg",
      alt: "GitHub Profile",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_kingof_darkness_/",
      icon: "/images/Instagram.svg",
      alt: "Instagram Profile",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/stefan-nasturas/",
      icon: "/images/LinkedIn.svg",
      alt: "LinkedIn Profile",
    },
  ];

  return (
    <footer className="border-t border-[var(--lighter-background)] bg-[var(--background)] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden items-center justify-between md:flex">
          {/* Left - Lorem Text */}
          <div className="flex-1 text-[var(--body-text)]">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Middle - Social Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative rounded-lg p-3 transition-all duration-300 hover:scale-125 active:scale-95"
                aria-label={link.alt}
                style={{
                  filter: "brightness(0) invert(1)",
                  color: "var(--text)",
                }}
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={32}
                  height={32}
                  className="text-text transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--text)] group-active:brightness-75"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="flex-1 text-right text-[var(--body-text)]">
            <p className="text-sm">
              © {currentYear} Your Company. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center space-y-6 md:hidden">
          {/* Social Icons */}
          <div className="flex w-full max-w-xs items-center justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative rounded-lg p-3 transition-all duration-300 hover:scale-125 hover:bg-[var(--lighter-background)] active:scale-95"
                aria-label={link.alt}
                style={{
                  filter: "brightness(0) invert(1)",
                  color: "var(--text)",
                }}
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={36}
                  height={36}
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--text)] group-active:brightness-75"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-[var(--body-text)]">
            <p className="text-sm">
              © {currentYear} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
