import { PokemonDetails } from "@/modules/pokemon/pages/pokemon-details";
import { PokemonList } from "@/modules/pokemon/pages/pokemon-list";
import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: <PokemonList />,
    },
    {
      path: "/pokemon/:id",
      element: <PokemonDetails />,
    },
  ]);
