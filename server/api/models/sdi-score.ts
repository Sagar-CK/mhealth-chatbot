import { z } from "zod";

export const sdiScoreSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  scenario: z.string(),
  user_willingness_1: z.number(),
  user_willingness_2: z.number(),
  user_willingness_3: z.number(),
  user_willingness_4: z.number(),
  user_willingness_5: z.number(),
  timestamp: z.date(),
});

export type sdiScore = z.infer<typeof sdiScoreSchema>;