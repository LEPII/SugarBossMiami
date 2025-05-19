import Hero from "../assets/HeroPic.jpg";
import Portrait from "../assets/home-portrait.jpg";
import CustomCake from "../assets/customCake.jpg";
import WeddingCake from "../assets/weddingCake.jpg";
import Desserts from "../assets/desserts.jpg";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={Hero} alt="Hero Pic" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">SugarBossMiami</h1>
          <h2 className="hero-headline">Your Custom Cake Destination</h2>
          <button className="hero-cta">Contact Us</button>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-image-container"></div>
        <div className="about-us-content">
          <h2 className="about-us-title">About Us</h2>
          <img src={Portrait} alt="Portrait Pic" />
          <p className="about-us-text">
            Welcome to SugarBossMiami, where our passion for baking meets your
            sweetest dreams. We specialize in creating custom cakes that are not
            only visually stunning but also incredibly delicious. Our expert
            bakers use only the finest ingredients to craft unique creations for
            any occasion. From birthdays to weddings, we're dedicated to making
            your celebration unforgettable.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-columns">
          <div className="service-column">
            <div className="service-image-container">
              <img src={CustomCake} alt="Custom Cake Pic" />
            </div>
            <h3 className="service-title">Custom Cakes</h3>
            <p className="service-description">
              We design and bake cakes tailored to your specific needs and
              preferences.
            </p>
            <button className="gallery-cta">View More</button>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={WeddingCake} alt="Wedding Cake Pic" />
            </div>
            <h3 className="service-title">Wedding Cakes</h3>
            <p className="service-description">
              Elegant and delicious cakes to celebrate your special day.
            </p>
            <button className="gallery-cta">View More</button>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={Desserts} alt="Desserts Pic" />
            </div>
            <h3 className="service-title">Specialty Desserts</h3>
            <p className="service-description">
              We also offer a variety of other desserts, including cupcakes and
              cookies.
            </p>
            <button className="gallery-cta">View More</button>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <h3 className="portfolio-title">Explore Our</h3>
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-carousel">
          {/* Carousel Preview will go here */}
        </div>
        <a href="/gallery" className="portfolio-link">
          View Full Gallery
        </a>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="testimonial-text">
              "Amazing cakes! Beautiful and delicious."
            </p>
            <p className="testimonial-author">- Happy Customer 1</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "The best custom cakes in Miami!"
            </p>
            <p className="testimonial-author">- Happy Customer 2</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
