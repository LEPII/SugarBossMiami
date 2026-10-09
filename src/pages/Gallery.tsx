import "../style/pages/gallery.css";
import { FiChevronDown, FiX, FiTrash2 } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { filterCategories } from "../data/galleryFilters";
import { useGalleryFilters } from "../hooks/useGalleryFilters";

const Gallery = () => {
  const {
    selectedFilters,
    openCategory,
    toggleCategory,
    isMobileFilterOpen,
    openMobileFilter,
    closeMobileFilter,
    lightboxImage,
    openLightbox,
    closeLightbox,
    filteredImages,
    anyFilterActive,
    handleFilterChange,
    clearAllFilters,
    removeSingleFilter,
  } = useGalleryFilters();
  
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
          onClick={openMobileFilter}
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
                    onClick={() => toggleCategory(category.key)}
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
                  onClick={() => openLightbox(image)}
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
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
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
                onClick={closeMobileFilter}
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
              onClick={closeMobileFilter}
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
                    onClick={() => toggleCategory(category.key)}
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
