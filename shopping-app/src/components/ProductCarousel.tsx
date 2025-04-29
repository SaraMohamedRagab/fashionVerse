import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = container.querySelector('div')?.clientWidth || 300;
    const scrollAmount = cardWidth + 24; // Card width + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
    }, 500);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current
    ? scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 10
    : true;

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-medium">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-9 w-9 text-gray-600 hover:text-black"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-9 w-9 text-gray-600 hover:text-black"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-none hide-scrollbar pb-4"
        onScroll={handleScroll}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[250px] md:min-w-[280px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
