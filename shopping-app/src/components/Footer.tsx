import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">FashionVerse</h3>
            <p className="text-gray-600 text-sm">
              Contemporary fashion essentials crafted with quality and style in mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">Facebook</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/spring-2025" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Spring 2025
                </Link>
              </li>
              <li>
                <Link to="/collections/minimalist" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Minimalist
                </Link>
              </li>
              <li>
                <Link to="/collections/streetwear" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Streetwear
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-black text-sm transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-black text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="mt-2">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-auto rounded-l border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  className="rounded-r bg-black text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FashionVerse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="text-sm text-gray-500 hover:text-black transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
