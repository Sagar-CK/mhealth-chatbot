import { type Scenario, ResponseType } from "@/lib/manu/types";
import { Severity } from "@/lib/manu/types";

export const manuScenarios: Scenario[] = [
  {
    title: "mental-health-assessment",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's talk about mental health and well-being. How would you like to proceed?",
        textAudio: "",
        options: [
          "I'm comfortable discussing my mental health",
        ]
      },
      {
        type: ResponseType.Question,
        question: "How often do you experience feelings of anxiety or sadness?",
        questionAudio: "",
        severity: Severity.Medium,
        likertScale: 5,
        responses: [
          {
            conditions: {
              willingness: [1, 2],
              severity: [Severity.Low],
            },
            message: "I understand this might be difficult to discuss. Would you like to talk about general stress management instead?"
          },
          {
            conditions: {
              willingness: [2, 3],
              severity: [Severity.Medium],
            },
            message: "Thank you for sharing. How do you typically cope with these feelings?"
          },
          {
            conditions: {
              willingness: [3, 4, 5],
              severity: [Severity.High],
            },
            message: "I appreciate your openness. Have you considered speaking with a mental health professional about this?"
          }
        ]
      },
      {
        type: ResponseType.Statement,
        textAudio: "What activities do you find most helpful for managing stress?",
        text: "",
        options: [
          "Exercise and physical activity",
        ]
      }
    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."
  }
];
