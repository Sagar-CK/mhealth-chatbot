import { type Scenario, ResponseType } from "../types";

export const linaScenarioEmpathetic: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! I'm Echo, your mental health chatbot. I'm here to listen and help you explore your thoughts and feelings.\n\n" +
                    "In this check-in, we will talk about your mental health and how you have been feeling lately.\n\n" +
                    "Take your time, there are no right or wrong answers.\n\n" +
                    "We can begin whenever you’re ready.",
                responseType: ResponseType.Select,
                options: ["I am ready to share my feelings."],
            },
            {
                question:
                    "Thank you for letting me know.\n" +
                    "Often people feel better after expressing their thoughts or feelings.\n" +
                    "Could you describe your most pleasant situation today? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Sometimes stress can build up with time, especially during long heavy days, or when things feel overwhelming.\n" +
                    "How stressed do you feel right now? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Apart from stress, it’s also very common to experience feeling lonely, whether during quiet or busy days, even if just for a short moment.\n" +
                    "How lonely do you feel at the moment? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "From time to time, you might feel a certain type of way that might be difficult to describe. " +
                    "Strong emotions that can be hard to put into words. It can be very helpful, however, to try and express them.\n" +
                    "Could you describe your most unpleasant situation today?",
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
                    "Now let’s imagine you've had a quiet day to yourself only. You’ve spent the day at home.\n\n" +
                    "Did you get a chance to do anything active or outdoors today? ",
                responseType: ResponseType.Select,
                options: ["Not really, I stayed inside all day."]
            },
            {
                question:
                    "Thank you for sharing this with me.\n" +
                    "It’s completely normal to have days like that where you don’t feel like going out or doing anything active. " +
                    "You might not be in the mood, and that is understandable. In this case, it often helps to be open to trying something new.\n" +
                    "Have you been interested in new things?",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Apart from being adventurous, regular exercise can help shift your mood and avoid feelings of restlessness and low energy.\n" +
                    "Did you exercise today? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "We all face challenges from time to time. Maybe you've tried making decisions, planning next steps, or taking action to sort things out.\n" +
                    "Have you been dealing with your problems well?",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "It often happens that people turn to substances like cigarettes or alcohol as coping mechanisms against stress or problems. " +
                    "In other cases, these are also consumed to simply pass the time.\n" +
                    "What substances did you use last night and how much? (e.g., alcohol, cigarettes, soft drugs, hard drugs)",
                responseType: ResponseType.Likert,
                likertScale: 5
            }
        ],
        completionMessage:
            "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being."
    }
];
