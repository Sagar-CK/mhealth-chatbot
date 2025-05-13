import { type Scenario, ResponseType } from "../types";

export const linaScenarios: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "Hello! My name is Echo. I'm here to listen and help you explore your thoughts and feelings.\n" +
                    "In some parts of this check-in, I will present a situation with only one response for you to choose from." +
                    " In others, I will ask a few questions about how comfortable you would feel sharing information. " +
                    "You can answer at your own pace, there are no right or wrong responses. \n" +
                    "Let’s start with a simple situation. Let’s imagine something that might happen on a typical day.\n" +
                    "\n" +
                    "\"Some days feel heavier than others. Maybe something disappointing happened, or you're just not feeling like yourself.\"\n" +
                    "\n" +
                    "Has anything been on your mind today?",
                responseType: ResponseType.Select,
                options: ["I have been feeling off today, but I haven’t really talked to anyone about it."],
            },
            {
                question:
                    "Thank you for sharing that. \n" +
                    "Some people feel better after expressing what’s on their mind. " +
                "How willing would you be to share how you're feeling right now?",
                responseType: ResponseType.Likert,
            },
            {
                question:
                    "Stress can build up over time, especially when things feel uncertain or overwhelming. \n" +
                    "How willing would you be to share if you have been feeling stressed recently?",
                responseType: ResponseType.Likert,
            },
            {
                question: "Feeling lonely, even briefly, is something many people experience, especially during quiet days. \n" +
                    "How willing would you be to share if you felt lonely today?",
                responseType: ResponseType.Likert,
            },
            {
                question: "And occasionally, people experience stronger emotions that are difficult to describe. \n" +
                    "How willing would you be to share if you had strong negative feelings about yourself or the world recently?",
                responseType: ResponseType.Likert,
            },
        ],
    },
    {
        title: "behavioural",
        steps: [
            {
                question: "Now let’s imagine a different kind of day.\n" +
                    "\n" +
                    "\"You've had a quiet day mostly to yourself—no classes, no major plans. You’ve spent the day at home.\"\n" +
                    "\n" +
                    "Did you get a chance to do anything active or outdoors today?",
                responseType: ResponseType.Select,
                options: ["Not really, I stayed inside all day."]
            },
            {
                question: "Thanks for sharing. \n" +
                    "It’s completely normal to have quiet days like that. Thinking about small parts of your day can sometimes offer helpful perspective. \n" +
                    "How willing would you be to share if you've been interested in exploring new things?",
                responseType: ResponseType.Likert,
            },
            {
                question: "Sometimes, doing something active can help shift our mood. \n" +
                    "How willing would you be to share if you have exercised at least once recently?",
                responseType: ResponseType.Likert,
            },
            {
                question: "On quiet days, feeling isolated can creep in, often leading people to turn to different coping strategies.\n" +
                    "How willing would you be to share if you’ve been managing problems well?",
                responseType: ResponseType.Likert,
            },
            {
                question: "Some people use substances like cigarettes or alcohol to cope with stress or pass the time. How willing would you be to share if you're using any substances currently?",
                responseType: ResponseType.Likert,
            },
        ],
        completionMessage:
            "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.",
    },
];
