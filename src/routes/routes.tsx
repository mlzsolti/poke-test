import { QueryClient } from "@tanstack/react-query";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Outlet />
        </QueryParamProvider>
      ),
      children: [
        {
          path: "/",
          lazy: async () => {
            const { PokemonList } = await import(
              "@/modules/pokemon/pages/pokemon-list"
            );
            return { Component: PokemonList };
          },
        },
        {
          path: "/pokemon/:id",
          lazy: async () => {
            const { PokemonDetails } = await import(
              "@/modules/pokemon/pages/pokemon-details"
            );
            return { Component: PokemonDetails };
          },
        },
      ],
    },
  ]);
