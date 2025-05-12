import React from 'react';
import Link from 'next/link';

const CartPage = () => {
  const cartItems = [
    {
      name: 'Custom WaSoup',
      quantity: 1,
      price: 250,
      nutrition: {
        calories: 350,
        protein: 20,
        fat: 10,
        carbs: 50,
      },
    },
    {
      name: 'Classic Veg Soup',
      quantity: 2,
      price: 120,
      nutrition: {
        calories: 150,
        protein: 5,
        fat: 2,
        carbs: 30,
      },
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = subtotal * 0.1; // Placeholder for tax calculation
  const total = subtotal + taxes;

  return (
    <>
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="/assets/WaSouplogo.png" alt="WaSoup Logo" className="h-12" />
          </Link>
        </div>
        <nav className="flex space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="#signature" className="text-gray-700 hover:text-gray-900">Signature WaSoups</Link>
          <Link href="#create" className="text-gray-700 hover:text-gray-900">Create Your Own</Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</Link>
          <Link href="#locations" className="text-gray-700 hover:text-gray-900">Locations</Link>
        </nav>
        <Link href="/checkout" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Checkout</Link>
      </header>

      <div className="min-h-screen bg-gray-100">
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Your Cart</h2>
          <div className="bg-white p-4 rounded shadow-md max-w-xl mx-auto">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col mb-4">
                <div className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Calories: {item.nutrition.calories} kcal</p>
                  <p>Protein: {item.nutrition.protein} g</p>
                  <p>Fat: {item.nutrition.fat} g</p>
                  <p>Carbs: {item.nutrition.carbs} g</p>
                </div>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between mb-2">
              <span className="text-black">Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black">Taxes</span>
              <span>₹{taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-black">Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Proceed to Checkout</button>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Happy Customers</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">&quot;The best soup experience I&apos;ve ever had!&quot;</p>
            <p className="text-gray-500">- Happy Customer</p>
          </div>
        </section>
      </div>

      <footer className="py-8 px-8 bg-gray-800 text-white text-center">
        <p>&copy; 2023 WaSoup. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </>
  );
};

export default CartPage; 