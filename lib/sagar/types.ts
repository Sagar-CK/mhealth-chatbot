export enum ResponseType {
  Statement = "statement",
  Question = "question",
}

export enum Severity {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface StatementStep {
  type: ResponseType.Statement
  text: string
  options: string[]
}

export interface QuestionStep {
  type: ResponseType.Question
  question: string
  severity: Severity
  likertScale: 5 | 7
  responses: {
    willingness: number
    severity: Severity
    message: string
  }[]
}

export type ChatStep = StatementStep | QuestionStep

export interface Scenario {
  title: string
  steps: ChatStep[]
  completionMessage?: string
}

export interface Message {
  id: string
  sender: "bot" | "user"
  text: string
  timestamp: Date
  user_id: string
  scenario: string
}
