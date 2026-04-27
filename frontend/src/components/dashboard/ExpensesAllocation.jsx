import React from 'react';
import { ChevronDown } from 'lucide-react';

const ExpensesAllocation = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">Expenses Allocation</p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-xl font-bold tracking-tight">$35,171k</h3>
            <span className="bg-green-50 text-green-600 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center">
              <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M17 7l-10 10M17 7H7M17 7v10" />
              </svg>
              12%
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1 text-xs border border-gray-200 rounded px-2 py-1 font-semibold text-gray-700 hover:bg-gray-50">
          Month <ChevronDown size={12} className="text-gray-500" />
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {[
          { label: 'Production', value: 30 },
          { label: 'Marketing', value: 60 },
          { label: 'Operational', value: 80 },
          { label: 'Design', value: 95 },
        ].map((item) => (
          <div key={item.label} className="flex items-center text-[11px] font-medium">
            <span className="w-[72px] text-gray-600">{item.label}</span>
            <div className="flex-1 h-[10px] bg-gray-200 rounded-sm flex overflow-hidden">
              <div className="h-full bg-black rounded-sm" style={{ width: `${item.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between ml-[72px] mt-2 text-[10px] font-medium text-gray-400">
        <span>0</span>
        <span>10k</span>
        <span>20k</span>
        <span>30k</span>
        <span>40k</span>
      </div>
    </div>
  );
};

export default ExpensesAllocation;
