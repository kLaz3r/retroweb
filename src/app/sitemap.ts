import { type MetadataRoute } from "next";
import { db } from "~/server/db";
import { games } from "~/server/db/schema";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://retroweb.dev";

  // Get all games from the database
  const gamesData = await db.select().from(games);

  // Create sitemap entries for games
  const gameEntries: MetadataRoute.Sitemap = gamesData.map((game) => ({
    url: `${baseUrl}/emulator/${game.platform?.toLowerCase()}/${game.id}`,
    lastModified: game.updatedAt ?? game.createdAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/emulator`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  return [...staticPages, ...gameEntries];
}
