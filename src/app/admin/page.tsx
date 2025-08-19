"use client";
import { useState } from "react";

import { UploadButton } from "../utils/uploadthing";

export default function AdminPage() {
  const [gameTitle, setGameTitle] = useState("");
  const [gamePlatform, setGamePlatform] = useState("");
  const [gameLink, setGameLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ gameTitle, gamePlatform });
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Add New Game</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="gameTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Game Title
          </label>
          <input
            type="text"
            id="gameTitle"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
            className="mt-1 block h-12 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="gamePlatform"
            className="block text-sm font-medium text-gray-700"
          >
            Game Platform
          </label>
          <input
            type="text"
            id="gamePlatform"
            value={gamePlatform}
            onChange={(e) => setGamePlatform(e.target.value)}
            className="mt-1 block h-12 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Game Image
          </label>
          <div className="mt-1">
            <UploadButton
              endpoint={"gamesUploader"}
              onClientUploadComplete={(res) => {
                setGameLink(res[0]!.ufsUrl);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Game
        </button>
      </form>
    </div>
  );
}
