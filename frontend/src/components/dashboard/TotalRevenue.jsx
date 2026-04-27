import React from 'react';
import { ChevronDown } from 'lucide-react';

const TotalRevenue = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-xl font-bold tracking-tight">$220,123k</h3>
            <span className="bg-green-50 text-green-600 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center">
              <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M17 7l-10 10M17 7H7M17 7v10" />
              </svg>
              12%
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1 text-xs border border-gray-200 rounded px-2 py-1 font-semibold text-gray-700 hover:bg-gray-50">
          Year <ChevronDown size={12} className="text-gray-500" />
        </button>
      </div>

      <div className="relative h-24 mt-6 ml-2">
        <div className="absolute inset-0 flex justify-between">
          {['2019', '2020', '2021', '2022', '2023'].map((y) => (
            <div key={y} className="flex flex-col items-center h-full w-px relative">
              <div className="h-full border-l border-dashed border-gray-200"></div>
              <span className="absolute -bottom-5 text-[10px] font-medium text-gray-500">{y}</span>
            </div>
          ))}
        </div>
        {/* Line Chart Area */}
        <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradientRev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
          </defs>
          <path d="M0,25 L25,10 L50,20 L75,5 L100,15 L100,40 L0,40 Z" fill="url(#gradientRev)" />
          <path d="M0,25 L25,10 L50,20 L75,5 L100,15" fill="none" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="0" cy="25" r="2" fill="black" />
          <circle cx="25" cy="10" r="2" fill="black" />
          <circle cx="50" cy="20" r="2" fill="black" />
          <circle cx="75" cy="5" r="2" fill="black" />
          <circle cx="100" cy="15" r="2" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default TotalRevenue;
