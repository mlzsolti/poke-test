import { Badge } from "@/components/ui/badge";
import { getRandomElement } from "@/lib/utils";
import { Pokemon } from "pokenode-ts";

type Props = {
  pokemon: Pokemon;
};

export const PokemonProfileSection = ({ pokemon }: Props) => {
  console.log(pokemon);
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <img
          src={pokemon.sprites?.front_default || ""}
          width={192}
          height={192}
          alt="Pokemon Avatar"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 capitalize">
          {pokemon.name}
        </h1>
        <div className="flex items-center justify-center mt-2 gap-2">
          {pokemon.types?.map((type) => (
            <Badge
              key={type.type.name}
              color="#ff0000"
              variant={getRandomElement([
                "destructive",
                "secondary",
                "default",
              ])}
            >
              {type.type.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
