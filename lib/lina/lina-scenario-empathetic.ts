import { type Scenario, ResponseType } from "../types";

export const linaScenarioEmpathetic: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! My name is Echo. I'm here to listen and help you explore your thoughts and feelings.\n\n" +
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
                    "Do you want to talk more about how you’re feeling right now? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Sometimes stress can build up with time, especially during long heavy days, or when things feel overwhelming.\n" +
                    "Have you been feeling stressed recently? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Apart from stress, it’s also very common to experience feeling lonely, whether during quiet or busy days, even if just for a short moment.\n" +
                    "Have you felt lonely at any point today? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "From time to time, you might feel a certain type of way that might be difficult to describe—strong emotions that can be hard to put into words. " +
                    "It can be very helpful, however, to try and express them.\n" +
                    "Have you experienced any strong emotions today?",
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
                    "Have you been interested in exploring new things?",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Apart from being adventurous, regular exercise can help shift your mood and avoid feelings of restlessness and low energy.\n" +
                    "Have you exercised at least once recently? ",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "Having the day to yourself can sometimes give you the space to think about your problems and try to solve them, or cope with them in different ways.\n" +
                    "Have you been dealing with your problems in a good way?",
                responseType: ResponseType.Likert,
                likertScale: 5
            },
            {
                question:
                    "It often happens that people turn to substances like cigarettes or alcohol as coping mechanisms against stress or problems. " +
                    "In other cases, these are also consumed to simply pass the time.\n" +
                    "Have you been consuming alcohol or other substances to pass the time or cope with issues?",
                responseType: ResponseType.Likert,
                likertScale: 5
            }
        ],
        completionMessage:
            "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being."
    }
];
