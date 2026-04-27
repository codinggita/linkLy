import React from 'react';
import { ChevronDown } from 'lucide-react';

const AverageFinishedTask = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">Average Finished Task</p>
          <h3 className="text-xl font-bold mt-1 tracking-tight">± 52 Task</h3>
          <p className="text-xs text-gray-400 mt-1 mb-5 font-medium">This Month</p>
        </div>
        <button className="flex items-center gap-1 text-xs border border-gray-200 rounded px-2 py-1 font-semibold text-gray-700 hover:bg-gray-50">
          Month <ChevronDown size={12} className="text-gray-500" />
        </button>
      </div>

      {/* Heatmap Grid */}
      <div className="mt-1">
        <div className="flex justify-between text-[11px] font-medium text-gray-400 mb-2 px-1">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="grid grid-cols-7 gap-y-2 gap-x-1.5">
          {/* 4 weeks mockup */}
          {[
            1, 1, 3, 4, 1, 1, 4,
            1, 2, 4, 3, 2, 4, 4,
            2, 3, 4, 4, 1, 4, 2,
            0, 2, 4, 2, 3, 3, 1,
          ].map((val, i) => {
            let bg = 'bg-gray-100';
            if (val === 4) bg = 'bg-black';
            else if (val === 3) bg = 'bg-gray-600';
            else if (val === 2) bg = 'bg-gray-400';
            else if (val === 1) bg = 'bg-gray-200';
            return <div key={i} className={`w-full aspect-square ${bg} rounded-[2px]`}></div>;
          })}
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="text-[10px] text-gray-400 font-medium leading-tight">
            Learn about how we
            <br />
            count workhours.
          </p>
          <div className="flex items-center gap-1 text-[10px] font-medium text-gray-500">
            <span className="mr-1">Less</span>
            <div className="w-2.5 h-2.5 bg-gray-100 rounded-[2px]"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-[2px]"></div>
            <div className="w-2.5 h-2.5 bg-gray-600 rounded-[2px]"></div>
            <div className="w-2.5 h-2.5 bg-black rounded-[2px]"></div>
            <span className="ml-1">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageFinishedTask;
