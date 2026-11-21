import "../style/pages/servicespage.css";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { catalogData, type CatalogItem } from "../data/catalogData";

interface MenuCategory {
  title: string;
  items: typeof catalogData;
}
const groupedMap = catalogData.reduce((map, item) => {
  const section = item.menuSection;

  if (!map.has(section)) {
    map.set(section, []);
  }

  map.get(section)!.push(item);
  return map;
}, new Map<string, CatalogItem[]>());

const groupedMenuData: MenuCategory[] = Array.from(groupedMap).map(
  ([title, items]) => ({
    title,
    items,
  })
);

const Menu: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="service-container">
      <header className="main-header-section">
        <h1 className="main-header-title">
          {t.menu.title}
        </h1>
        <h2 className="main-header-subtitle">
          {t.menu.subtitle}
        </h2>
      </header>

      <main className="menu-content-area">
        {groupedMenuData.map((category, index) => (
          <section key={index} className="menu-category-section">
            <h2 className="category-title">{t.menu.sections[category.title] ?? category.title}</h2>
            <ul className="category-items-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="menu-item">
                  <span className="menu-item-name">
                    {item.name}
                    {item.isPremium && (
                      <span className="premium-indicator">*</span>
                    )}
                  </span>

                  {item.hasImage &&
                    item.menuGalleryFilter && (
                      <Link className="menu-item-link" to={`/gallery?filterKey=${encodeURIComponent(
                        item.menuGalleryFilter.key
                      )}&filterValue=${encodeURIComponent(item.menuGalleryFilter.option)}&item=${encodeURIComponent(item.slug)}`}>
                        <br />
                        <span className="menu-item-view-text">{t.menu.viewMore}</span>
                        <FaCamera className="menu-item-icon" />
                      </Link>
                    )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <footer className="menu-footer-section">
        <p className="legend-text">
          <span className="premium-indicator">*</span> {t.menu.premiumLegend}
        </p>
      </footer>
    </div>
  );
};

export default Menu;
