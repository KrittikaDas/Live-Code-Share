"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CodeIcon, Users, Trash } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesSection } from "@/components/features-section"
import { RecentRooms } from "@/components/recent-rooms"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()
  const { toast } = useToast()
  const [userName, setUserName] = useState("")
  const [roomId, setRoomId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasRecentRooms, setHasRecentRooms] = useState(false)

  // Set username from session if available
  useEffect(() => {
    if (session?.user?.name) {
      setUserName(session.user.name)
    } else {
      // Try to get from localStorage if not logged in
      const savedName = localStorage.getItem("userName")
      if (savedName) {
        setUserName(savedName)
      }
    }

    // Check if there are recent rooms
    const savedRooms = localStorage.getItem("recentRooms")
    if (savedRooms) {
      const rooms = JSON.parse(savedRooms)
      setHasRecentRooms(rooms.length > 0)
    }
  }, [session])

  const createNewRoom = () => {
    if (!userName.trim()) return

    setIsLoading(true)
    const newRoomId = uuidv4()

    // Save user name for future use
    localStorage.setItem("userName", userName)

    // In a real app, you might want to create the room on the server first
    // For demo purposes, we'll simulate storing a recent room in localStorage
    try {
      const room = {
        id: newRoomId,
        name: `${userName}'s Room`,
        language: "javascript",
        userCount: 1,
        createdAt: new Date().toISOString(),
      }

      const savedRooms = localStorage.getItem("recentRooms")
      let recentRooms = savedRooms ? JSON.parse(savedRooms) : []

      // Add new room to the beginning of the array
      recentRooms = [room, ...recentRooms].slice(0, 6)

      localStorage.setItem("recentRooms", JSON.stringify(recentRooms))
      setHasRecentRooms(true)
    } catch (error) {
      console.error("Error saving recent room:", error)
    }

    setTimeout(() => {
      router.push(`/editor/${newRoomId}?name=${encodeURIComponent(userName)}`)
    }, 500)
  }

  const joinExistingRoom = () => {
    if (!userName.trim() || !roomId.trim()) return

    setIsLoading(true)

    // Save user name for future use
    localStorage.setItem("userName", userName)

    // In a real app, you might want to check if the room exists first
    setTimeout(() => {
      router.push(`/editor/${roomId}?name=${encodeURIComponent(userName)}`)
    }, 500)
  }

  const clearRecentRooms = () => {
    localStorage.removeItem("recentRooms")
    setHasRecentRooms(false)
    toast({
      title: "History cleared",
      description: "Your recent rooms have been cleared",
      duration: 2000,
    })
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <CodeIcon className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-2">LiveCodeShare</h1>
            <p className="text-gray-400 text-lg max-w-md">A real-time collaborative code editor</p>
          </div>

          <div className="w-full max-w-md bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold mb-2">Get Started</h2>
            <p className="text-gray-400 mb-6">Create a new room or join an existing one</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-black border-zinc-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="roomId" className="block mb-2">
                  Room ID (optional)
                </label>
                <Input
                  id="roomId"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter room ID to join"
                  className="bg-black border-zinc-700"
                />
              </div>

              <Button
                onClick={createNewRoom}
                className="w-full bg-white text-black hover:bg-gray-200"
                disabled={!userName.trim() || isLoading}
              >
                Create New Room
              </Button>

              <Button
                onClick={joinExistingRoom}
                variant="outline"
                className="w-full border-zinc-700 hover:bg-zinc-800"
                disabled={!userName.trim() || !roomId.trim() || isLoading}
              >
                Join Existing Room
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center text-gray-400">
            <Users className="h-4 w-4 mr-2" />
            <span>Real-time collaboration with syntax highlighting</span>
          </div>

          {hasRecentRooms && (
            <div className="w-full mt-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Rooms</h2>
                <Button variant="ghost" size="sm" onClick={clearRecentRooms} className="text-zinc-400 hover:text-white">
                  <Trash className="h-4 w-4 mr-2" />
                  Clear History
                </Button>
              </div>
              <RecentRooms />
            </div>
          )}
        </div>

        <div className="container mx-auto px-4" id="features">
          <FeaturesSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
