import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Scenario, Severity, ResponseType } from "@/lib/sagar/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const likertValues5 = [
  "Not willing",
  "Slightly willing",
  "Moderately willing",
  "Very willing",
  "Extremely willing",
];
const likertValues7 = [
  "Strongly disagree",
  "Disagree",
  "Somewhat disagree",
  "Neutral",
  "Somewhat agree",
  "Agree",
  "Strongly agree",
];

export function mapWillingnessToNumber(willingness: string) {
  if (likertValues5.includes(willingness)) {
    return likertValues5.indexOf(willingness) + 1;
  } else if (likertValues7.includes(willingness)) {
    return likertValues7.indexOf(willingness) + 1;
  } else {
    return 0;
  }
}

export function stringifyWillingnessSeverity(
  willingness: number,
  severity: Severity,
  likertScale: 5 | 7
) {
  const likertValue =
    likertScale === 5
      ? likertValues5[willingness - 1]
      : likertValues7[willingness - 1];
  const severityValue =
    severity === Severity.Low
      ? "low"
      : severity === Severity.Medium
      ? "medium"
      : "high";
  const res = `I would be ${likertValue.toLowerCase()} to answer this question. I believe the severity of this question is ${severityValue}.`;
  console.log(res);
  return res;
}

export function stringifyWillingness(
  willingness: number,
  options: string[]
): string {
  if (willingness < 0 || willingness >= options.length) {
    throw new Error(`Willingness must be between 0 and ${options.length}`);
  }

  const res = options[willingness];
  console.log(res);
  return res;
}

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
          step.responses.forEach((response) => {
            if (response.conditions.severity.includes(severity)) {
              response.conditions.willingness.forEach((w) =>
                coveredWillingness.add(w)
              );
            }
          });

          // Find missing willingness levels for this severity
          const missingWillingness = allWillingness.filter(
            (w) => !coveredWillingness.has(w)
          );

          if (missingWillingness.length > 0) {
            throw new Error(
              `Incomplete response coverage in scenario "${scenario.title}":\n` +
                `For severity ${severity}, missing willingness levels: ${missingWillingness.join(
                  ", "
                )}`
            );
          }
        }
      }
    }
  }
}
