import React from 'react';

const days = [
  { name: 'Sun', target: 80, achieved: 60 },
  { name: 'Mon', target: 80, achieved: 40 },
  { name: 'Tue', target: 80, achieved: 55 },
  { name: 'Wed', target: 80, achieved: 75 },
  { name: 'Thu', target: 80, achieved: 60 },
  { name: 'Fri', target: 80, achieved: 45 },
  { name: 'Sat', target: 80, achieved: 75 },
];

const ProjectTargetWidget = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Completed Project Target This Week</h3>
      <div className="flex items-end justify-between flex-1 mt-4">
        {days.map((day) => (
          <div key={day.name} className="flex flex-col items-center gap-3">
            <div className="w-4 h-32 bg-gray-200 rounded-full relative flex flex-col justify-end overflow-hidden">
              <div 
                className="w-full bg-gray-900 rounded-full" 
                style={{ height: `${(day.achieved / day.target) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-gray-600">{day.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTargetWidget;
