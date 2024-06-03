import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
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
  ]);
