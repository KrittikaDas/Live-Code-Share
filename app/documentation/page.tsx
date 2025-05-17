import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CodeIcon, BookOpen, Code, Users, Globe, Zap } from "lucide-react"

export default function DocumentationPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white rounded-full p-2">
              <CodeIcon className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-3xl font-bold">LiveCodeShare Documentation</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-blue-400" />
              <h2 className="text-2xl font-semibold mt-0">Getting Started</h2>
            </div>

            <p>
              LiveCodeShare is a real-time collaborative code editor created by Akshit, that allows developers to work together on code
              regardless of their location. This documentation will help you get started with the platform and make the
              most of its features.
            </p>

            <h3>Creating a Room</h3>
            <ol>
              <li>Navigate to the homepage</li>
              <li>Enter your name in the "Your Name" field</li>
              <li>Click "Create New Room"</li>
              <li>Share the generated room ID or link with collaborators</li>
            </ol>

            <h3>Joining a Room</h3>
            <ol>
              <li>Navigate to the homepage</li>
              <li>Enter your name in the "Your Name" field</li>
              <li>Enter the room ID in the "Room ID" field</li>
              <li>Click "Join Existing Room"</li>
            </ol>

            <div className="flex items-center gap-2 mb-6 mt-12">
              <Code className="h-5 w-5 text-green-400" />
              <h2 className="text-2xl font-semibold mt-0">Editor Features</h2>
            </div>

            <h3>Code Editing</h3>
            <p>
              The editor supports syntax highlighting for multiple programming languages. You can change the language
              using the dropdown at the top of the editor. All changes are synchronized in real-time with other users in
              the room.
            </p>

            <h3>Editor Controls</h3>
            <ul>
              <li>
                <strong>Fullscreen</strong> - Toggle fullscreen mode for distraction-free coding
              </li>
              <li>
                <strong>Font Size</strong> - Increase or decrease the editor font size
              </li>
              <li>
                <strong>Theme</strong> - Switch between light and dark editor themes
              </li>
              <li>
                <strong>Copy Code</strong> - Copy all code to clipboard
              </li>
              <li>
                <strong>Clear Editor</strong> - Remove all code from the editor
              </li>
            </ul>

            <div className="flex items-center gap-2 mb-6 mt-12">
              <Users className="h-5 w-5 text-purple-400" />
              <h2 className="text-2xl font-semibold mt-0">Collaboration</h2>
            </div>

            <h3>Chat</h3>
            <p>
              The chat feature allows you to communicate with other users in the room. Click on the "Chat" tab to access
              the chat interface. Messages are synchronized in real-time with all users in the room.
            </p>

            <h3>User Presence</h3>
            <p>
              The sidebar displays all users currently in the room. You can see who is online and collaborating with you
              in real-time.
            </p>

            <div className="flex items-center gap-2 mb-6 mt-12">
              <Globe className="h-5 w-5 text-yellow-400" />
              <h2 className="text-2xl font-semibold mt-0">Preview</h2>
            </div>

            <p>
              The preview feature allows you to see the output of your code. Click on the "Preview" tab to access the
              preview interface. The preview is available for HTML, JavaScript, TypeScript, and CSS.
            </p>

            <div className="flex items-center gap-2 mb-6 mt-12">
              <Zap className="h-5 w-5 text-orange-400" />
              <h2 className="text-2xl font-semibold mt-0">Tips & Tricks</h2>
            </div>

            <ul>
              <li>Use the "Share Link" button to quickly share the room with others</li>
              <li>You can press Enter to send a chat message</li>
              <li>The editor supports common keyboard shortcuts for coding</li>
              <li>Your recent rooms are saved for easy access on the homepage</li>
              <li>You can clear your room history from the homepage</li>
            </ul>

            <div className="mt-12 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="mt-0">Need more help?</h3>
              <p className="mb-4">
                If you have any questions or need assistance, please don't hesitate to reach out to our support team.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
