"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Code2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface RoomCardProps {
  id: string
  name: string
  language: string
  userCount: number
  createdAt: Date
  onJoin: (id: string) => void
}

export function RoomCard({ id, name, language, userCount, createdAt, onJoin }: RoomCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          <Badge variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
            {language}
          </Badge>
        </div>
        <CardDescription className="text-zinc-400 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-zinc-400 mb-2">
          <Users className="h-4 w-4 mr-2" />
          <span>
            {userCount} active user{userCount !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center text-sm text-zinc-400">
          <Code2 className="h-4 w-4 mr-2" />
          <span>Room ID: {id.substring(0, 8)}...</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onJoin(id)} variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800">
          Join Room
        </Button>
      </CardFooter>
    </Card>
  )
}
