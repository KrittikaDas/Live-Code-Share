"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { RoomCard } from "@/components/room-card"

interface Room {
  id: string
  name: string
  language: string
  userCount: number
  createdAt: Date
}

export function RecentRooms() {
  const router = useRouter()
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo purposes, we'll use localStorage to simulate recent rooms
    const fetchRecentRooms = () => {
      try {
        const savedRooms = localStorage.getItem("recentRooms")
        if (savedRooms) {
          const parsedRooms = JSON.parse(savedRooms)
          // Convert string dates back to Date objects
          const roomsWithDates = parsedRooms.map((room: any) => ({
            ...room,
            createdAt: new Date(room.createdAt),
          }))
          setRooms(roomsWithDates)
        }
      } catch (error) {
        console.error("Error fetching recent rooms:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentRooms()
  }, [])

  const handleJoinRoom = (roomId: string) => {
    // Get user name from localStorage or prompt
    const userName = localStorage.getItem("userName") || prompt("Enter your name to join the room") || "Anonymous"

    // Save user name for future use
    localStorage.setItem("userName", userName)

    // Navigate to the room
    router.push(`/editor/${roomId}?name=${encodeURIComponent(userName)}`)
  }

  if (loading) {
    return (
      <div className="mt-4 text-center text-zinc-500">
        <p>Loading recent rooms...</p>
      </div>
    )
  }

  if (rooms.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          name={room.name}
          language={room.language}
          userCount={room.userCount}
          createdAt={room.createdAt}
          onJoin={handleJoinRoom}
        />
      ))}
    </div>
  )
}
