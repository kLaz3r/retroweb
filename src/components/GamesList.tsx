/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";

type Props = {
  gamesList: {
    [key: string]: string[];
  };
};

const convertToTitle = (str: string) => {
  const newStr = str.replace(".7z", "").replace(".7z", "").replace(/-/g, " ");
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
        {Object.keys(gamesList).map((key) => {
          console.log(key);
          return (
            <li key={key}>
              {key.toUpperCase()}:
              <ul className="pl-6 drop-shadow-2xl">
                {gamesList[key]!.map((game: string) => {
                  return (
                    <li key={game}>
                      <a href={`/emulator/${key}/${game.replace(".7z", "")}`}>
                        {convertToTitle(game)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GamesList;
