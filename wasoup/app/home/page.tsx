import React from 'react';
import Link from 'next/link';

const HomePage = () => {
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
        {/* Hero Section */}
        <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/assets/teacreativelife-soo-chung-MzDMdLxu5d0-unsplash.jpg)' }}>
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to WaSoup</h1>
            <p className="text-xl mb-8">Delicious Kerala-inspired soups</p>
            <Link href="/create-your-own" className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
              Create Your Own WaSoup
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">About WaSoup</h2>
          <p className="text-lg text-gray-700">Experience the authentic taste of Kerala with our signature and customizable soups.</p>
        </section>

        {/* Signature WaSoups Section */}
        <section className="py-16 px-8 text-center bg-gray-50">
          <h2 className="text-3xl font-bold text-black mb-4">Signature WaSoups</h2>
          <p className="text-lg text-gray-700 mb-8">Explore our curated selection of signature WaSoups.</p>
          <Link href="/signature-soups" className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">
            View Signature WaSoups
          </Link>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Happy Customers</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">&quot;The best soup experience I&apos;ve ever had!&quot;</p>
            <p className="text-gray-500">- Happy Customer</p>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 px-8 text-center bg-gray-50">
          <h2 className="text-3xl font-bold text-black mb-4">Find Our Locations</h2>
          <p className="text-lg text-gray-700">Visit our cloud kitchens.</p>
          <div className="mt-8">
            <p className="text-lg text-gray-700">Bangalore, Karnataka</p>
            <p className="text-lg text-gray-700">Cochin, Kerala</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 bg-gray-800 text-white text-center">
          <p>&copy; 2023 WaSoup. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage; 