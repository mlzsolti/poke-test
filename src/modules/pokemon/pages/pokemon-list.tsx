import { ContentLayout } from "@/components/layout/content-layout";
import { usePokemons } from "../api/get-pokemons";

export const PokemonList = () => {
  const { data } = usePokemons();
  console.log(data);

  return (
    <ContentLayout title="Pokemon List">
      <h1>Pokemon List</h1>
    </ContentLayout>
  );
};
