import { createTRPCRouter, publicProcedure } from "../trpc";
import { userResponseSchema } from "../models/user-responses";
import { createHash } from "crypto";
import { z } from "zod";

export const userResponsesRouter = createTRPCRouter({
    create: publicProcedure
        .input(userResponseSchema.omit({ id: true })) // Generate ID ourselves
        .mutation(async ({ ctx, input }) => {
            const sql = ctx.sql;

            // Generate unique ID from user_id and scenario
            const idBase = `${input.user_id}-${input.scenario}`;
            const id = createHash("sha256").update(idBase).digest("hex");

            const [record] = await sql`
                INSERT INTO user_responses (
                    id,
                    user_id,
                    user_condition,
                    scenario,
                    question_1_likert_response,
                    question_2_likert_response,
                    question_3_likert_response,
                    question_4_likert_response,
                    question_5_likert_response,
                    question_6_likert_response,
                    question_7_likert_response,
                    question_8_likert_response,
                    timestamp
                ) VALUES (
                    ${id},
                    ${input.user_id},
                    ${input.user_condition},
                    ${input.scenario},
                    ${input.question_1_likert_response},
                    ${input.question_2_likert_response},
                    ${input.question_3_likert_response},
                    ${input.question_4_likert_response},
                    ${input.question_5_likert_response},
                    ${input.question_6_likert_response},
                    ${input.question_7_likert_response},
                    ${input.question_8_likert_response},
                    ${input.timestamp}
                )
                ON CONFLICT (id) DO UPDATE SET
                    user_condition = EXCLUDED.user_condition,
                    question_1_likert_response = EXCLUDED.question_1_likert_response,
                    question_2_likert_response = EXCLUDED.question_2_likert_response,
                    question_3_likert_response = EXCLUDED.question_3_likert_response,
                    question_4_likert_response = EXCLUDED.question_4_likert_response,
                    question_5_likert_response = EXCLUDED.question_5_likert_response,
                    question_6_likert_response = EXCLUDED.question_6_likert_response,
                    question_7_likert_response = EXCLUDED.question_7_likert_response,
                    question_8_likert_response = EXCLUDED.question_8_likert_response,
                    timestamp = EXCLUDED.timestamp
                RETURNING *;
            `;

            return record;
        }),

    getByUserId: publicProcedure
        .input(z.object({
            user_id: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const sql = ctx.sql;

            const records = await sql`
                SELECT * FROM user_responses 
                WHERE user_id = ${input.user_id}
            `;

            return records;
        }),

    getByScenario: publicProcedure
        .input(z.object({
            user_id: z.string(),
            scenario: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const sql = ctx.sql;

            const records = await sql`
                SELECT * FROM user_responses 
                WHERE user_id = ${input.user_id} 
                AND scenario = ${input.scenario}
            `;

            return records;
        }),
});