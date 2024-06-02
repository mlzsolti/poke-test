import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes";

const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
