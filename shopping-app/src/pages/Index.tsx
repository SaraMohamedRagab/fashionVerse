import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CollectionCard from '@/components/CollectionCard';
import ProductCarousel from '@/components/ProductCarousel';
import { Button } from '@/components/ui/button';
import { 
  collections, 
  getFeaturedProducts, 
  getNewProducts, 
  getSaleProducts 
} from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const saleProducts = getSaleProducts();

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Elevate Your Style This Season"
          subtitle="Discover our new collection of contemporary essentials crafted with premium materials and timeless design."
          cta="Shop New Arrivals"
          link="/shop"
          image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000"
        />
        
        {/* Collections Section */}
        <section className="container mx-auto px-4 section-padding">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h2 className="text-2xl md:text-3xl font-medium">Collections</h2>
            <Link to="/shop" className="text-sm font-medium hover:underline mt-2 md:mt-0">
              View All Collections
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="container mx-auto px-4 section-padding">
          <ProductCarousel
            title="Featured Products"
            products={featuredProducts}
          />
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </section>
        
        {/* New Arrivals */}
        <section className="container mx-auto px-4 section-padding">
          <ProductCarousel
            title="New Arrivals"
            products={newProducts}
          />
        </section>
        
        {/* Sale Products */}
        <section className="container mx-auto px-4 section-padding">
          <ProductCarousel
            title="On Sale"
            products={saleProducts}
          />
        </section>
        
        {/* Newsletter */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to receive updates on new arrivals, special offers, and style inspiration.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-auto rounded-l-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <Button className="rounded-l-none" type="submit">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;