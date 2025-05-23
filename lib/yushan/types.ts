export enum ResponseType {
    LikertWithRespond = "likertWR",
}

export interface LikertWithRespondStep {
    type: ResponseType.LikertWithRespond
    question: string
    likertScale: 5 | 7
    likertQuestion: string
    topic: string
    userRespond: string
}

export type ChatStep = LikertWithRespondStep

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
