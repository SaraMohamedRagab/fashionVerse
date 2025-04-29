export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  colors: Color[];
  sizes: Size[];
  category: string;
  tags: string[];
  featured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  rating?: number;
  ratingCount?: number;
  materials?: string[];
  careInstructions?: string[];
}

export type Color = {
  name: string;
  value: string;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: Color;
  selectedSize: Size;
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export type SortOption = 'price-low-high' | 'price-high-low' | 'newest' | 'popular';

export interface ProductFilter {
  categories: string[];
  sizes: Size[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
  tags: string[];
}
