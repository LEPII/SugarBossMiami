import { useState, useMemo } from "react";
import "../style/pages/gallery.css";
import { FiChevronDown, FiX } from "react-icons/fi"; 

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  filters: {
    type: string[];
    eventType: string[];
    style: string[];
    color: string[];
    decorations: string[];
    size: string[];
  };
}

interface FilterCategory {
  name: string;
  key: keyof GalleryImage["filters"];
  options: string[];
}

const filterCategories: FilterCategory[] = [
  {
    name: "Type",
    key: "type",
    options: [
      "cake",
      "custom-cake",
      "signature-cake",
      "cupcake",
      "custom-cupcake",
      "signature-cupcake",
      "cookies",
      "custom-cookie",
      "signature-cookie",
      "frosting",
    ],
  },
  {
    name: "Event Type",
    key: "eventType",
    options: [
      "anniversaries",
      "baby-welcoming-events",
      "adult-birthday-parties",
      "children's-birthday-parties",
      "pre-wedding-showers",
      "business-functions",
      "engagement-parties",
      "graduation-ceremonies",
      "festive-occasions",
      "faith-based-events",
      "retirement-parties",
      "marriage-celebrations",
    ],
  },
  {
    name: "Color Palette",
    key: "color",
    options: [
      "earthy-tones",
      "metallics",
      "monochromatic",
      "ombre-gradient",
      "pastels",
      "specific-combinations",
      "vibrant",
    ],
  },
  {
    name: "Key Decorations",
    key: "decorations",
    options: [
      "buttercream-flowers",
      "custom-toppers",
      "drip-cakes",
      "edible-flowers",
      "edible-gold-leaf",
      "edible-images",
      "fondant-figures",
      "fresh-flowers",
      "hand-painted-details",
      "macarons",
      "piping-details",
      "ruffles",
      "sprinkles",
    ],
  },
  {
    name: "Size/Servings",
    key: "size",
    options: [
      "1-tier",
      "2-tier",
      "3-tier",
      "4+-tier",
      "individual",
      "large",
      "medium",
      "sheet-cake",
      "small",
    ],
  },
  {
    name: "Style/Aesthetic",
    key: "style",
    options: [
      "bohemian",
      "classic",
      "elegant",
      "fun",
      "glamorous",
      "luxury",
      "modern",
      "rustic",
      "textured",
      "vintage",
      "whimsical",
    ],
  },
];

const galleryData: GalleryImage[] = [
  {
    id: "1",
    src: "https://placehold.co/400x300/E0BBE4/FFFFFF?text=Classic+Wedding+Cake",
    alt: "Elegant classic wedding cake with buttercream flowers",
    filters: {
      type: ["custom-cake"],
      eventType: ["marriage-celebrations"],
      style: ["elegant", "classic"],
      color: ["pastels", "monochromatic"],
      decorations: ["fresh-flowers", "buttercream-flowers"],
      size: ["large", "3-tier"],
    },
  },
  {
    id: "2",
    src: "https://placehold.co/400x300/957DAD/FFFFFF?text=Birthday+Cupcakes",
    alt: "Vibrant custom cupcakes with sprinkles for a birthday",
    filters: {
      type: ["custom-cupcake"],
      eventType: ["children's-birthday-parties"],
      style: ["whimsical", "fun"],
      color: ["vibrant"],
      decorations: ["sprinkles"],
      size: ["individual"],
    },
  },
  {
    id: "3",
    src: "https://placehold.co/400x300/D291BC/FFFFFF?text=Modern+Corporate+Cake",
    alt: "Modern geometric cake with metallic details for a business function",
    filters: {
      type: ["custom-cake"],
      eventType: ["business-functions"],
      style: ["modern", "glamorous"],
      color: ["metallics"],
      decorations: ["edible-gold-leaf"],
      size: ["medium", "2-tier"],
    },
  },
  {
    id: "4",
    src: "https://placehold.co/400x300/FFC72C/FFFFFF?text=Baby+Shower+Cake",
    alt: "Pastel whimsical cake with fondant figures for a baby welcoming event",
    filters: {
      type: ["custom-cake"],
      eventType: ["baby-welcoming-events"],
      style: ["whimsical", "fun"],
      color: ["pastels"],
      decorations: ["fondant-figures"],
      size: ["small"],
    },
  },
  {
    id: "5",
    src: "https://placehold.co/400x300/A2D2FF/FFFFFF?text=Rustic+Bridal+Cake",
    alt: "Rustic semi-naked cake with fresh berries for a pre-wedding shower",
    filters: {
      type: ["custom-cake"],
      eventType: ["pre-wedding-showers"],
      style: ["rustic"],
      color: ["earthy-tones"],
      decorations: ["fresh-flowers", "edible-flowers"],
      size: ["large", "3-tier"],
    },
  },
  {
    id: "6",
    src: "https://placehold.co/400x300/FF9770/FFFFFF?text=Graduation+Cookies",
    alt: "Hand-painted cookies for a graduation ceremony",
    filters: {
      type: ["custom-cookie"],
      eventType: ["graduation-ceremonies"],
      style: ["whimsical"],
      color: ["vibrant"],
      decorations: ["hand-painted-details"],
      size: ["individual"],
    },
  },
  {
    id: "7",
    src: "https://placehold.co/400x300/C1E1C1/FFFFFF?text=Elegant+Adult+Birthday+Cake",
    alt: "Elegant monochromatic cake with buttercream flowers for an adult birthday",
    filters: {
      type: ["signature-cake"],
      eventType: ["adult-birthday-parties"],
      style: ["elegant"],
      color: ["monochromatic"],
      decorations: ["buttercream-flowers"],
      size: ["medium"],
    },
  },
  {
    id: "8",
    src: "https://placehold.co/400x300/F0E68C/FFFFFF?text=Engagement+Party+Cake",
    alt: "Glamorous cake with edible gold leaf for an engagement party",
    filters: {
      type: ["custom-cake"],
      eventType: ["engagement-parties"],
      style: ["glamorous"],
      color: ["metallics"],
      decorations: ["edible-gold-leaf"],
      size: ["large", "2-tier"],
    },
  },
];

const Gallery = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >(() => {
    const initialFilters: Record<string, string[]> = {};
    filterCategories.forEach((category) => {
      initialFilters[category.key] = [];
    });
    return initialFilters;
  });

  const [openCategory, setOpenCategory] = useState<string>("type");

  const clearAllFilters = () => {
    setSelectedFilters(() => {
      const initialFilters: Record<string, string[]> = {};
      filterCategories.forEach((category) => {
        initialFilters[category.key] = [];
      });
      return initialFilters;
    });
  };

  const handleFilterChange = (categoryKey: string, option: string) => {
    setSelectedFilters((prevFilters) => {
      const currentOptions = prevFilters[categoryKey] || [];
      if (currentOptions.includes(option)) {
        return {
          ...prevFilters,
          [categoryKey]: currentOptions.filter((item) => item !== option),
        };
      } else {
        return {
          ...prevFilters,
          [categoryKey]: [...currentOptions, option],
        };
      }
    });
  };

  const removeSingleFilter = (categoryKey: string, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [categoryKey]: prev[categoryKey].filter((v) => v !== option),
    }));
  };

  const filteredImages = useMemo(() => {
    return galleryData.filter((image) => {
      for (const categoryKey in selectedFilters) {
        const activeSubFilters = selectedFilters[categoryKey];

        if (activeSubFilters.length === 0) {
          continue;
        }

        const imageHasMatchingSubFilter = activeSubFilters.some((subFilter) =>
          image.filters[categoryKey as keyof GalleryImage["filters"]]?.includes(
            subFilter
          )
        );

        if (!imageHasMatchingSubFilter) {
          return false;
        }
      }
      return true;
    });
  }, [selectedFilters]);

  const anyFilterActive = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">Our Sweet Gallery</h1>
        <p className="gallery-subtitle">
          Explore our custom creations by filtering your preferences.
        </p>
      </header>

      <div className="gallery-layout">
        <aside className="filter-sidebar">
          <h2 className="filter-title">Filter Gallery</h2>

          {anyFilterActive && (
            <div className="active-filters-row">
              {filterCategories.map((cat) =>
                (selectedFilters[cat.key] || []).map((option) => (
                  <button
                    key={`${cat.key}-${option}`}
                    className="active-filter-chip"
                    onClick={() => removeSingleFilter(cat.key, option)}>
                    <span className="chip-text">
                      {option.replace(/-/g, " ")}
                    </span>
                    <FiX className="chip-x" />
                  </button>
                ))
              )}
            </div>
          )}

          {anyFilterActive && (
            <button
              onClick={clearAllFilters}
              className="clear-filters-button clear-filters-top">
              Clear All Filters
            </button>
          )}

          {filterCategories.map((category) => {
            const isOpen = openCategory === category.key;
            return (
              <div
                key={category.key}
                className={`filter-category ${isOpen ? "open" : ""}`}>
                <div className="filter-category-header">
            
                  <h3 className="filter-category-title">
                    {category.name.replace(/-/g, " ")}
                  </h3>
     
                  <button
                    aria-expanded={isOpen}
                    className={`filter-toggle ${isOpen ? "open" : ""}`}
                    onClick={() =>
                      setOpenCategory((prev) =>
                        prev === category.key ? "" : (category.key as string)
                      )
                    }>
                    <FiChevronDown />
                  </button>
                </div>

                <div className="filter-options">
                  {category.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange(category.key, option)}
                      className={
                        selectedFilters[category.key]?.includes(option)
                          ? "filter-button btn filter-button-active"
                          : "filter-button btn"
                      }>
                      {option.replace(/-/g, " ")}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </aside>

        <section className="gallery-content">
          {filteredImages.length > 0 ? (
            <div className="image-grid">
              {filteredImages.map((image) => (
                <div key={image.id} className="gallery-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/400x300/CCCCCC/666666?text=Image+Error`;
                    }}
                  />
                  <div className="card-body">
                    <p className="card-title">{image.alt}</p>
                    <div className="card-tags">
                      {Object.values(image.filters)
                        .flat()
                        .map((tag, idx) => (
                          <span key={idx} className="card-tag">
                            {tag.replace(/-/g, " ")}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p className="no-results-text">
                No images match your current filter selections.
              </p>
              <button onClick={clearAllFilters} className="show-all-button">
                Show All Images
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Gallery;