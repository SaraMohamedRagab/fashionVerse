import React from 'react';
import { Size } from '@/types';
import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  sizes: Size[];
  selectedSize: Size;
  onSelectSize: (size: Size) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Size:</span>
        <button className="text-xs text-gray-500 underline">Size Guide</button>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={cn(
              "flex items-center justify-center h-10 border rounded-md text-sm font-medium hover:border-black transition-colors",
              selectedSize === size
                ? "bg-black text-white border-black"
                : "border-gray-200 text-gray-900"
            )}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
