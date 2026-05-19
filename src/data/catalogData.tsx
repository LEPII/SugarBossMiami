import Cake1 from "../assets/cakes/cake1.jpg";
import Cake2 from "../assets/cakes/cake2.jpg";
import Cake3 from "../assets/cakes/cake3.jpg";
import Cake4 from "../assets/cakes/cake4.jpg";
import Cake5 from "../assets/cakes/cake5.jpg";

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
    src: Cake3,
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
    src: Cake4,
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
    src: Cake2,
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
    src: Cake4,
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
    src: Cake3,
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
  {
    id: "cupcake-strawberry-shortcake-swirl",
    slug: "strawberry-shortcake-swirl",
    name: "Strawberry Shortcake Swirl",
    menuSection: "- Cupcakes -",
    hasImage: true,
    src: Cake4,
    alt: "Strawberry Shortcake Swirl cupcake",
    filters: {
      type: ["signature-cupcake"],
      eventType: ["baby-showers"],
      style: ["romantic"],
      color: ["pastels"],
      decorations: ["buttercream-flowers"],
      size: ["individual"],
    },
    menuGalleryFilter: {
      key: "color",
      option: "pastels",
    },
  },
  {
    id: "cupcake-oreo-cheesecake-crush",
    slug: "oreo-cheesecake-crush",
    name: "Oreo Cheesecake Crush",
    menuSection: "- Cupcakes -",
    hasImage: true,
    src: Cake5,
    alt: "Oreo Cheesecake Crush cupcake",
    filters: {
      type: ["custom-cupcake"],
      eventType: ["adult-birthday-parties"],
      style: ["modern"],
      color: ["monochromatic"],
      decorations: ["oreo-toppings"],
      size: ["individual"],
    },
    menuGalleryFilter: {
      key: "decorations",
      option: "oreo-toppings",
    },
  },
  {
    id: "cake-flavor-red-velvet",
    slug: "red-velvet",
    name: "Red Velvet",
    menuSection: "- Cake Flavors -",
    hasImage: true,
    src: Cake5,
    alt: "Red Velvet cake",
    filters: {
      type: ["cake"],
      eventType: ["marriage-celebrations"],
      style: ["luxury"],
      color: ["reds"],
      decorations: ["smooth-finish"],
      size: ["large"],
    },
    menuGalleryFilter: {
      key: "style",
      option: "luxury",
    },
  },
  {
    id: "cake-flavor-coconut-cream",
    slug: "coconut-cream",
    name: "Coconut Cream",
    menuSection: "- Cake Flavors -",
    hasImage: true,
    src: Cake1,
    alt: "Coconut Cream cake",
    filters: {
      type: ["cake"],
      eventType: ["festive-occasions"],
      style: ["classic"],
      color: ["neutrals"],
      decorations: ["coconut-flakes"],
      size: ["medium"],
    },
    menuGalleryFilter: {
      key: "decorations",
      option: "coconut-flakes",
    },
  },
  {
    id: "cake-filling-salted-caramel",
    slug: "salted-caramel",
    name: "Salted Caramel",
    menuSection: "- Cake Fillings -",
    hasImage: true,
    isPremium: true,
    src: Cake4,
    alt: "Salted Caramel filling",
    filters: {
      type: ["cake"],
      eventType: ["business-functions"],
      style: ["elegant"],
      color: ["earthy-tones"],
      decorations: ["caramel-drizzle"],
      size: ["medium"],
    },
    menuGalleryFilter: {
      key: "decorations",
      option: "caramel-drizzle",
    },
  },
  {
    id: "frosting-chocolate-ganache",
    slug: "chocolate-ganache",
    name: "Chocolate Ganache",
    menuSection: "- Frostings -",
    hasImage: true,
    src: Cake2,
    alt: "Chocolate Ganache frosting",
    filters: {
      type: ["frosting"],
      eventType: ["adult-birthday-parties"],
      style: ["modern"],
      color: ["dark-tones"],
      decorations: ["ganache-drip"],
      size: ["small"],
    },
    menuGalleryFilter: {
      key: "decorations",
      option: "ganache-drip",
    },
  },
  {
    id: "dessert-macaron-box",
    slug: "macaron-box",
    name: "Luxury Macaron Box",
    menuSection: "- Specialty Desserts -",
    hasImage: true,
    isPremium: true,
    src: Cake5,
    alt: "Luxury Macaron Box",
    filters: {
      type: ["specialty-dessert"],
      eventType: ["bridal-showers"],
      style: ["luxury"],
      color: ["pastels"],
      decorations: ["gold-details"],
      size: ["party-pack"],
    },
    menuGalleryFilter: {
      key: "type",
      option: "specialty-dessert",
    },
  },
  {
    id: "dessert-custom-cookie-set",
    slug: "custom-cookie-set",
    name: "Custom Sugar Cookie Set",
    menuSection: "- Specialty Desserts -",
    hasImage: true,
    src: Cake1,
    alt: "Custom Sugar Cookie Set",
    filters: {
      type: ["specialty-dessert"],
      eventType: ["baby-showers"],
      style: ["playful"],
      color: ["soft-colors"],
      decorations: ["hand-piped-details"],
      size: ["party-pack"],
    },
    menuGalleryFilter: {
      key: "style",
      option: "playful",
    },
  },

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
  {
    id: "cupcake-strawberry-shortcake-swirl",
    slug: "strawberry-shortcake-swirl",
    name: "Strawberry Shortcake Swirl",
    menuSection: "- Cupcakes -",
  },
  {
    id: "cupcake-lemon-zest-burst",
    slug: "lemon-zest-burst",
    name: "Lemon Zest Burst",
    menuSection: "- Cupcakes -",
  },
  {
    id: "cupcake-pistachio-rosewater-dream",
    slug: "pistachio-rosewater-dream",
    name: "Pistachio Rosewater Dream",
    menuSection: "- Cupcakes -",
    isPremium: true,
  },
  {
    id: "cupcake-oreo-cheesecake-crush",
    slug: "oreo-cheesecake-crush",
    name: "Oreo Cheesecake Crush",
    menuSection: "- Cupcakes -",
  },
  {
    id: "cupcake-cookies-and-cream-cloud",
    slug: "cookies-and-cream-cloud",
    name: "Cookies & Cream Cloud",
    menuSection: "- Cupcakes -",
  },

  // Additional Cake Flavors
  {
    id: "cake-flavor-chocolate-fudge",
    slug: "chocolate-fudge",
    name: "Chocolate Fudge",
    menuSection: "- Cake Flavors -",
  },
  {
    id: "cake-flavor-red-velvet",
    slug: "red-velvet",
    name: "Red Velvet",
    menuSection: "- Cake Flavors -",
  },
  {
    id: "cake-flavor-marble-supreme",
    slug: "marble-supreme",
    name: "Marble Supreme",
    menuSection: "- Cake Flavors -",
  },
  {
    id: "cake-flavor-coconut-cream",
    slug: "coconut-cream",
    name: "Coconut Cream",
    menuSection: "- Cake Flavors -",
  },
  {
    id: "cake-flavor-almond-amaretto",
    slug: "almond-amaretto",
    name: "Almond Amaretto",
    menuSection: "- Cake Flavors -",
    isPremium: true,
  },

  // Additional Fillings
  {
    id: "cake-filling-strawberry-preserve",
    slug: "strawberry-preserve",
    name: "Strawberry Preserve",
    menuSection: "- Cake Fillings -",
  },
  {
    id: "cake-filling-raspberry-mousse",
    slug: "raspberry-mousse",
    name: "Raspberry Mousse",
    menuSection: "- Cake Fillings -",
  },
  {
    id: "cake-filling-oreo-cream",
    slug: "oreo-cream",
    name: "Oreo Cream",
    menuSection: "- Cake Fillings -",
  },
  {
    id: "cake-filling-bavarian-cream",
    slug: "bavarian-cream",
    name: "Bavarian Cream",
    menuSection: "- Cake Fillings -",
  },
  {
    id: "cake-filling-salted-caramel",
    slug: "salted-caramel",
    name: "Salted Caramel",
    menuSection: "- Cake Fillings -",
    isPremium: true,
  },

  // Additional Frostings
  {
    id: "frosting-cream-cheese",
    slug: "cream-cheese",
    name: "Cream Cheese Frosting",
    menuSection: "- Frostings -",
  },
  {
    id: "frosting-chocolate-ganache",
    slug: "chocolate-ganache",
    name: "Chocolate Ganache",
    menuSection: "- Frostings -",
  },
  {
    id: "frosting-whipped-vanilla",
    slug: "whipped-vanilla",
    name: "Whipped Vanilla",
    menuSection: "- Frostings -",
  },
  {
    id: "frosting-strawberry-buttercream",
    slug: "strawberry-buttercream",
    name: "Strawberry Buttercream",
    menuSection: "- Frostings -",
  },
  {
    id: "frosting-espresso-buttercream",
    slug: "espresso-buttercream",
    name: "Espresso Buttercream",
    menuSection: "- Frostings -",
    isPremium: true,
  },

  // Specialty Desserts
  {
    id: "dessert-macaron-box",
    slug: "macaron-box",
    name: "Luxury Macaron Box",
    menuSection: "- Specialty Desserts -",
    isPremium: true,
  },
  {
    id: "dessert-chocolate-covered-strawberries",
    slug: "chocolate-covered-strawberries",
    name: "Chocolate Covered Strawberries",
    menuSection: "- Specialty Desserts -",
  },
  {
    id: "dessert-mini-cheesecake-bites",
    slug: "mini-cheesecake-bites",
    name: "Mini Cheesecake Bites",
    menuSection: "- Specialty Desserts -",
  },
  {
    id: "dessert-dessert-shooter-set",
    slug: "dessert-shooter-set",
    name: "Dessert Shooter Set",
    menuSection: "- Specialty Desserts -",
  },
  {
    id: "dessert-custom-cookie-set",
    slug: "custom-cookie-set",
    name: "Custom Sugar Cookie Set",
    menuSection: "- Specialty Desserts -",
  },
];

export type { GalleryFilters, CatalogItem };

export { catalogData };