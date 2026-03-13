import React from 'react';
import { Download } from 'lucide-react';

const ResearchPaper = ({ title, size, status }) => {
  const statusColors = {
    'APPROVED': 'bg-green-100 text-green-700',
    'IN REVIEW': 'bg-yellow-100 text-yellow-700',
    'REJECTED': 'bg-red-100 text-red-700'
  };

  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-[#fafafa] mb-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[#e74c3c] text-white rounded flex items-center justify-center text-[10px] font-bold">PDF</div>
        <div>
          <h4 className="text-sm font-semibold text-slate-800 leading-tight">{title}</h4>
          <span className="text-xs text-gray-500">{size}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${statusColors[status]}`}>
          {status}
        </span>
        <button className="text-[#456882] hover:text-cyan-600">
          <Download size={24} />
        </button>
      </div>
    </div>
  );
};

export default ResearchPaper;