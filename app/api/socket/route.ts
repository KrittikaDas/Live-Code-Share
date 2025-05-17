import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  // This is just a placeholder route for the socket.io server
  // The actual socket.io server is initialized in pages/api/socket.ts
  return NextResponse.json({ message: "Socket.io server is running" })
}
