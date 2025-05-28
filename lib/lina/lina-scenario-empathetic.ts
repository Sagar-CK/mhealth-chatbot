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
                "👋 Hello! I'm Echo, your mental health chatbot. I'm here to listen without judgment and support you as you explore your thoughts and feelings.\n\n" +
                "In this check-in, we will talk about your mental health and focus on how you've been feeling lately and how you've been managing different aspects of your life. This is your space to share openly and honestly! " +
                "Remember, there are no right or wrong answers here, only your authentic experience matters.\n\n" +
                "We can begin whenever you feel ready.",
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
            question:
                "Many people find it healing to reflect on both the bright and challenging moments of their day. Let's start with something positive!\n\n" +
                "Could you describe your most pleasant situation today?",
            responseType: ResponseType.Likert,
            likertScale: 5
        },
        {
            question:
                "It's completely natural for stress to accumulate, especially when life feels demanding or uncertain. Your stress is valid, whatever level it might be.\n\n" +
                "How stressed do you feel right now?",
            responseType: ResponseType.Likert,
            likertScale: 5
        },
        {
            question:
                "Loneliness is one of the most universal human experiences — it can touch us even when we're surrounded by people, and it's nothing to be ashamed of.\n\n" +
                "How lonely do you feel at the moment?",
            responseType: ResponseType.Likert,
            likertScale: 5
        },
        {
            question:
                "Sometimes our most difficult experiences are the hardest to put into words, yet they often carry important messages about what we need.\n\n" +
                "Could you describe your most unpleasant situation today? " +
                "Remember, you're in control of how much or how little you share.",
            responseType: ResponseType.Likert,
            likertScale: 5
        }
    ]
};

// Behavioral scenario
const behavioralScenario: Scenario = {
    title: "behavioural",
    steps: [
        {
            question:
                "Let's take a moment to reflect on some aspects of your daily life and how you've been doing lately.\n" +
                "Movement and physical activity can be wonderful for our mental health, but it's important to honor where you are and what feels manageable.\n\n" +
                "Did you exercise today?",
            responseType: ResponseType.Likert,
            likertScale: 5
        },
        {
            question:
                "There are times when we feel curious or open to trying something different. Other times, we stick to what's familiar, and that's totally okay too!\n\n" +
                "Have you been interested in new things?",
            responseType: ResponseType.Likert,
            likertScale: 5
        },
        {
            question:
                "Everyone handles challenges differently, some days things go smoothly, other days feel tougher. There's no right way to manage it all.\n\n" +
                "Thinking about the difficulties you're currently facing, have you been dealing with your problems well?",
            responseType: ResponseType.Likert,
            likertScale: 5
        },
        {
            question:
                "Many people use various substances to cope with stress, socialize, or simply relax — this might include things like alcohol, cigarettes, or other substances. \n" +
                "This is a common human experience, and whatever your relationship with substances is, you won't be judged here.\n\n" +
                "What substances did you use last night and how much? You can share as much or as little as feels comfortable.",
            responseType: ResponseType.Likert,
            likertScale: 5
        }
    ],
    completionMessage: "Thank you for taking this time to reflect with me on your mental health and well-being!\n" +
        "Your willingness to explore these aspects of your experience shows real strength and self-awareness!\n" +
        "Remember, this kind of reflection is an ongoing process, and every step you take toward understanding yourself better matters."
};

// Function to generate randomized scenarios
export function getRandomizedEmpathethicScenarios(userId: string): Scenario[] {
    const scenariosToShuffle = [emotionalScenario, behavioralScenario];

    // Add condition identifier to seed to ensure different randomization per condition
    const randomizedMainScenarios = seededShuffle(scenariosToShuffle, `${userId}-condition2`);

    const scenariosWithCompletion = [...randomizedMainScenarios];
    const lastScenario = scenariosWithCompletion[scenariosWithCompletion.length - 1];
    lastScenario.completionMessage =
        "Thank you for taking this time to reflect with me on your mental health and well-being!\n" +
        "Your willingness to explore these aspects of your experience shows real strength and self-awareness!\n" +
        "Remember, this kind of reflection is an ongoing process, and every step you take toward understanding yourself better matters.";

    return [introductionScenario, ...scenariosWithCompletion];
}

export const linaScenarioEmpathetic: Scenario[] = [
    introductionScenario,
    emotionalScenario,
    behavioralScenario
];