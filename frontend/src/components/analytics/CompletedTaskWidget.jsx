import React from 'react';

const CompletedTaskWidget = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Completed Task</h3>
        <div className="text-3xl font-bold text-gray-900">21 Task</div>
      </div>
      <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
        View All
      </button>
    </div>
  );
};

export default CompletedTaskWidget;
