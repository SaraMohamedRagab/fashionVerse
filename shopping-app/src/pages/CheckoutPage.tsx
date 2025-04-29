import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useCartStore } from '@/stores';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  sameShipping: z.boolean().default(true),
  saveInfo: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutPage = () => {
  const { items, getCartTotal, clearCart } = useCartStore();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      sameShipping: true,
      saveInfo: false,
    },
  });
  
  const onSubmit = (data: FormValues) => {
    // In a real app, this would send the order to a backend service
    console.log('Order submitted:', { orderData: data, items });
    
    // Show success toast
    toast({
      title: "Order Completed!",
      description: "Thank you for your purchase. Your order has been placed successfully.",
    });
    
    // Clear cart
    clearCart();
    
    // Redirect to success page (in a real app)
    // For now, just wait and redirect to home
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  
  // If cart is empty, redirect to cart page
  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">
            You need to add items to your cart before checking out.
          </p>
          <Button asChild>
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <main className="mb-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="First name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-lg font-medium mb-4">Billing Address</h2>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Street address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="City" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State/Province</FormLabel>
                            <FormControl>
                              <Input placeholder="State/Province" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="Postal code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="Country" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      <FormField
                        control={form.control}
                        name="sameShipping"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0 py-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="leading-none">
                              <FormLabel>
                                Shipping address is the same as billing address
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="saveInfo"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0 py-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="leading-none">
                              <FormLabel>
                                Save this information for next time
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                    <p className="text-gray-500 text-sm mb-4">
                      Please note: This is a demo application. No real payment will be processed.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="credit-card"
                          name="payment-method"
                          className="h-4 w-4"
                          checked
                          readOnly
                        />
                        <label htmlFor="credit-card" className="text-sm font-medium">
                          Credit Card (Demo)
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="paypal"
                          name="payment-method"
                          className="h-4 w-4"
                          disabled
                        />
                        <label htmlFor="paypal" className="text-sm font-medium text-gray-400">
                          PayPal (Not available in demo)
                        </label>
                      </div>
                    </div>
                    
                    {/* Demo credit card form */}
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                          Name on card
                        </label>
                        <input
                          type="text"
                          id="card-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                          Card number
                        </label>
                        <input
                          type="text"
                          id="card-number"
                          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                            Expiry date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cvc"
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Complete Order
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                      className="py-3 flex items-center space-x-4"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.selectedColor.name} / {item.selectedSize}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-sm font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>Calculated at next step</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>Calculated at next step</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium text-lg">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CheckoutPage;
