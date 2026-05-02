import React from 'react';
import { ChevronDown, TrendingUp } from 'lucide-react';

const categories = [
  { name: 'Agency', count: 57, percentage: 60 },
  { name: 'Development', count: 38, percentage: 40 },
  { name: 'Marketing', count: 25, percentage: 25 },
  { name: 'Marketing', count: 25, percentage: 25 }, // Duplicate in design
  { name: 'Communication', count: 38, percentage: 40 },
  { name: 'Web Development', count: 13, percentage: 15 },
  { name: 'Web Development', count: 13, percentage: 15 },
  { name: 'Web Development', count: 13, percentage: 15 },
  { name: 'Travel Agency', count: 11, percentage: 12 },
];

const ActiveCompaniesWidget = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Active Companies</h3>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">341 Companies</span>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold">
              <TrendingUp size={12} />
              12%
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-1">This Years</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Year <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-6">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-900">{cat.name}</span>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-900 rounded-full" 
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
              <span className="text-xs font-bold text-gray-900 w-4">{cat.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveCompaniesWidget;
