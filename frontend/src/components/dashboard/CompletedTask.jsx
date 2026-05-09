import React from 'react';

const CompletedTask = ({ completed = 0 }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium">Completed Task</p>
        <h3 className="text-2xl font-bold mt-1 tracking-tight">{completed} Task{completed !== 1 ? 's' : ''}</h3>
      </div>
      <button className="border border-gray-900 text-gray-900 rounded-md px-4 py-1.5 text-xs font-semibold hover:bg-gray-50 transition-colors">
        View All
      </button>
    </div>
  );
};

export default CompletedTask;
