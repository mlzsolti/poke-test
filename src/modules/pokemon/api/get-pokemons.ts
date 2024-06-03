import { apiClient } from "@/api/api-client";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { NamedAPIResourceList } from "pokenode-ts";

export const getPokemons = (): Promise<NamedAPIResourceList> => {
  return apiClient.listPokemons();
};

export const getPokemonsQueryOptions = () => {
  return queryOptions({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
};

type UsePokemonsOptions = {
  queryConfig?: QueryConfig<typeof getPokemons>;
};

export const usePokemons = ({ queryConfig }: UsePokemonsOptions = {}) => {
  return useQuery({ ...getPokemonsQueryOptions(), ...queryConfig });
};
