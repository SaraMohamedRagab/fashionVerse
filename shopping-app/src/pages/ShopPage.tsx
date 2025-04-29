import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSideBar';
import { getFilteredProducts } from '@/data/products';
import { useFilterStore } from '@/stores';
import { 
  Filter, 
  X
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filter, sort, updateFilter, resetFilter, setSort } = useFilterStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get search term from URL if any
  const searchTerm = searchParams.get('search') || '';
  
  // Get filtered and sorted products
  const products = getFilteredProducts(
    { ...filter, search: searchTerm },
    sort
  );
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const handleSortChange = (value: string) => {
    setSort(value as any);
  };
  
  const clearSearch = () => {
    searchParams.delete('search');
    setSearchParams(searchParams);
  };
  
  const activeFiltersCount = 
    filter.categories.length + 
    filter.sizes.length + 
    filter.colors.length + 
    filter.tags.length + 
    (filter.minPrice > 0 || filter.maxPrice < 1000 ? 1 : 0);
  
  return (
    <>
      <Navbar />
      
      <main className="mb-16">
        {/* Shop Header */}
        <div className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-medium">Shop</h1>
            {searchTerm && (
              <div className="mt-2 flex items-center">
                <p className="text-gray-600">
                  Search results for: <span className="font-medium">{searchTerm}</span>
                </p>
                <button
                  onClick={clearSearch}
                  className="ml-2 p-1 rounded-full hover:bg-gray-200"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Shop Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFilter}
              className="md:hidden flex items-center gap-2"
            >
              <Filter size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
            
            <p className="text-sm text-gray-500">
              Showing {products.length} products
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by:</span>
              <Select value={sort} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-8">
            {/* Filter sidebar - desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <FilterSidebar
                isOpen={true}
                onClose={() => {}}
                filter={filter}
                onFilterChange={updateFilter}
                onResetFilter={resetFilter}
              />
            </div>
            
            {/* Filter sidebar - mobile */}
            {isFilterOpen && (
              <FilterSidebar
                isOpen={isFilterOpen}
                onClose={toggleFilter}
                filter={filter}
                onFilterChange={updateFilter}
                onResetFilter={resetFilter}
              />
            )}
            
            {/* Products */}
            <div className="flex-1">
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ShopPage;
