import type { GalleryFilters } from "./catalogData";

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
