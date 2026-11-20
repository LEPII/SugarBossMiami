import { useState } from "react";
import "../style/pages/FAQ.css"
import { faqSections } from "../data/faqData";
import { useLanguage } from "../i18n/LanguageContext";

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-page">
      <h1 className="faq-title">{t.faq.title}</h1>

      <div className="faq-list">
        {faqSections[language].map((section, sectionIdx) => (
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
