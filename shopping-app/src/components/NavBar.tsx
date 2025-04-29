import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useCartStore } from '@/stores';
import CartDrawer from './CardDrawer';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useCartStore(state => state.getCartCount());

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
          FashionVerse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <Link to="/collections/spring-2025" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Spring '25
          </Link>
          <Link to="/collections/minimalist" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Minimalist
          </Link>
          <Link to="/collections/streetwear" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Streetwear
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/search" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
            <Search size={20} />
          </Link>
          <Link to="/wishlist" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
            <Heart size={20} />
          </Link>
          <button 
            onClick={toggleCart}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white z-40 border-b border-gray-100 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-sm font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/collections/spring-2025" 
              className="text-sm font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Spring '25
            </Link>
            <Link 
              to="/collections/minimalist" 
              className="text-sm font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Minimalist
            </Link>
            <Link 
              to="/collections/streetwear" 
              className="text-sm font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Streetwear
            </Link>
            <div className="flex space-x-4 py-2">
              <Link 
                to="/search" 
                className="flex items-center space-x-2 text-sm font-medium hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search size={18} /> <span>Search</span>
              </Link>
              <Link 
                to="/wishlist" 
                className="flex items-center space-x-2 text-sm font-medium hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} /> <span>Wishlist</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
