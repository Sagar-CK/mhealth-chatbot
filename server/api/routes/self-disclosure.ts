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
        (id, user_id, scenario, question, question_severity, user_willingness, user_severity, timestamp) 
        VALUES 
        (${id}, ${input.user_id}, ${input.scenario}, ${input.question}, ${input.question_severity}, ${input.user_willingness}, ${input.user_severity}, ${input.timestamp})
        ON CONFLICT (id) DO UPDATE SET
          user_willingness = EXCLUDED.user_willingness,
          user_severity = EXCLUDED.user_severity,
          timestamp = EXCLUDED.timestamp
        RETURNING *
      `;
      return record;
    }),
}); 