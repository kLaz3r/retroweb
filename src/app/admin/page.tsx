"use client";
import { useState } from "react";

import { UploadButton } from "../utils/uploadthing";

// Type for API response
type ApiResponse = {
  message?: string;
  game?: unknown;
  error?: string;
  details?: unknown[];
};

export default function AdminPage() {
  const [gameTitle, setGameTitle] = useState("");
  const [gamePlatform, setGamePlatform] = useState("");
  const [gameLink, setGameLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Validate required fields
    if (!gameTitle.trim() || !gamePlatform.trim() || !gameLink.trim()) {
      setError("Please fill in all fields and upload an image");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: gameTitle.trim(),
          platform: gamePlatform.trim(),
          link: gameLink.trim(),
        }),
      });

      const data = (await response.json()) as ApiResponse;

      if (response.ok) {
        setSuccess("Game added successfully!");
        // Reset form
        setGameTitle("");
        setGamePlatform("");
        setGameLink("");
      } else {
        setError(data.error ?? "Failed to add game");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while adding the game");
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Adding Game..." : "Add Game"}
        </button>

        {error && (
          <div className="mt-4 rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-md bg-green-50 p-4">
            <div className="text-sm text-green-700">{success}</div>
          </div>
        )}
      </form>
    </div>
  );
}
