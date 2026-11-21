import type { GalleryFilters } from "./catalogData";
import type { Language } from "../i18n/translations";

export interface FilterCategory {
  name: string;
  key: keyof GalleryFilters;
  options: string[];
}

export const filterCategories: FilterCategory[] = [
  {
    name: "Type",
    key: "type",
    options: [
      "cake",
      "custom-cake",
      "signature-cake",
      "cupcake",
      "custom-cupcake",
      "signature-cupcake",
      "cookies",
      "custom-cookie",
      "signature-cookie",
      "frosting",
    ],
  },
  {
    name: "Event Type",
    key: "eventType",
    options: [
      "anniversaries",
      "baby-welcoming-events",
      "adult-birthday-parties",
      "children's-birthday-parties",
      "pre-wedding-showers",
      "business-functions",
      "engagement-parties",
      "graduation-ceremonies",
      "festive-occasions",
      "faith-based-events",
      "retirement-parties",
      "marriage-celebrations",
    ],
  },
  {
    name: "Color Palette",
    key: "color",
    options: [
      "earthy-tones",
      "metallics",
      "monochromatic",
      "ombre-gradient",
      "pastels",
      "specific-combinations",
      "vibrant",
    ],
  },
  {
    name: "Key Decorations",
    key: "decorations",
    options: [
      "buttercream-flowers",
      "custom-toppers",
      "drip-cakes",
      "edible-flowers",
      "edible-gold-leaf",
      "edible-images",
      "fondant-figures",
      "fresh-flowers",
      "hand-painted-details",
      "macarons",
      "piping-details",
      "ruffles",
      "sprinkles",
    ],
  },
  {
    name: "Size/Servings",
    key: "size",
    options: [
      "1-tier",
      "2-tier",
      "3-tier",
      "4+-tier",
      "individual",
      "large",
      "medium",
      "sheet-cake",
      "small",
    ],
  },
  {
    name: "Style/Aesthetic",
    key: "style",
    options: [
      "bohemian",
      "classic",
      "elegant",
      "fun",
      "glamorous",
      "luxury",
      "modern",
      "rustic",
      "textured",
      "vintage",
      "whimsical",
    ],
  },
];

const optionLabelsEs: Record<string, string> = {
  // Type
  cake: "pastel",
  "custom-cake": "pastel personalizado",
  "signature-cake": "pastel de autor",
  cupcake: "cupcake",
  "custom-cupcake": "cupcake personalizado",
  "signature-cupcake": "cupcake de autor",
  cookies: "galletas",
  "custom-cookie": "galleta personalizada",
  "signature-cookie": "galleta de autor",
  frosting: "cobertura",
  // Event type
  anniversaries: "aniversarios",
  "baby-welcoming-events": "baby showers",
  "adult-birthday-parties": "cumpleaños de adultos",
  "children's-birthday-parties": "cumpleaños infantiles",
  "pre-wedding-showers": "despedidas de soltera",
  "business-functions": "eventos corporativos",
  "engagement-parties": "fiestas de compromiso",
  "graduation-ceremonies": "graduaciones",
  "festive-occasions": "festividades",
  "faith-based-events": "eventos religiosos",
  "retirement-parties": "fiestas de jubilación",
  "marriage-celebrations": "bodas",
  // Color
  "earthy-tones": "tonos tierra",
  metallics: "metálicos",
  monochromatic: "monocromático",
  "ombre-gradient": "degradado ombré",
  pastels: "pasteles",
  "specific-combinations": "combinaciones específicas",
  vibrant: "vibrante",
  // Decorations
  "buttercream-flowers": "flores de buttercream",
  "custom-toppers": "toppers personalizados",
  "drip-cakes": "drip cakes",
  "edible-flowers": "flores comestibles",
  "edible-gold-leaf": "hoja de oro comestible",
  "edible-images": "imágenes comestibles",
  "fondant-figures": "figuras de fondant",
  "fresh-flowers": "flores frescas",
  "hand-painted-details": "detalles pintados a mano",
  macarons: "macarons",
  "piping-details": "detalles con manga",
  ruffles: "volantes",
  sprinkles: "chispas",
  // Size
  "1-tier": "1 piso",
  "2-tier": "2 pisos",
  "3-tier": "3 pisos",
  "4+-tier": "4+ pisos",
  individual: "individual",
  large: "grande",
  medium: "mediano",
  "sheet-cake": "pastel de bandeja",
  small: "pequeño",
  // Style
  bohemian: "bohemio",
  classic: "clásico",
  elegant: "elegante",
  fun: "divertido",
  glamorous: "glamoroso",
  luxury: "lujo",
  modern: "moderno",
  rustic: "rústico",
  textured: "texturizado",
  vintage: "vintage",
  whimsical: "fantasioso",
};

/** Display label for a filter option slug; slugs stay the internal/URL keys. */
export const getOptionLabel = (slug: string, language: Language): string =>
  (language === "es" && optionLabelsEs[slug]) || slug.replace(/-/g, " ");
