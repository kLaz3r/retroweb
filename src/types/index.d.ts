export {};

declare global {
  interface Window {
    emulators: {
      pathPrefix: string;
    };
    EJS_player: string;
    EJS_core: string;
    EJS_gameName: string;
    EJS_color: string;
    EJS_pathtodata: string;
    EJS_gameUrl: string;
    EJS_startOnLoaded: boolean;
    EJS_biosUrl: string;
    EJS_DEBUG_XX: boolean;
    EJS_defaultOptions: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
    EJS_Buttons: {
      [key: string]: boolean;
    };
    EJS_Settings: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
  }
}
