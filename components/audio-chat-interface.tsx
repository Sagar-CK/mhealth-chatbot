"use client"

import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bot, Play, Pause, Volume2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { type AudioChatConfig } from "@/lib/types"

interface AudioChatInterfaceProps {
  config: AudioChatConfig
  height?: string
}

export function AudioChatInterface({ config, height = "600px" }: AudioChatInterfaceProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [responses, setResponses] = useState<Record<number, number>>({})
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = config.steps[currentStep]
  const isLastQuestion = currentStep === config.steps.length - 1

  // Handle audio play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying)

    // Simulate audio playing with progress
    if (!isPlaying) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsPlaying(false)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }
  }

  // Handle next question
  const handleNext = () => {
    // Save current response
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedValue as number,
    }))

    // Move to next question or finish
    if (!isLastQuestion) {
      setCurrentStep((prev) => prev + 1)
      setSelectedValue(null)
      setProgress(0)
      setIsPlaying(false)
    } else {
      // Handle completion
      setIsComplete(true)
      console.log("Assessment complete!", responses)
    }
  }

  // Reset the chat
  const resetChat = () => {
    setCurrentStep(0)
    setSelectedValue(null)
    setProgress(0)
    setIsPlaying(false)
    setResponses({})
    setIsComplete(false)
  }

  return (
    <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden" style={{ height }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-muted/20">
        {/* Progress indicator */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Question {currentStep + 1} of {config.steps.length}
          </span>
          <span className="text-sm font-medium">{Math.round((currentStep / config.steps.length) * 100)}% Complete</span>
        </div>

        {/* Speaker notification */}
        <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
          <Volume2 className="h-4 w-4" />
          <p className="text-sm font-medium">Please turn on your speakers</p>
        </div>

        {!isComplete ? (
          <>
            {/* Audio message with chatbot icon */}
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10 bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </Avatar>

              {/* WhatsApp style audio player */}
              <div className="flex items-center gap-3 bg-white rounded-full p-1 pl-1 pr-3 border shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full h-10 w-10 ${isPlaying ? "bg-red-100 text-red-600" : "bg-primary/10 text-primary"}`}
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                <div className="flex-1">
                  <Progress value={progress} className="h-1" />
                </div>

                <span className="text-xs text-gray-500 min-w-[32px] text-right">{currentQuestion.audioDuration}</span>
              </div>
            </div>

            {/* Response scale 1-5 */}
            <div className="space-y-4">
              <label className="text-sm font-medium">Your response:</label>

              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Button
                    key={num}
                    variant={selectedValue === num ? "default" : "outline"}
                    size="sm"
                    className="h-12 w-12 p-0 rounded-full"
                    onClick={() => setSelectedValue(num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-500 px-6">
                <span>Not at all</span>
                <span>Extremely</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Assessment Complete</h3>
              <p className="text-gray-500">{config.completionMessage}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-card">
        {isComplete ? (
          <Button onClick={resetChat} className="w-full">
            Start New Assessment
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={selectedValue === null} className="w-full">
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        )}
      </div>
    </div>
  )
}
