import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaCarSide } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <span className="text-2xl font-black text-primary tracking-tight">
                DRIFTLY.
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
             Driftly. Providing reliable automotive tech and 
              curated collections since 1992.
            </p>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-black font-bold uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#3BB77E] transition-colors">Inventory</a></li>
                <li><a href="#services" className="hover:text-[#3BB77E] transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-[#3BB77E] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-black font-bold uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#3BB77E] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#3BB77E] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Social & Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-black font-bold uppercase tracking-widest text-xs">Stay Connected</h4>
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-[#3BB77E] transition-all transform hover:-translate-y-1">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="hover:text-[#3BB77E] transition-all transform hover:-translate-y-1">
                <FaYoutube size={22} />
              </a>
              <a href="#" className="hover:text-[#3BB77E] transition-all transform hover:-translate-y-1">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="hover:text-[#3BB77E] transition-all transform hover:-translate-y-1">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;