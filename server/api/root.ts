import { createCallerFactory, createTRPCRouter } from "./trpc";
import { usersRouter } from "./routes/users";
import { messagesRouter } from "./routes/messages";
import { selfDisclosureRouter } from "./routes/self-disclosure";
import { sdiScoreRouter } from "./routes/sdi-score";
import { userResponsesRouter } from "./routes/user-responses";

export const appRouter = createTRPCRouter({
    users: usersRouter,
    messages: messagesRouter,
    selfDisclosure: selfDisclosureRouter,
    sdiScore:sdiScoreRouter,
    userResponses: userResponsesRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
