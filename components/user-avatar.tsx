import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface UserAvatarProps {
  name: string
  isActive?: boolean
  isCurrentUser?: boolean
}

export function UserAvatar({ name, isActive = true, isCurrentUser = false }: UserAvatarProps) {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  // Generate a deterministic color based on the name
  const getColorFromName = (name: string) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ]

    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }

    return colors[Math.abs(hash) % colors.length]
  }

  const avatarColor = getColorFromName(name)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Avatar className={`h-8 w-8 ${isCurrentUser ? "ring-2 ring-white" : ""}`}>
              <AvatarFallback className={avatarColor}>{initials}</AvatarFallback>
            </Avatar>
            {isActive && (
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-1 ring-black"></span>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {name} {isCurrentUser ? "(You)" : ""}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
