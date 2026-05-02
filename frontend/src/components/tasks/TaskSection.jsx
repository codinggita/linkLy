import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import TaskItem from './TaskItem';

const TaskSection = ({
  config,
  tasks,
  count,
  isCollapsed,
  onToggle,
  onNewTask,
  onComplete,
  isCompleted,
}) => {
  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={onToggle} className="flex items-center gap-2.5 group">
          <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </div>
          <div className={`w-2.5 h-2.5 rounded-full ${config.dot}`} />
          <h2 className="text-base font-bold text-gray-900">{config.label}</h2>
          <span className="text-sm text-gray-400 font-medium">
            {count} {isCompleted ? 'completed' : 'open'} task{count !== 1 ? 's' : ''}
          </span>
        </button>
      </div>

      {/* Section Content */}
      {!isCollapsed && (
        <div className="flex flex-col gap-0">
          {/* + Create Task inline button */}
          {!isCompleted && (
            <button
              onClick={onNewTask}
              className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-sm font-medium text-gray-400 bg-gray-50 border border-dashed border-gray-200 rounded-xl hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300 transition-all mb-1"
            >
              <Plus size={14} />
              <span>Create Task</span>
            </button>
          )}

          {/* Task Items */}
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={() => onComplete(task.id)}
              isCompleted={isCompleted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskSection;
