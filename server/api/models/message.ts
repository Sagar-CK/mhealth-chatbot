import { z } from "zod";

export const MessageSchema = z.object({
  userId: z.string(),
  id: z.string(),
  sender: z.enum(["bot", "user"]),
  text: z.string(),
  timestamp: z.date(),
  scenario: z.string(),
});

export type Message = z.infer<typeof MessageSchema>;