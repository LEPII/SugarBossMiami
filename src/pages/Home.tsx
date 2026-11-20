import "../style/pages/homepage.css";
import Hero from "../assets/HeroPic.webp";
import Portrait from "../assets/home-portrait.jpg";
import CustomCake from "../assets/customCake.jpg";
import WeddingCake from "../assets/weddingCake.jpg";
import Desserts from "../assets/desserts.jpg";
import Cake1 from "../assets/cakes/cake1.jpg";
import Cake2 from "../assets/cakes/cake2.jpg";
import Cake3 from "../assets/cakes/cake3.jpg";
import Cake4 from "../assets/cakes/cake4.jpg";
import Cake5 from "../assets/cakes/cake5.jpg";
import { PiCakeThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  return (
    <div>
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src={Hero}
            alt="Hero Pic"
            fetchPriority="high"
          />
        </div>
        <div className="hero-content">
          <div className="hero-header-group">
            <h1 className="hero-title">SugarBossMiami</h1>
            <h2 className="hero-headline">{t.home.headline}</h2>
          </div>
          <Link to="/contact" className="hero-cta btn btn--primary">
            <PiCakeThin style={{ fontSize: "1.2em", marginRight: "15px" }} />
            {t.home.orderNow}
          </Link>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header-text">
          <h2 className="services-title section-title">{t.home.servicesTitle}</h2>
          <div className="services-subheading">
            <p className="services-line services-line-left">
              {t.home.servicesLeft}
            </p>

            <p className="services-line services-line-right">
              {t.home.servicesRight}
            </p>
          </div>
        </div>
        <div className="services-columns">
          <div className="service-column">
            <div className="service-image-container">
              <img src={CustomCake} alt="Custom Cake Pic" />
            </div>
            <h3 className="service-title">{t.home.customCakesTitle}</h3>
            <p className="service-description">
              {t.home.customCakesText}
            </p>
            <Link to="/menu" className="gallery-cta btn btn--primary">
              {t.home.viewMore}
            </Link>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={WeddingCake} alt="Wedding Cake Pic" />
            </div>
            <h3 className="service-title">{t.home.weddingCakesTitle}</h3>
            <p className="service-description">
              {t.home.weddingCakesText}
            </p>
            <Link to="/menu" className="gallery-cta btn btn--primary">
              {t.home.viewMore}
            </Link>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={Desserts} alt="Desserts Pic" />
            </div>
            <h3 className="service-title">{t.home.dessertsTitle}</h3>
            <p className="service-description">
              {t.home.dessertsText}
            </p>
            <Link to="/menu" className="gallery-cta btn btn--primary">
              {t.home.viewMore}
            </Link>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <h3 className="section-title">{t.home.exploreOur}</h3>
        <h2 className="section-title">{t.home.portfolio}</h2>
        <p className="about-us-text">
          {t.home.portfolioText}
        </p>
        <div className="portfolio-carousel">
          <img src={Cake1} alt="Hero Pic" />
          <img src={Cake2} alt="Hero Pic" />
          <img src={Cake3} alt="Hero Pic" />
          <img src={Cake4} alt="Hero Pic" />
          <img src={Cake5} alt="Hero Pic" />
        </div>
        <div className="another-carousel"></div>
        <Link to="/gallery" className="portfolio-button btn btn--primary">
          {t.home.viewGallery}
        </Link>
      </section>

      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-content ">
            <h2 className="about-us-title section-title">{t.home.meetChef}</h2>
            <h3 className="about-us-title-secondary section-title">
              Rocio Jurado
            </h3>
            <h4 className="about-us-title-third">{t.home.chefRole}</h4>
            <p className="about-us-text">
              {t.home.aboutText}
            </p>
          </div>
          <div className="about-us-image-container">
            <img src={Portrait} alt="Portrait Pic" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title section-title">{t.home.testimonials}</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <img src={Cake4} alt="Hero Pic" />
            <div className="testimonial-text">
              <p>
                {t.home.testimonial1}
              </p>
              <p className="testimonial-author"> - Leslie </p>
            </div>
          </div>
          <div className="testimonial">
            <img src={Cake3} alt="Hero Pic" />
            <div className="testimonial-text">
              <p>
                {t.home.testimonial2}
              </p>
              <p className="testimonial-author"> - Rosa </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
