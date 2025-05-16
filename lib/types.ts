export enum ResponseType {
  Select = "select",
  Likert = "likert",
}

export interface ChatStep {
  question: string
  responseType: ResponseType
  options?: string[]
  likertScale?: 5 | 7
  likertQuestion?: string
}

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
