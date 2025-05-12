import React from 'react';
import Link from 'next/link';

const SignatureSoupsPage = () => {
  const soups = [
    { name: 'Classic Veg Soup', description: 'A delicious blend of fresh vegetables.', price: '$5.99' },
    { name: 'Spicy Fish Soup', description: 'A spicy and tangy fish soup.', price: '$6.99' },
    { name: 'Hearty Meat Soup', description: 'A rich and hearty meat soup.', price: '$7.99' },
  ];

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
        <section className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/assets/teacreativelife-soo-chung-MzDMdLxu5d0-unsplash.jpg)' }}>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Signature WaSoups</h1>
            <p className="text-lg mb-4">Kerala-inspired, chef-crafted soups</p>
          </div>
        </section>
        {/* Signature Soups Section */}
        <section className="py-16 px-8 text-center bg-gray-50">
          <h2 className="text-3xl font-bold text-black mb-4">Our Signature Soups</h2>
          <p className="text-lg text-gray-700 mb-8">Explore our curated selection of signature WaSoups.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soups.map((soup, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <h3 className="text-xl text-black font-semibold">{soup.name}</h3>
                <p className="text-black mb-2">{soup.description}</p>
                <p className="text-black font-bold">{soup.price}</p>
                <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            ))}
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

export default SignatureSoupsPage; 