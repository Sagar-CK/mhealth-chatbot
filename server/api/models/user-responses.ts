import { z } from "zod";

export const userResponseSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    user_condition: z.string(),
    scenario: z.string(),
    question_1_likert_response: z.number(),
    question_2_likert_response: z.number(),
    question_3_likert_response: z.number(),
    question_4_likert_response: z.number(),
    question_5_likert_response: z.number(),
    question_6_likert_response: z.number(),
    question_7_likert_response: z.number(),
    question_8_likert_response: z.number(),
    timestamp: z.date(),
});

export type UserResponse = z.infer<typeof userResponseSchema>;