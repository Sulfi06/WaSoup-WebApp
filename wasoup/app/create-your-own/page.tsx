"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type PriceList = { [key: string]: number };

const CreateYourOwnPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<{
    broth: string;
    rice: string;
    veggies: string[];
    protein: string;
    chutney: string[];
    greens: string[];
    toppings: string[];
  }>({
    broth: '',
    rice: '',
    veggies: [],
    protein: '',
    chutney: [],
    greens: [],
    toppings: [],
  });

  const prices: {
    broth: PriceList;
    rice: PriceList;
    veggies: PriceList;
    protein: PriceList;
    chutney: PriceList;
    greens: PriceList;
    toppings: PriceList;
  } = {
    broth: { 'Veg Broth': 50, 'Fish Broth': 70, 'Meat Broth': 80, 'Protein rich': 90, 'Probiotic Rice': 60 },
    rice: { 'Matta Rice': 30, 'Fibre-Rich Rice': 40, 'White Rice': 20 },
    veggies: { 'Sprouted Green Gram': 20, 'Boiled green gram with Grated Coconut': 25, 'Boiled Redgram': 30, 'Boiled Rajma': 35, 'Boiled black chickpeas': 30, 'Boiled Green peas': 25, 'Steamed Corn': 20 },
    protein: { 'None': 0, 'Minced Chicken': 50, 'Minced Beef': 60, 'Minced Fish': 55 },
    chutney: { 'Raw Mango Chutney': 15, 'Coconut Chutney': 20, 'Chuttaracha Chutney': 25, 'Tomato-Beetroot Chutney': 20, 'Chemmeen Powder': 30, 'Kozhuva Powder': 35 },
    greens: { 'Spring Onion': 10, 'Broccoli': 15, 'Lettuce': 10 },
    toppings: { 'Pappadam Crumble': 10, 'Pumpkin Seeds': 15, 'Chia Seeds': 20 },
  };

  const calculateTotal = () => {
    let total = 0;
    total += prices.broth[selections.broth] || 0;
    total += prices.rice[selections.rice] || 0;
    selections.veggies.forEach((veggie) => {
      total += prices.veggies[veggie] || 0;
    });
    total += prices.protein[selections.protein] || 0;
    selections.chutney.forEach((chutney) => {
      total += prices.chutney[chutney] || 0;
    });
    selections.greens.forEach((green) => {
      total += prices.greens[green] || 0;
    });
    selections.toppings.forEach((topping) => {
      total += prices.toppings[topping] || 0;
    });
    return total;
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSelection = (category: keyof typeof selections, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleMultiSelection = (category: keyof typeof selections, value: string) => {
    if (Array.isArray(selections[category])) {
      setSelections((prev) => ({
        ...prev,
        [category]: (prev[category] as string[]).includes(value)
          ? (prev[category] as string[]).filter((item) => item !== value)
          : [...(prev[category] as string[]), value],
      }));
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

      <div className="min-h-screen bg-gray-100 p-8 text-black">
        <h2 className="text-3xl font-bold text-black mb-6">Create Your Own WaSoup</h2>
        {step === 1 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 1: Choose Your Broth Base</h3>
            <div className="space-y-2">
              {Object.keys(prices.broth).map((broth) => (
                <div key={broth}>
                  <input
                    type="radio"
                    id={broth}
                    name="broth"
                    value={broth}
                    checked={selections.broth === broth}
                    onChange={() => handleSelection('broth', broth)}
                  />
                  <label htmlFor={broth} className="ml-2 text-black">{broth} - ₹{prices.broth[broth]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 2: Choose Your Rice Type</h3>
            <div className="space-y-2">
              {Object.keys(prices.rice).map((rice) => (
                <div key={rice}>
                  <input
                    type="radio"
                    id={rice}
                    name="rice"
                    value={rice}
                    checked={selections.rice === rice}
                    onChange={() => handleSelection('rice', rice)}
                  />
                  <label htmlFor={rice} className="ml-2 text-black">{rice} - ₹{prices.rice[rice]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mr-2">Back</button>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 3: Choose Sprouts / Boiled Veggies</h3>
            <div className="space-y-2">
              {Object.keys(prices.veggies).map((veggie) => (
                <div key={veggie}>
                  <input
                    type="checkbox"
                    id={veggie}
                    name="veggies"
                    value={veggie}
                    checked={selections.veggies.includes(veggie)}
                    onChange={() => handleMultiSelection('veggies', veggie)}
                  />
                  <label htmlFor={veggie} className="ml-2 text-black">{veggie} - ₹{prices.veggies[veggie]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mr-2">Back</button>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 4: Add Minced Protein (Optional)</h3>
            <div className="space-y-2">
              {Object.keys(prices.protein).map((protein) => (
                <div key={protein}>
                  <input
                    type="radio"
                    id={protein}
                    name="protein"
                    value={protein}
                    checked={selections.protein === protein}
                    onChange={() => handleSelection('protein', protein)}
                  />
                  <label htmlFor={protein} className="ml-2 text-black">{protein} - ₹{prices.protein[protein]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mr-2">Back</button>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 5: Choose Your Chutney/Flavor Paste</h3>
            <div className="space-y-2">
              {Object.keys(prices.chutney).map((chutney) => (
                <div key={chutney}>
                  <input
                    type="checkbox"
                    id={chutney}
                    name="chutney"
                    value={chutney}
                    checked={selections.chutney.includes(chutney)}
                    onChange={() => handleMultiSelection('chutney', chutney)}
                  />
                  <label htmlFor={chutney} className="ml-2 text-black">{chutney} - ₹{prices.chutney[chutney]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mr-2">Back</button>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 6 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 6: Add Fresh Greens</h3>
            <div className="space-y-2">
              {Object.keys(prices.greens).map((green) => (
                <div key={green}>
                  <input
                    type="checkbox"
                    id={green}
                    name="greens"
                    value={green}
                    checked={selections.greens.includes(green)}
                    onChange={() => handleMultiSelection('greens', green)}
                  />
                  <label htmlFor={green} className="ml-2 text-black">{green} - ₹{prices.greens[green]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mr-2">Back</button>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 7 && (
          <div>
            <h3 className="text-xl text-black mb-4">Step 7: Final Toppings</h3>
            <div className="space-y-2">
              {Object.keys(prices.toppings).map((topping) => (
                <div key={topping}>
                  <input
                    type="checkbox"
                    id={topping}
                    name="toppings"
                    value={topping}
                    checked={selections.toppings.includes(topping)}
                    onChange={() => handleMultiSelection('toppings', topping)}
                  />
                  <label htmlFor={topping} className="ml-2 text-black">{topping} - ₹{prices.toppings[topping]}</label>
                </div>
              ))}
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mr-2">Back</button>
            <button onClick={handleNext} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
          </div>
        )}
        {step === 8 && (
          <div>
            <h3 className="text-xl text-black mb-4">Review & Add to Cart</h3>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2 flex justify-between"><strong>Broth:</strong> {selections.broth} <span>₹{prices.broth[selections.broth]}</span></p>
              <p className="mb-2 flex justify-between"><strong>Rice:</strong> {selections.rice} <span>₹{prices.rice[selections.rice]}</span></p>
              <p className="mb-2 flex justify-between"><strong>Veggies:</strong> {selections.veggies.join(', ')} <span>₹{selections.veggies.reduce((acc, veggie) => acc + prices.veggies[veggie], 0)}</span></p>
              <p className="mb-2 flex justify-between"><strong>Protein:</strong> {selections.protein} <span>₹{prices.protein[selections.protein]}</span></p>
              <p className="mb-2 flex justify-between"><strong>Chutney:</strong> {selections.chutney.join(', ')} <span>₹{selections.chutney.reduce((acc, chutney) => acc + prices.chutney[chutney], 0)}</span></p>
              <p className="mb-2 flex justify-between"><strong>Greens:</strong> {selections.greens.join(', ')} <span>₹{selections.greens.reduce((acc, green) => acc + prices.greens[green], 0)}</span></p>
              <p className="mb-2 flex justify-between"><strong>Toppings:</strong> {selections.toppings.join(', ')} <span>₹{selections.toppings.reduce((acc, topping) => acc + prices.toppings[topping], 0)}</span></p>
              <p className="mt-4 font-bold flex justify-between">Total: <span>₹{calculateTotal()}</span></p>
              <button
                onClick={() => router.push('/checkout')}
                className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
            <button onClick={handleBack} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600">Back</button>
          </div>
        )}
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

export default CreateYourOwnPage; 