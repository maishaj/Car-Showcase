"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
    {
        id: 1,
        image: "/assets/HeroImage1.jpg", 
        title: "Precision Engineering",
        description: "Experience the pinnacle of automotive performance and Italian craftsmanship.",
        link: "#vehicles",
        btnText: "Browse Cars",
        btnClass: "bg-red-600 hover:bg-red-700"
    },
    {
        id: 2,
        image: "/assets/HeroImage2.jpg", 
        title: "Conquer Any Terrain",
        description: "Built for the bold. Rugged capability meets uncompromising luxury for your next adventure.",
        link: "#vehicles",
        btnText: "View Off-Roaders",
        btnClass: "bg-stone-800 hover:bg-black" 
    },
    {
        id: 3,
        image: "/assets/HeroImage3.jpg", 
        title: "The Future is Electric",
        description: "Sustainable luxury without compromise. Discover the next generation of driving.",
        link: "#vehicles",
        btnText: "Go Electric",
        btnClass: "bg-blue-600 hover:bg-blue-700"
    }
];

const Hero = () => {
    return (
        <section className="relative w-full h-[65vh] md:h-[80vh]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={800}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={slide.id === 1}
                                className="object-cover brightness-50"
                            />
                        </div>

                       
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                            <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-in fade-in zoom-in duration-700">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-2xl mb-10 max-w-2xl drop-shadow-lg font-light">
                                {slide.description}
                            </p>
                            <Link 
                                href={slide.link}
                                className={`${slide.btnClass} transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-full text-lg font-semibold shadow-2xl`}
                            >
                                {slide.btnText}
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </section>
    );
};

export default Hero;