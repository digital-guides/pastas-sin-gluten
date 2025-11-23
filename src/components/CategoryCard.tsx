import { useNavigate } from "react-router-dom";
import { Category } from "@/data/recipes";

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/bloque/${category.id}`)}
      className="group relative aspect-square w-full rounded-3xl overflow-hidden bg-secondary hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          {category.title}
        </h2>
        <p className="text-sm text-muted-foreground">
          {category.description}
        </p>
      </div>
    </button>
  );
};
