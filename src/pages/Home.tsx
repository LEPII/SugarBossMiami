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

const Home = () => {
  return (
    <div className="home-page">
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
            <h2 className="hero-headline">Your Custom Cake Destination</h2>
          </div>
          <Link to="/contact" className="hero-cta btn btn--primary">
            <PiCakeThin style={{ fontSize: "1.2em", marginRight: "15px" }} />
            Order Now
          </Link>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header-text">
          <h2 className="services-title section-title">Our Services</h2>
          <div className="services-subheading">
            <p className="services-line services-line-left">
              SugarBossMiami specializes in custom cakes and desserts that steal
              the spotlight.
            </p>

            <p className="services-line services-line-right">
              From one-of-a-kind celebration cakes to elegant wedding tiers and
              handcrafted specialty desserts, we create the perfect centerpiece
              for every occasion.
            </p>
          </div>
        </div>
        <div className="services-columns">
          <div className="service-column">
            <div className="service-image-container">
              <img src={CustomCake} alt="Custom Cake Pic" />
            </div>
            <h3 className="service-title">Custom Cakes</h3>
            <p className="service-description">
              More than dessert — each cake is thoughtfully created to capture the feeling behind your celebration and turn it into something lasting.
            </p>
            <Link to="/menu" className="gallery-cta btn btn--primary">
              View More
            </Link>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={WeddingCake} alt="Wedding Cake Pic" />
            </div>
            <h3 className="service-title">Wedding Cakes</h3>
            <p className="service-description">
              Elegant, timeless, and thoughtfully crafted — our wedding cakes are designed to reflect the beauty of your celebration while creating a centerpiece that feels unforgettable from the very first glance.
            </p>
            <Link to="/menu" className="gallery-cta btn btn--primary">
              View More
            </Link>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={Desserts} alt="Desserts Pic" />
            </div>
            <h3 className="service-title">Specialty Desserts</h3>
            <p className="service-description">
              From delicate cupcakes to decadent dessert tables, our specialty treats are crafted with the same artistry and attention to detail as every custom cake we create.
            </p>
            <Link to="/menu" className="gallery-cta btn btn--primary">
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <h3 className="portfolio-title section-title">Explore Our</h3>
        <h2 className="portfolio-title section-title">Portfolio</h2>
        <p className="about-us-text">
          Browse a collection of handcrafted desserts where creativity and flavor come together to make every celebration unforgettable. From elegant custom cakes to playful sweet treats, every piece is made with passion and care.
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
          View Full Gallery
        </Link>
      </section>

      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-content ">
            <h2 className="about-us-title section-title">Meet The Chef</h2>
            <h3 className="about-us-title-secondary section-title">
              Rocio Jurado
            </h3>
            <h4 className="about-us-title-third">Chef and Owner</h4>
            <p className="about-us-text">
              At SugarBossMiami, every dessert is crafted with passion, creativity, and a personal touch. What began as a love for baking has grown into creating custom cakes and desserts that turn life’s most meaningful moments into lasting memories. From elegant wedding cakes to playful celebration treats, each creation is thoughtfully designed with quality ingredients, artistic detail, and genuine care — because every celebration deserves something unforgettable.
            </p>
          </div>
          <div className="about-us-image-container">
            <img src={Portrait} alt="Portrait Pic" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title section-title">Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <img src={Cake4} alt="Hero Pic" />
            <div className="testimonial-text">
              <p className="testimonial-review">
                “SugarBossMiami brought our daughter’s birthday to life with a cake that was almost too beautiful to cut. Every detail was stunning, and the flavor was just as unforgettable. From start to finish, the experience felt effortless and personal.”
              </p>
              <p className="testimonial-author"> - Leslie </p>
            </div>
          </div>
          <div className="testimonial">
            <img src={Cake3} alt="Hero Pic" />
            <div className="testimonial-text">
              <p className="testimonial-review">
                “From the first conversation to the final presentation, SugarBossMiami exceeded every expectation. The custom cake was elegant, creative, and beautifully detailed — pairing perfectly with the red color of my beloved Jeep.”
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
