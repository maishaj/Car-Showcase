import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Fuel, Cog, Users, MapPin, ArrowLeft, Calendar, Shield, Zap, Wrench, Briefcase, CarFront, DoorOpen,Droplets
} from 'lucide-react';
import carData from '@/data/cars.json';

const CarDetails = async({ params }) => {
    
    const {id}=await params;
    const car = carData.find((c) => c.id === parseInt(id));

    console.log(car);

    if (!car) return <div className="p-20 text-center">Car not found</div>;

    return (
        <main className="min-h-screen bg-[#F9FBFC] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                
                <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8">
                        <div className="w-full rounded-md overflow-hidden shadow-2xl mb-10">
                            <Image 
                                src={car.image} 
                                alt={car.name} 
                                width={2000}
                                height={2000}
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="bg-white rounded-sm p-8 md:p-12 border border-gray-100 shadow-sm">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About this Vehicle</h2>
                            <p className="text-gray-500 text-md leading-relaxed mb-8">
                                {car.description}
                            </p>
                            
                            {/* Feature  */}
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">Premium Audio</span>
                                <span className="bg-green-50 text-green-600 px-4 py-2 rounded-xl text-sm font-bold">Self-Driving Mode</span>
                                <span className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-sm font-bold">Heated Seats</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        
                        
                        <div className="bg-white rounded-sm p-10 pt-7 pb-5 border border-gray-100 shadow-sm">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <MapPin size={18} />
                                <span className="font-light">{car.location}</span>
                            </div>

                            <div className="mb-8">
                                <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                            </div>
                        </div>

                        {/* Detailed Features */}
                        <div className="bg-white rounded-sm p-10 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-widest">Key Features</h3>
                            
                            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                                <FeatureItem icon={<Gauge size={24}/>} label="Mileage" value={car.specs.mileage} />
                                <FeatureItem icon={<Fuel size={24}/>} label="Fuel" value={car.specs.fuel_type} />
                                <FeatureItem icon={<Cog size={24}/>} label="Transmission" value={car.specs.transmission} />
                                <FeatureItem icon={<Users size={24}/>} label="Seats" value={car.specs.seats} />
                                <FeatureItem icon={<Briefcase size={24}/>} label="Bags" value={car.specs.bags || "2 Bags"} />
                                <FeatureItem icon={<CarFront size={24}/>} label="Type" value={car.category} />
                                <FeatureItem icon={<DoorOpen size={24}/>} label="Doors" value={car.specs.doors || "4 Doors"} />
                                <FeatureItem icon={<Droplets size={24}/>} label="Fuel Cons." value={car.specs.consumption || "10.2L"} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

const FeatureItem = ({ icon, label, value }) => (
    <div className="flex flex-col gap-2">
        <div className="text-gray-300">{icon}</div>
        <div>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">{label}</p>
            <p className="text-md font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

export default CarDetails;