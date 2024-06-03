import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, DownloadIcon, ShareIcon } from "lucide-react";

export const PokemonActionsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-start mt-8">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button variant="outline">
          <ShareIcon className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button>
          <DownloadIcon className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};
