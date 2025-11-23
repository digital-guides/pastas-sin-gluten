import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchRecipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      const searchResults = searchRecipes(value);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelectRecipe = (recipeId: string) => {
    navigate(`/receta/${recipeId}`);
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar receta..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 h-12 rounded-full bg-card border-border text-base"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-2xl shadow-lg overflow-hidden z-50">
          <div className="max-h-80 overflow-y-auto">
            {results.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => handleSelectRecipe(recipe.id)}
                className="w-full px-6 py-4 text-left hover:bg-muted transition-colors border-b border-border last:border-b-0"
              >
                <p className="font-medium text-foreground">{recipe.title}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && results.length === 0 && query.trim().length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-2xl shadow-lg p-6 z-50">
          <p className="text-muted-foreground text-center">No se encontraron recetas</p>
        </div>
      )}
    </div>
  );
};
