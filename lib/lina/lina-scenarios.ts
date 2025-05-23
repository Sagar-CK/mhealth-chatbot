import { type Scenario, ResponseType } from "../types";

export const linaScenarios: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! My name is Echo. I'm here to listen and help you explore your thoughts and feelings.\n\n" +
                    "In this check-in, we will talk about your mental health and how you have been feeling lately.\n\n" +
                    "Let’s begin whenever you’re ready.",
                responseType: ResponseType.Select,
                options: ["I am ready to share my feelings."],
            },
            {
                question:
                    "Do you want to talk more about how you’re feeling right now?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "Have you been feeling stressed recently?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "Have you felt lonely at any point today?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "Have you experienced any strong emotions today?",
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
                    "Now let’s imagine you've had a quiet day to yourself only. You’ve spent the day at home.\n\n" +
                    "Did you get a chance to do anything active or outdoors today?",
                responseType: ResponseType.Select,
                options: ["Not really, I stayed inside all day."],
            },
            {
                question:
                    "Thank you for sharing. \n" +
                    "Have you been interested in exploring new things?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question: "Have you exercised at least once recently?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question: "Have you been dealing with your problems in a good way?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question:
                    "Have you been consuming alcohol or other substances to pass the time or cope with issues?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
        ],
        completionMessage:
            "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.",
    },
];
