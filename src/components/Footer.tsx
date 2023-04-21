import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="border-secondary border-t">
        <div
          className={` border-secondary container mx-auto flex h-36 flex-col items-center justify-center px-6 py-6 md:h-32 md:flex-row md:justify-between`}
        >
          <div className="SocialButtons flex h-full w-full flex-row justify-center gap-6 pb-3 md:justify-start md:pb-0">
            <Link href="https://github.com/kLaz3r" className="text-[0px]">
              Github
              <GitHubLogoIcon className="text-light hover:text-secondary active:text-secondary h-full w-full transition-all" />
            </Link>
            <Link
              href="https://discordapp.com/users/240478370620506112"
              className="text-[0px]"
            >
              Discord
              <DiscordLogoIcon className="text-light hover:text-secondary active:text-secondary h-full w-full transition-all" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/stefan-nasturas-9bb019207/"
              className="text-[0px]"
            >
              LinkedIn
              <LinkedInLogoIcon className="text-light hover:text-secondary active:text-secondary h-full w-full transition-all" />
            </Link>
            <Link href="https://stefannasturas.live/" className="text-[0px]">
              Portfolio
              <PersonIcon className="text-light hover:text-secondary active:text-secondary h-full w-full transition-all" />
            </Link>
          </div>

          <div className="CopyrightText">
            <p className="-z-10 inline-block w-full text-center text-xs">
              &copy; Copyright 2023, Stefan Nasturas. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
