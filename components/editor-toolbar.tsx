"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Maximize, Minimize, ZoomIn, ZoomOut, Copy, Trash2, Sun, Moon } from "lucide-react"

interface EditorToolbarProps {
  isFullscreen: boolean
  toggleFullscreen: () => void
  increaseFontSize: () => void
  decreaseFontSize: () => void
  fontSize: number
  toggleEditorTheme: () => void
  editorTheme: string
  copyAllCode: () => void
  clearEditor: () => void
}

export function EditorToolbar({
  isFullscreen,
  toggleFullscreen,
  increaseFontSize,
  decreaseFontSize,
  fontSize,
  toggleEditorTheme,
  editorTheme,
  copyAllCode,
  clearEditor,
}: EditorToolbarProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-zinc-900 border-b border-zinc-800">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button variant="ghost" size="sm" onClick={decreaseFontSize} className="px-2">
        <ZoomOut className="h-4 w-4" />
      </Button>

      <span className="text-xs text-zinc-400">{fontSize}px</span>

      <Button variant="ghost" size="sm" onClick={increaseFontSize} className="px-2">
        <ZoomIn className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="sm" onClick={toggleEditorTheme} className="px-2">
        {editorTheme === "vs-dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      <Button variant="ghost" size="sm" onClick={copyAllCode} className="px-2">
        <Copy className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="sm" onClick={clearEditor} className="px-2">
        <Trash2 className="h-4 w-4" />
      </Button>

      <div className="flex-1" />
    </div>
  )
}
