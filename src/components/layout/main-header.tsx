import { Link } from "react-router-dom";

export const MainHeader = () => {
  return (
    <header className="bg-gray-900 text-gray-50 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold">Pokemon App</span>
        </Link>
      </div>
    </header>
  );
};
