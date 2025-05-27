import { type Scenario, ResponseType } from "../types";

export const linaScenarios: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! I am your mental health chatbot. I am here to listen and help you explore your thoughts and feelings.\n\n" +
                    "In this check-in, we will talk about your mental health and focus on how you have been feeling lately.\n\n" +
                    "Let’s begin.",
                responseType: ResponseType.Select,
                options: ["I am ready to share how I have been feeling."],
            },
            {
                question:
                    "Could you describe your most pleasant situation today?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "How stressed do you feel right now?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "How lonely do you feel at the moment?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "Could you describe your most unpleasant situation today?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
        ],
    },
    {
        title: "behavioural",
        steps: [
            {
                question:
                    "Now let's move to your daily activities and behaviours.",
                responseType: ResponseType.Select,
                options: ["I am ready to reflect on how I have been doing lately."],
            },
            {
                question:
                    "Thank you for sharing. \n" +
                    "Did you exercise today?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question: "Have you been interested in new things?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question: "Have you been dealing with your problems well?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "What substances did you use last night and how much? (e.g., alcohol, cigarettes, soft drugs, hard drugs)",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
        ],
        completionMessage:
            "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.",
    },
];
