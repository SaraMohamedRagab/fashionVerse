import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const toggleZoom = () => {
    setZoom((prev) => !prev);
  };
  
  return (
    <div className="relative">
      {/* Main image */}
      <div 
        className={`relative aspect-square overflow-hidden bg-gray-50 rounded-md mb-4 ${
          zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
        }`}
        onClick={toggleZoom}
      >
        <img
          src={images[currentIndex]}
          alt={`${productName} - Image ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            zoom ? 'scale-150' : 'scale-100'
          }`}
        />
        
        {/* Navigation buttons */}
        {!zoom && images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 bg-white/80 hover:bg-white shadow-sm border-0"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <ChevronLeft size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 bg-white/80 hover:bg-white shadow-sm border-0"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={18} />
            </Button>
          </>
        )}
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar scrollbar-none py-1">
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-black' : 'opacity-60'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

