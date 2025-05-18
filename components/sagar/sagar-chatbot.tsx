"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BotMessageSquareIcon, User } from 'lucide-react'
import { SelectResponse } from "@/components/chat/select-response"
import { LikertResponse } from "@/components/chat/likert-response"
import { type Scenario, type Message, ResponseType, type QuestionStep, type StatementStep, Severity } from "@/lib/sagar/types"
import { useRouter } from "next/navigation"
import { api } from "@/trpc/react"
import { sagarStudy } from "@/lib/constants"
import { User as UserType } from "@/server/api/models/user"
import { mapWillingnessToNumber, stringifyWillingnessSeverity } from "@/lib/utils"

interface SagarChatInterfaceProps {
  scenarios: Scenario[];
  user: UserType;
  height?: string
}

// Add TypingIndicator component
const TypingIndicator = () => {
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

interface QuestionState {
  willingness?: number
  severity?: Severity
}

export function SagarChatInterface({ scenarios, user, height = "600px" }: SagarChatInterfaceProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [questionState, setQuestionState] = useState<QuestionState>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const currentScenario = scenarios[currentScenarioIndex]

  const createSelfDisclosure = api.selfDisclosure.create.useMutation()

  // Initialize with first bot message
  useEffect(() => {
    if (currentScenario?.steps.length > 0 && messages.length === 0) {
      const firstStep = currentScenario.steps[0]
      const messageText = firstStep.type === ResponseType.Statement
        ? (firstStep as StatementStep).text
        : (firstStep as QuestionStep).question

      const initialMessage = {
        id: crypto.randomUUID(),
        sender: "bot" as const,
        text: messageText,
        timestamp: new Date(),
        user_id: user.user_id,
        scenario: currentScenario.title
      }

      setMessages([initialMessage])
    }
  }, [currentScenario, messages.length, user.user_id])

  // Auto-scroll to bottom of messages with smooth animation
  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollOptions = { behavior: "smooth" as const }
      messagesEndRef.current.scrollIntoView(scrollOptions)
    }
  }, [messages])

  const renderResponseComponent = () => {
    if (isComplete) return null

    const currentStepData = currentScenario.steps[currentStep]

    if (currentStepData.type === ResponseType.Statement) {
      const statementStep = currentStepData as StatementStep
      return <SelectResponse options={statementStep.options} onSelect={handleResponse} />
    } else if (currentStepData.type === ResponseType.Question) {
      const questionStep = currentStepData as QuestionStep

      // If we haven't asked about willingness yet
      if (questionState.willingness === undefined && !isTyping) {
        return (
          <div className="space-y-4">
            <LikertResponse
              question="How willing are you to answer this question?"
              onSelect={(willingness) => {
                // we need to map willingness to a number from the likert scale
                const willingnessNum = mapWillingnessToNumber(willingness)
                setQuestionState(prev => ({ ...prev, willingness: willingnessNum }))
              }}
              scale={questionStep.likertScale}
            />
          </div>
        )
      }

      // If we have willingness but not severity
      if (questionState.severity === undefined && questionState.willingness !== undefined) {
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">How severe do you perceive this question to be?</p>
            <SelectResponse
              options={[Severity.Low, Severity.Medium, Severity.High]}
              onSelect={(severity) => {
                const severityValue = severity as Severity
                setQuestionState(prev => ({ ...prev, severity: severityValue }))
              }}
            />
          </div>
        )
      }
    }
    return null
  }

  // Add effect to handle response after severity is set
  useEffect(() => {
    if (questionState.willingness !== undefined && questionState.severity !== undefined) {
      const currentStepData = currentScenario.steps[currentStep]
      if (currentStepData.type === ResponseType.Question) {
        const questionStep = currentStepData as QuestionStep
        handleResponse(stringifyWillingnessSeverity(questionState.willingness, questionState.severity, questionStep.likertScale))
      }
    }
  }, [questionState.severity, questionState.willingness, currentStep, currentScenario.steps])

  const handleResponse = async (response: string) => {
    const currentStepData = currentScenario.steps[currentStep]

    if (currentStepData.type === ResponseType.Question) {
      const questionStep = currentStepData as QuestionStep

      // Store self-disclosure data when we have both willingness and severity
      if (questionState.willingness !== undefined && questionState.severity !== undefined) {
        createSelfDisclosure.mutate({
          user_id: user.user_id,
          scenario: currentScenario.title,
          question: questionStep.question,
          question_severity: questionStep.severity,
          user_willingness: questionState.willingness,
          user_severity: questionState.severity,
          timestamp: new Date()
        })
      }

      // Add the user's response message
      const userMessage = {
        id: crypto.randomUUID(),
        sender: "user" as const,
        text: response,
        timestamp: new Date(),
        user_id: user.user_id,
        scenario: currentScenario.title
      };

      setMessages((prev) => [...prev, userMessage]);

      // Find the matching response based on the current question state
      const matchingResponse = questionStep.responses.find(
        r => r.conditions.willingness.includes(questionState.willingness!) && 
             r.conditions.severity.includes(questionState.severity!)
      )

      if (matchingResponse) {
        // Add the bot's response message
        const botMessage = {
          id: crypto.randomUUID(),
          sender: "bot" as const,
          text: matchingResponse.message,
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: currentScenario.title
        }

        setMessages(prev => [...prev, botMessage])
      }

      // Move to next step
      const nextStep = currentStep + 1;
      if (nextStep < currentScenario.steps.length) {
        // Reset question state before moving to next step
        setQuestionState({})

        if (Number(user.condition) === 2) {
          setIsTyping(true)
          // Show typing indicator for 2 seconds before showing the message
          setTimeout(() => {
            const nextStepData = currentScenario.steps[nextStep]
            const nextBotMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: nextStepData.type === ResponseType.Statement ? (nextStepData as StatementStep).text : (nextStepData as QuestionStep).question,
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title
            };

            setMessages((prev) => [...prev, nextBotMessage]);
            setCurrentStep(nextStep);
            setIsTyping(false)
          }, 2000);
        } else {
          // For other conditions, show message immediately
          const nextStepData = currentScenario.steps[nextStep]
          const nextBotMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text: nextStepData.type === ResponseType.Statement ? (nextStepData as StatementStep).text : (nextStepData as QuestionStep).question,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          };

          setMessages((prev) => [...prev, nextBotMessage]);
          setCurrentStep(nextStep);
        }
      } else {
        // Handle completion
        if (Number(user.condition) === 2) {
          setIsTyping(true)
          // Show typing indicator for 2 seconds before showing the final message
          setTimeout(() => {
            const finalMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: currentScenario.completionMessage || "Thank you for your responses!",
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title
            };

            setMessages((prev) => [...prev, finalMessage]);
            setIsComplete(true);
            setIsTyping(false)
          }, 2000);
        } else {
          const finalMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text: currentScenario.completionMessage || "Thank you for your responses!",
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          };

          setMessages((prev) => [...prev, finalMessage]);
          setIsComplete(true);
        }
      }
    } else {
      // Handle statement responses
      const userMessage = {
        id: crypto.randomUUID(),
        sender: "user" as const,
        text: response,
        timestamp: new Date(),
        user_id: user.user_id,
        scenario: currentScenario.title
      };

      setMessages((prev) => [...prev, userMessage]);

      // Move to next step
      const nextStep = currentStep + 1;
      if (nextStep < currentScenario.steps.length) {
        if (Number(user.condition) === 2) {
          setIsTyping(true)
          // Show typing indicator for 2 seconds before showing the message
          setTimeout(() => {
            const nextStepData = currentScenario.steps[nextStep]
            const nextBotMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: nextStepData.type === ResponseType.Statement ? (nextStepData as StatementStep).text : (nextStepData as QuestionStep).question,
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title
            };

            setMessages((prev) => [...prev, nextBotMessage]);
            setCurrentStep(nextStep);
            setIsTyping(false)
          }, 2000);
        } else {
          // For other conditions, show message immediately
          const nextStepData = currentScenario.steps[nextStep]
          const nextBotMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text: nextStepData.type === ResponseType.Statement ? (nextStepData as StatementStep).text : (nextStepData as QuestionStep).question,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          };

          setMessages((prev) => [...prev, nextBotMessage]);
          setCurrentStep(nextStep);
        }
      } else {
        // Handle completion
        if (Number(user.condition) === 2) {
          setIsTyping(true)
          // Show typing indicator for 2 seconds before showing the final message
          setTimeout(() => {
            const finalMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: currentScenario.completionMessage || "Thank you for your responses!",
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title
            };

            setMessages((prev) => [...prev, finalMessage]);
            setIsComplete(true);
            setIsTyping(false)
          }, 2000);
        } else {
          const finalMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text: currentScenario.completionMessage || "Thank you for your responses!",
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          };

          setMessages((prev) => [...prev, finalMessage]);
          setIsComplete(true);
        }
      }
    }
  }

  const nextOrCompleteScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      // Move to next scenario
      setCurrentScenarioIndex(prev => prev + 1)
      const nextScenario = scenarios[currentScenarioIndex + 1]
      const firstStep = nextScenario.steps[0]
      const messageText = firstStep.type === ResponseType.Statement
        ? (firstStep as StatementStep).text
        : (firstStep as QuestionStep).question

      setMessages([
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: messageText,
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: nextScenario.title
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
            {currentScenarioIndex === scenarios.length - 1 ? "Complete Task" : "Next Scenario"}
          </Button>
        ) : (
          renderResponseComponent()
        )}
      </div>
    </div>
  )
}
