import { z } from "zod";

export const sdiScoreSchema = z.object({
  id: z.string(), // Will be generated from user_id + topic
  user_id: z.string(),
  scenario: z.string(),
  topic: z.string(),
  user_willingness: z.number(),
  timestamp: z.date(),
});

export type sdiScore = z.infer<typeof sdiScoreSchema>;