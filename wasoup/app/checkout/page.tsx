"use client";

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

const CheckoutPage = () => {
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [address, setAddress] = useState({
    house: '',
    road: '',
    state: '',
    city: '',
    pincode: '',
  });
  const [error, setError] = useState('');

  const handlePincodeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress((prev) => ({ ...prev, pincode: value }));

    if (value.length !== 6) {
      setAddress((prev) => ({ ...prev, city: '', state: '' }));
      setError('');
      return;
    }

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
      const data: ApiResponse[] = await res.json();

      if (data[0].Status === 'Success' && data[0].PostOffice && data[0].PostOffice.length > 0) {
        const postOffice = data[0].PostOffice[0];
        if (postOffice) {
          setAddress((prev) => ({
            ...prev,
            city: postOffice.District,
            state: postOffice.State,
          }));
          setError('');
        }
      } else {
        setAddress((prev) => ({ ...prev, city: '', state: '' }));
        setError('Invalid pincode or no data found');
      }
    } catch (err) {
      setAddress((prev) => ({ ...prev, city: '', state: '' }));
      setError('Error fetching data');
      console.error(err);
    }
  };

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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Checkout</h2>
          <form>
            <div className="mb-4">
              <label className="block text-black">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-black">Delivery Option</label>
              <div className="flex space-x-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="delivery"
                    checked={deliveryOption === 'delivery'}
                    onChange={() => setDeliveryOption('delivery')}
                  />
                  Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="pickup"
                    checked={deliveryOption === 'pickup'}
                    onChange={() => setDeliveryOption('pickup')}
                  />
                  Pickup
                </label>
              </div>
            </div>
            {deliveryOption === 'delivery' && (
              <>
                <div className="mb-4">
                  <label className="block text-black">House/Flat/Block No</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter house/flat/block no" value={address.house} onChange={(e) => setAddress((prev) => ({ ...prev, house: e.target.value }))} />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Apartment/Road/Area</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter apartment/road/area" value={address.road} onChange={(e) => setAddress((prev) => ({ ...prev, road: e.target.value }))} />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Pincode</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter pincode" value={address.pincode} onChange={handlePincodeChange} />
                </div>
                <div className="mb-4">
                  <label className="block text-black">State</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="State" value={address.state} readOnly />
                </div>
                <div className="mb-4">
                  <label className="block text-black">City</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="City" value={address.city} readOnly />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </>
            )}
            <div className="mb-4">
              <label className="block text-black">Phone Number</label>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your phone number" />
            </div>
            <div className="mb-4">
              <label className="block text-black">Payment Method</label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1">
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>UPI</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Place Order</button>
          </form>
        </div>
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

export default CheckoutPage;

type PostOffice = {
  District: string;
  State: string;
};

type ApiResponse = {
  PostOffice: PostOffice[] | null;
  Status: string;
}; 