import { type Scenario, ResponseType } from "../types";

export const linaScenarios: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! My name is Echo. I'm here to listen and help you explore your thoughts and feelings.\n" +
                    "In some parts of this check-up, I will present a situation with only one possible response for you to select. " +
                    "In other ones, I will ask questions where you need to answer how comfortable you would feel sharing information. " +
                    "You can answer at your own pace, there are no right or wrong responses.\n" +
                    "Let’s start with a simple situation. Let’s imagine something that might happen on a long day.\n\n" +
                    "You’ve had a heavy day, and you're just not feeling like yourself.\n\n" +
                    "How have you been feeling today?",
                responseType: ResponseType.Select,
                options: ["I’ve been feeling off today, but I haven’t really talked about it with anyone."],
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
                    "Now let’s imagine a different kind of day.\n\n" +
                    "You've had a quiet day to yourself only — no classes, no major plans. You’ve spent the day at home.\n\n" +
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
