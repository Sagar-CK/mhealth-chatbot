import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Severity } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const likertValues5 = ['Not willing', 'Slightly willing', 'Moderately willing', 'Very willing', 'Extremely willing'];
const likertValues7 = ['Strongly disagree', 'Disagree', 'Somewhat disagree', 'Neutral', 'Somewhat agree', 'Agree', 'Strongly agree'];


export function mapWillingnessToNumber(willingness: string) {
  if (likertValues5.includes(willingness)) {
    return likertValues5.indexOf(willingness) + 1
  } else if (likertValues7.includes(willingness)) {
    return likertValues7.indexOf(willingness) + 1
  } else {
    return 0
  }
}

export function stringifyWillingnessSeverity(willingness: number, severity: Severity, likertScale: 5 | 7) {
  const likertValue = likertScale === 5 ? likertValues5[willingness - 1] : likertValues7[willingness - 1]
  const severityValue = severity === Severity.Low ? "low" : severity === Severity.Medium ? "medium" : "high"
  const res =  `I would be ${likertValue.toLowerCase()} to answer this question. I believe the severity of this question is ${severityValue}.`
  console.log(res)
  return res
}