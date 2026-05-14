import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../style/pages/gallery.css";
import { FiChevronDown, FiX, FiTrash2 } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { catalogData, type GalleryFilters } from "../data/catalogData";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  filters: GalleryFilters;
}

interface FilterCategory {
  name: string;
  key: keyof GalleryFilters;
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

const createEmptyFilters = (): Record<keyof GalleryFilters, string[]> => ({
  type: [],
  eventType: [],
  style: [],
  color: [],
  decorations: [],
  size: [],
});

const galleryData: GalleryImage[] = catalogData
  .filter((item) => item.hasImage && item.src && item.alt && item.filters)
  .map((item) => ({
    id: item.id,
    src: item.src!,
    alt: item.alt!,
    filters: item.filters!,
  }));

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<
    Record<keyof GalleryFilters, string[]>
  >(createEmptyFilters);

  const [openCategory, setOpenCategory] = useState<string>("type");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryData.filter((image) => {
    return Object.entries(selectedFilters).every(
      ([categoryKey, selectedOptions]) => {
        if (selectedOptions.length === 0) return true;

        return selectedOptions.some((selectedOption) =>
          image.filters[
            categoryKey as keyof GalleryFilters
          ].includes(selectedOption)
        );
      }
    );
  });

  const anyFilterActive = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  useEffect(() => {
    const filterKey = searchParams.get("filterKey");
    const filterValue = searchParams.get("filterValue");

    if (!filterKey || !filterValue) {
      return;
    }

    const validCategory = filterCategories.find((cat) => cat.key === filterKey);

    if (!validCategory) {
      return;
    }

    setSelectedFilters((prev) => ({
      ...createEmptyFilters(),
      ...prev,
      [validCategory.key]: [filterValue],
    }));

    setOpenCategory(validCategory.key);
  }, [searchParams]);

  const updateUrlFromFilters = (
    nextFilters: Record<keyof GalleryFilters, string[]>
  ) => {
    const nextParams = new URLSearchParams();

    const firstActiveCategory = filterCategories.find(
      (category) => nextFilters[category.key].length > 0
    );

    if (firstActiveCategory) {
      nextParams.set("filterKey", firstActiveCategory.key);
      nextParams.set("filterValue", nextFilters[firstActiveCategory.key][0]);
    }

    setSearchParams(nextParams, { replace: true });
  };

  const handleFilterChange = (
    categoryKey: keyof GalleryFilters,
    option: string
  ) => {
    setSelectedFilters((prevFilters) => {
      const isAlreadySelected = prevFilters[categoryKey].includes(option);

      return {
        ...prevFilters,
        [categoryKey]: isAlreadySelected ? [] : [option],
      };
    });
  };

  const clearAllFilters = () => {
    const empty = createEmptyFilters();
    setSelectedFilters(empty);
    setSearchParams({}, { replace: true });
  };

  const removeSingleFilter = (categoryKey: keyof GalleryFilters, option: string) => {
    setSelectedFilters((prev) => {
      const nextFilters = {
        ...prev,
        [categoryKey]: prev[categoryKey].filter((v) => v !== option),
      };

      updateUrlFromFilters(nextFilters);
      return nextFilters;
    });
  };



  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">Our Sweet Gallery</h1>
        <h2 className="gallery-subtitle">
          Explore our custom creations by filtering your preferences.
        </h2>
      </header>

      <div className="mobile-filter-bar">
        <button
          type="button"
          className="mobile-filter-button"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <CiFilter />
          Filter
        </button>
        <span className="results-count-mobile">{filteredImages.length} results</span>
      </div>

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
                    onClick={() => removeSingleFilter(cat.key, option)}
                  >
                    <span className="chip-text">{option.replace(/-/g, " ")}</span>
                    <FiX className="chip-x" />
                  </button>
                ))
              )}
            </div>
          )}

          {anyFilterActive && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="clear-filters-button clear-filters-top"
            >
              Clear All Filters
            </button>
          )}

          {filterCategories.map((category) => {
            const isOpen = openCategory === category.key;

            return (
              <div
                key={category.key}
                className={`filter-category ${isOpen ? "open" : ""}`}
              >
                <div className="filter-category-header">
                  <h3 className="filter-category-title">{category.name}</h3>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={`filter-toggle ${isOpen ? "open" : ""}`}
                    onClick={() =>
                      setOpenCategory((prev) => (prev === category.key ? "" : category.key))
                    }
                  >
                    <FiChevronDown />
                  </button>
                </div>

                <div className="filter-options">
                  {category.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleFilterChange(category.key, option)}
                      className={
                        selectedFilters[category.key]?.includes(option)
                          ? "filter-button btn filter-button-active"
                          : "filter-button btn"
                      }
                    >
                      {option.replace(/-/g, " ")}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </aside>

        <section className="gallery-content">
          <span className="results-count-desktop">{filteredImages.length} results</span>

          {filteredImages.length > 0 ? (
            <div className="image-grid">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="gallery-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/400x300/CCCCCC/666666?text=Image+Error";
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

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              <FiX />
            </button>

            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="lightbox-img"
            />

            <p className="lightbox-caption">{lightboxImage.alt}</p>
          </div>
        </div>
      )}

      {isMobileFilterOpen && (
        <div className="mobile-filter-modal" role="dialog" aria-modal="true">
          <div className="mobile-filter-topbar">

            <div className="mobile-filter-header">
              <button
                type="button"
                className="close-modal-btn"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <FiX />
              </button>
            </div>

            <span className="results-count-mobile">{filteredImages.length} results</span>
            {anyFilterActive && (
              <button
                type="button"
                className="mobile-clear-filters"
                onClick={clearAllFilters}
              >
                <FiTrash2 />
                Clear
              </button>
            )}

            {anyFilterActive && (
              <div className="mobile-active-chips">
                {filterCategories.map((cat) =>
                  (selectedFilters[cat.key] || []).map((opt) => (
                    <button
                      key={`m-${cat.key}-${opt}`}
                      type="button"
                      className="active-filter-chip"
                      onClick={() => removeSingleFilter(cat.key, opt)}
                    >
                      {opt.replace(/-/g, " ")}
                      <FiX className="chip-x" />
                    </button>
                  ))
                )}
              </div>
            )}
            <button
              type="button"
              className="mobile-apply-filters"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              View Cakes
            </button>


          </div>
          {filterCategories.map((category) => {
            const isOpen = openCategory === category.key;

            return (
              <div
                key={category.key}
                className={`filter-category ${isOpen ? "open" : ""}`}
              >
                <div className="filter-category-header">
                  <h3 className="filter-category-title">{category.name}</h3>
                  <button
                    type="button"
                    className={`filter-toggle ${isOpen ? "open" : ""}`}
                    onClick={() =>
                      setOpenCategory((prev) => (prev === category.key ? "" : category.key))
                    }
                  >
                    <FiChevronDown />
                  </button>
                </div>

                <div className="filter-options">
                  {category.options.map((option) => {
                    const active = selectedFilters[category.key]?.includes(option);

                    return (
                      <button
                        key={`m-${option}`}
                        type="button"
                        onClick={() => handleFilterChange(category.key, option)}
                        className={
                          active
                            ? "filter-button filter-button-active"
                            : "filter-button"
                        }
                      >
                        {option.replace(/-/g, " ")}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )
      }
    </div >
  );
};

export default Gallery;