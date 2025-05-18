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
export interface AudioChatStep {
  id: string
  question: string
  audioUrl: string
  likertQuestion?: string
}

export interface Scenario {
  title: string
  steps: ChatStep[]
  completionMessage?: string
}

export interface AudioChatConfig {
  title?: string
  questions: AudioChatStep[]
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