import React from 'react';

const TotalExpenses = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center shadow-sm">
      <div className="w-1/2 h-16 flex items-end relative overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-full w-px border-l border-dashed border-gray-200"></div>
          ))}
        </div>
        {/* Sparkline */}
        <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path d="M0,20 L25,10 L50,30 L75,15 L100,5" fill="none" stroke="black" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="25" cy="10" r="2.5" fill="black" />
          <circle cx="50" cy="30" r="2.5" fill="black" />
          <circle cx="75" cy="15" r="2.5" fill="black" />
          <circle cx="100" cy="5" r="2.5" fill="black" />
        </svg>
      </div>
      <div className="w-1/2 pl-4">
        <p className="text-sm text-gray-500 font-medium">Total Expenses</p>
        <div className="flex items-center gap-2 mt-1">
          <h3 className="text-xl font-bold tracking-tight">$6,951</h3>
          <span className="bg-green-50 text-green-600 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center">
            <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M17 7l-10 10M17 7H7M17 7v10" />
            </svg>
            12%
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-1 font-medium">This Month</p>
      </div>
    </div>
  );
};

export default TotalExpenses;
