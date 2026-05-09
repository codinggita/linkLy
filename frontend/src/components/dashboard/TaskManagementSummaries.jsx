import React from 'react';
import { ChevronDown } from 'lucide-react';

const TaskManagementSummaries = ({ totalTasks = 236 }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">Task Management Summaries</p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-2xl font-bold tracking-tight">{totalTasks} Task{totalTasks !== 1 ? 's' : ''}</h3>
            <span className="bg-red-50 text-red-600 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center">
              <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M7 17L17 7M7 17h10M7 17V7" />
              </svg>
              4%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1 font-medium">This Week</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 text-xs border border-gray-300 rounded-md px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-50">
            Sun, 1 Dec - Sat, 7 Dec <ChevronDown size={14} className="text-gray-500" />
          </button>
          <button className="flex items-center gap-2 text-xs border border-gray-300 rounded-md px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-50">
            Week <ChevronDown size={14} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <span className="text-xs font-semibold text-gray-600">Marketing Teams</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <span className="text-xs font-semibold text-gray-600">Design Teams</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <span className="text-xs font-semibold text-gray-600">Production Teams</span>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="relative h-48 mt-4 ml-6">
        {/* Y Axis Grid */}
        <div className="absolute inset-0 flex flex-col justify-between text-[11px] font-medium text-gray-400 pb-6">
          <div className="flex items-center w-full relative">
            <span className="w-6 absolute -left-8">50</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
          <div className="flex items-center w-full relative">
            <span className="w-6 absolute -left-8">35</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
          <div className="flex items-center w-full relative">
            <span className="w-6 absolute -left-8">15</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
          <div className="flex items-center w-full relative">
            <span className="w-6 absolute -left-8">0</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
        </div>

        {/* Bars */}
        <div className="absolute inset-0 left-0 flex justify-between items-end pb-[25px] px-2 md:px-6">
          {[
            { marketing: 15, design: 30, production: 15, label: 'Sun, 1 Dec' },
            { marketing: 25, design: 30, production: 15, label: 'Mon, 2 Dec' },
            { marketing: 10, design: 35, production: 20, label: 'Tue, 3 Dec' },
            { marketing: 20, design: 35, production: 20, label: 'Wed, 4 Dec' },
            { marketing: 40, design: 25, production: 10, label: 'Thu, 5 Dec' },
            { marketing: 20, design: 35, production: 15, label: 'Fri, 6 Dec' },
            { marketing: 35, design: 20, production: 15, label: 'Sat, 7 Dec' },
          ].map((day, i) => (
            <div key={i} className="flex flex-col items-center w-8 group relative h-full">
              <div className="w-full flex flex-col justify-end h-full">
                <div className="w-full bg-gray-200 rounded-t-sm mb-[2px] hover:opacity-90 transition-opacity" style={{ height: `${day.production}%` }}></div>
                <div className="w-full bg-gray-500 mb-[2px] hover:opacity-90 transition-opacity" style={{ height: `${day.design}%` }}></div>
                <div className="w-full bg-black rounded-b-sm hover:opacity-90 transition-opacity" style={{ height: `${day.marketing}%` }}></div>
              </div>
              <span className="text-[11px] font-medium text-gray-500 absolute -bottom-5 whitespace-nowrap">{day.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManagementSummaries;
