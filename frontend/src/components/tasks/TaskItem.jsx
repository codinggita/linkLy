import { useState } from 'react';
import {
  GripVertical,
  Check,
  Flag,
  Calendar,
  MoreHorizontal,
} from 'lucide-react';

const priorityConfig = {
  high: { color: 'text-red-500', bg: 'bg-red-50', label: 'High' },
  medium: { color: 'text-amber-500', bg: 'bg-amber-50', label: 'Medium' },
  low: { color: 'text-green-500', bg: 'bg-green-50', label: 'Low' },
};

const TaskItem = ({ task, onComplete, isCompleted }) => {
  const [isHovered, setIsHovered] = useState(false);
  const priority = priorityConfig[task.priority];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-transparent transition-all cursor-pointer ${
        isHovered ? 'bg-gray-50 border-gray-100' : 'bg-white'
      }`}
    >
      {/* Drag Handle */}
      <div className={`text-gray-300 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <GripVertical size={14} />
      </div>

      {/* Checkbox */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
          isCompleted
            ? 'bg-emerald-500 border-emerald-500'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
        }`}
      >
        {isCompleted && <Check size={12} className="text-white" strokeWidth={3} />}
      </button>

      {/* Title */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium transition-colors ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
          {task.title}
        </p>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-1.5">
        {task.tags.map((tag, i) => (
          <span
            key={i}
            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${tag.color} ${isCompleted ? 'opacity-50' : ''}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Priority */}
      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${priority.bg} ${priority.color} ${isCompleted ? 'opacity-50' : ''}`}>
        <Flag size={11} />
        <span>{priority.label}</span>
      </div>

      {/* Assignee */}
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(task.assignee)}&background=random&size=24`}
        alt={task.assignee}
        className={`w-6 h-6 rounded-full border border-gray-200 ${isCompleted ? 'opacity-50' : ''}`}
      />

      {/* Due Date */}
      <div className={`flex items-center gap-1 text-xs font-medium ${isCompleted ? 'text-gray-300' : 'text-gray-400'}`}>
        <Calendar size={12} />
        <span>{isCompleted ? task.completedAt : task.dueDate}</span>
      </div>

      {/* More Options */}
      <button className={`p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <MoreHorizontal size={16} />
      </button>
    </div>
  );
};

export default TaskItem;
