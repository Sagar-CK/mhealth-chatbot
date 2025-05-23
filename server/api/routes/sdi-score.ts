import { createTRPCRouter, publicProcedure } from "../trpc";
import { sdiScoreSchema } from "../models/sdi-score";

import { createHash } from "crypto";

export const sdiScoreRouter = createTRPCRouter({
    create: publicProcedure
        .input(sdiScoreSchema.omit({ id: true })) // omit id, we'll generate it
        .mutation(async ({ ctx, input }) => {
            const sql = ctx.sql;

            // Create deterministic ID from user_id + topic
            const idBase = `${input.user_id}-${input.topic}`;
            const id = createHash("sha256").update(idBase).digest("hex");

            const [record] = await sql`
                INSERT INTO sdi_score
                    (id, user_id, scenario, topic, user_willingness, timestamp)
                VALUES
                    (${id}, ${input.user_id}, ${input.scenario}, ${input.topic}, ${input.user_willingness}, ${input.timestamp})
                    ON CONFLICT (id) DO UPDATE SET
                    user_willingness = EXCLUDED.user_willingness,
                                            timestamp = EXCLUDED.timestamp
                                            RETURNING *
            `;

            return record;
        }),
});
