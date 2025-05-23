"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioMessageProps {
  audioUrl: string
}

export function AudioMessage({ audioUrl }: AudioMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [waveformData, setWaveformData] = useState<number[]>([])

  // Format time in M:SS format
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

  // Handle seeking by clicking on waveform
  const handleWaveformClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !audioRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const canvasWidth = rect.width

    // Calculate the seek position based on click position
    const seekPosition = (clickX / canvasWidth) * duration

    // Update audio position
    audioRef.current.currentTime = seekPosition
    setCurrentTime(seekPosition)
  }

  // Generate random waveform data for visualization
  useEffect(() => {
    // In a real app, you would analyze the audio file to generate actual waveform data
    // For this example, we'll generate random data
    const generateRandomWaveform = () => {
      const data = []
      for (let i = 0; i < 50; i++) {
        // Generate values between 0.2 and 1 for a more realistic waveform
        data.push(0.2 + Math.random() * 0.8)
      }
      setWaveformData(data)
    }

    generateRandomWaveform()
  }, [audioUrl])

  // Draw waveform visualization
  useEffect(() => {
    if (!canvasRef.current || waveformData.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Make canvas responsive
    if (containerRef.current) {
      canvas.width = containerRef.current.clientWidth
      canvas.height = containerRef.current.clientHeight
    }

    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    const barWidth = 3
    const barSpacing = 2
    const barCount = waveformData.length
    const totalBarWidth = barCount * (barWidth + barSpacing) - barSpacing

    // Calculate starting position to center the waveform
    const startX = (canvasWidth - totalBarWidth) / 2

    // Calculate progress for coloring
    const progress = duration > 0 ? currentTime / duration : 0
    const progressIndex = Math.floor(barCount * progress)

    // Draw each bar
    waveformData.forEach((value, index) => {
      const barHeight = value * (canvasHeight - 4)
      const x = startX + index * (barWidth + barSpacing)
      const y = (canvasHeight - barHeight) / 2

      // Set color based on progress
      if (index <= progressIndex) {
        ctx.fillStyle = "#64748b" // Darker gray for played portion
      } else {
        ctx.fillStyle = "#e2e8f0" // Light gray for unplayed portion
      }

      // Draw rounded bars
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, [1])
      ctx.fill()
    })
  }, [waveformData, currentTime, duration])

  // Update canvas size on window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        canvasRef.current.width = containerRef.current.clientWidth
        canvasRef.current.height = containerRef.current.clientHeight
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
      // Only change the playing state, don't reset the currentTime
      setIsPlaying(false)
      // Keep currentTime at the end so the waveform stays fully colored
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
    <div
      className="flex items-center bg-gray-50 rounded-full py-2 px-3 w-full max-w-md shadow-sm border border-gray-100"
      ref={containerRef}
    >
      
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full flex-shrink-0 text-gray-600 hover:text-gray-800 hover:bg-gray-200 p-0 mr-2"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
      </Button>

      <div className="flex-1 h-6 cursor-pointer">
        <canvas
          ref={canvasRef}
          height={24}
          className="w-full h-full"
          onClick={handleWaveformClick}
          aria-label="Audio waveform - click to seek"
        />
      </div>

      <div className="text-sm font-medium text-gray-500 ml-2">{formatTime(currentTime)}</div>

      <audio ref={audioRef} src={audioUrl} preload="metadata" />
    </div>
  )
}
