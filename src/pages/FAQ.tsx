import { useState } from "react";
import "../style/pages/FAQ.css"
type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "How far in advance should I order?",
    a: "We recommend ordering at least 3–7 days in advance. For large or custom orders, 1–2 weeks is ideal.",
  },
  {
    q: "Do you deliver?",
    a: "Yes, delivery is available depending on your location and order size. Pickup options are also available.",
  },
  {
    q: "Can I customize flavors and designs?",
    a: "Absolutely. You can customize flavors, fillings, designs, and themes. Inspiration photos are welcome.",
  },
  {
    q: "What’s your cancellation policy?",
    a: "Cancellations within 48 hours of delivery or pickup may be non-refundable due to prep and ingredient costs.",
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
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.q}
              className={`faq-item ${isOpen ? "open" : ""}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq-icon">{isOpen ? "–" : "+"}</span>
              </button>

              <div className="faq-answer" role="region">
                <div className="faq-answer-inner">{item.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;