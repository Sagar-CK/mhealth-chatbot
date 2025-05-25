"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Volume2, BotMessageSquareIcon, User } from "lucide-react"
import { api } from "@/trpc/react"
import type { User as UserType } from "@/server/api/models/user"
import {
  type Scenario,
  type Message,
  ResponseType,
  type QuestionStep,
  type StatementStep,
  Severity,
} from "@/lib/manu/types"
import { Card } from "@/components/ui/card"
import { mapWillingnessToNumber, stringifyWillingnessSeverity } from "@/lib/utils"
import { LikertResponse } from "../chat/likert-response"
import { SelectResponse } from "../chat/select-response"
import { manuStudy } from "@/lib/constants"
import { useRouter } from "next/navigation"
import { AudioMessage } from "@/components/ui/audio-message"
import { PrivacyPolicyPopup } from "@/components/manu/privacy-popup"

interface AudioChatInterfaceProps {
  scenarios: Scenario[]
  user: UserType
  height?: string
}

// Add TypingIndicator
const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
        <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground" />
      </Avatar>
      <Card className="p-3 bg-muted w-[60px] flex items-center justify-center">
        <div className="flex space-x-1">
          <span
            className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </Card>
    </div>
  )
}

interface QuestionState {
  willingness?: number
  severity?: Severity
}

export function AudioChatInterface({ scenarios, user, height = "600px" }: AudioChatInterfaceProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [currentScenarioNo, setCurrentScenarioNo] = useState(0)
  const [currentStepNo, setCurrentStepNo] = useState(0)
  const [questionState, setQuestionState] = useState<QuestionState>({})
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(true)
  const [responseInProgress, setResponseInProgress] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const currentScenario = scenarios[currentScenarioNo]
  const createSelfDisclosure = api.selfDisclosure.create.useMutation()

  // Initialize with first bot message only after privacy policy is accepted
  useEffect(() => {
    if (currentScenario?.steps.length > 0 && messages.length === 0) {
      const firstStep = currentScenario.steps[0]
      const messageText =
        firstStep.type === ResponseType.Statement
          ? (firstStep as StatementStep).textAudio
          : (firstStep as QuestionStep).questionAudio

      const initialMessage = {
        id: crypto.randomUUID(),
        sender: "bot" as const,
        text: messageText,
        timestamp: new Date(),
        user_id: user.user_id,
        scenario: currentScenario.title,
      }

      setMessages([initialMessage])
    }
  }, [currentScenario, messages.length, user.user_id])

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollOptions = { behavior: "smooth" as const }
      messagesEndRef.current.scrollIntoView(scrollOptions)
    }
  }, [messages])

  const handlePrivacyPolicyConfirm = () => {
    setShowPrivacyPopup(false)
  }

  const renderResponseComponent = () => {
    if (isComplete || responseInProgress) return null

    const currentStepData = currentScenario.steps[currentStepNo]

    if (currentStepData.type === ResponseType.Statement) {
      const statementStep = currentStepData as StatementStep
      return <SelectResponse options={[statementStep.option]} onSelect={handleResponse} />
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
                setQuestionState((prev) => ({ ...prev, willingness: willingnessNum }))
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
                setQuestionState((prev) => ({ ...prev, severity: severityValue }))
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
      const currentStepData = currentScenario.steps[currentStepNo]
      if (currentStepData.type === ResponseType.Question) {
        const questionStep = currentStepData as QuestionStep
        handleResponse(
          stringifyWillingnessSeverity(questionState.willingness, questionState.severity, questionStep.likertScale),
        )
      }
    }
  }, [questionState.severity, questionState.willingness, currentStepNo, currentScenario.steps])

  const handleResponse = async (response: string) => {
    const currentStepData = currentScenario.steps[currentStepNo]
    setResponseInProgress(true)

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
          timestamp: new Date(),
        })
      }

      // Add the user's response message
      const userMessage = {
        id: crypto.randomUUID(),
        sender: "user" as const,
        text: response,
        timestamp: new Date(),
        user_id: user.user_id,
        scenario: currentScenario.title,
      }

      setMessages((prev) => [...prev, userMessage])

      // Find the matching response based on the current question state
      const matchingResponse = questionStep.responses.find(
        (r) =>
          r.conditions.willingness.includes(questionState.willingness!) &&
          r.conditions.severity.includes(questionState.severity!),
      )

      if (matchingResponse) {
        // Add the bot's response message
        const botMessage = {
          id: crypto.randomUUID(),
          sender: "bot" as const,
          text: matchingResponse.audioUrl,
          timestamp: new Date(),
          user_id: user.user_id,
          scenario: currentScenario.title,
          audioUrl: matchingResponse.audioUrl,
        }

        setMessages((prev) => [...prev, botMessage])
      }

      // Move to next step
      const nextStep = currentStepNo + 1
      if (nextStep < currentScenario.steps.length) {
        setIsTyping(true)
        // Show typing indicator for 2 seconds before showing the message
        setTimeout(() => {
          const nextStepData = currentScenario.steps[nextStep]

          const nextBotMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text:
              nextStepData.type === ResponseType.Statement
                ? (nextStepData as StatementStep).textAudio
                : (nextStepData as QuestionStep).questionAudio,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title,
          }

          setMessages((prev) => [...prev, nextBotMessage])
          setCurrentStepNo(nextStep)
          // Reset question state before moving to next step
          setQuestionState({})
          setIsTyping(false)
          setResponseInProgress(false)
        }, 2000)
      } else {
          setIsTyping(true)
          // Show typing indicator for 2 seconds before showing the final message
          setTimeout(() => {
            const finalMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: currentScenario.completionAudio,
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title,
            }

            setMessages((prev) => [...prev, finalMessage])
            setIsComplete(true)
            setIsTyping(false)
            setResponseInProgress(false)
          }, 2000)
      }
    } else {
      // Handle statement responses
      const userMessage = {
        id: crypto.randomUUID(),
        sender: "user" as const,
        text: response,
        timestamp: new Date(),
        user_id: user.user_id,
        scenario: currentScenario.title,
      }

      setMessages((prev) => [...prev, userMessage])

      // Move to next step
      const nextStep = currentStepNo + 1
      if (nextStep < currentScenario.steps.length) {
        setIsTyping(true)
        // Show typing indicator for 2 seconds before showing the message
        setTimeout(() => {
          const nextStepData = currentScenario.steps[nextStep]
          const nextBotMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text:
              nextStepData.type === ResponseType.Statement
                ? (nextStepData as StatementStep).textAudio
                : (nextStepData as QuestionStep).questionAudio,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title,
          }

          setMessages((prev) => [...prev, nextBotMessage])
          setCurrentStepNo(nextStep)
          setIsTyping(false)
          setResponseInProgress(false)
        }, 2000)
      } else {
          setIsTyping(true)
          // Show typing indicator for 2 seconds before showing the final message
          setTimeout(() => {
            const finalMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: currentScenario.completionAudio,
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title,
            }

            setMessages((prev) => [...prev, finalMessage])
            setIsComplete(true)
            setIsTyping(false)
            setResponseInProgress(false)
          }, 2000)
        }
      }
    }

  const nextOrCompleteScenario = () => {
    if (currentScenarioNo < scenarios.length - 1) {
      // Show privacy policy popup for next scenario
      if (Number(user.condition) === 2) {
        setShowPrivacyPopup(true)
      }

      // Move to next scenario
      setCurrentScenarioNo((prev) => prev + 1)
      setMessages([]) // Clear messages for new scenario
      setCurrentStepNo(0)
      setIsComplete(false)
      setQuestionState({})
    } else {
      // All scenarios complete, navigate to completion page
      router.push(`/completion?study_id=${manuStudy}&uid=${user.user_id}`)
    }
  }

  return (
    <>
      {Number(user.condition) === 2 && (
        <PrivacyPolicyPopup
          isOpen={showPrivacyPopup}
          onConfirm={handlePrivacyPolicyConfirm}
          audioUrl="audioFilesManu/welcome.mp3" // Replace with actual privacy policy audio URL
        />
      )}

      <div className="flex flex-col rounded-lg border shadow-sm overflow-auto bg-background" style={{ height }}>
        <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
          <Volume2 className="h-5 w-5" />
          <p className="text-sm font-medium">Please ensure your speakers are working</p>
        </div>

      {Number(user.condition) === 2 && (
            <div className="flex items-center gap-3 px-4 py-3 m-4 bg-blue-50 border border-blue-200 rounded-md text-blue-700 shadow-sm">
          <Volume2 className="h-5 w-5 text-blue-500" />
          <p className="text-sm font-medium text-blue-700">If you have any doubts about the privacy policy, you can listen to it again here.</p>
          <div className="ml-auto">
            <AudioMessage audioUrl="/path-to-privacy-policy-audio.mp3" />
          </div>
        </div>
      )}

        <>
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
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
                        <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground" />
                      </Avatar>
                      <AudioMessage audioUrl={message.text} />
                    </div>
                  )}

                  {message.sender === "user" && (
                    <>
                      <Avatar className="h-8 w-8 bg-secondary flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </Avatar>
                      <Card className={`p-3 bg-primary text-primary-foreground`}>
                        <p>{message.text}</p>
                      </Card>
                    </>
                  )}
                </div>
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-card">
            {isComplete ? (
              <Button onClick={nextOrCompleteScenario} className="w-full">
                {currentScenarioNo === scenarios.length - 1 ? "Complete Task" : "Next Scenario"}
              </Button>
            ) : (
              renderResponseComponent()
            )}
          </div>
        </>
    </div>
  </>
  )
}
