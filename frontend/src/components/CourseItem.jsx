import React from 'react';

const CourseItem = ({ title, schedule, code }) => {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-[#fafafa] mb-2">
      <div>
        <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
        {schedule && <p className="text-xs text-gray-500">{schedule}</p>}
      </div>
      <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-[10px] font-bold">
        {code}
      </span>
    </div>
  );
};

export default CourseItem;