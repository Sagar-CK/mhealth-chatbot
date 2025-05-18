import { createCallerFactory, createTRPCRouter } from "./trpc";
import { usersRouter } from "./routes/users";
import { messagesRouter } from "./routes/messages";
import { selfDisclosureRouter } from "./routes/self-disclosure";

export const appRouter = createTRPCRouter({
    users: usersRouter,
    messages: messagesRouter,
    selfDisclosure: selfDisclosureRouter,
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
