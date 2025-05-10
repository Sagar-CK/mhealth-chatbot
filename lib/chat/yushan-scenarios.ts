import { type Scenario, ResponseType } from "../types";

export const yushanScenarios: Scenario[] = [
  {
    title: "Baseline",
    steps: [
      {
        question: "Question 1",
        responseType: ResponseType.Select,
        options: ["Op1", "Op2", "Op3", "Op4"],
      },
      {
        question: "Q2",
        responseType: ResponseType.Likert,
        likertQuestion:
            "Sub",
      }
    ],
    completionMessage:
        "Thank you for reflecting on your mental health. Your responses help promote a better understanding of emotional well-being.",
  },
  {
    title: "Positive",
    steps: [],
    completionMessage:
      "You are done with interacting with the Positive Chatbot",
  },
  {
    title: "Negative",
    steps: [],
    completionMessage:
        "You are done with interacting with the Negative Chatbot",
  },
  {
    title: "More Disclosure",
    steps: [],
    completionMessage:
        "You are done with interacting with the Positive Chatbot \n" +
        "Thank you for participating in thiis research" +
        "Your responses help promote a better understanding of emotional well-being.",
  },
];
