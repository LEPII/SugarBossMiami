import ContactForm from "../components/ContactForm";
// import ContactImage from "../assets/HeroPic.jpg";
import "../style/pages/contactpage.css"
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="contact-page-wrapper">
      <h1>{t.contact.title}</h1>
      {/* <div className="image-form-container">
        <img src={ContactImage} alt="Hero Pic" /> */}
        <div className="contact-form-overlay">
          <ContactForm />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
