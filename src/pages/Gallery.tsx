import React, { useState, useMemo } from 'react';
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  filters: {
    type: string[];
    eventType: string[];
    style: string[];
  }
    color: string[];
    decorations: string[];
    size: string[];
  };
const Gallery = () => {
  return (
    <div>Gallery</div>
  )
}

export default Gallery