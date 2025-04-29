import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useWishlistStore, useCartStore } from '@/stores';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Heart, ShoppingCart } from 'lucide-react';

const WishlistPage = () => {
  const { items, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const { toast } = useToast();
  
  const handleAddToCart = (productId: number) => {
    const product = items.find(item => item.id === productId);
    if (!product) return;
    
    addToCart(
      product,
      1,
      product.colors[0],
      product.sizes[0]
    );
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  return (
    <>
      <Navbar />
      
      <main className="mb-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-8">Your Wishlist</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">
                Save your favorite items to your wishlist to come back to them later.
              </p>
              <Button asChild>
                <Link to="/shop">Explore Products</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product) => (
                <div key={product.id} className="border rounded-lg overflow-hidden">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-[3/4] relative bg-gray-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Product tags */}
                      <div className="absolute top-2 left-2 flex gap-2">
                        {product.isNew && (
                          <span className="bg-black text-white text-xs px-2 py-1 rounded-sm">
                            New
                          </span>
                        )}
                        {product.isSale && (
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm">
                            Sale
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Link
                        to={`/product/${product.id}`}
                        className="font-medium line-clamp-1 hover:underline"
                      >
                        {product.name}
                      </Link>
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="text-red-500"
                        aria-label="Remove from wishlist"
                      >
                        <Heart size={18} className="fill-red-500" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        {product.originalPrice ? (
                          <div className="flex items-center">
                            <span className="text-red-600 font-medium mr-2">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="text-gray-400 text-sm line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <span className="font-medium">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1.5"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingCart size={14} />
                        <span>Add</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default WishlistPage;
