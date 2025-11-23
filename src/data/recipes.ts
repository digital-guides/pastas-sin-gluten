export interface Recipe {
  id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  tips?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Datos temporales - serán reemplazados por datos reales
export const categories: Category[] = [
  {
    id: "bloque-1",
    title: "Bloque 1",
    description: "Primera categoría de recetas",
    icon: "🧁"
  },
  {
    id: "bloque-2",
    title: "Bloque 2",
    description: "Segunda categoría de recetas",
    icon: "🍰"
  },
  {
    id: "bloque-3",
    title: "Bloque 3",
    description: "Tercera categoría de recetas",
    icon: "🍪"
  },
  {
    id: "bloque-4",
    title: "Bloque 4",
    description: "Cuarta categoría de recetas",
    icon: "🥧"
  }
];

export const recipes: Recipe[] = [
  // Bloque 1 - 12 recetas ejemplo
  {
    id: "r1-1",
    title: "Receta 1 del Bloque 1",
    category: "bloque-1",
    ingredients: [
      "Ingrediente 1",
      "Ingrediente 2",
      "Ingrediente 3"
    ],
    instructions: [
      "Paso 1 de preparación",
      "Paso 2 de preparación",
      "Paso 3 de preparación"
    ],
    tips: "Consejo útil para esta receta"
  },
  {
    id: "r1-2",
    title: "Receta 2 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-3",
    title: "Receta 3 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-4",
    title: "Receta 4 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-5",
    title: "Receta 5 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-6",
    title: "Receta 6 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-7",
    title: "Receta 7 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-8",
    title: "Receta 8 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-9",
    title: "Receta 9 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-10",
    title: "Receta 10 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-11",
    title: "Receta 11 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r1-12",
    title: "Receta 12 del Bloque 1",
    category: "bloque-1",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  // Bloque 2 - 12 recetas
  {
    id: "r2-1",
    title: "Receta 1 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente 1", "Ingrediente 2"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-2",
    title: "Receta 2 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-3",
    title: "Receta 3 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-4",
    title: "Receta 4 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-5",
    title: "Receta 5 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-6",
    title: "Receta 6 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-7",
    title: "Receta 7 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-8",
    title: "Receta 8 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-9",
    title: "Receta 9 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-10",
    title: "Receta 10 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-11",
    title: "Receta 11 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r2-12",
    title: "Receta 12 del Bloque 2",
    category: "bloque-2",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  // Bloque 3 - 12 recetas
  {
    id: "r3-1",
    title: "Receta 1 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente 1", "Ingrediente 2"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-2",
    title: "Receta 2 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-3",
    title: "Receta 3 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-4",
    title: "Receta 4 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-5",
    title: "Receta 5 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-6",
    title: "Receta 6 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-7",
    title: "Receta 7 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-8",
    title: "Receta 8 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-9",
    title: "Receta 9 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-10",
    title: "Receta 10 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-11",
    title: "Receta 11 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r3-12",
    title: "Receta 12 del Bloque 3",
    category: "bloque-3",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  // Bloque 4 - 12 recetas
  {
    id: "r4-1",
    title: "Receta 1 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente 1", "Ingrediente 2"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-2",
    title: "Receta 2 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-3",
    title: "Receta 3 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-4",
    title: "Receta 4 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-5",
    title: "Receta 5 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-6",
    title: "Receta 6 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-7",
    title: "Receta 7 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-8",
    title: "Receta 8 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-9",
    title: "Receta 9 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-10",
    title: "Receta 10 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-11",
    title: "Receta 11 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  },
  {
    id: "r4-12",
    title: "Receta 12 del Bloque 4",
    category: "bloque-4",
    ingredients: ["Ingrediente A", "Ingrediente B"],
    instructions: ["Paso 1", "Paso 2"],
  }
];

export const getRecipesByCategory = (categoryId: string) => {
  return recipes.filter(recipe => recipe.category === categoryId);
};

export const getRecipeById = (id: string) => {
  return recipes.find(recipe => recipe.id === id);
};

export const getCategoryById = (id: string) => {
  return categories.find(cat => cat.id === id);
};

export const searchRecipes = (query: string) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];
  
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(normalizedQuery)
  );
};
