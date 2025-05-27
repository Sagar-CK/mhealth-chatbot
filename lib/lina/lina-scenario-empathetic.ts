import { type Scenario, ResponseType } from "../types";

export const linaScenarioEmpathetic: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "👋 Hello! I'm Echo, your mental health chatbot. I'm here to listen without judgment and support you as you explore your thoughts and feelings!\n\n" +
                    "In this check-in, we will talk about your mental health and focus on how you have been feeling lately. This is your space to share openly and honestly! " +
                    "Remember, there are no right or wrong answers here, only your authentic experience matters.\n\n" +
                    "We can begin whenever you feel ready.",
                responseType: ResponseType.Select,
                options: ["I am ready to share how I have been feeling."],
            },
            {
                question:
                    "Thank you for trusting me with your feelings, that takes courage! " +
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
    },
    {
        title: "behavioural",
        steps: [
            {
                question:
                    "Let's take a moment to reflect on how you've been managing different parts of your life lately.\n" +
                    "There's no pressure here, just whatever feels right to share!",
                responseType: ResponseType.Select,
                options: ["I am ready to reflect on how I have been doing lately."]
            },
            {
                question:
                    "Thank you for being open to exploring this with me!\n" +
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
                    "This is a common human experience, and whatever your relationship with substances, you won't be judged here.\n\n" +
                    "What substances did you use last night and how much? You can share as much or as little as feels comfortable.",
                responseType: ResponseType.Likert,
                likertScale: 5
            }
        ],
        completionMessage:
            "Thank you for taking this time to reflect with me on your mental health and well-being! Your willingness to explore these aspects of your experience shows real strength and self-awareness! " +
            "Remember, this kind of reflection is an ongoing process, and every step you take toward understanding yourself better matters."
    }
];