import React from 'react';
import { LayoutDashboard, Users, FileText, BookOpen, Calendar, LogOut } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'Students', icon: <Users size={18} /> },
    { name: 'Papers', icon: <FileText size={18} /> },
    { name: 'Courses', icon: <BookOpen size={18} /> },
    { name: 'Schedule', icon: <Calendar size={18} /> },
    { name: 'Logout', icon: <LogOut size={18} /> },
  ];

  return (
      <aside className={`fixed top-16 left-0 w-[260px] bg-[#34495e] text-white transition-transform duration-300 z-40 
           h-[calc(100vh-64px-100px)] overflow-y-auto lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      
      <div className="p-5 border-b border-slate-600">
        <h1 className="text-sm font-bold leading-tight tracking-wider uppercase">
          University<br/>Lecturer
        </h1>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <a 
            key={item.name} 
            href="#" 
            className={`flex items-center gap-3 px-6 py-3 text-[13px] transition-all
              ${item.active ? 'bg-[#455a75] text-white font-semibold' : 'text-slate-300 hover:bg-[#455a75] hover:text-white'}`}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;