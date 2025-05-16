"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BotMessageSquareIcon, User } from 'lucide-react'
import { SelectResponse } from "@/components/chat/select-response"
import { LikertResponse } from "@/components/chat/likert-response"
import { type Scenario, type Message, ResponseType } from "@/lib/types"
import { useRouter } from "next/navigation"
import { api } from "@/trpc/react"
import { sagarStudy } from "@/lib/constants"
import { User as UserType } from "@/server/api/models/user"

interface SagarChatInterfaceProps {
  scenarios: Scenario[];
  user: UserType;
  height?: string
}

// Add TypingIndicator component
const TypingIndicator = () => {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".")
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
        <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground" />
      </Avatar>
      <Card className="p-3 bg-muted w-[60px] flex items-center justify-center">
        <div className="flex space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </Card>
    </div>
  )
}

export function SagarChatInterface({ scenarios, user, height = "600px" }: SagarChatInterfaceProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const currentScenario = scenarios[currentScenarioIndex]

  const createMessage = api.messages.create.useMutation()


  // Initialize with first bot message
  useEffect(() => {
    if (currentScenario?.steps.length > 0 && messages.length === 0) {
      setMessages([
        {
          id: `${currentScenario.title}-0-bot`,
          sender: "bot",
          text: currentScenario.steps[0].question,
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: currentScenario.title
        },
      ])
    }
  }, [currentScenario, messages.length, user.user_id])

  // Auto-scroll to bottom of messages with smooth animation
  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollOptions = { behavior: "smooth" as const }
      messagesEndRef.current.scrollIntoView(scrollOptions)
    }
  }, [messages])

  const handleResponse = async (response: string) => {
    // Add user response
    const userMessage = {
      id: `${currentScenario.title}-${currentStep}-user`,
      sender: "user" as const,
      text: response,
      timestamp: new Date(),
      user_id: user.user_id,
      scenario: currentScenario.title
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Save message to server
    createMessage.mutate(userMessage)

    // Move to next step
    const nextStep = currentStep + 1;

    if (nextStep < currentScenario.steps.length) {
      if (Number(user.condition) === 2) {
        setIsTyping(true)
        // Show typing indicator for 2 seconds before showing the message
        setTimeout(() => {
          const botMessage = {
            id: `${currentScenario.title}-${nextStep}-bot`,
            sender: "bot" as const,
            text: currentScenario.steps[nextStep].question,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          };
          
          setMessages((prev) => [...prev, botMessage]);
          createMessage.mutate(botMessage)
          setCurrentStep(nextStep);
          setIsTyping(false)
        }, 2000);
      } else {
        // For other conditions, show message immediately
        const botMessage = {
          id: `${currentScenario.title}-${nextStep}-bot`,
          sender: "bot" as const,
          text: currentScenario.steps[nextStep].question,
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: currentScenario.title
        };
        
        setMessages((prev) => [...prev, botMessage]);
        createMessage.mutate(botMessage)
        setCurrentStep(nextStep);
      }
    } else {
      if (Number(user.condition) === 2) {
        setIsTyping(true)
        // Show typing indicator for 2 seconds before showing the completion message
        setTimeout(() => {
          const finalMessage = {
            id: `${currentScenario.title}-${currentScenario.steps.length}-bot`,
            sender: "bot" as const,
            text: currentScenario.completionMessage || "Thank you for your responses!",
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          };
          
          setMessages((prev) => [...prev, finalMessage]);
          createMessage.mutate(finalMessage)
          setIsComplete(true);
          setIsTyping(false)
        }, 2000);
      } else {
        // For other conditions, show completion message immediately
        const finalMessage = {
          id: `${currentScenario.title}-${currentScenario.steps.length}-bot`,
          sender: "bot" as const,
          text: currentScenario.completionMessage || "Thank you for your responses!",
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: currentScenario.title
        };
        
        setMessages((prev) => [...prev, finalMessage]);
        createMessage.mutate(finalMessage)
        setIsComplete(true);
      }
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
            scale={currentStepscenario.likertScale || 5}
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
          id: `${scenarios[currentScenarioIndex + 1].title}-0-bot`,
          sender: "bot",
          text: scenarios[currentScenarioIndex + 1].steps[0].question,
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: scenarios[currentScenarioIndex + 1].title
        },
      ])
      setCurrentStep(0)
      setIsComplete(false)
    } else {
      // All scenarios complete, navigate to completion page
      router.push(`/completion?study_id=${sagarStudy}&uid=${user.user_id}`)
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
        {isTyping && Number(user.condition) === 2 && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-card">
        {isComplete ? (
          <Button onClick={nextOrCompleteScenario} className="w-full">
            {currentScenarioIndex === scenarios.length - 1 ? `Complete Task (Condition: ${user.condition})` : "Next Scenario"}
          </Button>
        ) : (
          renderResponseComponent()
        )}
      </div>
    </div>
  )
}
