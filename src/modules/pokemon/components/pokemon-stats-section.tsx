import { Pokemon } from "pokenode-ts";
import { Stat } from "./stat";

type Props = {
  pokemon: Pokemon;
};

export const PokemonStatsSection = ({ pokemon }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Stat label="Height" value={pokemon.height} />
      <Stat label="Weight" value={pokemon.weight} />
      {pokemon.stats.map((stat) => (
        <Stat
          key={stat.stat.name}
          label={stat.stat.name}
          value={stat.base_stat}
        />
      ))}
    </div>
  );
};
