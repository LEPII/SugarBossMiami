import ContactForm from "../components/ContactForm";
import ContactImage from "../assets/HeroPic.jpg";
import "../style/pages/contactpage.css"

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1>Let's Get In Touch</h1>
      <div className="image-form-container">
        <img src={ContactImage} alt="Hero Pic" />
        <div className="contact-form-overlay">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
