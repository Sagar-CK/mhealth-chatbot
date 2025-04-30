"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, BotMessageSquareIcon, User } from 'lucide-react'
import { SelectResponse } from "@/components/select-response"
import { LikertResponse } from "@/components/likert-response"
import { type Scenario, type Message, ResponseType } from "@/lib/types"
import { useRouter } from "next/navigation"

interface ChatInterfaceProps {
  scenarios: Scenario[];
  height?: string
}

export function ChatInterface({ scenarios, height = "600px" }: ChatInterfaceProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const currentScenario = scenarios[currentScenarioIndex]

  // Initialize with first bot message
  useEffect(() => {
    if (currentScenario?.steps.length > 0 && messages.length === 0) {
      setMessages([
        {
          id: "initial",
          sender: "bot",
          text: currentScenario.steps[0].question,
          timestamp: new Date(),
        },
      ])
    }
  }, [currentScenario, messages.length])

  // Auto-scroll to bottom of messages with smooth animation
  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollOptions = { behavior: "smooth" as const }
      messagesEndRef.current.scrollIntoView(scrollOptions)
    }
  }, [messages])

  const handleResponse = (response: string) => {
    // Add user response
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text: response,
        timestamp: new Date(),
      },
    ])

    // Move to next step
    const nextStep = currentStep + 1

    if (nextStep < currentScenario.steps.length) {
      // Add next bot message after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: currentScenario.steps[nextStep].question,
            timestamp: new Date(),
          },
        ])
        setCurrentStep(nextStep)
      }, 500)
    } else {
      // Chat is complete
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-final`,
            sender: "bot",
            text: currentScenario.completionMessage || "Thank you for your responses!",
            timestamp: new Date(),
          },
        ])
        setIsComplete(true)
      }, 500)
    }
  }

  const renderResponseComponent = () => {
    if (isComplete) return null

    const currentStepscenario = currentScenario.steps[currentStep]

    switch (currentStepscenario.responseType) {
      case ResponseType.Select:
        return <SelectResponse options={currentStepscenario.options || []} onSelect={handleResponse} />
      case ResponseType.Likert:
        return (
          <LikertResponse
            question={currentStepscenario.likertQuestion || "Rate your willingness:"}
            onSelect={handleResponse}
          />
        )
      default:
        return null
    }
  }

  const nextOrCompleteScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      // Move to next scenario
      setCurrentScenarioIndex(prev => prev + 1)
      setMessages([
        {
          id: "initial-reset",
          sender: "bot",
          text: scenarios[currentScenarioIndex + 1].steps[0].question,
          timestamp: new Date(),
        },
      ])
      setCurrentStep(0)
      setIsComplete(false)
    } else {
      // All scenarios complete, navigate to completion page
      router.push('/completion')
    }
  }

  return (
    <div 
      className="flex flex-col rounded-lg border shadow-sm overflow-hidden" 
      style={{ height }}
    >
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 p-4 space-y-4 bg-muted/20"
        style={{ scrollBehavior: "smooth" }}
      >
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"} animate-fade-in`}
          >
            <div className="flex items-center gap-2 max-w-[80%]">
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
                  <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground" />
                </Avatar>
              )}

              <Card className={`p-3 ${message.sender === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                <p>{message.text}</p>
              </Card>

              {message.sender === "user" && (
                <Avatar className="h-8 w-8 bg-secondary flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </Avatar>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-card">
        {isComplete ? (
          <Button onClick={nextOrCompleteScenario} className="w-full">
            {currentScenarioIndex === scenarios.length - 1 ? "Complete Task" : "Next Scenario"}
          </Button>
        ) : (
          renderResponseComponent()
        )}
      </div>
    </div>
  )
}
