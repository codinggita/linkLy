import React from 'react';
import { ChevronRight } from 'lucide-react';

const TaskProgress = ({ progress = 0, completed = 0, total = 0 }) => {
  const strokeDasharray = `${progress}, 100`;

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between shadow-sm">
      <div className="relative w-[84px] h-[84px] flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-100"
            strokeWidth="5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-black"
            strokeDasharray={strokeDasharray}
            strokeWidth="5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{progress}%</span>
        </div>
      </div>
      <div className="flex-1 ml-5">
        <div className="flex justify-between items-start">
          <p className="text-sm text-gray-500 font-medium">Task Progress</p>
          <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500">
            <ChevronRight size={16} />
          </button>
        </div>
        <h3 className="text-2xl font-bold mt-1 tracking-tight">{completed}/{total}</h3>
        <p className="text-xs text-gray-400 mt-1 font-medium">This Month</p>
      </div>
    </div>
  );
};

export default TaskProgress;
