import "../style/pages/servicespage.css";

const Services: React.FC = () => {
  return (
    <div className="service-container">
      <header className="main-header-section">
        <h1 className="main-header-title">Crafted Cakes by SugarBossMiami:</h1>
        <p className="main-header-subtitle">
          Where Imagination Meets Deliciousness
        </p>
      </header>

      <main className="menu-content-area">
        <section className="menu-category-section">
          <h2 className="category-title">Cupcakes</h2>
          <ul className="category-items-list">
            <li className="menu-item">Vanilla Bean Dream</li>
            <li className="menu-item">Chocolate Decadence</li>
            <li className="menu-item">Red Velvet Royale</li>
            <li className="menu-item">Lemon Zest Burst</li>
            <li className="menu-item">Strawberry Shortcake Swirl</li>
            <li className="menu-item">
              Caramel Macchiato Delight
              <span className="premium-indicator">*</span>
            </li>
            <li className="menu-item">
              Pistachio Rosewater Dream
              <span className="premium-indicator">*</span>
            </li>
          </ul>
        </section>

        <section className="menu-category-section">
          <h2 className="category-title">Cake Flavors</h2>
          <ul className="category-items-list">
            <li className="menu-item">Classic Vanilla</li>
            <li className="menu-item">Rich Chocolate Fudge</li>
            <li className="menu-item">Velvety Red Velvet</li>
            <li className="menu-item">Lemon Sunshine</li>
            <li className="menu-item">Almond Bliss</li>
            <li className="menu-item">Marble Swirl</li>
            <li className="menu-item">Carrot Spice</li>
            <li className="menu-item">
              Coconut Cream Dream <span className="premium-indicator">*</span>
            </li>
            <li className="menu-item">
              Chai Latte Spice <span className="premium-indicator">*</span>
            </li>
          </ul>
        </section>

        <section className="menu-category-section">
          <h2 className="category-title">Cake Fillings</h2>
          <ul className="category-items-list">
            <li className="menu-item">Vanilla Buttercream</li>
            <li className="menu-item">Chocolate Ganache</li>
            <li className="menu-item">Cream Cheese Frosting</li>
            <li className="menu-item">
              Fresh Berry Compote (Strawberry, Raspberry, or Mixed Berry)
            </li>
            <li className="menu-item">Lemon Curd</li>
            <li className="menu-item">Salted Caramel</li>
            <li className="menu-item">Chocolate Mousse</li>
            <li className="menu-item">
              Dulce de Leche Delight{" "}
              <span className="premium-indicator">*</span>
            </li>
            <li className="menu-item">
              White Chocolate Raspberry Truffle{" "}
              <span className="premium-indicator">*</span>
            </li>
          </ul>
        </section>

        <section className="menu-category-section">
          <h2 className="category-title">Frostings</h2>
          <ul className="category-items-list">
            <li className="menu-item">Classic Vanilla Buttercream</li>
            <li className="menu-item">Chocolate Buttercream</li>
            <li className="menu-item">Cream Cheese Frosting</li>
            <li className="menu-item">
              Swiss Meringue Buttercream (various flavors available upon
              request)
            </li>
            <li className="menu-item">Whipped Ganache</li>
            <li className="menu-item">
              Mirror Glaze (various colors){" "}
              <span className="premium-indicator">*</span>
            </li>
            <li className="menu-item">
              Fondant (smooth finish, custom colors){" "}
              <span className="premium-indicator">*</span>
            </li>
          </ul>
        </section>

        <section className="menu-category-section">
          <h2 className="category-title">Signature Cake Designs</h2>
          <ul className="category-items-list">
            <li className="menu-item">Elegant Floral Cascade</li>
            <li className="menu-item">Rustic Semi-Naked with Fresh Fruit</li>
            <li className="menu-item">
              Drip Cake (Chocolate, White Chocolate, or Caramel)
            </li>
            <li className="menu-item">Geometric Modern</li>
            <li className="menu-item">Ombre Gradient</li>
            <li className="menu-item">
              Hand-Painted Masterpiece{" "}
              <span className="premium-indicator">*</span>
            </li>
            <li className="menu-item">
              Sculpted Edible Art <span className="premium-indicator">*</span>
            </li>
          </ul>
        </section>

        {/* Dietary & Allergen-Friendly Options Category */}
        <section className="menu-category-section">
          <h2 className="category-title">
            Dietary & Allergen-Friendly Options
          </h2>
          <ul className="category-items-list">
            <li className="menu-item">Gluten-Free Vanilla</li>
            <li className="menu-item">Gluten-Free Chocolate</li>
            <li className="menu-item">Vegan Vanilla</li>
            <li className="menu-item">Vegan Chocolate</li>
            <li className="menu-item">
              Nut-Free Options (please inquire for specific flavors)
            </li>
          </ul>
        </section>

        <section className="menu-category-section">
          <h2 className="category-title">Additional Enhancements</h2>
          <ul className="category-items-list">
            <li className="menu-item">Edible Gold/Silver Leaf</li>
            <li className="menu-item">
              Custom Cake Topper (personalized message)
            </li>
            <li className="menu-item">Fresh Flower Arrangements</li>
            <li className="menu-item">Macaron Tower</li>
            <li className="menu-item">Custom Cookie Favors</li>
            <li className="menu-item">
              Chocolate Dipped Strawberries{" "}
              <span className="premium-indicator">*</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="menu-footer-section">
        <p className="legend-text">
          <span className="premium-indicator">*</span> Indicates a premium
          option.
        </p>
      </footer>
    </div>
  );
};

export default Services;
