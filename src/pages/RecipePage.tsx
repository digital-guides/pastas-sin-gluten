import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Printer } from "lucide-react";
import { Card } from "@/components/ui/card";

const RecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  
  const recipe = getRecipeById(recipeId || "");

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Receta no encontrada</h1>
          <Button onClick={() => navigate("/")} variant="default">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate(`/bloque/${recipe.category}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - No se imprime */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border print:hidden">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="rounded-full"
            >
              <Home className="h-5 w-5" />
            </Button>
            <div className="flex-1" />
            <Button
              onClick={handlePrint}
              className="rounded-full gap-2"
              variant="default"
            >
              <Printer className="h-4 w-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </header>

      {/* Recipe Content */}
      <main className="container max-w-3xl mx-auto px-4 py-8 print:py-4">
        <article className="space-y-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
              {recipe.title}
            </h1>
          </div>

          {/* Ingredients */}
          <Card className="p-6 md:p-8 rounded-2xl border-border bg-card">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Ingredientes
            </h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground flex-1">{ingredient}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Instructions */}
          <Card className="p-6 md:p-8 rounded-2xl border-border bg-card">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Preparación
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-foreground flex-1 pt-0.5">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </Card>

          {/* Tips */}
          {recipe.tips && (
            <Card className="p-6 md:p-8 rounded-2xl border-border bg-secondary/50">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Consejos
              </h2>
              <p className="text-foreground leading-relaxed">{recipe.tips}</p>
            </Card>
          )}

          {/* Action Buttons - No se imprimen */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 print:hidden">
            <Button
              onClick={handleBack}
              variant="secondary"
              className="flex-1 rounded-full h-12"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al bloque
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="secondary"
              className="flex-1 rounded-full h-12"
            >
              <Home className="h-4 w-4 mr-2" />
              Inicio
            </Button>
            <Button
              onClick={handlePrint}
              variant="default"
              className="flex-1 rounded-full h-12"
            >
              <Printer className="h-4 w-4 mr-2" />
              Imprimir receta
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default RecipePage;
