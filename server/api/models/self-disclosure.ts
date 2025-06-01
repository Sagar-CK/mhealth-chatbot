import { z } from "zod";

export const SelfDisclosureSchema = z.object({
  id: z.string(), // Will be generated from question + scenario + user_id
  user_id: z.string(),
  scenario: z.string(),
  question: z.string(),
  question_sensitivity: z.enum(["Low", "Medium", "High"]),
  user_willingness: z.number(),
  user_sensitivity: z.enum(["Low", "Medium", "High"]),
  timestamp: z.date(),
});

export type SelfDisclosure = z.infer<typeof SelfDisclosureSchema>; 