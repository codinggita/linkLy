import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ViewTabs from '../components/tasks/ViewTabs';
import TaskSection from '../components/tasks/TaskSection';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { Plus, SlidersHorizontal, Filter } from 'lucide-react';
import api from '../services/api';

const sectionConfig = {
  planned: { dot: 'bg-amber-400', label: 'Planned' },
  upcoming: { dot: 'bg-blue-500', label: 'Upcoming' },
  completed: { dot: 'bg-emerald-500', label: 'Completed' },
};

const TasksPage = () => {
  const [tasks, setTasks] = useState({ planned: [], upcoming: [], completed: [] });
  const [activeView, setActiveView] = useState('list');
  const [collapsedSections, setCollapsedSections] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleSection = (key) =>
    setCollapsedSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const completeTask = async (section, taskId) => {
    if (section === 'completed') return;
    try {
      await api.put(`/api/tasks/${taskId}/complete`);
      fetchTasks(); // Refresh list to reflect changes accurately
    } catch (error) {
      console.error('Failed to complete task', error);
    }
  };

  const handleCreateTask = async ({ title }) => {
    try {
      await api.post('/api/tasks', {
        title,
        priority: 'medium',
        status: 'planned'
      });
      fetchTasks(); // Refresh list
    } catch (error) {
      console.error('Failed to create task', error);
    }
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
            {loading ? (
              <div className="flex justify-center items-center h-full pt-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto px-8 py-6 flex flex-col gap-8">
                {Object.entries(sectionConfig).map(([key, config]) => (
                  <TaskSection
                    key={key}
                    config={config}
                    tasks={tasks[key] || []}
                    count={(tasks[key] || []).length}
                    isCollapsed={collapsedSections[key]}
                    onToggle={() => toggleSection(key)}
                    onNewTask={() => setShowAddModal(true)}
                    onComplete={(taskId) => completeTask(key, taskId)}
                    isCompleted={key === 'completed'}
                  />
                ))}
              </div>
            )}
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
