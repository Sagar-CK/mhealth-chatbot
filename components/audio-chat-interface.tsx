"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import type { AudioChatConfig } from "@/lib/types"

interface AudioChatInterfaceProps {
  config: AudioChatConfig
  height?: string
}

export function AudioChatInterface({ config }: AudioChatInterfaceProps) {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [responses, setResponses] = useState<Record<number, number | null>>({})
  const [isComplete, setIsComplete] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentQuestion = config.questions[currentQuestionNo]
  const isLastQuestion = currentQuestionNo === config.questions.length - 1
  const progressPercentage = Math.round((currentQuestionNo / config.questions.length) * 100)

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

  const handleNext = () => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedValue,
    }))

    if (!isLastQuestion) {
      setCurrentQuestionNo((prev) => prev + 1)
      setSelectedValue(null)
      setIsPlaying(false)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    } else {
      setIsComplete(true)
      console.log("Assessment complete!", responses)
    }
  }

  const getLikertLabel = (value: number) => {
    switch (value) {
      case 1:
        return "Not at all"
      case 2:
        return "Slightly"
      case 3:
        return "Moderately"
      case 4:
        return "Very"
      case 5:
        return "Extremely"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col rounded-lg border shadow-sm overflow-auto bg-background">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Progress</h2>
          <span className="text-sm font-medium">
            Question {currentQuestionNo + 1} of {config.questions.length}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {!isComplete ? (
          <>
            <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
              <Volume2 className="h-5 w-5" />
              <p className="text-sm font-medium">Please ensure your speakers are working </p>
            </div>

            <Card className="p-2">
              <CardContent className="">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/10">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Research Chatbot</h3>
                    <p className="text-sm text-muted-foreground">Please Listen to the question</p>
                  </div>
                </div>

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
                  <audio ref={audioRef} src={config.questions[currentQuestionNo].audioUrl} />
                </div>
              </CardContent>
            </Card>

            {/* Question and Likert scale */}
            <div className="space-y-5 pt-2">
              <h3 className="text-lg font-medium">{config.questions[currentQuestionNo].likertQuestion}</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex flex-col items-center gap-2">
                      <Button
                        variant={selectedValue === num ? "default" : "outline"}
                        size="lg"
                        className={`p-0 h-8 w-8 rounded-full ${selectedValue === num ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                        onClick={() => setSelectedValue(num)}
                      >
                        {num}
                      </Button>
                      <span className="text-xs text-center text-muted-foreground">{getLikertLabel(num)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full p-4">
            <div className="text-center max-w-md">
              <h3 className="text-xl font-medium mb-3">Assessment Complete</h3>
              <p className="text-muted-foreground mb-6">{config.completionMessage}</p>
              {/*Add the user id param once it exists */}
              <Button onClick={() => location.href="https://tudelft.fra1.qualtrics.com/jfe/form/SV_eOGnYeZNYA1PX4G?study_id=7a793cf6-19f8-4066-afe0-a009ce48e996&uid="} className="w-full">
                Continue to Post Task Survey
              </Button>
            </div>
          </div>
        )}
      </div>

      {!isComplete && (
        <div className="p-4 border-t bg-muted/10">
          <Button onClick={handleNext} disabled={selectedValue === null} className="w-full" size="lg">
            {isLastQuestion ? "Finish" : "Next Question"}
          </Button>
        </div>
      )}
    </div>
  )
}
