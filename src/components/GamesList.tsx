/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";

type Props = {
  gamesList: {
    [key: string]: string[];
  }[];
};

const convertToTitle = (str: string) => {
  const newStr = str
    .replace(".jsdos", "")
    .replace(".7z", "")
    .replace(/-/g, " ");
  const splitStr = newStr.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i]!.charAt(0).toUpperCase() + splitStr[i]!.substring(1);
  }
  return splitStr.join(" ");
};

const GamesList = ({ gamesList }: Props) => {
  return (
    <div className="h-auto w-auto items-center justify-center pl-3 drop-shadow-2xl sm:w-auto md:h-screen md:w-1/2 md:overflow-auto lg:w-auto">
      <h1 className="my-6 border-b border-dashed border-light pb-3 text-center drop-shadow-2xl">
        GAMES
      </h1>
      <ul>
        {!gamesList ? (
          <li>Load some games in the public folder</li>
        ) : (
          gamesList.map((platform) => {
            const consoleName = Object.keys(platform)[0];
            const games = Object.values(platform)[0];
            return (
              <li key={consoleName}>
                {consoleName!.toUpperCase()}:
                <ul className="pl-6 drop-shadow-2xl">
                  {games!.map((game: string) => {
                    return (
                      <li key={game}>
                        <a
                          href={`/emulator/${consoleName!}/${game
                            .replace(".7z", "")
                            .replace(".jsdos", "")}`}
                        >
                          {convertToTitle(game)}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default GamesList;
