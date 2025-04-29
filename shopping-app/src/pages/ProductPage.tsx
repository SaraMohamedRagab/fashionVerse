import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import ColorSelector from '@/components/ColorSelector';
import SizeSelector from '@/components/SizeSeclector';
import ProductCarousel from '@/components/ProductCarousel';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  ShieldCheck 
} from 'lucide-react';
import { getProductById, getFeaturedProducts } from '@/data/products';
import { Color, Size } from '@/types';
import { useCartStore, useWishlistStore } from '@/stores';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  const product = getProductById(Number(productId));
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== Number(productId));
  
  const [selectedColor, setSelectedColor] = useState<Color>(
    product?.colors[0] || { name: '', value: '' }
  );
  const [selectedSize, setSelectedSize] = useState<Size>(
    product?.sizes[0] || 'M'
  );
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  
  const isWishlisted = product ? isInWishlist(product.id) : false;
  
  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart(product, quantity, selectedColor, selectedSize);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
          <p className="text-gray-500 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <main className="mb-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-gray-900">Shop</Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-gray-900">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-medium">{product.name}</h1>
                
                <div className="flex items-center mt-2">
                  {product.rating && (
                    <div className="flex items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.ratingCount} reviews)
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4">
                  {product.originalPrice ? (
                    <div className="flex items-center">
                      <span className="text-2xl font-medium text-red-600 mr-2">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-medium">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600">{product.description}</p>
              
              <div className="space-y-4 pt-2">
                {/* Color selector */}
                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />
                
                {/* Size selector */}
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />
                
                {/* Quantity */}
                <div className="mt-6">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center mt-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 h-8 border-t border-b border-gray-300 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex space-x-4 pt-2">
                  <Button 
                    className="flex-1 flex items-center justify-center gap-2" 
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className={`${isWishlisted ? 'text-red-500' : ''}`}
                    onClick={handleWishlistToggle}
                  >
                    <Heart size={18} className={isWishlisted ? 'fill-red-500' : ''} />
                  </Button>
                </div>
                
                {/* Benefits */}
                <div className="border-t border-b border-gray-200 py-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck size={16} className="mr-2" />
                    <span>Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <RotateCcw size={16} className="mr-2" />
                    <span>Free 30-day returns</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ShieldCheck size={16} className="mr-2" />
                    <span>2-year warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-gray-600">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="details">
                <div className="space-y-4">
                  {/* Materials */}
                  {product.materials && product.materials.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium mb-2">Materials</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        {product.materials.map((material, index) => (
                          <li key={index}>{material}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Care Instructions */}
                  {product.careInstructions && product.careInstructions.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium mb-2">Care Instructions</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        {product.careInstructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < Math.floor(product.rating || 0)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      Based on {product.ratingCount} reviews
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600">
                      Customer reviews will be displayed here. This is a demo without actual reviews.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <ProductCarousel
              title="You May Also Like"
              products={relatedProducts.slice(0, 8)}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductPage;