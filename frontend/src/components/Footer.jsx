import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="bg-gradient-to-r from-[#D2C1B6] to-[#456882] text-white py-6 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-serif mb-1 drop-shadow-sm">Scholar Connect</h2>
          <p className="text-xs opacity-90">Your gateway to academic excellence.</p>
        </div>

        {/* Center Section */}
        <div>
          <button 
            className="px-6 py-2 bg-white/20 border border-white rounded-full text-sm hover:bg-white/30 transition-all hover:-translate-y-1"
            onClick={() => window.location.href = 'about.html'}
          >
            About Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Mail size={14} />
            scholarconnect@example.com
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Phone size={14} />
            +1 (234) 567-8901
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;