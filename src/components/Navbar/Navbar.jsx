"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {name: "Explore", href:"/#vehicles"},
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <nav className="text-blackbg-white shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href={"/"} className="flex items-center justify-center gap-3 z-10">
            <Image
              src={"/assets/CarLogoo.jpg"}
              width={45}
              height={45}
              alt="car-logo"
            />
            <span className="text-2xl font-bold tracking-tighter">
              Driftly
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary px-3 py-2 rounded-md text-md font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-10">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
            {
                isOpen ? (
                    <X className="h-6 w-6 transition-transform duration-200 rotate-90" />
                ) : (
                    <Menu className="h-6 w-6 transition-transform duration-200" />
                )
            }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
        md:hidden fixed top-10 right-4 w-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md 
        shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-800 `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-[14px] font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
