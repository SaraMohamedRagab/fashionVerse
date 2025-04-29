import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  cta,
  link,
  image,
}) => {
  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-200">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black font-medium">
              <Link to={link}>
                {cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
