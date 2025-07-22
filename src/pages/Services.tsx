import "../style/pages/servicespage.css";

interface MenuItem {
  name: string;
  isPremium?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "- Cupcakes -",
    items: [
      { name: "Vanilla Bean Dream" },
      { name: "Chocolate Decadence" },
      { name: "Red Velvet Royale" },
      { name: "Lemon Zest Burst" },
      { name: "Strawberry Shortcake Swirl" },
      { name: "Caramel Macchiato Delight", isPremium: true },
      { name: "Pistachio Rosewater Dream", isPremium: true },
    ],
  },
  {
    title: "- Cake Flavors -",
    items: [
      { name: "Classic Vanilla" },
      { name: "Rich Chocolate Fudge" },
      { name: "Velvety Red Velvet" },
      { name: "Lemon Sunshine" },
      { name: "Almond Bliss" },
      { name: "Marble Swirl" },
      { name: "Carrot Spice" },
      { name: "Coconut Cream Dream", isPremium: true },
      { name: "Chai Latte Spice", isPremium: true },
    ],
  },
  {
    title: "- Cake Fillings -",
    items: [
      { name: "Vanilla Buttercream" },
      { name: "Chocolate Ganache" },
      { name: "Cream Cheese Frosting" },
      { name: "Fresh Berry Compote (Strawberry, Raspberry, or Mixed Berry)" },
      { name: "Lemon Curd" },
      { name: "Salted Caramel" },
      { name: "Chocolate Mousse" },
      { name: "Dulce de Leche Delight", isPremium: true },
      { name: "White Chocolate Raspberry Truffle", isPremium: true },
    ],
  },
  {
    title: "- Frostings -",
    items: [
      { name: "Classic Vanilla Buttercream" },
      { name: "Chocolate Buttercream" },
      { name: "Cream Cheese Frosting" },
      {
        name: "Swiss Meringue Buttercream (various flavors available upon request)",
      },
      { name: "Whipped Ganache" },
      { name: "Mirror Glaze (various colors)", isPremium: true },
      { name: "Fondant (smooth finish, custom colors)", isPremium: true },
    ],
  },
  {
    title: "- Signature Cake Designs -",
    items: [
      { name: "Elegant Floral Cascade" },
      { name: "Rustic Semi-Naked with Fresh Fruit" },
      { name: "Drip Cake (Chocolate, White Chocolate, or Caramel)" },
      { name: "Geometric Modern" },
      { name: "Ombre Gradient" },
      { name: "Hand-Painted Masterpiece", isPremium: true },
      { name: "Sculpted Edible Art", isPremium: true },
    ],
  },
  {
    title: "- Dietary & Allergen-Friendly Options -",
    items: [
      { name: "Gluten-Free Vanilla" },
      { name: "Gluten-Free Chocolate" },
      { name: "Vegan Vanilla" },
      { name: "Vegan Chocolate" },
      { name: "Nut-Free Options (please inquire for specific flavors)" },
    ],
  },
  {
    title: "- Additional Enhancements -",
    items: [
      { name: "Edible Gold/Silver Leaf" },
      { name: "Custom Cake Topper (personalized message)" },
      { name: "Fresh Flower Arrangements" },
      { name: "Macaron Tower" },
      { name: "Custom Cookie Favors" },
      { name: "Chocolate Dipped Strawberries", isPremium: true },
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="service-container">
      <header className="main-header-section">
        <h1 className="main-header-title">Crafted Cakes by SugarBossMiami:</h1>
        <h2 className="main-header-subtitle">
          Where Imagination Meets Deliciousness
        </h2>
      </header>

      <main className="menu-content-area">
        {menuData.map((category, index) => (
          <section key={index} className="menu-category-section">
            <h2 className="category-title">{category.title}</h2>
            <ul className="category-items-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="menu-item">
                  {item.name}
                  {item.isPremium && (
                    <span className="premium-indicator">*</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
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
