export enum ResponseType {
  Select = "select",
  Likert = "likert",
}

export interface ChatStep {
  question: string
  responseType: ResponseType
  options?: string[]
  likertScale?: number
  likertQuestion?: string
}

export interface Scenario {
  steps: ChatStep[]
  completionMessage?: string
}

export interface Message {
  id: string
  sender: "bot" | "user"
  text: string
  timestamp: Date
}
