import { Cog, Fuel, Gauge, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestCars = ({ car }) => {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            
            
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {car.badge && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-xl shadow-sm">
                        <span className="text-[#3BB77E] font-bold text-sm">{car.badge}</span>
                    </div>
                )}

            
                <div className="absolute -bottom-2 right-4 bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-2 border border-gray-50 z-10 transition-transform group-hover:scale-105">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="font-bold text-gray-800">{car.rating}</span>
                    <span className="text-gray-400 text-xs">({car.reviews_count} reviews)</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{car.name}</h3>
                </div>
                
                <div className="flex items-center gap-1 text-gray-400 mb-4">
                    <MapPin size={16} className="text-gray-300" />
                    <span className="text-md font-light">{car.location}</span>
                </div>

              
                <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                </div>

                <div className="w-full h-px bg-gray-100 mb-6" />

                
                <p className="text-gray-500 text-sm line-clamp-2 mb-6 grow">
                    {car.description}
                </p>

               
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-8">
                    <div className="flex items-center gap-3">
                        <Gauge size={20} className="text-gray-900" />
                        <span className="text-md font-semibold text-gray-700">{car.specs.mileage}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Fuel size={20} className="text-gray-900" />
                        <span className="text-md font-semibold text-gray-700">{car.specs.fuel_type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Cog size={20} className="text-gray-900" />
                        <span className="text-md font-semibold text-gray-700">{car.specs.transmission}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Users size={20} className="text-gray-900" />
                        <span className="text-md font-semibold text-gray-700">{car.specs.seats}</span>
                    </div>
                </div>

               
                <div className="mt-auto">
                    <Link href={`/cars/${car.id}`} className="bg-[#F2F5F7] hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-2 px-5 rounded-2xl transition-all duration-300 text-md active:scale-95 shadow-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestCars;
