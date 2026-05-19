import { useState } from "react";
import "../style/pages/FAQ.css"

type FAQItem = {
  q: string;
  a: string;
};

type FAQSection = {
  title: string;
  items: FAQItem[];
};

const faqSections: FAQSection[] = [
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

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqSections.map((section, sectionIdx) => (
          <div key={section.title} className="faq-section">
            <span className="faq-section-title">
              {section.title}
            </span>

            {section.items.map((item, idx) => {
              const isOpen = openIndex === Number(`${sectionIdx}${idx}`);

              return (
                <div
                  key={item.q}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      toggle(Number(`${sectionIdx}${idx}`))
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>

                    <span className="faq-icon">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer" role="region">
                    <div className="faq-answer-inner">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;