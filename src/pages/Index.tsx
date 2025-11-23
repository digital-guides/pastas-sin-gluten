import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { InstallPrompt } from "@/components/InstallPrompt";
import { categories } from "@/data/recipes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <InstallPrompt />
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/images/logo-matilda.png" 
              alt="Las Recetas de Matilda" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              PASTAS SIN GLUTEN
            </h1>
          </div>
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Las Recetas de Matilda · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
