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
    <footer className="border-background-secondary bg-background border-t py-8">
      <div className="container mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden items-center justify-between md:flex">
          {/* Left - Lorem Text */}
          <div className="text-text-secondary flex-1">
            <h3 className="font-body pb-3 font-bold">RETROWEB</h3>
            <p className="max-w-72 text-sm">
              A portfolio project for a junior wannabe developer, any feedback
              is appreciated.
            </p>
          </div>

          {/* Middle - Social Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative rounded-lg p-3 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label={link.alt}
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={60}
                  height={60}
                  className="transition-all duration-300 group-active:brightness-75"
                />
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-text-secondary flex flex-1 flex-row items-end justify-end text-right">
            <p className="max-w-72 text-sm">
              © Copyright {currentYear} Stefan Nasturas. <br /> All graphics
              and other multimedia are copyrighted to their respective owners
              and authors.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center space-y-6 md:hidden">
          {/* Social Icons */}
          <div className="flex w-full max-w-xs items-center justify-center space-x-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative rounded-lg p-3 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label={link.alt}
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={65}
                  height={65}
                  className="transition-all duration-300 group-active:brightness-75"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-text-secondary text-center">
            <p className="text-sm">
              © Copyright {currentYear} Stefan Nasturas. <br /> All graphics
              and other multimedia are copyrighted to their respective owners
              and authors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
