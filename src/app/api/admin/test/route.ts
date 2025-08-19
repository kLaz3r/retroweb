import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Admin authentication successful",
    timestamp: new Date().toISOString(),
  });
}
