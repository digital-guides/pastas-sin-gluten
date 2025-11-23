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
      "Psyllium en polvo: 4 g",
      "Goma xantana: 2 g",
      "Huevos: 2 unidades",
      "Agua tibia: 20–35 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla las harinas, fécula, psyllium, goma xantana y sal.",
      "Haz un hueco al centro y agrega los huevos y el aceite.",
      "Integra con tenedor y añade el agua poco a poco hasta obtener una masa suave, flexible y sin grumos.",
      "Amasa 3–5 minutos: debe sentirse elástica y no quebrarse al doblarla.",
      "Cubre con film y deja reposar 20 minutos para que los gelificantes actúen.",
      "Estira con rodillo o máquina espolvoreando con harina de arroz."
    ],
    tips: "La masa lista no debe pegarse a las manos ni abrirse al estirarla. Si reposa bien, estira perfecto incluso en 1 mm."
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
      "Espolvorea con harina, enrolla las láminas y corta tiras del grosor deseado.",
      "Desenrolla y deja secar 10–15 minutos sobre una bandeja.",
      "Cocina en agua hirviendo con sal de 3 a 4 minutos, hasta que estén firmes pero tiernos."
    ],
    tips: "Si deseas guardarlos, espolvorea con fécula, distribuye sobre bandeja y congela antes de embolsar."
  },
  {
    id: "b1-r3",
    title: "Tagliatelle de arroz y maíz",
    category: "bloque-1",
    ingredients: [
      "Harina de maíz fina: 100 g",
      "Harina de arroz: 150 g",
      "Fécula de maíz: 50 g",
      "Goma xantana: 2 g",
      "Huevos: 2 unidades",
      "Aceite de oliva: 10 ml",
      "Agua tibia: 20–30 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla harinas, fécula, sal y goma xantana.",
      "Agrega huevos y aceite, y mezcla.",
      "Añade el agua hasta formar una masa firme y flexible.",
      "Amasa 4–5 minutos hasta que la superficie quede lisa.",
      "Estira fina y corta en cintas.",
      "Deja secar 10 minutos y cocina 3–4 minutos en agua con sal."
    ],
    tips: "Si quieres color más intenso, añade ¼ cucharadita de cúrcuma."
  },
  {
    id: "b1-r4",
    title: "Fetuccine de garbanzo y arroz integral",
    category: "bloque-1",
    ingredients: [
      "Harina de garbanzo: 100 g",
      "Harina de arroz integral: 100 g",
      "Fécula de tapioca: 50 g",
      "Psyllium: 4 g",
      "Goma xantana: 2 g",
      "Huevos: 2 unidades",
      "Aceite de oliva: 10 ml",
      "Agua tibia: 20–30 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla harinas, fécula, psyllium, goma xantana y sal.",
      "Incorpora los huevos y el aceite.",
      "Añade agua hasta obtener una masa uniforme y no quebradiza.",
      "Amasa 4–5 minutos hasta que tome elasticidad.",
      "Reposa 20 minutos.",
      "Estira y corta en fetuccine.",
      "Cocina en agua con sal de 4 a 5 minutos."
    ],
    tips: "Combinan perfecto con salsas cremosas o pesto."
  },
  {
    id: "b1-r5",
    title: "Pasta de espinaca sin gluten",
    category: "bloque-1",
    ingredients: [
      "Espinaca cocida y bien escurrida: 60 g",
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Psyllium: 4 g",
      "Goma xantana: 2 g",
      "Huevo: 1 unidad",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g",
      "Agua tibia: 10–20 ml (solo si hace falta)"
    ],
    instructions: [
      "Procesa la espinaca con el huevo y el aceite hasta obtener una crema homogénea.",
      "Mezcla harinas, fécula, psyllium, goma xantana y sal.",
      "Integra la mezcla verde y forma una masa suave y elástica.",
      "Si la masa se siente quebradiza, añade pequeñas cantidades de agua tibia.",
      "Reposa 20 minutos.",
      "Estira fina y corta en cintas o láminas para lasaña."
    ],
    tips: "Perfecta para rellenos con ricotta vegetal o salsas de limón."
  },
  {
    id: "b1-r6",
    title: "Ravioles de ricotta y espinaca sin gluten",
    category: "bloque-1",
    ingredients: [
      "Masa: 1 porción de masa básica",
      "Ricotta vegetal o tradicional: 200 g",
      "Espinaca cocida y picada: 80 g",
      "Sal, pimienta y nuez moscada al gusto",
      "Queso vegetal o parmesano (opcional): 30 g"
    ],
    instructions: [
      "Mezcla el relleno hasta obtener textura cremosa.",
      "Estira la masa fina (1–2 mm).",
      "Coloca pequeñas porciones del relleno, cubre con otra lámina y presiona para sellar sin dejar aire.",
      "Corta los ravioles y acomódalos en bandeja enharinada.",
      "Cocina en agua hirviendo con sal por 3–4 minutos, hasta que floten."
    ],
    tips: "Si los vas a congelar, colócalos en una bandeja primero y luego pásalos a una bolsa para que no se peguen."
  },
  {
    id: "b1-r7",
    title: "Ñoquis clásicos de papa sin gluten",
    category: "bloque-1",
    ingredients: [
      "Papa cocida y hecha puré: 500 g",
      "Harina de arroz: 120 g",
      "Fécula de maíz: 50 g",
      "Goma xantana: 2 g",
      "Huevo: 1 unidad",
      "Sal: 5 g"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta obtener una masa blanda pero manipulable.",
      "Forma cilindros y corta en trocitos.",
      "Marca con tenedor (opcional).",
      "Cocina en agua con sal hasta que suban a la superficie.",
      "Retira rápido para conservar textura suave."
    ],
    tips: "Si prefieres textura más firme, agrega 10 g extra de harina de arroz."
  },
  {
    id: "b1-r8",
    title: "Ñoquis de batata",
    category: "bloque-1",
    ingredients: [
      "Puré de batata cocida: 400 g",
      "Harina de arroz: 120 g",
      "Fécula de maíz: 40 g",
      "Goma xantana: 1 g",
      "Huevo: 1 unidad",
      "Sal: 4 g",
      "Pimienta o nuez moscada: al gusto"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta obtener una masa blanda pero manipulable.",
      "Forma cilindros y corta en trocitos.",
      "Cocina en agua con sal hasta que suban a la superficie.",
      "Retira rápido para conservar su textura."
    ],
    tips: "Van perfectos con mantequilla vegetal y salvia."
  },
  {
    id: "b1-r9",
    title: "Ravioles de calabaza y queso vegetal",
    category: "bloque-1",
    ingredients: [
      "Masa: 1 porción de masa básica",
      "Puré de calabaza asada: 200 g",
      "Queso vegetal o ricotta: 100 g",
      "Sal, pimienta y nuez moscada"
    ],
    instructions: [
      "Mezcla el relleno hasta lograr textura densa y cremosa.",
      "Estira la masa fina y coloca porciones del relleno.",
      "Cubre con otra lámina y sella bien los bordes.",
      "Corta y cocina 3–4 minutos en agua con sal."
    ],
    tips: "Deliciosos con salsa de mantequilla vegetal y salvia."
  },
  {
    id: "b1-r10",
    title: "Pasta tricolor (espinaca, cúrcuma y natural)",
    category: "bloque-1",
    ingredients: [
      "1 masa básica dividida en 3 partes",
      "Espinaca cocida (para verde): 40 g",
      "Cúrcuma en polvo (para amarilla): ½ cucharadita",
      "Masa natural (para blanca)"
    ],
    instructions: [
      "Mezcla cada color con una parte de la masa: Verde: integrar puré de espinaca. Amarilla: mezclar la cúrcuma con los secos antes de hidratar. Blanca: masa básica sin color.",
      "Estira cada masa por separado.",
      "Superpone las láminas, pasa el rodillo y corta tiras.",
      "Cocina 3–4 minutos en agua con sal."
    ],
    tips: "Ideal con salsas ligeras que dejen ver los colores."
  },
  {
    id: "b1-r11",
    title: "Lasaña de verduras sin gluten",
    category: "bloque-1",
    ingredients: [
      "Láminas de pasta básica: 12 unidades",
      "Calabacín en rodajas: 200 g",
      "Berenjena en rodajas: 200 g",
      "Salsa de tomate casera: 400 g",
      "Queso vegetal o ricotta: 250 g",
      "Aceite de oliva, sal y orégano"
    ],
    instructions: [
      "Saltea las verduras con aceite, sal y orégano.",
      "En una fuente, coloca una capa de salsa, láminas de pasta, verduras y queso.",
      "Repite hasta completar capas.",
      "Cubre con salsa y queso, hornea a 180 °C por 30–35 minutos."
    ],
    tips: "Deja reposar 10 minutos antes de cortar para que asiente bien."
  },
  {
    id: "b1-r12",
    title: "Canelones de espinaca y ricotta sin gluten",
    category: "bloque-1",
    ingredients: [
      "Láminas de pasta básica: 12 unidades",
      "Espinaca cocida y picada: 300 g",
      "Ricotta vegetal o tradicional: 300 g",
      "Salsa bechamel sin gluten: 500 ml",
      "Queso vegetal rallado: 100 g",
      "Sal, pimienta y nuez moscada"
    ],
    instructions: [
      "Mezcla espinaca con ricotta, sal, pimienta y nuez moscada.",
      "Coloca el relleno sobre cada lámina de pasta y enrolla.",
      "Acomoda los canelones en una fuente con bechamel en la base.",
      "Cubre con más bechamel y queso rallado.",
      "Hornea a 180 °C por 25–30 minutos hasta dorar."
    ],
    tips: "Puedes preparar los canelones con anticipación y refrigerarlos antes de hornear."
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
      "Leche vegetal sin endulzar: 100 ml",
      "Crema o mantequilla de almendras: 2 cucharadas",
      "Aceite de oliva: 1 cucharada",
      "Nuez moscada: 1 pizca",
      "Sal y pimienta al gusto"
    ],
    instructions: [
      "Coloca todos los ingredientes en la licuadora.",
      "Procesa hasta obtener una crema suave y homogénea.",
      "Lleva a fuego suave 3–5 minutos para integrar sabores.",
      "Ajusta la consistencia agregando más leche vegetal si la deseas más fluida."
    ],
    tips: "Añade 1 cucharadita de levadura nutricional para un toque \"quesoso\" natural."
  },
  {
    id: "b3-r2",
    title: "Salsa de tomate casera sin azúcar",
    category: "bloque-3",
    ingredients: [
      "Tomates maduros pelados y picados: 500 g",
      "Aceite de oliva: 2 cucharadas",
      "Cebolla picada: ½ unidad",
      "Ajo picado: 1 diente",
      "Orégano seco y sal: al gusto"
    ],
    instructions: [
      "Sofríe el ajo y la cebolla en el aceite hasta que estén transparentes.",
      "Añade los tomates y cocina 20–25 minutos a fuego medio.",
      "Tritura si deseas una textura más fina.",
      "Sazona con orégano y sal."
    ],
    tips: "Agrega 1 cucharadita de pimentón dulce o albahaca fresca para un aroma más profundo."
  },
  {
    id: "b3-r3",
    title: "Salsa blanca sin lácteos (con coliflor o anacardos)",
    category: "bloque-3",
    ingredients: [
      "Coliflor cocida: 200 g",
      "(o anacardos remojados: 100 g)",
      "Leche vegetal sin endulzar: 150 ml",
      "Aceite de oliva: 1 cucharada",
      "Nuez moscada y sal: al gusto"
    ],
    instructions: [
      "Procesa todos los ingredientes en licuadora hasta obtener una crema lisa.",
      "Lleva a sartén y cocina 5 minutos hasta espesar ligeramente."
    ],
    tips: "Añade levadura nutricional para obtener un sabor similar a queso parmesano."
  },
  {
    id: "b3-r4",
    title: "Salsa pesto (clásico o de rúcula)",
    category: "bloque-3",
    ingredients: [
      "Albahaca fresca: 1 taza",
      "Piñones o nueces: 2 cucharadas",
      "Ajo: ½ diente",
      "Aceite de oliva: 4 cucharadas",
      "Queso vegetal o parmesano rallado: 2 cucharadas",
      "Sal al gusto"
    ],
    instructions: [
      "Procesa todos los ingredientes hasta obtener una pasta espesa.",
      "Añade más aceite si deseas textura más fluida.",
      "Versión rúcula: Reemplaza la albahaca por rúcula y el queso por almendras molidas."
    ],
    tips: "Si no tienes piñones, usa semillas de girasol tostadas."
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
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Licúa todos los ingredientes hasta obtener una pasta uniforme.",
      "Ajusta con más aceite si la prefieres más cremosa."
    ],
    tips: "Mezcla con pasta caliente y termina con perejil fresco picado."
  },
  {
    id: "b3-r6",
    title: "Salsa cremosa de champiñones",
    category: "bloque-3",
    ingredients: [
      "Champiñones frescos picados: 200 g",
      "Cebolla picada: ½ unidad",
      "Leche vegetal: 150 ml",
      "Aceite de oliva: 1 cucharada",
      "Sal, pimienta y tomillo: al gusto"
    ],
    instructions: [
      "Sofríe la cebolla y los champiñones hasta dorar.",
      "Añade la leche vegetal y cocina 5 minutos.",
      "Tritura parcialmente si deseas textura más lisa."
    ],
    tips: "Si la quieres más espesa, agrega 1 cucharadita de fécula disuelta en agua."
  },
  {
    id: "b3-r7",
    title: "Salsa de espinaca y nuez",
    category: "bloque-3",
    ingredients: [
      "Espinaca cocida y bien escurrida: 100 g",
      "Nueces picadas: 2 cucharadas",
      "Leche vegetal: 100 ml",
      "Aceite de oliva: 1 cucharada",
      "Ajo: ½ diente",
      "Sal y pimienta: al gusto"
    ],
    instructions: [
      "Licúa todos los ingredientes hasta obtener una crema verde.",
      "Calienta en sartén 3 minutos antes de servir."
    ],
    tips: "Combina perfecto con ravioles o ñoquis."
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
      "Calienta ligeramente el aceite.",
      "Añade el ajo y cocina apenas sin dorar.",
      "Agrega jugo de limón, ralladura y condimentos."
    ],
    tips: "Finaliza con perejil fresco picado o ralladura extra para potenciar aroma."
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
      "Licúa todos los ingredientes hasta lograr una crema suave.",
      "Úsala inmediatamente para evitar oxidación."
    ],
    tips: "Si necesitas conservarla unas horas, cúbrela con una fina capa de aceite de oliva."
  },
  {
    id: "b3-r10",
    title: "Salsa boloñesa vegetal",
    category: "bloque-3",
    ingredients: [
      "Lentejas cocidas o soja texturizada rehidratada: 200 g",
      "Tomate triturado: 300 g",
      "Cebolla y zanahoria picadas: ½ unidad cada una",
      "Ajo: 1 diente",
      "Aceite de oliva: 2 cucharadas",
      "Laurel, sal y pimienta: al gusto"
    ],
    instructions: [
      "Sofríe ajo, cebolla y zanahoria hasta dorar ligeramente.",
      "Añade lentejas y tomate triturado.",
      "Cocina a fuego bajo 20 minutos.",
      "Condimenta con laurel, sal y pimienta."
    ],
    tips: "Un chorrito de vino tinto seco al sofrito eleva muchísimo el sabor."
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
      "Goma xantana: 1 g",
      "Huevos: 2 unidades",
      "Agua tibia: 20–30 ml",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla las harinas, fécula, psyllium, goma xantana y sal.",
      "Añade los huevos y el aceite; integra.",
      "Agrega el agua poco a poco hasta formar una masa firme y elástica.",
      "Amasa 4–5 minutos hasta que quede lisa y suave.",
      "Reposa 20 minutos cubierta.",
      "Estira láminas finas (1–2 mm).",
      "Cocina 1 minuto en agua con sal y seca sobre un paño."
    ],
    tips: "Si vas a armar la lasaña con salsas muy líquidas, puedes usar las láminas crudas: se cocinan en el horno sin problema."
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
      "Romero fresco picado: 1 cucharadita",
      "Sal y pimienta al gusto"
    ],
    instructions: [
      "Mezcla todos los ingredientes hasta integrar.",
      "Deja enfriar antes de usar."
    ],
    tips: "Perfecto para ravioles o lasañas; acompáñalo con mantequilla vegetal y salvia."
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
      "Mezcla espinaca, tofu y condimentos hasta formar un relleno firme.",
      "Usa para ravioles, canelones o sorrentinos."
    ],
    tips: "1 cucharadita de levadura nutricional aporta sabor a queso sin usar lácteos."
  },
  {
    id: "b4-r5",
    title: "Pan rallado sin gluten para gratinar",
    category: "bloque-4",
    ingredients: [
      "Pan sin gluten seco: 100 g",
      "Especias (ajo, orégano, perejil): al gusto"
    ],
    instructions: [
      "Tritura el pan hasta obtener textura de pan rallado.",
      "Mezcla con las especias."
    ],
    tips: "Tuesta ligeramente en sartén para realzar sabor y crocancia."
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
      "Corta las verduras en tiras con espiralizador o pelador.",
      "Saltea 2–3 minutos con aceite y sal."
    ],
    tips: "No cocines de más: deben quedar al dente para mantener textura y color."
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
      "Mezcla todos los ingredientes hasta obtener una mezcla líquida homogénea.",
      "Cocina porciones en sartén antiadherente, como crepas.",
      "Rellena y enrolla."
    ],
    tips: "Para versión vegana, sustituye el huevo por 1 cda de linaza molida + 3 cdas de agua."
  },
  {
    id: "b4-r8",
    title: "Masa para raviolones rellenos",
    category: "bloque-4",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Psyllium: 6 g",
      "Goma xantana: 1 g",
      "Huevos: 2 unidades",
      "Aceite de oliva: 10 ml",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla harinas, fécula, psyllium, goma xantana y sal.",
      "Añade huevos y aceite, y amasa.",
      "Estira la masa algo más gruesa que la estándar.",
      "Coloca relleno, cubre y sella firme.",
      "Cocina 4 minutos en agua con sal."
    ],
    tips: "Perfecta para rellenos húmedos (espinaca y ricotta, calabaza, tofu cremoso)."
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
      "Calienta suavemente el aceite con las hierbas y el ajo.",
      "Apaga el fuego, deja enfriar y guarda en frasco."
    ],
    tips: "Rocía sobre pasta cocida o usa antes de gratinar para un aroma irresistible."
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
      "Tritura todo hasta obtener textura de queso rallado.",
      "Guarda en frasco hermético."
    ],
    tips: "Ideal para espolvorear sobre pastas, risottos o ensaladas."
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
