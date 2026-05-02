import { useState, useRef } from 'react';
import {
  X,
  Users,
  Tag,
  Calendar,
  ChevronDown,
  ListChecks,
  ImageIcon,
} from 'lucide-react';

const MAX_DESC = 50;

const AddTaskModal = ({ isOpen, onClose, onCreate }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [checklist, setChecklist] = useState([]);
  const [newCheckItem, setNewCheckItem] = useState('');
  const [showChecklist, setShowChecklist] = useState(false);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  if (!isOpen) return null;

  const reset = () => {
    setTaskName('');
    setDescription('');
    setChecklist([]);
    setNewCheckItem('');
    setShowChecklist(false);
    setFileName('');
  };

  const handleCreate = () => {
    if (!taskName.trim()) return;
    onCreate({
      title: taskName.trim(),
      description: description.trim(),
      checklist,
    });
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const addCheckItem = () => {
    if (!newCheckItem.trim()) return;
    setChecklist((prev) => [...prev, { text: newCheckItem.trim(), done: false }]);
    setNewCheckItem('');
  };

  const toggleCheckItem = (index) => {
    setChecklist((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeCheckItem = (index) => {
    setChecklist((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0] || e.target?.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-start justify-end bg-black/20 backdrop-blur-[2px]"
      onClick={handleClose}
    >
      {/* Modal Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-white h-full shadow-2xl border-l border-gray-200 flex flex-col animate-slide-in"
        style={{ animation: 'slideIn 0.25s ease-out' }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter Task Name"
            autoFocus
            className="text-lg font-bold text-gray-900 outline-none placeholder-gray-400 bg-transparent w-full"
          />
          <button
            onClick={handleClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 ml-2"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-6">
          {/* ── Quick Actions Row ── */}
          <div className="flex items-start gap-8">
            {/* Add Members */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs font-semibold text-gray-500">Add Members</span>
              <button className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
                <Users size={16} />
              </button>
            </div>

            {/* Add Labels */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs font-semibold text-gray-500">Add Labels</span>
              <button className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
                <Tag size={16} />
              </button>
            </div>

            {/* Due Date */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs font-semibold text-gray-500">Due Date</span>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
                <Calendar size={14} />
                <span>Select Date</span>
                <ChevronDown size={12} />
              </button>
            </div>
          </div>

          {/* ── Description ── */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Description</span>
            <div className="relative">
              <textarea
                value={description}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_DESC) setDescription(e.target.value);
                }}
                placeholder="Enter your description here"
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none resize-none focus:border-gray-400 transition-colors placeholder-gray-400"
              />
              <span className="absolute bottom-2.5 right-3 text-[11px] text-gray-400 font-medium">
                {description.length}/{MAX_DESC}
              </span>
            </div>
          </div>

          {/* ── Task Checklist ── */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Task Checklist</span>
            <button
              onClick={() => setShowChecklist(!showChecklist)}
              className="w-9 h-9 rounded-lg border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <ListChecks size={18} />
            </button>

            {showChecklist && (
              <div className="flex flex-col gap-2 mt-1">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 group">
                    <button
                      onClick={() => toggleCheckItem(i)}
                      className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                        item.done
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {item.done && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                    <span className={`text-sm flex-1 ${item.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {item.text}
                    </span>
                    <button
                      onClick={() => removeCheckItem(i)}
                      className="p-0.5 text-gray-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newCheckItem}
                    onChange={(e) => setNewCheckItem(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCheckItem()}
                    placeholder="Add item..."
                    className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-400 border-b border-gray-200 py-1 focus:border-gray-400 transition-colors bg-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── Attachment ── */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Attachment</span>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <ImageIcon size={28} className="text-gray-400" />
              {fileName ? (
                <span className="text-sm text-gray-600 font-medium">{fileName}</span>
              ) : (
                <p className="text-sm text-gray-400">
                  Drag files here or <span className="font-semibold text-gray-600">Browse</span>
                </p>
              )}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileDrop}
              />
            </div>
          </div>
        </div>

        {/* Footer - Create Button */}
        <div className="px-6 py-4 border-t border-gray-100">
          <button
            onClick={handleCreate}
            disabled={!taskName.trim()}
            className="w-full py-3 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Create Task
          </button>
        </div>
      </div>

      {/* Slide-in animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AddTaskModal;
