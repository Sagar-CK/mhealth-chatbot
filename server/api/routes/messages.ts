import { createTRPCRouter, publicProcedure } from "../trpc";
import { MessageSchema } from "../models/message";

export const messagesRouter = createTRPCRouter({
  create: publicProcedure
    .input(MessageSchema)
    .mutation(async ({ ctx, input }) => {
      const sql = ctx.sql;
      await sql`INSERT INTO messages (id, userId, sender, text, timestamp, scenario) VALUES (${input.id}, ${input.userId}, ${input.sender}, ${input.text}, ${input.timestamp}, ${input.scenario})`;
      return input;
    }),
});
