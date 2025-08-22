import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { db } from "~/server/db";
import { games } from "~/server/db/schema";

// Validation schema
const createGameSchema = z.object({
  name: z.string().min(1, "Game name is required"),
  platform: z.string().min(1, "Platform is required"),
  link: z.string().url("Invalid image URL"),
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    // Validate the request body
    const validatedData = createGameSchema.parse(body);

    // Insert the game into the database
    const result = await db
      .insert(games)
      .values({
        name: validatedData.name,
        platform: validatedData.platform,
        link: validatedData.link,
      })
      .returning();

    return NextResponse.json(
      { message: "Game added successfully", game: result[0] },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding game:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
