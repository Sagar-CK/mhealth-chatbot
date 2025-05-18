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

export function SagarChatInterface({ scenarios, user }: SagarChatInterfaceProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [questionState, setQuestionState] = useState<QuestionState>({})
  const [isResponseDisabled, setIsResponseDisabled] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const currentScenario = scenarios[currentScenarioIndex]

  const createSelfDisclosure = api.selfDisclosure.create.useMutation()

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages])

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


  const handleResponse = async (response: string) => {
    setIsResponseDisabled(true)
    const currentStepData = currentScenario.steps[currentStep]

    if (currentStepData.type === ResponseType.Question) {
      const questionStep = currentStepData as QuestionStep

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
        if (Number(user.condition) === 2) {
          setIsTyping(true)
          setTimeout(() => {
            const botMessage = {
              id: crypto.randomUUID(),
              sender: "bot" as const,
              text: matchingResponse.message,
              timestamp: new Date(),
              user_id: user.user_id,
              scenario: currentScenario.title
            }
            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)

            // Move to next step after the matching response is shown
            const nextStep = currentStep + 1;
            if (nextStep < currentScenario.steps.length) {
              // Reset question state before moving to next step
              setQuestionState({})
              
              // Show typing indicator for next message
              setIsTyping(true)
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
              // Handle completion
              setIsTyping(true)
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
            }
          }, 2000)
        } else {
          const botMessage = {
            id: crypto.randomUUID(),
            sender: "bot" as const,
            text: matchingResponse.message,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: currentScenario.title
          }
          setMessages(prev => [...prev, botMessage])

          // Move to next step immediately for non-condition-2 cases
          const nextStep = currentStep + 1;
          if (nextStep < currentScenario.steps.length) {
            // Reset question state before moving to next step
            setQuestionState({})
            
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
          } else {
            // Handle completion
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
  
  const renderResponseComponent = () => {
    if (isComplete) return null

    const currentStepData = currentScenario.steps[currentStep]

    if (currentStepData.type === ResponseType.Statement) {
      const statementStep = currentStepData as StatementStep
      return <SelectResponse options={statementStep.options} onSelect={handleResponse} disabled={isResponseDisabled} />
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
              disabled={isResponseDisabled}
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
              disabled={isResponseDisabled}
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
        const willingness = questionState.willingness // Store in variable to satisfy type checker
        const severity = questionState.severity // Store in variable to satisfy type checker
        const capturedStep = currentStep // Capture the current step
        
        // Store self-disclosure data when we have both willingness and severity
        createSelfDisclosure.mutate({
          user_id: user.user_id,
          scenario: currentScenario.title,
          question: questionStep.question,
          question_severity: questionStep.severity,
          user_willingness: willingness,
          user_severity: severity,
          timestamp: new Date()
        }, {
          onSuccess: () => {
            // Use the captured step to ensure we're using the correct step data
            const stepData = currentScenario.steps[capturedStep]
            if (stepData.type === ResponseType.Question) {
              const qStep = stepData as QuestionStep
              handleResponse(stringifyWillingnessSeverity(willingness, severity, qStep.likertScale))
            }
          }
        })
      }
    }
  }, [questionState.severity, questionState.willingness, currentStep, currentScenario.steps])

  // Add effect to re-enable responses when moving to next step
  useEffect(() => {
    if (!isTyping) {
      setIsResponseDisabled(false)
    }
  }, [currentStep, isTyping])

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
    <div className="flex flex-col w-full h-full max-h-[500px] rounded-lg border shadow-sm overflow-hidden">
      <div
        ref={messagesContainerRef}
        className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 p-4 space-y-4 bg-muted/20"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"} animate-fade-in`}
          >
            <div className="flex items-center gap-2 max-w-[90%] md:max-w-[80%]">
              {message.sender === "bot" && (
                <Avatar className="h-6 w-6 md:h-8 md:w-8 bg-primary flex items-center justify-center shrink-0">
                  <BotMessageSquareIcon className="h-3 w-3 md:h-4 md:w-4 text-primary-foreground" />
                </Avatar>
              )}

              <Card className={`p-2 md:p-3 ${message.sender === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                <p className="text-sm md:text-base break-words">{message.text}</p>
              </Card>

              {message.sender === "user" && (
                <Avatar className="h-6 w-6 md:h-8 md:w-8 bg-secondary flex items-center justify-center shrink-0">
                  <User className="h-3 w-3 md:h-4 md:w-4 text-secondary-foreground" />
                </Avatar>
              )}
            </div>
          </div>
        ))}
        {isTyping && Number(user.condition) === 2 && <TypingIndicator />}
      </div>

      <div className="flex-shrink-0 p-2 md:p-4 border-t bg-card">
        {isComplete ? (
          <Button onClick={nextOrCompleteScenario} className="w-full text-sm md:text-base">
            {currentScenarioIndex === scenarios.length - 1 ? "Complete Task" : "Next Scenario"}
          </Button>
        ) : (
          renderResponseComponent()
        )}
      </div>
    </div>
  )
}
