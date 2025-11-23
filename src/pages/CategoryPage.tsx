import { useParams, useNavigate } from "react-router-dom";
import { getCategoryById, getRecipesByCategory } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = getCategoryById(categoryId || "");
  const recipes = getRecipesByCategory(categoryId || "");

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Categoría no encontrada</h1>
          <Button onClick={() => navigate("/")} variant="default">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="font-serif text-3xl font-bold text-foreground">
                {category.title}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {recipes.length} recetas
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="rounded-full"
            >
              <Home className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Recipe List */}
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-3">
          {recipes.map((recipe, index) => (
            <button
              key={recipe.id}
              onClick={() => navigate(`/receta/${recipe.id}`)}
              className="w-full text-left px-6 py-5 bg-card rounded-2xl hover:bg-muted transition-all duration-200 border border-border hover:shadow-md group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {recipe.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
