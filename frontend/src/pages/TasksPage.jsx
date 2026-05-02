import React, { useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ViewTabs from '../components/tasks/ViewTabs';
import TaskSection from '../components/tasks/TaskSection';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { Plus, SlidersHorizontal, Filter } from 'lucide-react';

/* ───────────────────────────── mock data ───────────────────────────── */
const initialTasks = {
  planned: [
    { id: 1, title: 'Redesign landing page hero section', priority: 'high', assignee: 'Brian F.', dueDate: 'May 5, 2026', tags: [{ label: 'Design', color: 'bg-violet-100 text-violet-700' }] },
    { id: 2, title: 'Set up analytics tracking for dashboard', priority: 'medium', assignee: 'Sarah K.', dueDate: 'May 8, 2026', tags: [{ label: 'Dev', color: 'bg-blue-100 text-blue-700' }] },
    { id: 3, title: 'Write onboarding email sequence', priority: 'low', assignee: 'Mike R.', dueDate: 'May 12, 2026', tags: [{ label: 'Marketing', color: 'bg-amber-100 text-amber-700' }] },
  ],
  upcoming: [
    { id: 4, title: 'Create user personas for Q3 campaign', priority: 'medium', assignee: 'Anna L.', dueDate: 'May 15, 2026', tags: [{ label: 'Research', color: 'bg-emerald-100 text-emerald-700' }] },
    { id: 5, title: 'Audit current API endpoints', priority: 'high', assignee: 'Brian F.', dueDate: 'May 18, 2026', tags: [{ label: 'Dev', color: 'bg-blue-100 text-blue-700' }] },
    { id: 6, title: 'Prepare monthly report slides', priority: 'low', assignee: 'Sarah K.', dueDate: 'May 20, 2026', tags: [{ label: 'Product', color: 'bg-pink-100 text-pink-700' }] },
    { id: 7, title: 'Review competitor pricing pages', priority: 'medium', assignee: 'Mike R.', dueDate: 'May 22, 2026', tags: [{ label: 'Research', color: 'bg-emerald-100 text-emerald-700' }] },
    { id: 8, title: 'Design notification system mockups', priority: 'high', assignee: 'Anna L.', dueDate: 'May 25, 2026', tags: [{ label: 'Design', color: 'bg-violet-100 text-violet-700' }] },
  ],
  completed: [
    { id: 9, title: 'Fix responsive layout issues on mobile', priority: 'high', assignee: 'Brian F.', dueDate: 'Apr 28, 2026', tags: [{ label: 'Dev', color: 'bg-blue-100 text-blue-700' }], completedAt: 'Apr 28, 2026' },
    { id: 10, title: 'Update brand guidelines document', priority: 'medium', assignee: 'Sarah K.', dueDate: 'Apr 25, 2026', tags: [{ label: 'Design', color: 'bg-violet-100 text-violet-700' }], completedAt: 'Apr 26, 2026' },
  ],
};

const sectionConfig = {
  planned: { dot: 'bg-amber-400', label: 'Planned' },
  upcoming: { dot: 'bg-blue-500', label: 'Upcoming' },
  completed: { dot: 'bg-emerald-500', label: 'Completed' },
};

/* ───────────────────────────── page ───────────────────────────── */
const TasksPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeView, setActiveView] = useState('list');
  const [collapsedSections, setCollapsedSections] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const nextId = useRef(11);

  const toggleSection = (key) =>
    setCollapsedSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const completeTask = (section, taskId) => {
    if (section === 'completed') return;
    setTasks((prev) => {
      const task = prev[section].find((t) => t.id === taskId);
      if (!task) return prev;
      return {
        ...prev,
        [section]: prev[section].filter((t) => t.id !== taskId),
        completed: [{ ...task, completedAt: 'Just now' }, ...prev.completed],
      };
    });
  };

  const handleCreateTask = ({ title }) => {
    const newTask = {
      id: nextId.current++,
      title,
      priority: 'medium',
      assignee: 'Brian F.',
      dueDate: 'May 10, 2026',
      tags: [],
    };
    setTasks((prev) => ({ ...prev, planned: [newTask, ...prev.planned] }));
  };

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Tasks" />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Page Header */}
          <div className="px-8 pt-6 pb-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Task</h1>
              <ViewTabs activeView={activeView} onChange={setActiveView} />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <SlidersHorizontal size={14} />
                <span>Sort By</span>
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Filter size={14} />
                <span>Filter</span>
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plus size={14} />
                <span>Add Task</span>
              </button>
            </div>
          </div>

          {/* Task List */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-8 py-6 flex flex-col gap-8">
              {Object.entries(sectionConfig).map(([key, config]) => (
                <TaskSection
                  key={key}
                  config={config}
                  tasks={tasks[key]}
                  count={tasks[key].length}
                  isCollapsed={collapsedSections[key]}
                  onToggle={() => toggleSection(key)}
                  onNewTask={() => setShowAddModal(true)}
                  onComplete={(taskId) => completeTask(key, taskId)}
                  isCompleted={key === 'completed'}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onCreate={handleCreateTask}
      />
    </div>
  );
};

export default TasksPage;
