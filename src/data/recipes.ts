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
  image: string;
}

export const categories: Category[] = [
  {
    id: "bloque-1",
    title: "Pastas Frescas y Clásicas",
    description: "Masas y pastas tradicionales sin gluten",
    image: "/images/bloque-1.jpg"
  },
  {
    id: "bloque-2",
    title: "Pastas Especiales",
    description: "Recetas creativas y variaciones únicas",
    image: "/images/bloque-2.jpg"
  },
  {
    id: "bloque-3",
    title: "Salsas Saludables y Cremosas",
    description: "Acompañamientos perfectos para tus pastas",
    image: "/images/bloque-3.jpg"
  },
  {
    id: "bloque-4",
    title: "Extras, Rellenos y Acompañamientos",
    description: "Complementos para completar tus platos",
    image: "/images/bloque-4.jpg"
  }
];

export const recipes: Recipe[] = [
  // BLOQUE 1 – PASTAS FRESCAS Y CLÁSICAS
  {
    id: "b1-r1",
    title: "Masa básica de pasta sin gluten (todo uso)",
    category: "bloque-1",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Harina de tapioca: 40 g",
      "Psyllium en polvo: 6 g",
      "Huevos: 2 unidades",
      "Agua tibia: 20–30 ml (según absorción)",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla las harinas, el psyllium y la sal.",
      "Forma un hueco al centro y añade los huevos y el aceite.",
      "Integra con un tenedor y agrega el agua poco a poco hasta obtener una masa firme.",
      "Amasa 3–5 minutos hasta que esté elástica y homogénea.",
      "Cubre con film y deja reposar 20 minutos.",
      "Estira con rodillo o máquina, espolvoreando harina de arroz."
    ],
    tips: "Si la masa se seca, humedécela con las manos. Si está pegajosa, espolvorea un poco de harina de arroz."
  },
  {
    id: "b1-r2",
    title: "Tallarines caseros sin gluten",
    category: "bloque-1",
    ingredients: [
      "1 porción de masa básica (receta anterior)",
      "Harina de arroz para espolvorear",
      "Agua y sal para cocción"
    ],
    instructions: [
      "Divide la masa en dos partes y estira fina (2 mm).",
      "Espolvorea harina y enrolla las láminas para cortar tiras del grosor deseado.",
      "Deja secar 10 minutos.",
      "Cocina en agua hirviendo con sal 3–4 minutos."
    ]
  },
  {
    id: "b1-r3",
    title: "Tagliatelle de arroz y maíz",
    category: "bloque-1",
    ingredients: [
      "Harina de maíz fina: 100 g",
      "Harina de arroz: 150 g",
      "Fécula de maíz: 50 g",
      "Huevos: 2 unidades",
      "Aceite de oliva: 10 ml",
      "Agua tibia: 30 ml (ajustar)",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla todos los ingredientes secos.",
      "Agrega huevos y aceite, luego el agua de a poco.",
      "Amasa hasta lograr una textura firme.",
      "Estira, corta en tiras y deja secar 15 minutos.",
      "Cocina en agua hirviendo con sal 3–5 minutos."
    ],
    tips: "Añade cúrcuma o pimentón dulce a la masa para intensificar el color."
  },
  {
    id: "b1-r4",
    title: "Fetuccine de garbanzo y arroz integral",
    category: "bloque-1",
    ingredients: [
      "Harina de garbanzo: 100 g",
      "Harina de arroz integral: 100 g",
      "Fécula de tapioca: 50 g",
      "Psyllium: 5 g",
      "Huevos: 2 unidades",
      "Aceite de oliva: 10 ml",
      "Agua tibia: 30 ml (según necesidad)"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Añade huevos, aceite y agua.",
      "Amasa hasta lograr consistencia firme.",
      "Estira y corta en tiras anchas.",
      "Cocina 4–5 minutos en agua con sal."
    ]
  },
  {
    id: "b1-r5",
    title: "Pasta de espinaca sin gluten",
    category: "bloque-1",
    ingredients: [
      "Espinaca fresca cocida y escurrida: 60 g",
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Psyllium: 5 g",
      "Huevo: 1 unidad",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Procesa la espinaca con el huevo y el aceite.",
      "Mezcla las harinas y el psyllium con la sal.",
      "Combina todo hasta obtener una masa homogénea.",
      "Reposa 20 minutos y estira fina.",
      "Corta en cintas o forma láminas para lasaña."
    ],
    tips: "Puedes reemplazar la espinaca por rúcula o acelga para variar el color y el sabor."
  },
  {
    id: "b1-r6",
    title: "Ravioles de ricotta y espinaca sin gluten",
    category: "bloque-1",
    ingredients: [
      "Masa: 1 porción de masa básica",
      "Ricotta vegetal o tradicional: 200 g",
      "Espinaca cocida y picada: 80 g",
      "Queso vegetal o parmesano (opcional): 30 g",
      "Sal, pimienta y nuez moscada al gusto"
    ],
    instructions: [
      "Mezcla los ingredientes del relleno.",
      "Estira la masa fina y coloca porciones pequeñas del relleno.",
      "Cubre con otra lámina, presiona y corta los ravioles.",
      "Cocina en agua con sal 3–4 minutos."
    ],
    tips: "Congela los ravioles en bandeja antes de cocinarlos para que mantengan su forma."
  },
  {
    id: "b1-r7",
    title: "Ñoquis clásicos de papa sin gluten",
    category: "bloque-1",
    ingredients: [
      "Papa cocida y hecha puré: 500 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 50 g",
      "Huevo: 1 unidad",
      "Sal: 5 g",
      "Nuez moscada: 1 pizca"
    ],
    instructions: [
      "Une todos los ingredientes hasta formar una masa suave.",
      "Divide en cilindros y corta pequeños trozos.",
      "Pasa cada ñoqui por un tenedor para dar forma.",
      "Cocina en agua hirviendo con sal hasta que floten."
    ],
    tips: "Si la papa está muy húmeda, agrega 1 cucharada extra de harina de arroz."
  },
  {
    id: "b1-r8",
    title: "Ñoquis de batata",
    category: "bloque-1",
    ingredients: [
      "Puré de batata cocida: 400 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 40 g",
      "Huevo: 1 unidad",
      "Sal: 4 g"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta lograr masa uniforme.",
      "Forma cilindros y corta en porciones.",
      "Marca con tenedor.",
      "Cocina hasta que suban a la superficie.",
      "Sirve con salsa de tu preferencia."
    ]
  },
  {
    id: "b1-r9",
    title: "Ravioles de calabaza y queso vegetal",
    category: "bloque-1",
    ingredients: [
      "Masa: 1 porción de masa básica",
      "Puré de calabaza asada: 200 g",
      "Queso vegetal o ricotta: 100 g",
      "Sal, pimienta y nuez moscada: al gusto"
    ],
    instructions: [
      "Mezcla los ingredientes del relleno.",
      "Estira la masa, coloca porciones del relleno y cubre con otra lámina.",
      "Corta los ravioles y sella los bordes.",
      "Cocina 4 minutos en agua hirviendo con sal."
    ],
    tips: "Sirve con mantequilla de salvia o salsa cremosa de almendras."
  },
  {
    id: "b1-r10",
    title: "Pasta tricolor (espinaca, cúrcuma y natural)",
    category: "bloque-1",
    ingredients: [
      "1 masa básica dividida en 3 partes",
      "Espinaca cocida (para verde): 40 g",
      "Cúrcuma en polvo (para amarilla): ½ cucharadita",
      "Masa natural (para blanca): base sin color"
    ],
    instructions: [
      "Mezcla cada color con una parte de la masa.",
      "Estira cada una por separado.",
      "Superpón las láminas, pasa el rodillo y corta tiras.",
      "Cocina 3–4 minutos en agua con sal."
    ],
    tips: "Ideal para sorprender visualmente; combina bien con salsas claras o al limón."
  },

  // BLOQUE 2 – PASTAS ESPECIALES Y SIN HUEVO
  {
    id: "b2-r1",
    title: "Masa de pasta sin huevo (versión vegana)",
    category: "bloque-2",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Harina de tapioca: 40 g",
      "Psyllium en polvo: 6 g",
      "Agua tibia: 120 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Agrega el agua y el aceite poco a poco.",
      "Amasa durante 5 minutos hasta obtener una masa elástica.",
      "Deja reposar 20 minutos tapada.",
      "Estira con rodillo y corta según el tipo de pasta deseado."
    ],
    tips: "Si la masa se agrieta, humedece las manos y vuelve a amasar; el psyllium ayuda a unir las fibras sin gluten."
  },
  {
    id: "b2-r2",
    title: "Pasta proteica de lentejas rojas",
    category: "bloque-2",
    ingredients: [
      "Harina de lentejas rojas: 200 g",
      "Harina de arroz: 80 g",
      "Psyllium en polvo: 5 g",
      "Agua tibia: 100–120 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla todos los ingredientes secos.",
      "Agrega el agua y el aceite, integrando hasta lograr una masa homogénea.",
      "Amasa hasta obtener consistencia firme.",
      "Reposa 20 minutos.",
      "Estira y corta en la forma deseada.",
      "Cocina 4–5 minutos en agua con sal."
    ]
  },
  {
    id: "b2-r3",
    title: "Espaguetis de quinoa y arroz",
    category: "bloque-2",
    ingredients: [
      "Harina de quinoa: 100 g",
      "Harina de arroz: 150 g",
      "Fécula de maíz: 50 g",
      "Psyllium: 5 g",
      "Agua tibia: 120 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Añade el agua y el aceite.",
      "Amasa hasta lograr una textura lisa.",
      "Pasa por la máquina de pasta y corta en tiras finas.",
      "Cocina 3–5 minutos."
    ],
    tips: "Agrega una cucharada de semillas molidas para dar un toque artesanal y más fibra."
  },
  {
    id: "b2-r4",
    title: "Ñoquis de garbanzo y calabaza",
    category: "bloque-2",
    ingredients: [
      "Puré de calabaza cocida: 250 g",
      "Harina de garbanzo: 80 g",
      "Harina de arroz: 40 g",
      "Sal: 3 g",
      "Pimienta y nuez moscada: al gusto"
    ],
    instructions: [
      "Une todos los ingredientes hasta formar una masa blanda.",
      "Forma cilindros y corta en porciones pequeñas.",
      "Marca con tenedor si lo deseas.",
      "Cocina en agua hirviendo hasta que floten.",
      "Sirve con la salsa de tu preferencia."
    ]
  },
  {
    id: "b2-r5",
    title: "Pasta de teff y amaranto (alta en fibra)",
    category: "bloque-2",
    ingredients: [
      "Harina de teff: 100 g",
      "Harina de amaranto: 100 g",
      "Fécula de maíz: 60 g",
      "Psyllium: 5 g",
      "Agua tibia: 120 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Agrega agua y aceite hasta obtener una masa firme.",
      "Amasa 5 minutos y deja reposar 20.",
      "Estira y corta en el formato deseado.",
      "Cocina 4 minutos en agua con sal."
    ],
    tips: "Ideal para acompañar con salsas cremosas o de vegetales asados."
  },
  {
    id: "b2-r6",
    title: "Ravioles veganos de tofu y setas",
    category: "bloque-2",
    ingredients: [
      "Masa: 1 porción de masa sin huevo (receta 1)",
      "Tofu firme: 200 g",
      "Champiñones salteados y picados: 100 g",
      "Aceite de oliva: 10 ml",
      "Salsa de soya sin gluten (tamari): 1 cucharadita",
      "Sal y pimienta al gusto"
    ],
    instructions: [
      "Tritura el tofu y mézclalo con los champiñones y condimentos.",
      "Estira la masa y coloca porciones del relleno.",
      "Cubre, corta y sella los ravioles.",
      "Cocina 3–4 minutos en agua con sal."
    ],
    tips: "Saltea los ravioles cocidos con aceite de oliva y tomillo para realzar su sabor."
  },
  {
    id: "b2-r7",
    title: "Pasta de arroz integral al vapor (estilo oriental)",
    category: "bloque-2",
    ingredients: [
      "Harina de arroz integral: 200 g",
      "Fécula de tapioca: 50 g",
      "Agua caliente: 180 ml",
      "Aceite de sésamo: 5 ml",
      "Sal: 2 g"
    ],
    instructions: [
      "Mezcla las harinas con la sal.",
      "Agrega el agua caliente y mezcla hasta obtener una masa suave.",
      "Extiende en láminas finas y corta en tiras.",
      "Cocina al vapor durante 5–6 minutos."
    ],
    tips: "Ideal para platos asiáticos; acompaña con salsa de soya, jengibre y aceite de sésamo."
  },
  {
    id: "b2-r8",
    title: "Pasta de harina de garbanzo (alta en proteína)",
    category: "bloque-2",
    ingredients: [
      "Harina de garbanzo: 200 g",
      "Fécula de maíz: 50 g",
      "Psyllium: 5 g",
      "Agua tibia: 120 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla todos los ingredientes secos.",
      "Añade agua y aceite poco a poco.",
      "Amasa hasta lograr masa firme y elástica.",
      "Reposa 20 minutos.",
      "Estira y corta en la forma deseada.",
      "Cocina 4–5 minutos en agua con sal."
    ]
  },
  {
    id: "b2-r9",
    title: "Pasta de mijo con cúrcuma",
    category: "bloque-2",
    ingredients: [
      "Harina de mijo: 150 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 50 g",
      "Cúrcuma en polvo: ½ cucharadita",
      "Psyllium: 5 g",
      "Agua tibia: 120 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla los secos y añade la cúrcuma.",
      "Agrega el agua y el aceite, integrando hasta masa firme.",
      "Estira y corta.",
      "Cocina 4 minutos en agua con sal."
    ],
    tips: "Acompaña con salsa blanca de coliflor o crema de limón para resaltar su color dorado."
  },
  {
    id: "b2-r10",
    title: "Ñoquis de ricotta vegetal y psyllium",
    category: "bloque-2",
    ingredients: [
      "Ricotta vegetal o de almendra: 250 g",
      "Harina de arroz: 100 g",
      "Psyllium: 4 g",
      "Sal: 3 g",
      "Pimienta o nuez moscada: al gusto"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta obtener masa firme.",
      "Forma cilindros, corta y moldea los ñoquis.",
      "Cocina en agua hirviendo con sal hasta que floten.",
      "Escurre y sirve con salsa a elección."
    ],
    tips: "Saltea los ñoquis cocidos con aceite de oliva y hierbas para darles una textura ligeramente dorada."
  },

  // BLOQUE 3 – SALSAS SALUDABLES Y CREMOSAS
  {
    id: "b3-r1",
    title: "Salsa cremosa de calabaza y almendras",
    category: "bloque-3",
    ingredients: [
      "Puré de calabaza cocida: 250 g",
      "Leche vegetal: 100 ml",
      "Almendras molidas o crema de almendras: 2 cucharadas",
      "Aceite de oliva: 1 cucharada",
      "Sal, pimienta y nuez moscada: al gusto"
    ],
    instructions: [
      "Coloca todos los ingredientes en la licuadora.",
      "Procesa hasta obtener una textura cremosa.",
      "Calienta a fuego suave 3–5 minutos antes de servir."
    ],
    tips: "Añade una cucharadita de levadura nutricional para darle un toque \"quesoso\"."
  },
  {
    id: "b3-r2",
    title: "Salsa de tomate casera sin azúcar",
    category: "bloque-3",
    ingredients: [
      "Tomates maduros pelados: 5 unidades (500 g aprox.)",
      "Aceite de oliva: 2 cucharadas",
      "Cebolla picada: ½ unidad",
      "Ajo picado: 1 diente",
      "Sal marina y orégano al gusto"
    ],
    instructions: [
      "Sofríe el ajo y la cebolla en el aceite.",
      "Añade los tomates troceados y cocina 20–25 minutos.",
      "Tritura si deseas una textura fina."
    ],
    tips: "Para una versión más intensa, agrega una pizca de pimentón dulce o albahaca fresca al final."
  },
  {
    id: "b3-r3",
    title: "Salsa blanca sin lácteos (con coliflor o anacardos)",
    category: "bloque-3",
    ingredients: [
      "Coliflor cocida: 200 g (o anacardos remojados: 100 g)",
      "Leche vegetal sin endulzar: 150 ml",
      "Aceite de oliva: 1 cucharada",
      "Nuez moscada y sal al gusto"
    ],
    instructions: [
      "Licúa todos los ingredientes hasta lograr una textura cremosa.",
      "Calienta en sartén 5 minutos hasta que espese ligeramente."
    ],
    tips: "Añade un poco de levadura nutricional si deseas sabor tipo queso parmesano."
  },
  {
    id: "b3-r4",
    title: "Salsa pesto tradicional y pesto de rúcula",
    category: "bloque-3",
    ingredients: [
      "Albahaca fresca: 1 taza",
      "Piñones o nueces: 2 cucharadas",
      "Ajo: ½ diente",
      "Aceite de oliva: 4 cucharadas",
      "Queso vegetal o parmesano: 2 cucharadas",
      "Sal al gusto"
    ],
    instructions: [
      "Procesa todos los ingredientes hasta lograr una salsa espesa.",
      "Ajusta el aceite hasta la textura deseada.",
      "Versión de rúcula: reemplaza la albahaca por rúcula y el queso por almendras molidas."
    ],
    tips: "Si no tienes piñones, usa nueces o semillas de girasol tostadas."
  },
  {
    id: "b3-r5",
    title: "Salsa mediterránea de aceitunas negras",
    category: "bloque-3",
    ingredients: [
      "Aceitunas negras sin hueso: 100 g",
      "Tomates secos hidratados: 4 unidades",
      "Aceite de oliva: 3 cucharadas",
      "Ajo: ½ diente",
      "Limón (jugo): 1 cucharadita"
    ],
    instructions: [
      "Licúa todos los ingredientes hasta obtener una pasta.",
      "Añade más aceite si deseas textura más líquida."
    ],
    tips: "Mezcla con pasta recién cocida y un toque de perejil fresco."
  },
  {
    id: "b3-r6",
    title: "Salsa cremosa de champiñones",
    category: "bloque-3",
    ingredients: [
      "Champiñones frescos: 200 g",
      "Cebolla picada: ½ unidad",
      "Leche vegetal: 150 ml",
      "Aceite de oliva: 1 cucharada",
      "Sal, pimienta y tomillo: al gusto"
    ],
    instructions: [
      "Sofríe cebolla y champiñones en el aceite hasta dorar.",
      "Agrega la leche vegetal y cocina 5 minutos.",
      "Tritura si deseas una textura más lisa."
    ],
    tips: "Añade 1 cucharadita de maicena diluida si prefieres una salsa más espesa."
  },
  {
    id: "b3-r7",
    title: "Salsa de espinaca y nuez",
    category: "bloque-3",
    ingredients: [
      "Espinaca cocida y escurrida: 100 g",
      "Nueces: 30 g",
      "Leche vegetal: 120 ml",
      "Ajo: ½ diente",
      "Aceite de oliva: 1 cucharada",
      "Sal y pimienta al gusto"
    ],
    instructions: [
      "Licúa todos los ingredientes hasta lograr consistencia cremosa.",
      "Calienta suavemente antes de servir.",
      "Ajusta sal y pimienta."
    ]
  },
  {
    id: "b3-r8",
    title: "Salsa al limón y aceite de oliva",
    category: "bloque-3",
    ingredients: [
      "Aceite de oliva: 3 cucharadas",
      "Jugo y ralladura de ½ limón",
      "Ajo picado: ½ diente",
      "Sal y pimienta: al gusto"
    ],
    instructions: [
      "Calienta ligeramente el aceite y añade el ajo.",
      "Agrega el jugo de limón y condimentos.",
      "Mezcla con la pasta recién cocida."
    ],
    tips: "Añade perejil fresco o ralladura extra justo antes de servir."
  },
  {
    id: "b3-r9",
    title: "Salsa de aguacate y albahaca",
    category: "bloque-3",
    ingredients: [
      "Aguacate maduro: 1 unidad",
      "Hojas de albahaca: 10–12",
      "Jugo de limón: 1 cucharada",
      "Aceite de oliva: 2 cucharadas",
      "Sal y pimienta: al gusto"
    ],
    instructions: [
      "Licúa todos los ingredientes hasta obtener una textura cremosa.",
      "Sirve de inmediato sobre la pasta caliente."
    ]
  },
  {
    id: "b3-r10",
    title: "Salsa boloñesa vegetal (con lentejas o soja texturizada)",
    category: "bloque-3",
    ingredients: [
      "Lentejas cocidas o soja texturizada hidratada: 200 g",
      "Tomate triturado: 300 g",
      "Cebolla y zanahoria picadas: ½ unidad cada una",
      "Ajo: 1 diente",
      "Aceite de oliva: 2 cucharadas",
      "Laurel, sal y pimienta: al gusto"
    ],
    instructions: [
      "Sofríe el ajo, la cebolla y la zanahoria.",
      "Añade las lentejas y el tomate.",
      "Cocina a fuego bajo 20 minutos.",
      "Condimenta con laurel, sal y pimienta."
    ],
    tips: "Puedes agregar vino tinto al sofrito para intensificar el sabor."
  },

  // BLOQUE 4 – EXTRAS, RELLENOS Y ACOMPAÑAMIENTOS
  {
    id: "b4-r1",
    title: "Masa para lasaña sin gluten",
    category: "bloque-4",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Psyllium: 6 g",
      "Huevos: 2 unidades",
      "Agua tibia: 20–30 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Prepara la masa como la receta básica.",
      "Estira en láminas finas (1–2 mm).",
      "Corta rectángulos del tamaño del molde.",
      "Cocina las láminas 1 minuto en agua con sal y seca sobre paño limpio."
    ],
    tips: "Si vas a armar la lasaña directamente con salsa líquida, puedes usar las láminas crudas."
  },
  {
    id: "b4-r2",
    title: "Relleno de ricotta vegetal y nuez moscada",
    category: "bloque-4",
    ingredients: [
      "Ricotta vegetal o de almendra: 250 g",
      "Levadura nutricional: 1 cucharada",
      "Aceite de oliva: 10 ml",
      "Nuez moscada, sal y pimienta: al gusto"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta lograr una crema firme.",
      "Usa para rellenar ravioles, canelones o sorrentinos."
    ],
    tips: "Agrega espinaca picada para una versión más fresca y colorida."
  },
  {
    id: "b4-r3",
    title: "Relleno de calabaza y romero",
    category: "bloque-4",
    ingredients: [
      "Puré de calabaza asada: 250 g",
      "Aceite de oliva: 10 ml",
      "Romero fresco: 1 cucharadita",
      "Sal y pimienta al gusto"
    ],
    instructions: [
      "Mezcla el puré con los condimentos.",
      "Deja enfriar antes de usar como relleno."
    ],
    tips: "Ideal para ravioles o lasañas; acompaña con salsa de mantequilla vegetal y salvia."
  },
  {
    id: "b4-r4",
    title: "Relleno de espinaca y tofu",
    category: "bloque-4",
    ingredients: [
      "Espinaca cocida y escurrida: 150 g",
      "Tofu firme triturado: 150 g",
      "Aceite de oliva: 10 ml",
      "Ajo en polvo, sal y pimienta: al gusto"
    ],
    instructions: [
      "Mezcla el tofu con la espinaca y los condimentos.",
      "Usa como relleno para canelones o ravioles."
    ],
    tips: "Añade una cucharadita de levadura nutricional para dar sabor a queso."
  },
  {
    id: "b4-r5",
    title: "Pan rallado sin gluten para gratinar",
    category: "bloque-4",
    ingredients: [
      "Pan sin gluten seco: 100 g",
      "Hierbas secas (orégano, albahaca): al gusto",
      "Sal y pimienta"
    ],
    instructions: [
      "Tritura el pan seco hasta lograr textura de pan rallado.",
      "Mezcla con las especias.",
      "Usa para gratinar o empanar."
    ],
    tips: "Puedes tostarlo ligeramente en sartén para un sabor más intenso."
  },
  {
    id: "b4-r6",
    title: "Fideos de verduras (zoodles y veggie noodles)",
    category: "bloque-4",
    ingredients: [
      "Calabacín, zanahoria o remolacha: 2 unidades",
      "Aceite de oliva: 1 cucharadita",
      "Sal y hierbas al gusto"
    ],
    instructions: [
      "Usa un espiralizador o pelador para crear fideos de verduras.",
      "Saltea ligeramente en aceite de oliva.",
      "Condimenta con sal y hierbas.",
      "Sirve como alternativa ligera a la pasta."
    ]
  },
  {
    id: "b4-r7",
    title: "Masa para canelones sin gluten",
    category: "bloque-4",
    ingredients: [
      "Harina de arroz: 100 g",
      "Fécula de maíz: 60 g",
      "Leche vegetal: 300 ml",
      "Huevo: 1 unidad",
      "Aceite: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta lograr una mezcla líquida.",
      "Cocina porciones en sartén antiadherente como si fueran crepas.",
      "Rellena y enrolla con el relleno deseado."
    ]
  },
  {
    id: "b4-r8",
    title: "Masa para raviolones rellenos",
    category: "bloque-4",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Psyllium: 6 g",
      "Huevos: 2 unidades",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Amasa hasta obtener textura firme.",
      "Estira y corta en cuadrados grandes.",
      "Coloca relleno, cubre y sella bien los bordes.",
      "Cocina 4 minutos en agua con sal."
    ],
    tips: "Puedes hacerlos de espinaca y ricotta, o de calabaza y almendra."
  },
  {
    id: "b4-r9",
    title: "Aceite aromático de hierbas",
    category: "bloque-4",
    ingredients: [
      "Aceite de oliva virgen: 200 ml",
      "Hojas frescas de albahaca, orégano y tomillo: 1 puñado",
      "Ajo: 1 diente"
    ],
    instructions: [
      "Calienta el aceite a fuego mínimo con las hierbas y el ajo.",
      "Deja enfriar y guarda en frasco hermético."
    ],
    tips: "Usa este aceite para saltear pasta cocida o rociar sobre lasañas antes de hornear."
  },
  {
    id: "b4-r10",
    title: "\"Queso\" vegetal rallado sin lácteos",
    category: "bloque-4",
    ingredients: [
      "Anacardos o almendras peladas: 100 g",
      "Levadura nutricional: 3 cucharadas",
      "Sal marina: 1 pizca",
      "Ajo en polvo: ¼ cucharadita"
    ],
    instructions: [
      "Tritura todos los ingredientes hasta obtener un polvo fino.",
      "Guarda en frasco hermético."
    ],
    tips: "Espolvorea sobre pastas, gratinados o ensaladas para dar sabor umami natural."
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
