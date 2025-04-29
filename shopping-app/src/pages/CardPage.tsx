import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/stores';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  
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
      <Navbar />
      
      <main className="mb-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-8">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Product</th>
                        <th className="text-center p-4 text-sm font-medium text-gray-600 hidden sm:table-cell">Price</th>
                        <th className="text-center p-4 text-sm font-medium text-gray-600">Quantity</th>
                        <th className="text-right p-4 text-sm font-medium text-gray-600">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {items.map((item) => (
                        <tr key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}>
                          <td className="p-4">
                            <div className="flex items-center space-x-4">
                              <Link to={`/product/${item.product.id}`} className="shrink-0">
                                <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                                  <img
                                    src={item.product.images[0]}
                                    alt={item.product.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </Link>
                              <div className="flex-1 min-w-0">
                                <Link
                                  to={`/product/${item.product.id}`}
                                  className="text-sm font-medium hover:underline"
                                >
                                  {item.product.name}
                                </Link>
                                <p className="text-xs text-gray-500 mt-1">
                                  {item.selectedColor.name} / {item.selectedSize}
                                </p>
                                <div className="mt-2 sm:hidden">
                                  <span className="text-sm font-medium">
                                    ${item.product.price.toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-center hidden sm:table-cell">
                            <span className="text-sm font-medium">
                              ${item.product.price.toFixed(2)}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center">
                              <div className="flex items-center border rounded">
                                <button
                                  className="p-1 hover:bg-gray-100"
                                  onClick={() =>
                                    handleQuantityChange(item.product.id, item.quantity, -1)
                                  }
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="px-3 py-1 text-sm">{item.quantity}</span>
                                <button
                                  className="p-1 hover:bg-gray-100"
                                  onClick={() =>
                                    handleQuantityChange(item.product.id, item.quantity, 1)
                                  }
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              <button
                                className="ml-3 text-gray-400 hover:text-red-500"
                                onClick={() => removeFromCart(item.product.id)}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <span className="text-sm font-medium">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Link
                    to="/shop"
                    className="text-sm font-medium flex items-center hover:underline"
                  >
                    <ArrowRight size={16} className="mr-1 transform rotate-180" />
                    Continue Shopping
                  </Link>
                  
                  <Button variant="outline" onClick={() => useCartStore.getState().clearCart()}>
                    Clear Cart
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-6">
                    <span className="font-medium">Total</span>
                    <span className="font-medium text-lg">${getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CartPage;