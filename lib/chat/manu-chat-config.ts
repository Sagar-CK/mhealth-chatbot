import { type AudioChatConfig} from "../types"

export const manuChatConfig : AudioChatConfig = {
  title: "Mental Health Self-Reflection Survey",
  steps: [
    {
        id: "1",
        question: "How often do you prioritize your mental well-being in your daily routine?",
        audioUrl: "/audio/mental-health-1.mp3",
        audioDuration: 12,
        likertScale: 5,
        likertQuestion: "How willing would you be to self-disclose this information (your comfort level discussing mental health with close friends or family)?",
    },
    {
        id: "2",
        question: "How comfortable are you discussing your mental health with close friends or family?",
        audioUrl: "/audio/mental-health-2.mp3",
        audioDuration: 9,
        likertScale: 5,
        likertQuestion: "How willing would you be to self-disclose this information (your comfort level discussing mental health with close friends or family)?",
    },
  ],
  completionMessage:
    "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.",
}
