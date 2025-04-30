import { type Scenario, ResponseType } from "../types";

export const sagarScenarios: Scenario[] = [
  {
    steps: [
      {
        question:
          "How often do you prioritize your mental well-being in your daily routine?",
        responseType: ResponseType.Select,
        options: ["Every day", "A few times a week", "Rarely", "Never"],
      },
      {
        question:
          "How comfortable are you discussing your mental health with close friends or family?",
        responseType: ResponseType.Likert,
        likertQuestion:
          "How willing would you be to self-disclose this information (your comfort level discussing mental health with close friends or family)?",
      },
      {
        question:
          "Which activity helps you the most when you're feeling stressed?",
        responseType: ResponseType.Select,
        options: [
          "Exercising",
          "Talking to someone",
          "Meditation or mindfulness",
          "Engaging in hobbies",
          "Other",
        ],
      },
      {
        question: "How often do you experience feelings of anxiety or sadness?",
        responseType: ResponseType.Likert,
        likertQuestion:
          "How willing would you be to self-disclose this information (how often you experience feelings of anxiety or sadness)?",
      },
    ],
    completionMessage:
      "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.",
  },
];
