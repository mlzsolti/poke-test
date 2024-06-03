import { apiClient } from "@/api/api-client";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { NamedAPIResourceList } from "pokenode-ts";

export const getPokemonTypes = (): Promise<NamedAPIResourceList> => {
  return apiClient.listTypes();
};

export const getPokemonTypesQueryOptions = () => {
  return queryOptions({
    queryKey: ["pokemon-types"],
    queryFn: getPokemonTypes,
  });
};

type UsePokemonTypesOptions = {
  queryConfig?: QueryConfig<typeof getPokemonTypes>;
};

export const usePokemonTypes = ({
  queryConfig,
}: UsePokemonTypesOptions = {}) => {
  return useQuery({ ...getPokemonTypesQueryOptions(), ...queryConfig });
};
