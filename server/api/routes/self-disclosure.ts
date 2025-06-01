import { createTRPCRouter, publicProcedure } from "../trpc";
import { SelfDisclosureSchema } from "../models/self-disclosure";
import { createHash } from "crypto";

export const selfDisclosureRouter = createTRPCRouter({
  create: publicProcedure
    .input(SelfDisclosureSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      const sql = ctx.sql;

      // Create deterministic ID from question + scenario + user_id
      const idBase = `${input.question}-${input.scenario}-${input.user_id}`;
      const id = createHash('sha256').update(idBase).digest('hex');

      // Try to insert, if exists then update
      const [record] = await sql`
        INSERT INTO self_disclosure 
        (id, user_id, scenario, question, question_sensitivity, user_willingness, user_sensitivity, timestamp) 
        VALUES 
        (${id}, ${input.user_id}, ${input.scenario}, ${input.question}, ${input.question_sensitivity}, ${input.user_willingness}, ${input.user_sensitivity}, ${input.timestamp})
        ON CONFLICT (id) DO UPDATE SET
          user_willingness = EXCLUDED.user_willingness,
          user_sensitivity = EXCLUDED.user_sensitivity,
          timestamp = EXCLUDED.timestamp
        RETURNING *
      `;
      return record;
    }),
}); 