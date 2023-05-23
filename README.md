# RetroWeb | Retro games in Browser

Tech Stack:

- Next.js
- EmulatorJS
- Tailwind CSS
- Vercel

Deployed at: https://retroweb-one.vercel.app/

Credits: [EmulatorJS](https://github.com/EmulatorJS/EmulatorJS) & [JSDOS](https://js-dos.com/v7/build/)

## Supported consoles:

- gba
- n64
- nds
- nes
- snes
- dos

### To load games you need to put them in the /public/games folder by the following folder structure:

```
/games
-/gba
---(gba-games).7z
-/n64
---(n64-games).7z
-/nds
---(nds-games).7z
-/nes
---(nes-games).7z
-/snes
---(snes-games).7z
-/dos
---(dos-games).jsdos
```

The archive names must be **snake-case** the dashes represent spaces in the UI

### Sometimes the browser freezes and crashes due to the early nature of WebAssembly which is used in the emulator
