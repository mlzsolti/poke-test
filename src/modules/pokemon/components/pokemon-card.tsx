import { Link } from "react-router-dom";

type Props = {
  name: string;
  id: string;
};

export const PokemonCard = ({ name, id }: Props) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className="cursor-pointer flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
        <img
          // workaround to get the image of the pokemon, because the response doesn't contain the image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={150}
          height={120}
          className="object-cover rounded-lg"
        />
        <h3 className="font-bold text-xl capitalize">{name}</h3>
      </div>
    </Link>
  );
};
