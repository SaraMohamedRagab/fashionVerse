import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import { useWishlistStore } from '@/stores';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative rounded-md overflow-hidden aspect-[3/4] bg-gray-100 mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
        
        {/* Wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            size={16} 
            className={isWishlisted ? 'fill-red-500 text-red-500' : ''} 
          />
        </button>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.category}</p>
        </div>
        <div className="flex items-center">
          {product.originalPrice ? (
            <>
              <span className="text-red-600 font-medium mr-2">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-400 text-sm line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
