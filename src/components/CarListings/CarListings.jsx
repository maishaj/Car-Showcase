"use client"
import React, { useState } from 'react';
import carData from '@/data/cars.json';
import LatestCars from '@/app/cars/page';
import { Filter, Search } from 'lucide-react';

const CarListings = () => {

    // 1. State for filters
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [maxPrice, setMaxPrice] = useState(300000);

    // 2. Logic to get unique brands for the dropdown
    const brands = ["All", ...new Set(carData.map(car => car.name))];

    // 3. Filter Engine
    const filteredCars = carData.filter((car) => {
        const matchesName = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrand === "All" || car.name === selectedBrand;
        const matchesPrice = car.price <= maxPrice;
        
        return matchesName && matchesBrand && matchesPrice;
    });

    return (
       <div className="px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Latest Vehicles</h2>
                    <p className="text-gray-500 text-lg">The world's leading car brands.</p>
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-between">
                        {/* Search Input */}
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3BB77E]" size={18} />
                            <input 
                                type="text"
                                placeholder="Search car..."
                                className="pl-12 pr-4 py-2 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#3BB77E]/20 transition-all w-64 shadow-sm"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                       <div className='flex gap-5'>
                            {/* Brand Dropdown */}
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <select 
                                    className="pl-10 pr-8 py-2 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#3BB77E]/20 appearance-none font-bold text-gray-700 shadow-sm cursor-pointer"
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                >
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>{brand}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="flex flex-col gap-1 min-w-37">
                                <div className="flex justify-between text-[14px] font-black uppercase text-gray-400">
                                    <span>Max Price:</span>
                                    <span className="text-[#3BB77E]">${maxPrice.toLocaleString()}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="300000" 
                                    step="1000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3BB77E]"
                                />
                            </div>
                       </div>
                </div>

               {/* --- Results Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
                    {filteredCars.length > 0 ? (
                        filteredCars.map((car) => (
                            <LatestCars key={car.id} car={car} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-200 rounded-[3rem]">
                            <p className="text-xl font-bold text-gray-400">No vehicles match your filters.</p>
                            <button 
                                onClick={() => {setSearchTerm(""); setSelectedBrand("All"); setMaxPrice(300000);}}
                                className="mt-4 text-[#3BB77E] font-bold underline"
                            >
                                Reset all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarListings;