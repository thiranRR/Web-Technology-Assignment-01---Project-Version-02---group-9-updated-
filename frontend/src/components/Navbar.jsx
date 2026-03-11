import React from 'react';
import { UserCircle, Search, Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-gradient-to-r from-[#D2C1B6] to-[#456882] z-[1001] flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger */}
        <button onClick={toggleSidebar} className="lg:hidden text-white p-2">
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <a href="#" className="hover:scale-105 transition-transform">Home</a>
          <a href="#" className="hover:scale-105 transition-transform">My Projects</a>
          <a href="#" className="hover:scale-105 transition-transform">Contact</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-1 text-white text-sm font-medium">
          <UserCircle size={20} /> My Profile
        </a>
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1">
          <input 
            type="text" 
            placeholder="Search publications..." 
            className="text-xs outline-none w-32 sm:w-48 bg-transparent text-gray-700"
          />
          <button className="text-slate-600 hover:text-cyan-500 transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;