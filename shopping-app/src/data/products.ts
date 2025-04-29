import { Product, Collection } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Minimal Cotton T-Shirt',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500',
    ],
    description:
      'Our signature minimal tee crafted from premium organic cotton for unmatched comfort and style. Features a clean, modern silhouette that pairs perfectly with any look.',
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Black', value: '#000000' },
      { name: 'Gray', value: '#808080' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'T-Shirts',
    tags: ['essentials', 'basics', 'cotton'],
    featured: true,
    isNew: true,
    rating: 4.8,
    ratingCount: 124,
    materials: ['100% Organic Cotton'],
    careInstructions: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach',
      'Iron on low heat',
    ],
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=500',
    ],
    description:
      'Modern slim fit jeans with premium stretch denim for all-day comfort. Features a classic five-pocket design and versatile mid-wash finish.',
    colors: [
      { name: 'Blue', value: '#1E3A8A' },
      { name: 'Black', value: '#000000' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Jeans',
    tags: ['denim', 'casual', 'slim-fit'],
    featured: true,
    rating: 4.6,
    ratingCount: 98,
    materials: ['98% Cotton', '2% Elastane'],
    careInstructions: [
      'Machine wash cold',
      'Inside out',
      'Do not bleach',
      'Line dry',
    ],
  },
  {
    id: 3,
    name: 'Oversized Sweatshirt',
    price: 59.99,
    originalPrice: 89.99,
    images: [
      'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=500',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=500',
    ],
    description:
      'Cozy oversized sweatshirt with drop shoulders for the perfect relaxed look. Made from brushed fleece fabric for extra warmth and comfort.',
    colors: [
      { name: 'Cream', value: '#FFFDD0' },
      { name: 'Gray', value: '#808080' },
      { name: 'Black', value: '#000000' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sweatshirts',
    tags: ['oversized', 'casual', 'lounge'],
    featured: false,
    isSale: true,
    rating: 4.9,
    ratingCount: 157,
    materials: ['80% Cotton', '20% Polyester'],
    careInstructions: [
      'Machine wash cold',
      'Do not bleach',
      'Tumble dry low',
    ],
  },
  {
    id: 4,
    name: 'Structured Blazer',
    price: 129.99,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=500',
    ],
    description:
      'Elevate your look with our perfectly tailored blazer. Features a structured silhouette with subtle padding and premium fabric for a polished, professional appearance.',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Navy', value: '#000080' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Blazers',
    tags: ['formal', 'office', 'tailored'],
    isNew: true,
    rating: 4.7,
    ratingCount: 42,
    materials: ['98% Wool', '2% Elastane', 'Lining: 100% Viscose'],
    careInstructions: [
      'Dry clean only',
      'Do not bleach',
      'Cool iron if needed',
    ],
  },
  {
    id: 5,
    name: 'Classic Oxford Shirt',
    price: 69.99,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500',
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=500',
    ],
    description:
      'Timeless oxford shirt made from premium cotton with a button-down collar. Perfect for dressing up or down, this versatile piece is a wardrobe essential.',
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Light Blue', value: '#ADD8E6' },
      { name: 'Pink', value: '#FFC0CB' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Shirts',
    tags: ['classic', 'formal', 'office'],
    featured: true,
    rating: 4.5,
    ratingCount: 89,
    materials: ['100% Cotton'],
    careInstructions: [
      'Machine wash cold',
      'Do not bleach',
      'Iron on medium heat',
    ],
  },
  {
    id: 6,
    name: 'High-Waisted Trousers',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.unsplash.com/photo-1551854838-212c9a5e7d23?q=80&w=500',
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=500',
    ],
    description:
      'Elegant high-waisted trousers with a wide leg design. The pleated front and flowing silhouette create a sophisticated, feminine look that works for both office and evening wear.',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Beige', value: '#F5F5DC' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Trousers',
    tags: ['formal', 'office', 'elegant'],
    isSale: true,
    rating: 4.8,
    ratingCount: 65,
    materials: ['64% Polyester', '34% Viscose', '2% Elastane'],
    careInstructions: [
      'Machine wash cold',
      'Do not tumble dry',
      'Iron on low heat',
    ],
  },
  {
    id: 7,
    name: 'Knit Cardigan',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500',
      'https://images.unsplash.com/photo-1553754538-466add009c05?q=80&w=500',
    ],
    description:
      'Cozy knit cardigan with a relaxed fit and button-front closure. Perfect for layering in transitional weather, this versatile piece adds warmth and style to any outfit.',
    colors: [
      { name: 'Cream', value: '#FFFDD0' },
      { name: 'Dusty Rose', value: '#DCAE96' },
      { name: 'Navy', value: '#000080' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Knitwear',
    tags: ['cozy', 'layering', 'casual'],
    featured: false,
    isNew: true,
    rating: 4.6,
    ratingCount: 52,
    materials: ['70% Acrylic', '30% Wool'],
    careInstructions: [
      'Hand wash cold',
      'Lay flat to dry',
      'Do not bleach',
    ],
  },
  {
    id: 8,
    name: 'Leather Jacket',
    price: 229.99,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500',
      'https://images.unsplash.com/photo-1592878849122-facb97520f9e?q=80&w=500',
    ],
    description:
      'Classic leather jacket with a modern edge. Features a buttery soft leather construction, metal hardware, and a silhouette that flatters while providing an effortlessly cool look.',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Brown', value: '#8B4513' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Outerwear',
    tags: ['leather', 'statement', 'premium'],
    featured: true,
    rating: 4.9,
    ratingCount: 38,
    materials: ['100% Genuine Leather', 'Lining: 100% Polyester'],
    careInstructions: [
      'Specialist leather clean only',
      'Avoid water exposure',
      'Store on padded hanger',
    ],
  },
  {
    id: 9,
    name: 'Pleated Midi Skirt',
    price: 69.99,
    originalPrice: 89.99,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=500',
      'https://images.unsplash.com/photo-1604153707791-061d77774d47?q=80&w=500',
    ],
    description:
      'Elegant pleated midi skirt with a flowing silhouette. The accordion pleats create beautiful movement as you walk, while the high waist flatters your figure.',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Emerald', value: '#50C878' },
      { name: 'Burgundy', value: '#800020' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Skirts',
    tags: ['elegant', 'feminine', 'midi'],
    isSale: true,
    rating: 4.7,
    ratingCount: 61,
    materials: ['100% Polyester'],
    careInstructions: [
      'Hand wash cold',
      'Do not tumble dry',
      'Iron on low heat',
    ],
  },
  {
    id: 10,
    name: 'Utility Jumpsuit',
    price: 109.99,
    images: [
      'https://images.unsplash.com/photo-1603217192634-61068e4d4bf5?q=80&w=500',
      'https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?q=80&w=500',
    ],
    description:
      'Versatile utility jumpsuit with a flattering silhouette and functional details. Features a cinched waist, roomy pockets, and a relaxed fit for comfort and style.',
    colors: [
      { name: 'Olive', value: '#808000' },
      { name: 'Black', value: '#000000' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Jumpsuits',
    tags: ['utility', 'casual', 'statement'],
    isNew: true,
    rating: 4.8,
    ratingCount: 45,
    materials: ['100% Lyocell'],
    careInstructions: [
      'Machine wash cold',
      'Line dry',
      'Iron on low heat',
    ],
  },
  {
    id: 11,
    name: 'Wool Blend Coat',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1d?q=80&w=500',
      'https://images.unsplash.com/photo-1519657337289-077653f724ed?q=80&w=500',
    ],
    description:
      'Luxurious wool blend coat with a timeless design. The clean lines and structured silhouette create an elegant look, while the blend of wool and cashmere ensures warmth and comfort.',
    colors: [
      { name: 'Camel', value: '#C19A6B' },
      { name: 'Gray', value: '#808080' },
      { name: 'Black', value: '#000000' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Outerwear',
    tags: ['wool', 'winter', 'formal'],
    isSale: true,
    featured: true,
    rating: 4.9,
    ratingCount: 72,
    materials: ['80% Wool', '20% Cashmere', 'Lining: 100% Viscose'],
    careInstructions: [
      'Dry clean only',
      'Do not bleach',
      'Cool iron if needed',
    ],
  },
  {
    id: 12,
    name: 'Relaxed Linen Shirt',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=500',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=500',
    ],
    description:
      'Breathable linen shirt with a relaxed fit for effortless summer style. The lightweight fabric and casual silhouette make this perfect for warm weather and beach days.',
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Sand', value: '#C2B280' },
      { name: 'Sage', value: '#9CAF88' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Shirts',
    tags: ['linen', 'summer', 'casual'],
    isNew: true,
    rating: 4.6,
    ratingCount: 53,
    materials: ['100% Linen'],
    careInstructions: [
      'Machine wash cold',
      'Line dry',
      'Iron on medium heat',
    ],
  },
];

export const collections: Collection[] = [
  {
    id: 1,
    name: 'Spring 2025',
    description: 'Fresh cuts and colors for the new season.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=500',
    slug: 'spring-2025',
  },
  {
    id: 2,
    name: 'Minimalist',
    description: 'Clean lines and neutral tones for a timeless look.',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=500',
    slug: 'minimalist',
  },
  {
    id: 3,
    name: 'Streetwear',
    description: 'Urban-inspired pieces for everyday style.',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=500',
    slug: 'streetwear',
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  if (collectionSlug === 'spring-2025') {
    return products.filter(product => product.isNew);
  } else if (collectionSlug === 'minimalist') {
    return products.filter(product => product.tags.includes('classic') || product.tags.includes('basics'));
  } else if (collectionSlug === 'streetwear') {
    return products.filter(product => product.tags.includes('casual') || product.tags.includes('statement'));
  }
  return [];
};

export const getFilteredProducts = (
  filter: {
    categories?: string[];
    sizes?: string[];
    colors?: string[];
    minPrice?: number;
    maxPrice?: number;
    tags?: string[];
    search?: string;
  },
  sort: string
): Product[] => {
  let filteredProducts = [...products];

  // Filter by category
  if (filter.categories && filter.categories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filter.categories?.includes(product.category)
    );
  }

  // Filter by size
  if (filter.sizes && filter.sizes.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.sizes.some(size => filter.sizes?.includes(size))
    );
  }

  // Filter by color
  if (filter.colors && filter.colors.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.colors.some(color => filter.colors?.includes(color.name))
    );
  }

  // Filter by price range
  if (filter.minPrice !== undefined || filter.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      product => 
        (filter.minPrice === undefined || product.price >= filter.minPrice) &&
        (filter.maxPrice === undefined || product.price <= filter.maxPrice)
    );
  }

  // Filter by tags
  if (filter.tags && filter.tags.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.tags.some(tag => filter.tags?.includes(tag))
    );
  }

  // Filter by search term
  if (filter.search) {
    const searchTerm = filter.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Sort products
  switch (sort) {
    case 'price-low-high':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
      break;
    case 'popular':
      filteredProducts.sort((a, b) => {
        const ratingA = a.rating || 0;
        const ratingB = b.rating || 0;
        return ratingB - ratingA;
      });
      break;
    default:
      break;
  }

  return filteredProducts;
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.isSale);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

export const getColors = (): string[] => {
  const colors = products.flatMap(product => product.colors.map(color => color.name));
  return [...new Set(colors)];
};

export const getTags = (): string[] => {
  const tags = products.flatMap(product => product.tags);
  return [...new Set(tags)];
};
