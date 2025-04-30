import { createTRPCRouter, publicProcedure } from "../trpc";
import { MessageSchema } from "../models/message";

export const messagesRouter = createTRPCRouter({
  create: publicProcedure
    .input(MessageSchema)
    .mutation(async ({ ctx, input }) => {
      const sql = ctx.sql;

      // Check if the user has already sent a message in this scenario
      const existingMessage =
        await sql`SELECT * FROM messages WHERE id = ${input.id} AND user_id = ${input.user_id}`;

      if (existingMessage.length > 0) {
        return existingMessage[0];
      }

      const [newMessage] = await sql`INSERT INTO messages (id, user_id, sender, text, timestamp, scenario) VALUES (${input.id}, ${input.user_id}, ${input.sender}, ${input.text}, ${input.timestamp}, ${input.scenario}) RETURNING *`;
      return newMessage;
    }),
});
