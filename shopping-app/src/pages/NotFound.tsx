import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;