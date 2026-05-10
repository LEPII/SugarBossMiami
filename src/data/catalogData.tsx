interface GalleryFilters {
  type: string[];
  eventType: string[];
  style: string[];
  color: string[];
  decorations: string[];
  size: string[];
}

interface CatalogItem {
  id: string;
  slug: string;
  name: string;
  menuSection: string;
  isPremium?: boolean;
  hasImage?: boolean;
  src?: string;
  alt?: string;
  filters?: GalleryFilters;

  menuGalleryFilter?: {
    key: keyof GalleryFilters;
    option: string;
  };
}

const catalogData: CatalogItem[] = [
  {
    id: "cupcake-red-velvet-royale",
    slug: "red-velvet-royale",
    name: "Red Velvet Royale",
    menuSection: "- Cupcakes -",
    hasImage: true,
    src: "https://placehold.co/400x300/D291BC/FFFFFF?text=Red+Velvet+Royale",
    alt: "Red Velvet Royale cupcake",
    filters: {
      type: ["signature-cupcake"],
      eventType: ["adult-birthday-parties"],
      style: ["elegant"],
      color: ["monochromatic"],
      decorations: ["buttercream-flowers"],
      size: ["individual"],
    },
    menuGalleryFilter: {
      key: "type",
      option: "signature-cupcake",
    },
  },
  {
    id: "cupcake-caramel-macchiato-delight",
    slug: "caramel-macchiato-delight",
    name: "Caramel Macchiato Delight",
    menuSection: "- Cupcakes -",
    hasImage: true,
    isPremium: true,
    src: "https://placehold.co/400x300/CBA135/FFFFFF?text=Caramel+Macchiato+Delight",
    alt: "Caramel Macchiato Delight cupcake",
    filters: {
      type: ["custom-cupcake"],
      eventType: ["business-functions"],
      style: ["modern"],
      color: ["earthy-tones"],
      decorations: ["piping-details"],
      size: ["individual"],
    },
    menuGalleryFilter: {
      key: "type",
      option: "custom-cupcake",
    },
  },
  {
    id: "cake-flavor-classic-vanilla",
    slug: "classic-vanilla",
    name: "Classic Vanilla",
    menuSection: "- Cake Flavors -",
    hasImage: true,
    src: "https://placehold.co/400x300/E0BBE4/FFFFFF?text=Classic+Vanilla",
    alt: "Classic Vanilla cake flavor",
    filters: {
      type: ["cake"],
      eventType: ["marriage-celebrations"],
      style: ["classic"],
      color: ["pastels"],
      decorations: ["buttercream-flowers"],
      size: ["medium"],
    },
    menuGalleryFilter: {
      key: "type",
      option: "cake",
    },
  },
  {
    id: "cake-filling-dulce-de-leche-delight",
    slug: "dulce-de-leche-delight",
    name: "Dulce de Leche Delight",
    menuSection: "- Cake Fillings -",
    hasImage: true,
    isPremium: true,
    src: "https://placehold.co/400x300/C68E5A/FFFFFF?text=Dulce+de+Leche+Delight",
    alt: "Dulce de Leche Delight filling",
    filters: {
      type: ["cake"],
      eventType: ["adult-birthday-parties"],
      style: ["luxury"],
      color: ["earthy-tones"],
      decorations: ["drip-cakes"],
      size: ["medium"],
    },
    menuGalleryFilter: {
      key: "decorations",
      option: "drip-cakes",
    },
  },
  {
    id: "frosting-classic-vanilla-buttercream",
    slug: "classic-vanilla-buttercream",
    name: "Classic Vanilla Buttercream",
    menuSection: "- Frostings -",
    hasImage: true,
    src: "https://placehold.co/400x300/F7E7CE/333333?text=Classic+Vanilla+Buttercream",
    alt: "Classic Vanilla Buttercream frosting",
    filters: {
      type: ["frosting"],
      eventType: ["festive-occasions"],
      style: ["classic"],
      color: ["monochromatic"],
      decorations: ["piping-details"],
      size: ["small"],
    },
    menuGalleryFilter: {
      key: "type",
      option: "frosting",
    },
  },

  // Non-gallery items 
  {
    id: "cupcake-vanilla-bean-dream",
    slug: "vanilla-bean-dream",
    name: "Vanilla Bean Dream",
    menuSection: "- Cupcakes -",
  },
  {
    id: "cupcake-chocolate-decadence",
    slug: "chocolate-decadence",
    name: "Chocolate Decadence",
    menuSection: "- Cupcakes -",
  },
];

export type { GalleryFilters, CatalogItem };

export { catalogData };