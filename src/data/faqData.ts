import type { Language } from "../i18n/translations";

export type FAQItem = {
  q: string;
  a: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

const faqSectionsEn: FAQSection[] = [
  {
    title: "General",
    items: [
      {
        q: "How far in advance should I place my order?",
        a: "We recommend placing orders at least 1–2 weeks in advance for custom cakes and large events. Availability may be limited during holidays and peak seasons.",
      },
      {
        q: "What areas do you serve?",
        a: "SugarBossMiami currently offers local pickup and limited local delivery within the Miami area depending on availability and order size.",
      },
      {
        q: "How do I place an order?",
        a: "You can place an order by submitting a contact form with your event details, preferred design, servings, and inspiration photos. Once finalized, a deposit is required to secure your date.",
      },
      {
        q: "Can I make changes after placing my order?",
        a: "Minor changes may be accommodated depending on the stage of preparation. Design or size changes requested close to the event date may not be possible.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Deposits are non-refundable. Cancellations made several days before the scheduled date may qualify for partial credit depending on preparation progress.",
      },
      {
        q: "Do you accommodate dietary restrictions?",
        a: "We may offer select options for dietary preferences depending on the order. Please note that all desserts are prepared in a kitchen that may contain common allergens including nuts, dairy, and gluten.",
      },
      {
        q: "Can I send inspiration photos?",
        a: "Absolutely. Inspiration photos are encouraged and help guide the design process while still allowing each creation to remain unique.",
      },
      {
        q: "Do you offer edible images or custom toppers?",
        a: "Yes, edible images and select custom toppers can be added depending on the design and availability.",
      },
      {
        q: "Do you provide cake stands or cutting utensils?",
        a: "Cake stands may be available for select event orders. Please inquire during your consultation for availability and rental details.",
      },
      {
        q: "What cake sizes do you offer?",
        a: "Cake sizes vary based on servings and design style. We’ll help recommend the best size for your celebration during the ordering process.",
      },
    ],
  },

  {
    title: "Pricing & Payment",
    items: [
      {
        q: "How much do custom cakes cost?",
        a: "Pricing varies depending on size, flavor, design complexity, and custom details. Custom cakes typically start at a base price and increase based on design requirements.",
      },
      {
        q: "Is a deposit required?",
        a: "Yes, a deposit is required to confirm and reserve your order date.",
      },
      {
        q: "When is final payment due?",
        a: "Final payment is typically due before pickup or delivery unless otherwise discussed during booking.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We currently accept common digital payment methods and cash for select orders.",
      },
      {
        q: "Are delivery fees included?",
        a: "Delivery fees may apply depending on distance, setup requirements, and event location.",
      },
    ],
  },

  {
    title: "Delivery & Pickup",
    items: [
      {
        q: "Do you offer delivery?",
        a: "Yes, local delivery may be available depending on the order type, location, and schedule availability.",
      },
      {
        q: "Can I pick up my order?",
        a: "Yes, pickup is available by scheduled appointment to ensure your order is fresh and ready on time.",
      },
      {
        q: "How should I transport my cake?",
        a: "Cakes should be transported on a flat surface in a cool, air-conditioned vehicle. Avoid placing cakes on seats or uneven surfaces.",
      },
      {
        q: "How should I store my cake?",
        a: "Most cakes should be refrigerated until a few hours before serving for the best flavor and texture.",
      },
      {
        q: "How long will the cake stay fresh?",
        a: "For the best experience, cakes are recommended to be enjoyed within 2–3 days of pickup or delivery.",
      },
    ],
  },

  {
    title: "Miscellaneous",
    items: [
      {
        q: "Do you cater corporate events or large orders?",
        a: "Yes, we welcome corporate events, dessert tables, birthdays, weddings, and large custom orders.",
      },
      {
        q: "What is your satisfaction policy?",
        a: "We take pride in every order and strive to ensure each customer receives a beautiful and memorable experience.",
      },
      {
        q: "Where are you located?",
        a: "SugarBossMiami operates locally within the Miami area. Pickup details are provided once orders are confirmed.",
      },
      {
        q: "How can I leave a review?",
        a: "Reviews and feedback are always appreciated and can be shared through social media, Google, or direct message after your order experience.",
      },
    ],
  },
];

const faqSectionsEs: FAQSection[] = [
  {
    title: "General",
    items: [
      {
        q: "¿Con cuánta anticipación debo hacer mi pedido?",
        a: "Recomendamos hacer los pedidos con al menos 1–2 semanas de anticipación para pasteles personalizados y eventos grandes. La disponibilidad puede ser limitada durante días festivos y temporadas altas.",
      },
      {
        q: "¿Qué áreas cubren?",
        a: "SugarBossMiami actualmente ofrece recogida local y entrega local limitada dentro del área de Miami, según la disponibilidad y el tamaño del pedido.",
      },
      {
        q: "¿Cómo hago un pedido?",
        a: "Puedes hacer un pedido enviando el formulario de contacto con los detalles de tu evento, el diseño preferido, el número de porciones y fotos de inspiración. Una vez finalizado, se requiere un depósito para reservar tu fecha.",
      },
      {
        q: "¿Puedo hacer cambios después de realizar mi pedido?",
        a: "Se pueden aceptar cambios menores según la etapa de preparación. Es posible que no se puedan hacer cambios de diseño o tamaño solicitados cerca de la fecha del evento.",
      },
      {
        q: "¿Cuál es su política de cancelación?",
        a: "Los depósitos no son reembolsables. Las cancelaciones hechas varios días antes de la fecha programada pueden calificar para un crédito parcial según el avance de la preparación.",
      },
      {
        q: "¿Atienden restricciones alimentarias?",
        a: "Podemos ofrecer algunas opciones para preferencias alimentarias según el pedido. Ten en cuenta que todos los postres se preparan en una cocina que puede contener alérgenos comunes, incluyendo nueces, lácteos y gluten.",
      },
      {
        q: "¿Puedo enviar fotos de inspiración?",
        a: "¡Por supuesto! Las fotos de inspiración son bienvenidas y ayudan a guiar el proceso de diseño, permitiendo que cada creación siga siendo única.",
      },
      {
        q: "¿Ofrecen imágenes comestibles o toppers personalizados?",
        a: "Sí, se pueden agregar imágenes comestibles y algunos toppers personalizados según el diseño y la disponibilidad.",
      },
      {
        q: "¿Proporcionan bases para pasteles o utensilios para cortar?",
        a: "Es posible que haya bases para pasteles disponibles para algunos pedidos de eventos. Consulta durante tu cita sobre la disponibilidad y los detalles de alquiler.",
      },
      {
        q: "¿Qué tamaños de pastel ofrecen?",
        a: "Los tamaños varían según el número de porciones y el estilo del diseño. Te ayudaremos a elegir el tamaño ideal para tu celebración durante el proceso de pedido.",
      },
    ],
  },

  {
    title: "Precios y Pagos",
    items: [
      {
        q: "¿Cuánto cuestan los pasteles personalizados?",
        a: "Los precios varían según el tamaño, el sabor, la complejidad del diseño y los detalles personalizados. Los pasteles personalizados suelen comenzar con un precio base que aumenta según los requisitos del diseño.",
      },
      {
        q: "¿Se requiere un depósito?",
        a: "Sí, se requiere un depósito para confirmar y reservar la fecha de tu pedido.",
      },
      {
        q: "¿Cuándo se debe hacer el pago final?",
        a: "El pago final normalmente se realiza antes de la recogida o entrega, a menos que se acuerde lo contrario al reservar.",
      },
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Actualmente aceptamos métodos de pago digitales comunes y efectivo para algunos pedidos.",
      },
      {
        q: "¿Están incluidos los cargos de entrega?",
        a: "Pueden aplicarse cargos de entrega según la distancia, los requisitos de montaje y la ubicación del evento.",
      },
    ],
  },

  {
    title: "Entrega y Recogida",
    items: [
      {
        q: "¿Ofrecen entrega a domicilio?",
        a: "Sí, puede haber entrega local disponible según el tipo de pedido, la ubicación y la disponibilidad de horario.",
      },
      {
        q: "¿Puedo recoger mi pedido?",
        a: "Sí, la recogida está disponible con cita previa para asegurar que tu pedido esté fresco y listo a tiempo.",
      },
      {
        q: "¿Cómo debo transportar mi pastel?",
        a: "Los pasteles deben transportarse sobre una superficie plana en un vehículo fresco y con aire acondicionado. Evita colocarlos en los asientos o en superficies irregulares.",
      },
      {
        q: "¿Cómo debo guardar mi pastel?",
        a: "La mayoría de los pasteles deben refrigerarse hasta unas horas antes de servirlos para obtener el mejor sabor y textura.",
      },
      {
        q: "¿Cuánto tiempo se mantiene fresco el pastel?",
        a: "Para la mejor experiencia, se recomienda disfrutar los pasteles dentro de los 2–3 días posteriores a la recogida o entrega.",
      },
    ],
  },

  {
    title: "Otros",
    items: [
      {
        q: "¿Atienden eventos corporativos o pedidos grandes?",
        a: "Sí, recibimos con gusto eventos corporativos, mesas de postres, cumpleaños, bodas y pedidos personalizados grandes.",
      },
      {
        q: "¿Cuál es su política de satisfacción?",
        a: "Nos enorgullecemos de cada pedido y nos esforzamos para que cada cliente reciba una experiencia hermosa y memorable.",
      },
      {
        q: "¿Dónde están ubicados?",
        a: "SugarBossMiami opera localmente dentro del área de Miami. Los detalles de recogida se proporcionan una vez confirmado el pedido.",
      },
      {
        q: "¿Cómo puedo dejar una reseña?",
        a: "Las reseñas y comentarios siempre son bienvenidos y se pueden compartir a través de redes sociales, Google o mensaje directo después de tu experiencia.",
      },
    ],
  },
];

export const faqSections: Record<Language, FAQSection[]> = {
  en: faqSectionsEn,
  es: faqSectionsEs,
};
