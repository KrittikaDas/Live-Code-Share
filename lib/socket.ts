import type { Server as NetServer } from "http"
import { Server as SocketIOServer } from "socket.io"
import type { NextApiRequest } from "next"
import type { NextApiResponse } from "next"

export type NextApiResponseWithSocket = NextApiResponse & {
  socket: {
    server: NetServer & {
      io?: SocketIOServer
    }
  }
}

interface UserInfo {
  id: string
  name: string
}

interface RoomData {
  users: UserInfo[]
  code: string
  language: string
}

// In-memory store for rooms
const rooms = new Map<string, RoomData>()

export const initSocketServer = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (!res.socket.server.io) {
    const io = new SocketIOServer(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    })

    io.on("connection", (socket) => {
      const { roomId, userName } = socket.handshake.query

      if (!roomId || !userName || typeof roomId !== "string" || typeof userName !== "string") {
        socket.disconnect()
        return
      }

      // Join the room
      socket.join(roomId)

      // Initialize room if it doesn't exist
      if (!rooms.has(roomId)) {
        rooms.set(roomId, {
          users: [],
          code: "// Start coding here...",
          language: "javascript",
        })
      }

      // Add user to the room
      const room = rooms.get(roomId)!
      const userInfo: UserInfo = { id: socket.id, name: userName }
      room.users.push(userInfo)

      // Send current state to the new user
      socket.emit("code-change", room.code)
      socket.emit("language-change", room.language)

      // Broadcast updated user list to all clients in the room
      io.to(roomId).emit("user-list-update", room.users)

      // Handle code changes
      socket.on("code-change", ({ roomId, code }) => {
        if (!roomId || !rooms.has(roomId)) return

        const room = rooms.get(roomId)!
        room.code = code

        // Broadcast to all clients in the room except the sender
        socket.to(roomId).emit("code-change", code)
      })

      // Handle language changes
      socket.on("language-change", ({ roomId, language }) => {
        if (!roomId || !rooms.has(roomId)) return

        const room = rooms.get(roomId)!
        room.language = language

        // Broadcast to all clients in the room except the sender
        socket.to(roomId).emit("language-change", language)
      })

      // Handle disconnection
      socket.on("disconnect", () => {
        if (!roomId || !rooms.has(roomId)) return

        const room = rooms.get(roomId)!

        // Remove user from the room
        room.users = room.users.filter((user) => user.id !== socket.id)

        // Broadcast updated user list
        io.to(roomId).emit("user-list-update", room.users)

        // Remove room if empty
        if (room.users.length === 0) {
          rooms.delete(roomId)
        }
      })
    })

    res.socket.server.io = io
  }

  return res.socket.server.io
}
