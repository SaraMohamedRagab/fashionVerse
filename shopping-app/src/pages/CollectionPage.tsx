import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCollection, collections } from '@/data/products';

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = collections.find(c => c.slug === slug);
  const products = slug ? getProductsByCollection(slug) : [];
  
  if (!collection) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Collection Not Found</h1>
          <p className="text-gray-500 mb-8">
            The collection you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/shop" 
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Shop All Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <main className="mb-16">
        {/* Collection Header */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{collection.name}</h1>
              <p className="max-w-xl mx-auto text-lg">{collection.description}</p>
            </div>
          </div>
        </div>
        
        {/* Products */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-medium">Products in this Collection</h2>
            <p className="text-gray-600 mt-2">
              Showing {products.length} products in the {collection.name} collection
            </p>
          </div>
          
          <ProductGrid products={products} />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CollectionPage;
