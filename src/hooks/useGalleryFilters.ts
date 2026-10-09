import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { catalogData, type GalleryFilters } from "../data/catalogData";
import { filterCategories } from "../data/galleryFilters";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  filters: GalleryFilters;
}

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

export const useGalleryFilters = () => {
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

  const toggleCategory = (key: string) => {
    setOpenCategory((prev) => (prev === key ? "" : key));
  };

  const openMobileFilter = () => setIsMobileFilterOpen(true);
  const closeMobileFilter = () => setIsMobileFilterOpen(false);

  const openLightbox = (image: GalleryImage) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const handleFilterChange = (
    categoryKey: keyof GalleryFilters,
    option: string
  ) => {
    setSelectedFilters((prevFilters) => {
      const isAlreadySelected = prevFilters[categoryKey].includes(option);

      const nextFilters = {
        ...prevFilters,
        [categoryKey]: isAlreadySelected ? [] : [option],
      };

      updateUrlFromFilters(nextFilters);
      return nextFilters;
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

  return {
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
  };
};
