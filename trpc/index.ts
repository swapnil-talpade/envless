import { router } from "@/trpc/router";

// import all sub-routers
// import { projects } from '@/trpc/routes/projects'
import { workspaces } from "@/trpc/routes/workspaces";

export const appRouter = router({
  // projects,
  workspaces,
});

// export type definition of API
export type AppRouter = typeof appRouter;
