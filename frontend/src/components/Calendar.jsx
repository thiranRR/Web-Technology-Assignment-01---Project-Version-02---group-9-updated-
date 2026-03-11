import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = () => {
    let day = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust so Monday is first
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const startOffset = firstDayOfMonth();
    const days = [];

    // Empty cells for previous month
    for (let i = 0; i < startOffset; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 text-[#71a0c0]"></div>);
    }

    // Actual days
    for (let d = 1; d <= totalDays; d++) {
      const isToday = d === today.getDate() && 
                      currentDate.getMonth() === today.getMonth() && 
                      currentDate.getFullYear() === today.getFullYear();
      
      days.push(
        <div 
          key={d} 
          className={`h-8 flex items-center justify-center text-sm cursor-pointer rounded transition-colors
            ${isToday ? 'bg-[#7694b2] text-[#4e4c9b] font-bold' : 'text-[#2c3e50] hover:bg-[#7ba6cc] hover:text-white'}`}
        >
          {d}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-[#4d689e] p-5 rounded-lg shadow-md text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Upcoming</h3>
        <span className="text-xs opacity-80">›</span>
      </div>

      <div className="flex justify-between items-center mb-4 text-sm font-semibold">
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="hover:bg-blue-400/30 p-1 rounded"><ChevronLeft size={16}/></button>
          <button onClick={nextMonth} className="hover:bg-blue-400/30 p-1 rounded"><ChevronRight size={16}/></button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px text-center mb-2">
        {['MO', 'TU', 'WED', 'TH', 'FR', 'SA', 'SU'].map(day => (
          <div key={day} className="bg-slate-50/10 py-1 text-[10px] font-bold text-slate-100">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px text-center bg-slate-200/20 rounded overflow-hidden">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;