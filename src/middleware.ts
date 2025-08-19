import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader?.startsWith("Basic ")) {
      return new Response("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return new Response("Missing credentials", { status: 400 });
    }

    const [username, password] = Buffer.from(token, "base64")
      .toString()
      .split(":");

    if (
      username !== process.env.ADMIN_USERNAME ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return new Response("Invalid credentials", { status: 401 });
    }
  }

  return NextResponse.next();
}
