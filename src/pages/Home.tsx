import Hero from "../assets/HeroPic.jpg";
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

const Home = () => {
  return (
    
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={Hero} alt="Hero Pic" />
        </div>
        <div className="hero-content">
          <div className="hero-header-group">
            <h1 className="hero-title">SugarBossMiami</h1>
            <h2 className="hero-headline">" Your Custom Cake Destination "</h2>
          </div>
          <button className="hero-cta btn btn--primary">
            <PiCakeThin style={{ fontSize: "1.2em", marginRight: "15px" }} />
            Order Now
          </button>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header-text">
          <h2 className="services-title section-title">Our Services</h2>
          <p className="services-subheading">
            At SugarBossMiami, we believe every occasion deserves a delectable
            centerpiece. We specialize in bringing your sweetest visions to
            life, from custom cakes uniquely designed for any celebration, to
            multi-tiered wedding cakes that become the heart of your special
            day, and an enchanting array of delightful specialty desserts
            perfect for any sweet craving or event.
          </p>
        </div>
        <div className="services-columns">
          <div className="service-column">
            <div className="service-image-container">
              <img src={CustomCake} alt="Custom Cake Pic" />
            </div>
            <h3 className="service-title">Custom Cakes</h3>
            <p className="service-description">
              Dreaming of a cake that's as unique as your event? Whether it's a
              vibrant birthday surprise, a milestone anniversary, or a corporate
              celebration, our custom cakes are meticulously designed and baked
              to reflect your specific theme, preferences, and dietary needs.
              Each creation is a personalized masterpiece, ensuring your
              occasion is truly unforgettable.
            </p>
            <button className="gallery-cta btn btn--primary">View More</button>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={WeddingCake} alt="Wedding Cake Pic" />
            </div>
            <h3 className="service-title">Wedding Cakes</h3>
            <p className="service-description">
              Your wedding day is a once-in-a-lifetime event, and your cake
              should be just as extraordinary. We craft elegant and exquisite
              wedding cakes, from timeless classics to modern marvels. We'll
              work closely with you to design a cake that perfectly complements
              your wedding theme, colors, and taste, ensuring a stunning and
              delicious centerpiece for your celebration of love.
            </p>
            <button className="gallery-cta btn btn--primary">View More</button>
          </div>
          <div className="service-column">
            <div className="service-image-container">
              <img src={Desserts} alt="Desserts Pic" />
            </div>
            <h3 className="service-title">Specialty Desserts</h3>
            <p className="service-description">
              Beyond our magnificent cakes, discover a delightful assortment of
              specialty desserts. From intricately decorated cupcakes and
              melt-in-your-mouth cookies to elegant mini pastries and decadent
              dessert bars, our treats are perfect for party favors, dessert
              tables, or simply satisfying your sweet tooth. Each item is
              prepared with the same passion and quality you expect from our
              cakes.
            </p>
            <button className="gallery-cta btn btn--primary">View More</button>
          </div>
        </div>
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
              Welcome to SugarBossMiami, where every creation is a testament to
              our unwavering commitment to quality, creativity, and joy. We
              believe in the power of a perfectly crafted dessert to transform
              any occasion into a cherished memory. Our journey began with a
              clear vision: to combine culinary artistry with dedicated service,
              ensuring every client receives not just a cake, but an experience.
              We pour passion into every detail, from the finest ingredients to
              the most intricate designs, striving for excellence in every
              delicious bite. From your dream custom cake to your elegant
              wedding centerpiece and our delightful specialty treats, we're
              here to deliver unparalleled sweetness and a truly memorable
              celebration.
            </p>
          </div>
          <div className="about-us-image-container">
            <img src={Portrait} alt="Portrait Pic" />
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <h3 className="portfolio-title section-title">Explore Our</h3>
        <h2 className="portfolio-title section-title">Portfolio</h2>
        <p className="about-us-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
          venenatis est efficitur mollis. Curabitur at mattis nisl. Pellentesque
          elementum nisl sed turpis facilisis accumsan.
        </p>
        <div className="portfolio-carousel">
          <img src={Cake1} alt="Hero Pic" />
          <img src={Cake2} alt="Hero Pic" />
          <img src={Cake3} alt="Hero Pic" />
          <img src={Cake4} alt="Hero Pic" />
          <img src={Cake5} alt="Hero Pic" />
        </div>
        <div className="another-carousel"></div>
        <button className="portfolio-button btn btn--primary">
          View Full Gallery
        </button>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title section-title">Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <img src={Cake1} alt="Hero Pic" />
            <div className="testimonial-text">
              <p className="testimonial-review">
                "SugarBossMiami made our daughter's birthday unforgettable! The
                custom unicorn cake was stunning, both visually and in taste. It
                was moist, flavorful, and perfectly balanced. Our guests raved
                about it! The entire process, from consultation to pickup, was
                seamless. Highly recommend for any special occasion!"
              </p>
              <p className="testimonial-author"> - PitBull</p>
            </div>
          </div>
          <div className="testimonial">
            <img src={Cake2} alt="Hero Pic" />
            <div className="testimonial-text">
              <p className="testimonial-review">
                "I can't say enough good things about SugarBossMiami! I needed a
                unique cake for a corporate event with specific branding, and
                they exceeded all expectations. The team was incredibly
                collaborative, bringing my vision to life with impeccable
                execution. The cake was a showstopper, and the quality of the
                ingredients truly shone through. Professional, talented, and a
                pleasure to work with. My new go-to for custom cakes!"
              </p>
              <p className="testimonial-author"> - Daddy Yankees </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
