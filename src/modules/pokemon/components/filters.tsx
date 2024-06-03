import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { usePokemonTypes } from "../api/get-pokemon-types";
import { StringParam, useQueryParam } from "use-query-params";
import { Button } from "@/components/ui/button";

export const Filters = () => {
  const { data: types } = usePokemonTypes();

  const [type, setType] = useQueryParam("type", StringParam);
  const [search, setSearch] = useQueryParam("search", StringParam);

  const handleClear = () => {
    setType(undefined);
    setSearch(undefined);
  };

  return (
    <div className="mb-4 flex  gap-4">
      <div className="relative w-full max-w-sm">
        <Input
          type="text"
          placeholder="Search for pokemon..."
          className="pr-10 h-10 text-sm"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
      <Select value={type || ""} onValueChange={(value) => setType(value)}>
        <SelectTrigger className="bg-white text-black px-4 py-2 rounded-md h-10 text-sm max-w-sm">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          {types?.results.map((type) => (
            <SelectItem key={type.name} value={type.name}>
              {type.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleClear}>Clear filters</Button>
    </div>
  );
};
