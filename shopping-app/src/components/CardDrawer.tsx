import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/stores';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  
  if (!isOpen) return null;
  
  const handleQuantityChange = (productId: number, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto animate-fade-in">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingCart size={20} /> Your Cart
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button onClick={onClose} className="w-full">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="p-4 divide-y divide-gray-100">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`} className="py-4 flex gap-4">
                  <div className="w-20 h-24 bg-gray-100 relative overflow-hidden rounded">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:underline"
                        onClick={onClose}
                      >
                        {item.product.name}
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {item.selectedColor.name} / {item.selectedSize}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          className="p-1 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity, -1)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          className="p-1 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity, 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-sm text-gray-500">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between py-2 font-semibold text-lg">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="mt-4 space-y-2">
                <Button asChild className="w-full">
                  <Link to="/checkout" onClick={onClose}>
                    Checkout
                  </Link>
                </Button>
                <Button variant="outline" onClick={onClose} className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
