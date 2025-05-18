"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"

interface AudioMessageProps {
  audioUrl?: string
}

export function AudioMessage({ audioUrl}: AudioMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Format time in MM:SS format
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle seeking
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  // Update current time as audio plays
  useEffect(() => {
    const audio = audioRef.current

    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime)
      }
    }

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      if (audio) {
        audio.currentTime = 0
      }
    }

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate)
      audio.addEventListener("loadedmetadata", handleLoadedMetadata)
      audio.addEventListener("ended", handleEnded)
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate)
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
        audio.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  return (
    <Card className="p-3 bg-muted">
      <div className="space-y-4 flex-1">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full flex-shrink-0 bg-primary/5 hover:bg-primary/10"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
          </Button>

          <div className="flex-1 space-y-1">
            <Slider value={[currentTime]} max={duration || 100} step={0.1} onValueChange={handleSeek} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <audio ref={audioRef} src={audioUrl} />
      </div>
    </Card>
  )
}
