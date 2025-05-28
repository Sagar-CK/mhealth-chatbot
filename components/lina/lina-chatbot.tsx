"use client"

import { useState, useRef, useEffect } from "react"
import { Fragment } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BotMessageSquareIcon, User } from 'lucide-react'
import { SelectResponse } from "@/components/chat/select-response"
import { LikertResponse } from "@/components/chat/likert-response"
import { type Scenario, type Message, ResponseType } from "@/lib/types"
import { useRouter } from "next/navigation"
import { api } from "@/trpc/react"
import { linaStudy } from "@/lib/constants"
import { User as UserType } from "@/server/api/models/user"


interface ChatInterfaceProps {
    scenarios: Scenario[];
    user: UserType;
    height?: string
}

export function LinaChatInterface({ scenarios, user, height = "600px" }: ChatInterfaceProps) {
    const router = useRouter()
    const [messages, setMessages] = useState<Message[]>([])
    const [currentStep, setCurrentStep] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(false)
    const [likertQuestionCounter, setLikertQuestionCounter] = useState(0) // Track Likert question number
    const [userResponsesData, setUserResponsesData] = useState<{[key: string]: number}>({}) // Store Likert responses
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const messagesContainerRef = useRef<HTMLDivElement>(null)
    const taskInstructionsRef = useRef<HTMLButtonElement>(null)

    const currentScenario = scenarios[currentScenarioIndex]

    const createMessage = api.messages.create.useMutation()
    const createUserResponse = api.userResponses.create.useMutation({
        onError: (error) => {
            console.error('Failed to save user response:', error);
        },
        onSuccess: (data) => {
            console.log('User response saved successfully:', data);
        }
    })

    // Helper function to convert Likert response to number
    const convertLikertToNumber = (response: string): number => {
        const likertMap: {[key: string]: number} = {
            "Not willing": 1,
            "Slightly willing": 2,
            "Moderately willing": 3,
            "Very willing": 4,
            "Extremely willing": 5
        }
        return likertMap[response] || 0;
    }

    // Helper function to get question type based on content
    const getQuestionType = (question: string): string => {
        if (question.includes("Could you describe your most pleasant situation today?")) return "pleasant_situation";
        if (question.includes("How stressed do you feel right now?")) return "stress";
        if (question.includes("How lonely do you feel at the moment?")) return "loneliness";
        if (question.includes("Could you describe your most unpleasant situation today?")) return "unpleasant_situation";
        if (question.includes("Did you exercise today?")) return "exercise";
        if (question.includes("Have you been interested in new things?")) return "new_things";
        if (question.includes("you been dealing with your problems well?")) return "problem_management";
        if (question.includes("What substances did you use last night and how much?")) return "substances";
        return "unknown";
    };

    useEffect(() => {
        const clickTaskInstructions = (attempts = 0) => {
            const button = Array.from(document.querySelectorAll('button'))
                .find(btn => btn.textContent?.trim() === 'Task Instructions');

            if (button) {
                button.click();
                return; // Stop trying once button is found
            } else if (attempts < 50) { // Increased attempts and longer timeout
                setTimeout(() => clickTaskInstructions(attempts + 1), 200); // More frequent checks
            }
        };

        // Wait longer before starting to look for the button
        const timeoutId = setTimeout(() => {
            clickTaskInstructions();
        }, 2000); // Increased initial delay

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const responseCount = Object.keys(userResponsesData).length;
        if (responseCount === 8) {
            saveUserResponsesWithData(userResponsesData);
        }
    }, [userResponsesData]);

    // Initialize with first bot message
    useEffect(() => {
        if (currentScenario?.steps.length > 0 && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setMessages([
                    {
                        id: `${currentScenario.title}-0-bot`,
                        sender: "bot",
                        text: currentScenario.steps[0].question,
                        timestamp: new Date(),
                        user_id: user.user_id,
                        scenario: currentScenario.title
                    },
                ]);
                setIsTyping(false);
            }, 1500);
        }
    }, [currentScenario, messages.length, user.user_id]);

    // Auto-scroll to bottom of messages with smooth animation
    useEffect(() => {
        if (messagesEndRef.current) {
            const scrollOptions = { behavior: "smooth" as const }
            messagesEndRef.current.scrollIntoView(scrollOptions)
        }
    }, [messages, isTyping])

    // Add a function to handle scrolling
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            const scrollOptions = { behavior: "smooth" as const }
            messagesEndRef.current.scrollIntoView(scrollOptions)
        }
    }

    // Function to save user responses to the database with provided data
    const saveUserResponsesWithData = async (responseData: {[key: string]: number}) => {
        try {
            // Skip saving if it's the introduction scenario
            if (currentScenario.title === "introduction") {
                return;
            }

            const dbResponseData = {
                user_id: user.user_id,
                user_condition: user.condition.toString(),
                scenario: currentScenario.title,
                // Initialize all Likert responses to 0
                question_1_likert_response: 0,
                question_2_likert_response: 0,
                question_3_likert_response: 0,
                question_4_likert_response: 0,
                question_5_likert_response: 0,
                question_6_likert_response: 0,
                question_7_likert_response: 0,
                question_8_likert_response: 0,
                timestamp: new Date(),
            };

            // Map question types to database fields
            const questionTypeToField: {[key: string]: string} = {
                "pleasant_situation": "question_1_likert_response",
                "stress": "question_2_likert_response",
                "loneliness": "question_3_likert_response",
                "unpleasant_situation": "question_4_likert_response",
                "exercise": "question_5_likert_response",
                "new_things": "question_6_likert_response",
                "problem_management": "question_7_likert_response",
                "substances": "question_8_likert_response"
            };

            // Update Likert responses if they exist
            Object.entries(responseData).forEach(([key, value]) => {
                if (key.startsWith('question_')) {
                    const questionNumber = key.split('_')[1];
                    const currentQuestion = currentScenario.steps[Number(questionNumber) - 1].question;
                    const questionType = getQuestionType(currentQuestion);
                    const dbField = questionTypeToField[questionType];

                    if (dbField) {
                        (dbResponseData as any)[dbField] = value;
                    }
                }
            });

            try {
                await createUserResponse.mutateAsync(dbResponseData);
            } catch (error) {
                console.error('Error saving response data:', error);
            }
        } catch (error) {
            console.error('Error in saveUserResponsesWithData:', error);
        }
    }

    const handleResponse = async (response: string) => {
        try {
            const userMessage = {
                id: `${currentScenario.title}-${currentStep}-user`,
                sender: "user" as const,
                text: response,
                timestamp: new Date(),
                user_id: user.user_id,
                scenario: currentScenario.title
            };

            setMessages((prev) => [...prev, userMessage]);
            createMessage.mutate(userMessage);
            scrollToBottom();

            // Handle response data collection
            const currentStepscenario = currentScenario.steps[currentStep];
            const isLastQuestion = currentStep === currentScenario.steps.length - 1;

            let updatedUserResponsesData = { ...userResponsesData };

            if (currentStepscenario.responseType === ResponseType.Likert) {
                const questionType = getQuestionType(currentStepscenario.question);
                const numericResponse = convertLikertToNumber(response);

                updatedUserResponsesData = {
                    ...updatedUserResponsesData,
                    [`question_${currentStep + 1}`]: numericResponse
                };

                // Update state
                setUserResponsesData(updatedUserResponsesData);
                setLikertQuestionCounter(prev => prev + 1);
            } else if (currentStepscenario.responseType === ResponseType.Select) {
                updatedUserResponsesData = {
                    ...updatedUserResponsesData,
                    [`select_${currentScenarioIndex}_${currentStep}`]: 7
                };
                setUserResponsesData(updatedUserResponsesData);
            }

            // Add custom response for Likert scale
            let customResponse = "";

            if (currentStepscenario.responseType === ResponseType.Likert && !isLastQuestion) {
                if (Number(user.condition) === 2) {
                    if (response === "Not willing") {
                        const notWillingMessages = [
                            "I hear you, and I want you to know that's completely okay! Your boundaries matter, and I respect them fully.",
                            "Thank you for your honesty, that takes courage too! You get to choose what feels safe to share, always.",
                            "I understand! Sometimes the most caring thing we can do for ourselves is to move at our own pace.",
                            "Your comfort and well-being come first! I'm here to support you however feels right for you.",
                            "That's perfectly valid! Protecting your emotional space is an act of self-care.",
                        ];
                        customResponse = notWillingMessages[Math.floor(Math.random() * notWillingMessages.length)];
                    } else if (response === "Slightly willing") {
                        const slightlyWillingMessages = [
                            "Thank you for being open to sharing! This small step matters.",
                            "I can sense this might feel a bit vulnerable, and I want you to know there's no pressure.",
                            "Even a small willingness to share is meaningful! We can take this as slowly as you need.",
                            "I appreciate your openness! Your pace is the right pace.",
                            "Thank you for trusting me with even this small step! It shows real strength to be open when it feels uncertain.",
                        ];
                        customResponse = slightlyWillingMessages[Math.floor(Math.random() * slightlyWillingMessages.length)];
                    } else if (response === "Moderately willing") {
                        const moderatelyWillingMessages = [
                            "Thank you for being open to sharing! I can sense you're finding your comfort level, and that's exactly right.",
                            "I appreciate your thoughtful approach to this! Taking time to consider what feels safe to share shows good self-awareness.",
                            "I'm glad you feel somewhat comfortable sharing! We can explore at whatever depth feels right for you.",
                            "Thank you for your cautious openness! It's perfectly normal to feel both willing and a bit hesitant.",
                            "I respect that you're willing to share while also being mindful of your boundaries! That balance is healthy."
                        ];
                        customResponse = moderatelyWillingMessages[Math.floor(Math.random() * moderatelyWillingMessages.length)];
                    } else if (response === "Very willing" || response === "Extremely willing") {
                        const willingMessages = [
                            "Thank you, your openness and trust mean so much!",
                            "Thank you for trusting me, please know that I'm here to help!",
                            "Thank you for agreeing to share with me! Sharing our inner experiences takes real bravery.",
                            "Your readiness to explore your feelings openly shows incredible strength! I'm here to listen and support you every step of the way.",
                            "I really appreciate your willingness to share your feelings and emotions with me!"
                        ];
                        customResponse = willingMessages[Math.floor(Math.random() * willingMessages.length)];
                    }
                }

                if (Number(user.condition) === 1) {
                    if (response === "Not willing" || response === "Slightly willing" || response === "Moderately willing" || response === "Very willing" || response === "Extremely willing") {
                        const notWillingMessagesNeutral = [
                            "Thank you for your response.",
                            "Noted. Let's continue with the next question.",
                            "Your response has been recorded.",
                            "Thank you. We'll proceed to the following question.",
                            "Response recorded. Moving on to the next question.",
                            "Understood. Let's move to the next question."
                        ];
                        customResponse = notWillingMessagesNeutral[Math.floor(Math.random() * notWillingMessagesNeutral.length)];
                    }
                }

                if (customResponse) {
                    setIsTyping(true);
                    scrollToBottom();
                    setTimeout(() => {
                        const customBotMessage = {
                            id: `${currentScenario.title}-${currentStep}-bot-custom`,
                            sender: "bot" as const,
                            text: customResponse,
                            timestamp: new Date(),
                            user_id: user.user_id,
                            scenario: currentScenario.title
                        };
                        setMessages((prev) => [...prev, customBotMessage]);
                        createMessage.mutate(customBotMessage);
                        setIsTyping(false);
                        scrollToBottom();

                        // Move to next step after custom response
                        const nextStep = currentStep + 1;

                        if (nextStep < currentScenario.steps.length) {
                            // Add next bot message after a delay
                            setTimeout(() => {
                                setIsTyping(true);
                                scrollToBottom();
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
                                    setIsTyping(false);
                                    scrollToBottom();
                                }, 1000);
                            }, 500);
                        } else {
                            setTimeout(() => {
                                setIsTyping(true);
                                scrollToBottom();
                                setTimeout(() => {
                                    const finalMessage = {
                                        id: `${currentScenario.title}-${currentScenario.steps.length}-bot`,
                                        sender: "bot" as const,
                                        text:
                                            currentScenarioIndex === scenarios.length - 1
                                                ? currentScenario.completionMessage
                                                : (Number(user.condition) === 1
                                                    ? (currentScenario.title === "introduction"
                                                        ? "Thank you, let's move on to the first question."
                                                        : "Thank you for your responses!")
                                                    : (currentScenario.title === "introduction"
                                                        ? "Thank you for trusting me with your feelings and being open to exploring them with me."
                                                        : "Thank you for sharing what you felt comfortable with. Let's move on when you're ready.")),
                                        timestamp: new Date(),
                                        user_id: user.user_id,
                                        scenario: currentScenario.title
                                    };

                                    setMessages((prev) => [...prev, finalMessage]);
                                    createMessage.mutate(finalMessage)
                                    setIsComplete(true);
                                    setIsTyping(false);
                                    scrollToBottom();

                                    // Only save responses if it's not the introduction scenario
                                    if (currentScenario.title !== "introduction") {
                                        saveUserResponsesWithData(updatedUserResponsesData);
                                    }
                                }, 1000);
                            }, 500);
                        }
                    }, 1000);
                }
            }

            // Move to next step if not a Likert response, if no custom response, or if it's the last question
            if (currentStepscenario.responseType !== ResponseType.Likert || !customResponse || isLastQuestion) {
                const nextStep = currentStep + 1;

                if (nextStep < currentScenario.steps.length) {
                    setIsTyping(true);
                    scrollToBottom();
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
                        setIsTyping(false);
                        scrollToBottom();
                    }, 1000);
                } else {
                    setIsTyping(true);
                    scrollToBottom();
                    setTimeout(() => {
                        const finalMessage = {
                            id: `${currentScenario.title}-${currentScenario.steps.length}-bot`,
                            sender: "bot" as const,
                            text:
                                currentScenarioIndex === scenarios.length - 1
                                    ? currentScenario.completionMessage
                                    : (Number(user.condition) === 1
                                        ? (currentScenario.title === "introduction"
                                            ? "Thank you, let's move on to the first question."
                                            : "Thank you for your responses!")
                                        : (currentScenario.title === "introduction"
                                            ? "Thank you for trusting me with your feelings and being open to exploring them with me."
                                            : "Thank you for sharing what you felt comfortable with. Let's move on when you're ready.")),
                            timestamp: new Date(),
                            user_id: user.user_id,
                            scenario: currentScenario.title
                        };

                        setMessages((prev) => [...prev, finalMessage]);
                        createMessage.mutate(finalMessage)
                        setIsComplete(true);
                        setIsTyping(false);
                        scrollToBottom();

                        // Only save responses if it's not the introduction scenario
                        if (currentScenario.title !== "introduction") {
                            saveUserResponsesWithData(updatedUserResponsesData);
                        }
                    }, 1000);
                }
            }
        } catch (error) {
            console.error('Error in handleResponse:', error);
        }
    }

    const renderResponseComponent = () => {
        if (isComplete) {
            return null;
        }

        const currentStepscenario = currentScenario.steps[currentStep];

        switch (currentStepscenario.responseType) {
            case ResponseType.Select:
                return (
                    <SelectResponse
                        options={currentStepscenario.options || []}
                        onSelect={handleResponse}
                    />
                );
            case ResponseType.Likert:
                return (
                    <LikertResponse
                        key={`likert-${currentScenarioIndex}-${currentStep}`}
                        question={currentStepscenario.likertQuestion || "Rate your willingness to share regarding this question:"}
                        onSelect={(response) => handleResponse(response)}
                        scale={(currentStepscenario.likertScale === 5 ? 5 : 7)}
                    />
                );
            default:
                return null;
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
            // Reset Likert tracking for new scenario
            setLikertQuestionCounter(0)
            setUserResponsesData({})
        } else {
            // All scenarios complete, navigate to completion page
            router.push(`/completion?study_id=${linaStudy}&uid=${user.user_id}`)
        }
    }

    const renderChatInterface = () => (
        <div
            className="flex flex-col rounded-lg border shadow-sm overflow-hidden h-full"
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
                        <div className="flex items-center gap-2 max-w-[85%]">
                            {message.sender === "bot" && (
                                <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
                                    <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground" />
                                </Avatar>
                            )}

                            <Card
                                className={`p-3 ${message.sender === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                                <p>
                                    {message.text.split("\n").map((line, index) => (
                                        <Fragment key={index}>
                                            {line}
                                            <br />
                                        </Fragment>
                                    ))}
                                </p>
                            </Card>

                            {message.sender === "user" && (
                                <Avatar className="h-8 w-8 bg-secondary flex items-center justify-center shrink-0">
                                    <User className="h-4 w-4 text-secondary-foreground" />
                                </Avatar>
                            )}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                        <div className="flex items-center gap-2 max-w-[85%]">
                            <Avatar className="h-8 w-8 bg-primary flex items-center justify-center shrink-0">
                                <BotMessageSquareIcon className="h-4 w-4 text-primary-foreground" />
                            </Avatar>
                            <Card className="p-3 bg-muted">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t bg-card mt-auto">
                {isComplete ? (
                    <Button onClick={nextOrCompleteScenario} className="w-full">
                        {currentScenarioIndex === scenarios.length - 1 ? `Complete Task (Condition: ${user.condition})` : "Next"}
                    </Button>
                ) : (
                    <div className="overflow-x-auto pb-2">
                        {renderResponseComponent()}
                    </div>
                )}
            </div>
        </div>
    )

    return renderChatInterface()
}