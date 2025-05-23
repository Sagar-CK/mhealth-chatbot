"use client"

import {useState, useRef, useEffect} from "react"
import {Avatar} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {BotMessageSquareIcon, User} from 'lucide-react'
import {LikertResponse} from "@/components/chat/likert-response"
import {type Scenario, type Message, ResponseType} from "@/lib/yushan/types"
import {useRouter} from "next/navigation"
import {api} from "@/trpc/react"
import {yushanStudy} from "@/lib/constants"
import {User as UserType} from "@/server/api/models/user"
import {mapWillingnessToNumber, stringifyWillingness} from "@/lib/utils"

interface YushanChatInterfaceProps {
    scenarios: Scenario[];
    user: UserType;
    height?: string
}

// Add TypingIndicator component
const TypingIndicator = () => {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
                <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground"/>
            </Avatar>
            <Card className="p-3 bg-muted w-[60px] flex items-center justify-center">
                <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                          style={{animationDelay: '0ms'}}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                          style={{animationDelay: '150ms'}}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                          style={{animationDelay: '300ms'}}></span>
                </div>
            </Card>
        </div>
    )
}

const UserTypingIndicator = () => {
    return (
        <div className="flex items-center gap-2 justify-end">
            <Card className="p-3 bg-primary text-primary-foreground w-[60px] flex items-center justify-center">
                <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"
                          style={{animationDelay: '0ms'}}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"
                          style={{animationDelay: '150ms'}}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"
                          style={{animationDelay: '300ms'}}></span>
                </div>
            </Card>
            <Avatar className="h-8 w-8 bg-secondary flex items-center justify-center shrink-0">
                <User className="h-4 w-4 text-secondary-foreground"/>
            </Avatar>
        </div>
    );
};


export function YushanChatInterface({scenarios, user, height = "600px"}: YushanChatInterfaceProps) {
    const router = useRouter()
    const [messages, setMessages] = useState<Message[]>([])
    const [currentStep, setCurrentStep] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [userTyping, setUserTyping] = useState(false)
    const [chatbotTyping, setChatbotTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const messagesContainerRef = useRef<HTMLDivElement>(null)
    const [userWillingness, setUserWillingness] = useState<number[]>([-1, -1, -1, -1, -1]);
    const createMessage = api.messages.create.useMutation()

    const chatbotIndex = Number(user.condition);
    const selectedScenario = scenarios[chatbotIndex];
    const createSdiScore = api.sdiScore.create.useMutation()

    // Initialize with first bot message
    useEffect(() => {
        if (selectedScenario?.steps.length > 0 && messages.length === 0) {
            setChatbotTyping(true);
            setUserTyping(false);
            setTimeout(() => {
                setMessages([{
                    id: `${selectedScenario.title}-0-bot`,
                    sender: "bot",
                    text: selectedScenario.steps[0].question,
                    timestamp: new Date(),
                    user_id: user.user_id,
                    scenario: selectedScenario.title,
                },
                ]);
                setChatbotTyping(false);
                setUserTyping(true);
            }, 1000);
        }
    }, [chatbotIndex, messages.length, user.user_id]);

    // Auto-scroll to bottom of messages with smooth animation
    useEffect(() => {
        if (messagesEndRef.current) {
            const scrollOptions = {behavior: "smooth" as const}
            messagesEndRef.current.scrollIntoView(scrollOptions)
        }
    }, [messages])

    const renderResponseComponent = () => {
        if (isComplete) return null

        const likertWithRespondStep = selectedScenario.steps[currentStep]
        if (likertWithRespondStep.type === ResponseType.LikertWithRespond) {
            return (
                <LikertResponse
                    question={likertWithRespondStep.likertQuestion || "Rate your willingness:"}
                    onSelect={(willingness) => {
                        setUserTyping(false);
                        const numericWillingness = mapWillingnessToNumber(willingness);

                        // update willingness
                        const newWillingness = [...userWillingness];
                        newWillingness[currentStep] = numericWillingness;
                        setUserWillingness(newWillingness);
                        // render
                        handleResponse(stringifyWillingness(
                            numericWillingness - 1,
                            likertWithRespondStep.userRespond,
                            likertWithRespondStep.topic))
                    }}
                    scale={likertWithRespondStep.likertScale}
                />
            );
        }
        return null;
    };

    useEffect(() => {
        console.warn("✅ Updated userWillingness: ", userWillingness);

        // add SDI to db
        const allAnswered = userWillingness.every(w => w !== -1);
        if (allAnswered) {
            createSdiScore.mutate({
                user_id: user.user_id,
                scenario: selectedScenario.title,
                user_willingness_1: userWillingness[0],
                user_willingness_2: userWillingness[1],
                user_willingness_3: userWillingness[2],
                user_willingness_4: userWillingness[3],
                user_willingness_5: userWillingness[4],
                timestamp: new Date()
            });
            setIsComplete(true);
        } else {
            console.warn("SDI score submission skipped: not all responses completed.");
        }
    }, [userWillingness]);

    const handleResponse = async (response: string) => {
        // Add user response
        const userMessage = {
            id: `${selectedScenario.title}-${currentStep}-user`,
            sender: "user" as const,
            text: response,
            timestamp: new Date(),
            user_id: user.user_id,
            scenario: selectedScenario.title
        };

        setMessages((prev) => [...prev, userMessage]);

        // Save message to server
        createMessage.mutate(userMessage)

        // Move to next step
        const nextStep = currentStep + 1;

        if (nextStep < selectedScenario.steps.length) {
            // Add next bot message after a short delay
            setChatbotTyping(true);
            setUserTyping(false);
            setTimeout(() => {
                const botMessage = {
                    id: `${selectedScenario.title}-${nextStep}-bot`,
                    sender: "bot" as const,
                    text: selectedScenario.steps[nextStep].question,
                    timestamp: new Date(),
                    user_id: user.user_id,
                    scenario: selectedScenario.title
                };

                setMessages((prev) => [...prev, botMessage]);
                createMessage.mutate(botMessage)
                setCurrentStep(nextStep);
                setChatbotTyping(false);
                setUserTyping(true);
            }, 1000);
        } else {
            // Chat is complete
            setTimeout(() => {
                const finalMessage = {
                    id: `${selectedScenario.title}-${selectedScenario.steps.length}-bot`,
                    sender: "bot" as const,
                    text: selectedScenario.completionMessage || "Thank you for your responses!",
                    timestamp: new Date(),
                    user_id: user.user_id,
                    scenario: selectedScenario.title
                };
                setMessages((prev) => [...prev, finalMessage]);
                createMessage.mutate(finalMessage)
                setChatbotTyping(false);
                setUserTyping(false);
            }, 1000);
        }
    }

    const nextOrCompleteScenario = () => {
        router.push(`/completion?study_id=${yushanStudy}&uid=${user.user_id}`)
    }

    return (
        <div
            className="flex flex-col rounded-lg border shadow-sm overflow-hidden"
            style={{height}}
        >
            <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 p-4 space-y-4 bg-muted/20"
                style={{scrollBehavior: "smooth"}}
            >
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"} animate-fade-in`}
                    >
                        <div className="flex items-center gap-2 max-w-[80%]">
                            {message.sender === "bot" && (
                                <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
                                    <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground"/>
                                </Avatar>
                            )}

                            <Card
                                className={`p-3 ${message.sender === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                                <p>{message.text}</p>
                            </Card>

                            {message.sender === "user" && (
                                <Avatar className="h-8 w-8 bg-secondary flex items-center justify-center shrink-0">
                                    <User className="h-4 w-4 text-secondary-foreground"/>
                                </Avatar>
                            )}
                        </div>
                    </div>
                ))}
                {chatbotTyping && <TypingIndicator/>}
                {userTyping && <UserTypingIndicator/>}
                <div ref={messagesEndRef}/>
            </div>

            <div className="p-4 border-t bg-card">
                {isComplete ? (
                    <Button onClick={nextOrCompleteScenario} className="w-full">
                        End Conversation
                    </Button>
                ) : (
                    renderResponseComponent()
                )}
            </div>
        </div>
    )
}
