import React from 'react';
import { Color } from '@/types';

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: Color;
  onSelectColor: (color: Color) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Color:</span>
      <span className="text-sm">{selectedColor?.name}</span>
      <div className="flex space-x-2 ml-4">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              selectedColor?.name === color.name
                ? 'ring-2 ring-offset-2 ring-black'
                : ''
            }`}
            onClick={() => onSelectColor(color)}
            style={{
              backgroundColor: color.value,
              border: color.value === '#FFFFFF' ? '1px solid #e5e5e5' : 'none',
            }}
            aria-label={`Select ${color.name} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
