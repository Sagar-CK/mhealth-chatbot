import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Severity } from "@/lib/sagar/types";
export const controlScenarios: Scenario[] = [
  {
    title: "mental-health-assessment",
    steps: [
      {
        type: ResponseType.Statement,
        text: "Let's talk about mental health and well-being. How would you like to proceed?",
        option: "I'm comfortable discussing my mental health"
      },
      { 
        type: ResponseType.Question,
        question: "How often do you experience feelings of anxiety or sadness?",
        severity: Severity.Medium,
        likertScale: 5,
        responses: [
          {
            conditions: {
              willingness: [1, 2],
              severity: [Severity.Medium, Severity.High],
            },
            message: "I understand this might be difficult to discuss. Thanks for sharing."
          },
          {
            conditions: {
              willingness: [3, 4, 5],
              severity: [Severity.Medium, Severity.High],
            },
            message: "Thanks for sharing despite the intensity of the question."
          },
          {
            conditions: {
              willingness: [3, 4, 5], 
              severity: [Severity.Low],
            },
            message: "I appreciate your openness. Let's move on to the next question."
          },
          {
            conditions: {
              willingness: [1, 2],
              severity: [Severity.Low],
            },
            message: "Thank you for sharing. Let's move on to the next question."
          }
        ]
      },
      {
        type: ResponseType.Statement,
        text: "What activities do you find most helpful for managing stress?",
        option: "Exercise and physical activity"
      }
    ],
    completionMessage: "Thank you for sharing your thoughts and experiences. Your responses help us better understand how to support mental well-being."
  }
];