import { type Scenario, ResponseType } from "../types";
import seedrandom from 'seedrandom';

// Seeded shuffle function
function seededShuffle<T>(array: T[], seed: string): T[] {
    const rng = seedrandom(seed);
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shared introduction scenario
const introductionScenario: Scenario = {
    title: "introduction",
    steps: [
        {
            question:
                "Hello! I am your mental health chatbot. I am here to listen and help you explore your thoughts and feelings.\n" +
                "In this check-in, we will talk about your mental health and focus on how you have been feeling lately.\n\n" +
                "Let's begin.",
            responseType: ResponseType.Select,
            options: ["I am ready to share how I have been feeling."],
        }
    ]
};

// Emotional scenario
const emotionalScenario: Scenario = {
    title: "emotional",
    steps: [
        {
            question: "Could you describe your most pleasant situation today?",
            responseType: ResponseType.Likert,
            likertScale: 5,
        },
        {
            question: "How stressed do you feel right now?",
            responseType: ResponseType.Likert,
            likertScale: 5,
        },
        {
            question: "How lonely do you feel at the moment?",
            responseType: ResponseType.Likert,
            likertScale: 5,
        },
        {
            question: "Could you describe your most unpleasant situation today?",
            responseType: ResponseType.Likert,
            likertScale: 5,
        }
    ]
};

// Behavioral scenario
const behavioralScenario: Scenario = {
    title: "behavioural",
    steps: [
        {
            question: "Did you exercise today?",
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
            question: "What substances did you use last night and how much? (e.g., alcohol, cigarettes, soft drugs, hard drugs)",
            responseType: ResponseType.Likert,
            likertScale: 5,
        }
    ]
};

// Define the main scenarios array
export const linaScenarios: Scenario[] = [
    emotionalScenario,
    behavioralScenario
];

// Function to generate randomized scenarios for condition 1
export function getRandomizedScenarios(userId: string): Scenario[] {
    const scenariosToShuffle = [emotionalScenario, behavioralScenario];

    // Add condition identifier to seed to ensure different randomization per condition
    const randomizedMainScenarios = seededShuffle(scenariosToShuffle, `${userId}-condition1`);

    const scenariosWithCompletion = [...randomizedMainScenarios];
    const lastScenario = scenariosWithCompletion[scenariosWithCompletion.length - 1];
    if (!lastScenario.completionMessage) {
        lastScenario.completionMessage = "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.";
    }

    return [introductionScenario, ...scenariosWithCompletion];
}
