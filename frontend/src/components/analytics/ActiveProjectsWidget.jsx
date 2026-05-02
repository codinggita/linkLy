import React from 'react';
import { ChevronDown, TrendingUp } from 'lucide-react';

const ActiveProjectsWidget = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Active Projects</h3>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">68 Projects</span>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold">
              <TrendingUp size={12} />
              12%
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-1">This Month</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            January, 2023 - December, 2023 <ChevronDown size={14} className="text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Month <ChevronDown size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="relative h-64 mt-4">
        {/* Y-axis labels and grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span className="w-6 text-right">100</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-6 text-right">50</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-6 text-right">25</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-6 text-right">0</span>
            <div className="flex-1 border-t border-dashed border-gray-200"></div>
          </div>
        </div>

        {/* Line Chart SVG */}
        <div className="absolute inset-0 left-10 mt-2 mb-6">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
             <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 L 10 30 L 20 35 L 30 20 L 40 45 L 50 55 L 60 70 L 70 35 L 80 25 L 90 15 L 100 60 L 110 40"
              fill="url(#chartGradient)"
            />
            <path
              d="M 0 50 L 10 30 L 20 35 L 30 20 L 40 45 L 50 55 L 60 70 L 70 35 L 80 25 L 90 15 L 100 60 L 110 40"
              fill="none"
              stroke="#111827"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-10 right-0 flex justify-between text-xs text-gray-600 font-medium translate-y-6">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjectsWidget;
