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
      <Avatar className="h-7 w-7 md:h-8 md:w-8 bg-primary flex items-center justify-center shrink-0">
        <BotMessageSquareIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
      </Avatar>
      <Card className="p-2.5 md:p-3 bg-muted w-[60px] flex items-center justify-center shadow-sm">
        <div className="flex space-x-1.5">
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

// Add these helper functions after the TypingIndicator component
const createMessage = (
  sender: "bot" | "user",
  text: string,
  user_id: string,
  scenario: string
): Message => ({
  id: crypto.randomUUID(),
  sender,
  text,
  timestamp: new Date(),
  user_id,
  scenario
})

const getStepText = (step: StatementStep | QuestionStep): string => {
  return step.type === ResponseType.Statement ? (step as StatementStep).text : (step as QuestionStep).question
}

const handleBotResponse = (
  response: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  user: UserType,
  scenario: string,
  condition: number,
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>,
  setIsProducingResponse: React.Dispatch<React.SetStateAction<boolean>>,
  onComplete?: () => void
) => {
  const botMessage = createMessage("bot", response, user.user_id, scenario)
  
  if (Number(condition) === 2) {
    setIsProducingResponse(true)
    // Calculate typing duration based on message length (roughly 50ms per character)
    const baseTypingDuration = Math.max(2000, response.length * 50)
    // Add random variation (±20%)
    const typingDuration = baseTypingDuration * (0.8 + Math.random() * 0.4)
    
    // Only 70% chance of having a pause
    const shouldPause = Math.random() < 0.7
    console.log("shouldPause", shouldPause)
    const numPauses = shouldPause ? 1 : 0
    let currentPause = 0
    
    const startTyping = () => {
      setIsTyping(true)
      
      if (currentPause < numPauses) {
        // If we're in a pause, wait longer
        const pauseDuration = 500 + Math.random() * 1500
        setTimeout(() => {
          setIsTyping(false)
          currentPause++
          // Wait before starting next typing session
          setTimeout(startTyping, 300 + Math.random() * 700)
        }, pauseDuration)
      } else {
        // Final typing session - no more pauses
        const finalTypingDuration = typingDuration / (numPauses + 1)
        setTimeout(() => {
          // First fade out the typing indicator
          setIsTyping(false)
          // Then wait a bit before showing the message
          setTimeout(() => {
            setMessages(prev => [...prev, botMessage])
            setIsProducingResponse(false)
            onComplete?.()
          }, 300) // Small delay between typing disappearing and message appearing
        }, finalTypingDuration)
      }
    }
    
    startTyping()
  } else {
    setMessages(prev => [...prev, botMessage])
    onComplete?.()
  }
}

const handleNextStep = (
  currentScenario: Scenario,
  currentStep: number,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>,
  user: UserType,
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>,
  setQuestionState: React.Dispatch<React.SetStateAction<QuestionState>>,
  setIsProducingResponse: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const nextStep = currentStep + 1
  
  // Reset question state before moving to next step
  setQuestionState({})
  
  if (nextStep < currentScenario.steps.length) {
    const nextStepData = currentScenario.steps[nextStep]
    const nextBotMessage = createMessage(
      "bot",
      getStepText(nextStepData),
      user.user_id,
      currentScenario.title
    )

    if (Number(user.condition) === 2) {
      setIsProducingResponse(true)
      // Calculate typing duration based on message length (roughly 50ms per character)
      const baseTypingDuration = Math.max(2000, getStepText(nextStepData).length * 50)
      // Add random variation (±20%)
      const typingDuration = baseTypingDuration * (0.8 + Math.random() * 0.4)
      
      // Only 70% chance of having a pause
      const shouldPause = Math.random() < 0.7
      console.log("shouldPause", shouldPause)
      const numPauses = shouldPause ? 1 : 0
      let currentPause = 0
      
      const startTyping = () => {
        setIsTyping(true)
        
        if (currentPause < numPauses) {
          // If we're in a pause, wait longer
          const pauseDuration = 500 + Math.random() * 1500
          setTimeout(() => {
            setIsTyping(false)
            currentPause++
            // Wait before starting next typing session
            setTimeout(startTyping, 300 + Math.random() * 700)
          }, pauseDuration)
        } else {
          // Final typing session - no more pauses
          const finalTypingDuration = typingDuration / (numPauses + 1)
          setTimeout(() => {
            // First fade out the typing indicator
            setIsTyping(false)
            // Then wait a bit before showing the message
            setTimeout(() => {
              setMessages(prev => [...prev, nextBotMessage])
              setCurrentStep(nextStep)
              setIsProducingResponse(false)
            }, 300) // Small delay between typing disappearing and message appearing
          }, finalTypingDuration)
        }
      }
      
      startTyping()
    } else {
      setMessages(prev => [...prev, nextBotMessage])
      setCurrentStep(nextStep)
    }
  } else {
    const finalMessage = createMessage(
      "bot",
      currentScenario.completionMessage || "Thank you for your responses!",
      user.user_id,
      currentScenario.title
    )

    if (Number(user.condition) === 2) {
      setIsProducingResponse(true)
      // Calculate typing duration based on message length (roughly 50ms per character)
      const baseTypingDuration = Math.max(2000, (currentScenario.completionMessage || "Thank you for your responses!").length * 50)
      // Add random variation (±20%)
      const typingDuration = baseTypingDuration * (0.8 + Math.random() * 0.4)
      
      // Only 70% chance of having a pause
      const shouldPause = Math.random() < 0.7
      console.log("shouldPause", shouldPause)
      const numPauses = shouldPause ? 1 : 0
      let currentPause = 0
      
      const startTyping = () => {
        setIsTyping(true)
        
        if (currentPause < numPauses) {
          // If we're in a pause, wait longer
          const pauseDuration = 500 + Math.random() * 1500
          setTimeout(() => {
            setIsTyping(false)
            currentPause++
            // Wait before starting next typing session
            setTimeout(startTyping, 300 + Math.random() * 700)
          }, pauseDuration)
        } else {
          // Final typing session - no more pauses
          const finalTypingDuration = typingDuration / (numPauses + 1)
          setTimeout(() => {
            // First fade out the typing indicator
            setIsTyping(false)
            // Then wait a bit before showing the message
            setTimeout(() => {
              setMessages(prev => [...prev, finalMessage])
              setIsComplete(true)
              setIsProducingResponse(false)
            }, 300) // Small delay between typing disappearing and message appearing
          }, finalTypingDuration)
        }
      }
      
      startTyping()
    } else {
      setMessages(prev => [...prev, finalMessage])
      setIsComplete(true)
    }
  }
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
  const [isProducingResponse, setIsProducingResponse] = useState(false)
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
      const initialMessage = createMessage(
        "bot",
        getStepText(firstStep),
        user.user_id,
        currentScenario.title
      )
      setMessages([initialMessage])
    }
  }, [])

  // Replace the handleResponse function with this simplified version
  const handleResponse = async (response: string) => {
    setIsResponseDisabled(true)
    const currentStepData = currentScenario.steps[currentStep]

    // Add user's response message
    const userMessage = createMessage("user", response, user.user_id, currentScenario.title)
    setMessages(prev => [...prev, userMessage])

    if (currentStepData.type === ResponseType.Question) {
      const questionStep = currentStepData as QuestionStep
      const matchingResponse = questionStep.responses.find(
        r => r.conditions.willingness.includes(questionState.willingness!) &&
          r.conditions.severity.includes(questionState.severity!)
      )

      if (matchingResponse) {
        handleBotResponse(
          matchingResponse.message,
          setMessages,
          user,
          currentScenario.title,
          Number(user.condition),
          setIsTyping,
          setIsProducingResponse,
          () => handleNextStep(
            currentScenario,
            currentStep,
            setMessages,
            setCurrentStep,
            setIsTyping,
            user,
            setIsComplete,
            setQuestionState,
            setIsProducingResponse
          )
        )
      }
    } else {
      handleNextStep(
        currentScenario,
        currentStep,
        setMessages,
        setCurrentStep,
        setIsTyping,
        user,
        setIsComplete,
        setQuestionState,
        setIsProducingResponse
      )
    }
  }
  
  const renderResponseComponent = () => {
    if (isComplete || isResponseDisabled || isTyping || isProducingResponse) return null

    const currentStepData = currentScenario.steps[currentStep]

    if (currentStepData.type === ResponseType.Statement) {
      const statementStep = currentStepData as StatementStep
      return (
        <div className="w-full">
          <SelectResponse 
            options={[statementStep.option]} 
            onSelect={handleResponse} 
            disabled={isResponseDisabled}
          />
        </div>
      )
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
        const willingness = questionState.willingness
        const severity = questionState.severity
        const capturedStep = currentStep
        
        setIsProducingResponse(true)
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
            const stepData = currentScenario.steps[capturedStep]
            if (stepData.type === ResponseType.Question) {
              const qStep = stepData as QuestionStep
              setIsResponseDisabled(true)
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
    <div className="flex flex-col w-full h-full max-h-[600px] md:max-h-[700px] rounded-lg border shadow-sm overflow-hidden bg-background">
      <div
        ref={messagesContainerRef}
        className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 p-3 md:p-4 space-y-3 md:space-y-4 bg-muted/10"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
          >
            <div className={`flex items-start gap-2 max-w-[85%] md:max-w-[75%] animate-[fadeInUp_0.3s_ease-out_forwards]`}>
              {message.sender === "bot" && (
                <Avatar className="h-7 w-7 md:h-8 md:w-8 bg-primary flex items-center justify-center shrink-0 mt-1">
                  <BotMessageSquareIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                </Avatar>
              )}

              <Card className={`p-2.5 md:p-3.5 ${
                message.sender === "bot" 
                  ? "bg-muted" 
                  : "bg-primary text-primary-foreground"
              } shadow-sm`}>
                <p className="text-sm md:text-base break-words leading-relaxed">{message.text}</p>
              </Card>

              {message.sender === "user" && (
                <Avatar className="h-7 w-7 md:h-8 md:w-8 bg-secondary flex items-center justify-center shrink-0 mt-1">
                  <User className="h-4 w-4 md:h-5 md:w-5 text-secondary-foreground" />
                </Avatar>
              )}
            </div>
          </div>
        ))}
        <div className={`transition-all duration-300 ${isTyping && Number(user.condition) === 2 ? 'opacity-100 animate-[fadeInUp_0.3s_ease-out_forwards]' : 'opacity-0 animate-[fadeOutDown_0.3s_ease-out_forwards]'}`}>
          <TypingIndicator />
        </div>
      </div>

      <div className="flex-shrink-0 p-3 md:p-4 border-t bg-card">
        {isComplete ? (
          <Button 
            onClick={nextOrCompleteScenario} 
            className="w-full text-sm md:text-base h-10 md:h-11 font-medium"
          >
            {currentScenarioIndex === scenarios.length - 1 ? "Complete Task Phase" : "Next Scenario"}
          </Button>
        ) : (
          <div className="space-y-3">
            {renderResponseComponent()}
          </div>
        )}
      </div>
    </div>
  )
}
