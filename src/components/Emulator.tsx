"use client";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    EJS_player?: string;
    EJS_core?: string;
    EJS_pathtodata?: string;
    EJS_gameUrl?: string;
    EJS_gameName?: string;
    EJS_startOnLoaded?: boolean;
  }
}

type EmulatorProps = {
  core: string;
  gameUrl: string;
  gameName?: string;
};

const Emulator = ({ core, gameUrl, gameName }: EmulatorProps) => {
  useEffect(() => {
    const gameDiv = document.getElementById("game");
    if (gameDiv) {
      gameDiv.innerHTML = "";
    }

    window.EJS_player = "#game";
    window.EJS_core = core;
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_gameUrl = gameUrl;
    window.EJS_gameName = gameName;
    window.EJS_startOnLoaded = true;
    console.log("window.EJS_player:", window.EJS_player);
    console.log("window.EJS_core:", window.EJS_core);
    console.log("window.EJS_pathtodata:", window.EJS_pathtodata);
    console.log("window.EJS_gameUrl:", window.EJS_gameUrl);
    console.log("window.EJS_gameName:", window.EJS_gameName);
    console.log("window.EJS_startOnLoaded:", window.EJS_startOnLoaded);
  }, [core, gameUrl, gameName]);

  return (
    <>
      <Script
        src="https://cdn.emulatorjs.org/stable/data/loader.js"
        strategy="afterInteractive"
      />
      <div id="game"></div>
    </>
  );
};

export default Emulator;
