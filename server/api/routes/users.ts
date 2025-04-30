import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const usersRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Check if user already exists
      const existingUser = await ctx.sql`SELECT * FROM users WHERE userId = ${input.userId}`;
      if (existingUser.length > 0) {
        return existingUser[0];
      }

      console.log("Creating new user");

      // Create new user
      const lastUser = await ctx.sql`SELECT * FROM users ORDER BY created_at DESC LIMIT 1`;
      let newUserCondition = 1;
      if (lastUser.length > 0) {
        const lastCondition = lastUser[0].condition;
        newUserCondition = lastCondition === 1 ? 2 : 1;
      }
      const createdAt = new Date();
      const revokedConsent = false;
      const newUser = await ctx.sql`INSERT INTO users (userId, condition, revoked_consent, created_at) VALUES (${input.userId}, ${newUserCondition}, ${revokedConsent}, ${createdAt}) RETURNING *`;
      return newUser[0];
    }),
  getUserById: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const sql = ctx.sql;
      const user = await sql`SELECT * FROM users WHERE userId = ${input.userId}`;
      if (user.length === 0) {
        return null;
      }
      return user[0];
    }),
});
