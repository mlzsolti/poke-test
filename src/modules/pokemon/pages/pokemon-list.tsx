import { ContentLayout } from "@/components/layout/content-layout";
import { PokemonGrid } from "../components/pokemon-grid";
import { Filters } from "../components/filters";

export const PokemonList = () => {
  return (
    <ContentLayout title="Pokemon List">
      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-2xl text-left pb-8 mb-8 border-b-2 border-slate-500">
          Pokemon List
        </h1>
        <Filters />
        <PokemonGrid />
      </main>
    </ContentLayout>
  );
};
