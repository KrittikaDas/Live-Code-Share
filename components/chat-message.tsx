import { formatDistanceToNow } from "date-fns"
import { UserAvatar } from "@/components/user-avatar"

interface ChatMessageProps {
  message: {
    id: string
    userId: string
    userName: string
    text: string
    timestamp: Date
  }
  isCurrentUser: boolean
}

export function ChatMessage({ message, isCurrentUser }: ChatMessageProps) {
  return (
    <div className={`flex mb-4 ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      {!isCurrentUser && (
        <div className="mr-2">
          <UserAvatar name={message.userName} isCurrentUser={false} />
        </div>
      )}
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isCurrentUser ? "bg-blue-600 text-white rounded-tr-none" : "bg-zinc-800 text-white rounded-tl-none"
        }`}
      >
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium text-sm">{isCurrentUser ? "You" : message.userName}</span>
          <span className="text-xs opacity-70 ml-2">{formatDistanceToNow(message.timestamp, { addSuffix: true })}</span>
        </div>
        <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
      </div>
      {isCurrentUser && (
        <div className="ml-2">
          <UserAvatar name={message.userName} isCurrentUser={true} />
        </div>
      )}
    </div>
  )
}
