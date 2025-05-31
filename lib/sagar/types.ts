export enum ResponseType {
  Statement = "statement",
  Question = "question",
}

export enum Sensitivity {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export interface StatementStep {
  type: ResponseType.Statement
  text: string
  option: string
}

export interface QuestionStep {
  type: ResponseType.Question
  question: string
  sensitivity: Sensitivity
  likertScale: 5 | 7
  responses: {
    conditions: {
      willingness: number[]
      sensitivity: Sensitivity[]
    }
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
