import { type Scenario, ResponseType } from "../types";

export const linaScenarioEmpathetic: Scenario[] = [
    {
        title: "emotional",
        steps: [
            {
                question:
                    "HIIIIIIIIIIII",
                responseType: ResponseType.Select,
                options: ["I have been feeling off today, but I haven’t really talked to anyone about it."],
            },
            {
                question:
                    "Thank you for sharing that. \n" +
                    "Some people feel better after expressing what’s on their mind. " +
                    "How willing would you be to share how you're feeling right now?",
                responseType: ResponseType.Likert,
                likertScale: 5,
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
    }
];
