import { type Scenario, ResponseType } from "@/lib/sagar/types";
import { Severity } from "@/lib/sagar/types";

export function validateResponseCoverage(scenarios: Scenario[]) {
  for (const scenario of scenarios) {
    for (const step of scenario.steps) {
      if (step.type === ResponseType.Question) {
        const allWillingness = [1, 2, 3, 4, 5];
        const allSeverity = [Severity.Low, Severity.Medium, Severity.High];
        
        // For each severity level, check if all willingness levels are covered
        for (const severity of allSeverity) {
          const coveredWillingness = new Set<number>();
          
          // Check each response's conditions
          step.responses.forEach(response => {
            if (response.conditions.severity.includes(severity)) {
              response.conditions.willingness.forEach(w => coveredWillingness.add(w));
            }
          });

          // Find missing willingness levels for this severity
          const missingWillingness = allWillingness.filter(w => !coveredWillingness.has(w));

          if (missingWillingness.length > 0) {
            throw new Error(
              `Incomplete response coverage in scenario "${scenario.title}":\n` +
              `For severity ${severity}, missing willingness levels: ${missingWillingness.join(', ')}`
            );
          }
        }
      }
    }
  }
}

export const sagarScenarios: Scenario[] = [
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