import React from 'react';
import Link from 'next/link';

const SignUpPage = () => {
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
        <section className="flex items-center justify-center min-h-[60vh]">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-12">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-black">Full Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your full name" />
              </div>
              <div className="mb-4">
                <label className="block text-black">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your email" />
              </div>
              <div className="mb-6">
                <label className="block text-black">Password</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your password" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
            </form>
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

export default SignUpPage; 