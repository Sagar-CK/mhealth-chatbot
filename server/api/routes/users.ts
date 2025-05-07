import { User } from "../models/user";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const usersRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Check if user already exists
      const [existingUser] =
        await ctx.sql`SELECT * FROM users WHERE user_id = ${input.user_id}`;
      if (existingUser) {
        return existingUser as User;
      }

      // Create new user
      const [lastUser] =
        await ctx.sql`SELECT * FROM users ORDER BY created_at DESC LIMIT 1`;

      console.log("lastUser", lastUser);


      let newUserCondition = 1;

      if (lastUser) {
        const lastCondition = Number(lastUser.condition);
        newUserCondition = lastCondition === 1 ? 2 : 1;
      }

      const created_at = new Date();
      const revoked_consent = false;
      const [newUser] =
        await ctx.sql`INSERT INTO users (user_id, condition, revoked_consent, created_at) VALUES (${input.user_id}, ${newUserCondition}, ${revoked_consent}, ${created_at}) RETURNING *`;
      return newUser as User;
    }),
  getUserById: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const sql = ctx.sql;
      const user =
        await sql`SELECT * FROM users WHERE user_id = ${input.user_id}`;
      if (user.length === 0) {
        return null;
      }
      return user[0];
    }),
  revokeConsent: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // if the user does not exist, create them first
      const user =
        await ctx.sql`SELECT * FROM users WHERE user_id = ${input.user_id}`;
      if (user.length === 0) {
        const [lastUser] =
          await ctx.sql`SELECT * FROM users ORDER BY created_at DESC LIMIT 1`;
        let newUserCondition = 1;
        if (lastUser) {
          const lastCondition = Number(lastUser.condition);
          newUserCondition = lastCondition === 1 ? 2 : 1;
        }
        const created_at = new Date();
        const revoked_consent = true;
        const [newUser] =
          await ctx.sql`INSERT INTO users (user_id, condition, revoked_consent, created_at) VALUES (${input.user_id}, ${newUserCondition}, ${revoked_consent}, ${created_at}) RETURNING *`;
        return newUser as User;
      }
      const [updatedUser] =
        await ctx.sql`UPDATE users SET revoked_consent = true WHERE user_id = ${input.user_id} RETURNING *`;
      return updatedUser as User;
    }),
});
