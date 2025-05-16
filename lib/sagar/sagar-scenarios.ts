import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Severity } from "@/lib/sagar/types";

export const sagarScenarios: Scenario[] = [
  {
    title: "mental-health-assessment",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's talk about mental health and well-being. How would you like to proceed?",
        options: [
          "I'm comfortable discussing my mental health",
        ]
      },
      { 
        type: ResponseType.Question,
        question: "How often do you experience feelings of anxiety or sadness?",
        severity: Severity.Medium,
        likertScale: 5,
        responses: [
          {
            willingness: 1,
            severity: Severity.Low,
            message: "I understand this might be difficult to discuss. Would you like to talk about general stress management instead?"
          },
          {
            willingness: 2,
            severity: Severity.Medium,
            message: "Thank you for sharing. How do you typically cope with these feelings?"
          },
          {
            willingness: 3,
            severity: Severity.High,
            message: "I appreciate your openness. Have you considered speaking with a mental health professional about this?"
          }
        ]
      },
      {
        type: ResponseType.Statement,
        text: "What activities do you find most helpful for managing stress?",
        options: [
          "Exercise and physical activity",
        ]
      }
    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."
  }
];
