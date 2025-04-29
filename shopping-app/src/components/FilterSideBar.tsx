import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ProductFilter } from '@/types';
import { getCategories, getColors, getTags } from '@/data/products';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filter: ProductFilter;
  onFilterChange: (filter: Partial<ProductFilter>) => void;
  onResetFilter: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filter,
  onFilterChange,
  onResetFilter,
}) => {
  const categories = getCategories();
  const colors = getColors();
  const tags = getTags();
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filter.minPrice, 
    filter.maxPrice
  ]);
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  const applyPriceFilter = () => {
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };
  
  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories = [...filter.categories];
    
    if (checked) {
      newCategories.push(category);
    } else {
      newCategories = newCategories.filter(c => c !== category);
    }
    
    onFilterChange({ categories: newCategories });
  };
  
  const handleSizeChange = (size: string, checked: boolean) => {
    let newSizes = [...filter.sizes];
    
    if (checked) {
      newSizes.push(size as any);
    } else {
      newSizes = newSizes.filter(s => s !== size);
    }
    
    onFilterChange({ sizes: newSizes });
  };
  
  const handleColorChange = (color: string, checked: boolean) => {
    let newColors = [...filter.colors];
    
    if (checked) {
      newColors.push(color);
    } else {
      newColors = newColors.filter(c => c !== color);
    }
    
    onFilterChange({ colors: newColors });
  };
  
  const handleTagChange = (tag: string, checked: boolean) => {
    let newTags = [...filter.tags];
    
    if (checked) {
      newTags.push(tag);
    } else {
      newTags = newTags.filter(t => t !== tag);
    }
    
    onFilterChange({ tags: newTags });
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-xl overflow-y-auto md:sticky md:top-20 md:h-screen md:max-h-[calc(100vh-5rem)] md:shadow-none">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium">Filters</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onResetFilter}
              className="text-xs"
            >
              Reset
            </Button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 md:hidden"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <Accordion type="multiple" defaultValue={["categories", "sizes", "price"]}>
            {/* Categories */}
            <AccordionItem value="categories">
              <AccordionTrigger className="py-3 text-sm font-medium">
                Categories
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filter.categories.includes(category)}
                      onCheckedChange={(checked) => 
                        handleCategoryChange(category, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm text-gray-700 leading-none cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            
            {/* Sizes */}
            <AccordionItem value="sizes">
              <AccordionTrigger className="py-3 text-sm font-medium">
                Sizes
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`size-${size}`}
                        checked={filter.sizes.includes(size as any)}
                        onCheckedChange={(checked) => 
                          handleSizeChange(size, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="text-sm text-gray-700 leading-none cursor-pointer"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Colors */}
            <AccordionItem value="colors">
              <AccordionTrigger className="py-3 text-sm font-medium">
                Colors
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`color-${color}`}
                      checked={filter.colors.includes(color)}
                      onCheckedChange={(checked) => 
                        handleColorChange(color, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`color-${color}`}
                      className="text-sm text-gray-700 leading-none cursor-pointer"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            
            {/* Price Range */}
            <AccordionItem value="price">
              <AccordionTrigger className="py-3 text-sm font-medium">
                Price Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[priceRange[0], priceRange[1]]}
                    max={1000}
                    step={10}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={handlePriceChange}
                    className="mt-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      ${priceRange[0]}
                    </span>
                    <span className="text-sm text-gray-600">
                      ${priceRange[1]}
                    </span>
                  </div>
                  <Button size="sm" onClick={applyPriceFilter} className="w-full">
                    Apply
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Tags */}
            <AccordionItem value="tags">
              <AccordionTrigger className="py-3 text-sm font-medium">
                Tags
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                {tags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={filter.tags.includes(tag)}
                      onCheckedChange={(checked) => 
                        handleTagChange(tag, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`tag-${tag}`}
                      className="text-sm text-gray-700 leading-none cursor-pointer"
                    >
                      {tag}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
