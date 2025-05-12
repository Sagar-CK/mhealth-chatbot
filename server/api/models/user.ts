import { z } from "zod";

export const UserSchema = z.object({
  user_id: z.string(),
  study: z.string(),
  condition: z.number(),
  created_at: z.date(),
  revoked_consent: z.boolean(),
});

export type User = z.infer<typeof UserSchema>;