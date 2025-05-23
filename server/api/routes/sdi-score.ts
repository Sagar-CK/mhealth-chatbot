import { createTRPCRouter, publicProcedure } from "../trpc";
import { sdiScoreSchema } from "../models/sdi-score"; // Adjust import path
import { createHash } from "crypto";

export const sdiScoreRouter = createTRPCRouter({
    create: publicProcedure
        .input(sdiScoreSchema.omit({ id: true })) // Generate ID ourselves
        .mutation(async ({ ctx, input }) => {
            const sql = ctx.sql;

            // Generate unique ID from user_id and scenario
            const idBase = `${input.user_id}-${input.scenario}`;
            const id = createHash("sha256").update(idBase).digest("hex");

            const [record] = await sql`
                INSERT INTO sdi_score (
                    id,
                    user_id,
                    scenario,
                    user_willingness_1,
                    user_willingness_2,
                    user_willingness_3,
                    user_willingness_4,
                    user_willingness_5,
                    timestamp
                ) VALUES (
                             ${id},
                             ${input.user_id},
                             ${input.scenario},
                             ${input.user_willingness_1},
                             ${input.user_willingness_2},
                             ${input.user_willingness_3},
                             ${input.user_willingness_4},
                             ${input.user_willingness_5},
                             ${input.timestamp}
                         )
                    ON CONFLICT (id) DO UPDATE SET
                    user_willingness_1 = EXCLUDED.user_willingness_1,
                                            user_willingness_2 = EXCLUDED.user_willingness_2,
                                            user_willingness_3 = EXCLUDED.user_willingness_3,
                                            user_willingness_4 = EXCLUDED.user_willingness_4,
                                            user_willingness_5 = EXCLUDED.user_willingness_5,
                                            timestamp = EXCLUDED.timestamp
                                            RETURNING *;
            `;

            return record;
        }),
});
