import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { ipDataRouter } from "./routers/ipData";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  ipData: ipDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
