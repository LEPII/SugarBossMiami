export type Language = "en" | "es";

const en = {
  nav: {
    home: "Home",
    menu: "Menu",
    gallery: "Gallery",
    faq: "FAQ",
    contact: "Contact Us",
    toggleLanguage: "Cambiar a español",
    toggleLabel: "ES",
    darkMode: "Switch to dark mode",
    lightMode: "Switch to light mode",
  },
  home: {
    headline: "Your Custom Cake Destination",
    orderNow: "Order Now",
    servicesTitle: "Our Services",
    servicesLeft:
      "SugarBossMiami specializes in custom cakes and desserts that steal the spotlight.",
    servicesRight:
      "From one-of-a-kind celebration cakes to elegant wedding tiers and handcrafted specialty desserts, we create the perfect centerpiece for every occasion.",
    customCakesTitle: "Custom Cakes",
    customCakesText:
      "More than dessert — each cake is thoughtfully created to capture the feeling behind your celebration and turn it into something lasting.",
    weddingCakesTitle: "Wedding Cakes",
    weddingCakesText:
      "Elegant, timeless, and thoughtfully crafted — our wedding cakes are designed to reflect the beauty of your celebration while creating a centerpiece that feels unforgettable from the very first glance.",
    dessertsTitle: "Specialty Desserts",
    dessertsText:
      "From delicate cupcakes to decadent dessert tables, our specialty treats are crafted with the same artistry and attention to detail as every custom cake we create.",
    viewMore: "View More",
    exploreOur: "Explore Our",
    portfolio: "Portfolio",
    portfolioText:
      "Browse a collection of handcrafted desserts where creativity and flavor come together to make every celebration unforgettable. From elegant custom cakes to playful sweet treats, every piece is made with passion and care.",
    viewGallery: "View Full Gallery",
    meetChef: "Meet The Chef",
    chefRole: "Chef and Owner",
    aboutText:
      "At SugarBossMiami, every dessert is crafted with passion, creativity, and a personal touch. What began as a love for baking has grown into creating custom cakes and desserts that turn life’s most meaningful moments into lasting memories. From elegant wedding cakes to playful celebration treats, each creation is thoughtfully designed with quality ingredients, artistic detail, and genuine care — because every celebration deserves something unforgettable.",
    testimonials: "Testimonials",
    testimonial1:
      "“SugarBossMiami brought our daughter’s birthday to life with a cake that was almost too beautiful to cut. Every detail was stunning, and the flavor was just as unforgettable. From start to finish, the experience felt effortless and personal.”",
    testimonial2:
      "“From the first conversation to the final presentation, SugarBossMiami exceeded every expectation. The custom cake was elegant, creative, and beautifully detailed — pairing perfectly with the red color of my beloved Jeep.”",
  },
  menu: {
    title: "Crafted Cakes",
    subtitle: "Where Imagination Meets Deliciousness",
    viewMore: "View More",
    premiumLegend: "Indicates a premium option.",
    sections: {
      "- Cupcakes -": "- Cupcakes -",
      "- Cake Flavors -": "- Cake Flavors -",
      "- Cake Fillings -": "- Cake Fillings -",
      "- Frostings -": "- Frostings -",
      "- Specialty Desserts -": "- Specialty Desserts -",
    } as Record<string, string>,
  },
  gallery: {
    title: "Our Sweet Gallery",
    subtitle: "Explore our custom creations by filtering your preferences.",
    filter: "Filter",
    filterTitle: "Filter Gallery",
    results: "results",
    clearAll: "Clear All Filters",
    clear: "Clear",
    viewCakes: "View Cakes",
    noResults: "No images match your current filter selections.",
    showAll: "Show All Images",
    categories: {
      type: "Type",
      eventType: "Event Type",
      color: "Color Palette",
      decorations: "Key Decorations",
      size: "Size/Servings",
      style: "Style/Aesthetic",
    },
  },
  faq: {
    title: "Frequently Asked Questions",
  },
  contact: {
    title: "Let's Get In Touch",
  },
  form: {
    heading: "Send us your inquiry:",
    name: "* Name:",
    email: "* Email:",
    phone: "* Phone Number:",
    eventDate: "* Delivery Date:",
    items: "* Which item(s) would you like to order?",
    itemLabels: {
      customCake: "Custom Cake",
      customCupcake: "Custom Cupcake",
      cookies: "Cookies",
      brownies: "Brownies",
      other: "Other",
    },
    otherSpecify: "* Please specify your order:",
    budget: "Budget (optional):",
    budgetPlaceholder: "e.g., 200",
    specialRequests: "Special Requests (optional):",
    submit: "Submit Inquiry",
    submitting: "Submitting...",
    errors: {
      name: "Please provide a full name",
      email: "Invalid Email Address",
      phoneRequired: "Phone number is required",
      phoneFormat: "Invalid phone number format (e.g., +1234567890 or 1234567890)",
      phoneTooLong: "Phone number too long",
      dateFormat: "Invalid date format (YYYY-MM-DD)",
      dateRequired: "Event date is required",
      datePast: "Event date must be a valid date and not in the past.",
      budgetNegative: "Budget cannot be negative",
      budgetTooHigh: "Budget too high, please contact us directly",
      itemsMin: "Please select at least one item to order",
      otherRequired: 'Please specify the "other" item if "Other" is selected.',
    },
  },
  footer: {
    contact: "Contact Us",
  },
  cta: {
    orderToday: "Order Today",
  },
};

export type Translations = typeof en;

const es: Translations = {
  nav: {
    home: "Inicio",
    menu: "Menú",
    gallery: "Galería",
    faq: "Preguntas",
    contact: "Contáctanos",
    toggleLanguage: "Switch to English",
    toggleLabel: "EN",
    darkMode: "Cambiar a modo oscuro",
    lightMode: "Cambiar a modo claro",
  },
  home: {
    headline: "Tu Destino de Pasteles Personalizados",
    orderNow: "Ordena Ahora",
    servicesTitle: "Nuestros Servicios",
    servicesLeft:
      "SugarBossMiami se especializa en pasteles y postres personalizados que se roban el protagonismo.",
    servicesRight:
      "Desde pasteles únicos para celebraciones hasta elegantes pasteles de boda y postres artesanales, creamos la pieza central perfecta para cada ocasión.",
    customCakesTitle: "Pasteles Personalizados",
    customCakesText:
      "Más que un postre — cada pastel se crea con esmero para capturar el sentimiento detrás de tu celebración y convertirlo en algo duradero.",
    weddingCakesTitle: "Pasteles de Boda",
    weddingCakesText:
      "Elegantes, atemporales y elaborados con dedicación — nuestros pasteles de boda están diseñados para reflejar la belleza de tu celebración y crear una pieza central inolvidable desde la primera mirada.",
    dessertsTitle: "Postres Especiales",
    dessertsText:
      "Desde delicados cupcakes hasta exquisitas mesas de postres, nuestras delicias especiales se elaboran con el mismo arte y atención al detalle que cada pastel personalizado que creamos.",
    viewMore: "Ver Más",
    exploreOur: "Explora Nuestro",
    portfolio: "Portafolio",
    portfolioText:
      "Descubre una colección de postres artesanales donde la creatividad y el sabor se unen para hacer cada celebración inolvidable. Desde elegantes pasteles personalizados hasta divertidas delicias, cada pieza está hecha con pasión y cariño.",
    viewGallery: "Ver Galería Completa",
    meetChef: "Conoce a la Chef",
    chefRole: "Chef y Propietaria",
    aboutText:
      "En SugarBossMiami, cada postre se elabora con pasión, creatividad y un toque personal. Lo que comenzó como un amor por la repostería se ha convertido en la creación de pasteles y postres personalizados que transforman los momentos más significativos de la vida en recuerdos duraderos. Desde elegantes pasteles de boda hasta divertidas delicias para celebraciones, cada creación está cuidadosamente diseñada con ingredientes de calidad, detalle artístico y verdadero cariño — porque cada celebración merece algo inolvidable.",
    testimonials: "Testimonios",
    testimonial1:
      "“SugarBossMiami le dio vida al cumpleaños de nuestra hija con un pastel casi demasiado hermoso para cortarlo. Cada detalle fue impresionante y el sabor igual de inolvidable. De principio a fin, la experiencia fue sencilla y personal.”",
    testimonial2:
      "“Desde la primera conversación hasta la presentación final, SugarBossMiami superó todas mis expectativas. El pastel personalizado fue elegante, creativo y lleno de detalles — combinando perfectamente con el color rojo de mi querido Jeep.”",
  },
  menu: {
    title: "Pasteles Artesanales",
    subtitle: "Donde la Imaginación se Encuentra con el Sabor",
    viewMore: "Ver Más",
    premiumLegend: "Indica una opción premium.",
    sections: {
      "- Cupcakes -": "- Cupcakes -",
      "- Cake Flavors -": "- Sabores de Pastel -",
      "- Cake Fillings -": "- Rellenos de Pastel -",
      "- Frostings -": "- Coberturas -",
      "- Specialty Desserts -": "- Postres Especiales -",
    },
  },
  gallery: {
    title: "Nuestra Dulce Galería",
    subtitle: "Explora nuestras creaciones personalizadas filtrando según tus preferencias.",
    filter: "Filtrar",
    filterTitle: "Filtrar Galería",
    results: "resultados",
    clearAll: "Borrar Todos los Filtros",
    clear: "Borrar",
    viewCakes: "Ver Pasteles",
    noResults: "Ninguna imagen coincide con los filtros seleccionados.",
    showAll: "Mostrar Todas las Imágenes",
    categories: {
      type: "Tipo",
      eventType: "Tipo de Evento",
      color: "Paleta de Colores",
      decorations: "Decoraciones",
      size: "Tamaño/Porciones",
      style: "Estilo/Estética",
    },
  },
  faq: {
    title: "Preguntas Frecuentes",
  },
  contact: {
    title: "Ponte en Contacto",
  },
  form: {
    heading: "Envíanos tu solicitud:",
    name: "* Nombre:",
    email: "* Correo electrónico:",
    phone: "* Número de teléfono:",
    eventDate: "* Fecha de entrega:",
    items: "* ¿Qué artículo(s) te gustaría ordenar?",
    itemLabels: {
      customCake: "Pastel Personalizado",
      customCupcake: "Cupcake Personalizado",
      cookies: "Galletas",
      brownies: "Brownies",
      other: "Otro",
    },
    otherSpecify: "* Por favor especifica tu pedido:",
    budget: "Presupuesto (opcional):",
    budgetPlaceholder: "ej., 200",
    specialRequests: "Peticiones especiales (opcional):",
    submit: "Enviar Solicitud",
    submitting: "Enviando...",
    errors: {
      name: "Por favor ingresa tu nombre completo",
      email: "Correo electrónico inválido",
      phoneRequired: "El número de teléfono es obligatorio",
      phoneFormat: "Formato de teléfono inválido (ej., +1234567890 o 1234567890)",
      phoneTooLong: "Número de teléfono demasiado largo",
      dateFormat: "Formato de fecha inválido (AAAA-MM-DD)",
      dateRequired: "La fecha del evento es obligatoria",
      datePast: "La fecha del evento debe ser válida y no estar en el pasado.",
      budgetNegative: "El presupuesto no puede ser negativo",
      budgetTooHigh: "Presupuesto demasiado alto, por favor contáctanos directamente",
      itemsMin: "Por favor selecciona al menos un artículo",
      otherRequired: 'Por favor especifica el artículo si seleccionaste "Otro".',
    },
  },
  footer: {
    contact: "Contáctanos",
  },
  cta: {
    orderToday: "Ordena Hoy",
  },
};

export const translations: Record<Language, Translations> = { en, es };
