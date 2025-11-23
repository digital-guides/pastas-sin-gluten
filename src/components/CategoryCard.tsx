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
      className="group relative aspect-square w-full rounded-3xl overflow-hidden bg-card hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {/* Image Background */}
      <div className="absolute inset-0">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
          {category.title}
        </h2>
        <p className="text-sm text-white/90 drop-shadow">
          {category.description}
        </p>
      </div>
    </button>
  );
};
