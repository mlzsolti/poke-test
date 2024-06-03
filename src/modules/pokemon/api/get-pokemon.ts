import { apiClient } from "@/api/api-client";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { Pokemon } from "pokenode-ts";

export const getPokemon = (name: string): Promise<Pokemon> => {
  return apiClient.getPokemonByName(name);
};

export const getPokemonQueryOptions = (name: string) => {
  return queryOptions({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });
};

type UsePokemonOptions = {
  pokemonName: string;
  queryConfig?: QueryConfig<typeof getPokemon>;
};

export const usePokemon = ({ pokemonName, queryConfig }: UsePokemonOptions) => {
  return useQuery({ ...getPokemonQueryOptions(pokemonName), ...queryConfig });
};
