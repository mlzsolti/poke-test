import { StringParam, useQueryParam } from "use-query-params";
import { usePokemons } from "../api/get-pokemons";
import { PokemonCard } from "./pokemon-card";

export const PokemonGrid = () => {
  const [search] = useQueryParam("search", StringParam);
  const { data } = usePokemons();

  if (!data) {
    return null;
  }

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.results
          // ideally, if the api would accept a query param for the name, and type of the pokemon, we could just pass these params to the usePokemons hook, and filter the data on the server side
          .filter((poke) => poke.name.includes(search || ""))
          .map((poke) => (
            <PokemonCard
              name={poke.name}
              key={poke.name}
              // workaround to get the id of the pokemon, because the response doesn't contain the id 🙃
              id={poke.url.split("/")[poke.url.split("/").length - 2]}
            />
          ))}
      </div>
    </div>
  );
};
