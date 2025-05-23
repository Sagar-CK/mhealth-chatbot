import { type Scenario, ResponseType } from "../types";

export const linaScenarios: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! I am you mental health chatbot. I am here to listen and help you explore your thoughts and feelings.\n\n" +
                    "In this check-in, we will talk about your mental health and how you have been feeling lately.\n\n" +
                    "Let’s begin whenever you’re ready.",
                responseType: ResponseType.Select,
                options: ["I am ready to share my feelings."],
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
                    "Now let’s imagine you've had a quiet day to yourself only. You’ve spent the day at home.\n\n" +
                    "Did you get a chance to do anything active or outdoors today?",
                responseType: ResponseType.Select,
                options: ["Not really, I stayed inside all day."],
            },
            {
                question:
                    "Thank you for sharing. \n" +
                    "Have you been interested in new things?",
                responseType: ResponseType.Likert,
                likertScale: 5,
            },
            {
                question: "Did you exercise today?",
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
