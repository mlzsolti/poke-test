import { ContentLayout } from "@/components/layout/content-layout";
import { useParams } from "react-router-dom";
import { usePokemon } from "../api/get-pokemon";
import { PokemonActionsSection } from "../components/pokemon-actions-section";
import { PokemonProfileSection } from "../components/pokemon-profile-section";
import { PokemonStatsSection } from "../components/pokemon-stats-section";

export const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();

  const { data } = usePokemon({ pokemonName: name || "" });

  return (
    <ContentLayout title="Pokemon Detail">
      <PokemonActionsSection />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {data && (
            <>
              <PokemonProfileSection pokemon={data} />
              <PokemonStatsSection pokemon={data} />
            </>
          )}
        </div>
      </div>
    </ContentLayout>
  );
};
