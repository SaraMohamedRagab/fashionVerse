import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductFilter, SortOption, Color, Size } from '@/types';

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, selectedColor: Color, selectedSize: Size) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

interface WishlistState {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

interface FilterState {
  filter: ProductFilter;
  sort: SortOption;
  updateFilter: (filter: Partial<ProductFilter>) => void;
  resetFilter: () => void;
  setSort: (sort: SortOption) => void;
}

const DEFAULT_FILTER: ProductFilter = {
  categories: [],
  sizes: [],
  colors: [],
  minPrice: 0,
  maxPrice: 1000,
  tags: [],
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, quantity, selectedColor, selectedSize) => {
        const existingItemIndex = get().items.findIndex(
          (item) => 
            item.product.id === product.id && 
            item.selectedColor.name === selectedColor.name && 
            item.selectedSize === selectedSize
        );

        if (existingItemIndex !== -1) {
          // Item exists, update quantity
          const updatedItems = [...get().items];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems });
        } else {
          // Add new item
          set({ items: [...get().items, { product, quantity, selectedColor, selectedSize }] });
        }
      },
      removeFromCart: (productId) => {
        set({ items: get().items.filter((item) => item.product.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      getCartTotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.isSale && item.product.originalPrice
            ? item.product.price
            : item.product.price;
          return total + price * item.quantity;
        }, 0);
      },
      getCartCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (product) => {
        if (!get().isInWishlist(product.id)) {
          set({ items: [...get().items, product] });
        }
      },
      removeFromWishlist: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },
      isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);

export const useFilterStore = create<FilterState>()((set) => ({
  filter: DEFAULT_FILTER,
  sort: 'newest',
  updateFilter: (filter) => set((state) => ({ filter: { ...state.filter, ...filter } })),
  resetFilter: () => set({ filter: DEFAULT_FILTER }),
  setSort: (sort) => set({ sort }),
}));
