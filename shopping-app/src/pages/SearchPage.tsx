import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getFilteredProducts } from '@/data/products';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentSearch = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim()) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('q', searchTerm);
      setSearchParams(newParams);
    } else {
      // If search is empty, remove the parameter
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('q');
      setSearchParams(newParams);
    }
  };
  
  const products = getFilteredProducts({ search: currentSearch }, 'newest');
  
  // Function to redirect to shop with search term
  const redirectToShop = () => {
    navigate(`/shop?search=${encodeURIComponent(currentSearch)}`);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="mb-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-8">Search Products</h1>
          
          {/* Search form */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for products..."
                  className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50"
                />
                <Button type="submit" className="rounded-l-none">
                  Search
                </Button>
              </div>
            </form>
          </div>
          
          {/* Search results */}
          {currentSearch ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">
                  Search results for: <span className="font-bold">"{currentSearch}"</span>
                </h2>
                <Button variant="outline" onClick={redirectToShop}>
                  Apply filters to results
                </Button>
              </div>
              
              {products.length > 0 ? (
                <ProductGrid products={products} />
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <Search size={48} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any products matching "{currentSearch}".
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button asChild variant="outline">
                      <Link to="/shop">Browse All Products</Link>
                    </Button>
                    <Button onClick={() => setSearchTerm('')}>
                      Clear Search
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <Search size={48} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-medium mb-2">Start your search</h3>
              <p className="text-gray-500 mb-6">
                Enter a search term above to find products.
              </p>
              <Button asChild>
                <Link to="/shop">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SearchPage;
