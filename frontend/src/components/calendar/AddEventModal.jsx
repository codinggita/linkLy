import { useState, useRef } from 'react';
import { X, Calendar, Clock, Plus, MapPin, ChevronDown, ImageIcon } from 'lucide-react';

const MAX_DESC = 50;

const AddEventModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('bg-blue-500');
  const [description, setDescription] = useState('');
  const [notifyMe, setNotifyMe] = useState(true);
  const [notifyMin, setNotifyMin] = useState('30');
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  if (!isOpen) return null;

  const reset = () => { setTitle(''); setDescription(''); setFileName(''); };

  const handleSave = () => {
    if (!title.trim()) return;
    onCreate?.({ title: title.trim(), description, color });
    reset();
    onClose();
  };

  const handleFile = (e) => {
    const f = e.dataTransfer?.files?.[0] || e.target?.files?.[0];
    if (f) setFileName(f.name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px]" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-lg font-bold text-gray-900">Create New Event</h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-5">
          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Title</label>
            <div className="flex items-center gap-2">
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter event name here" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 transition-colors placeholder-gray-400" />
              <div className="relative">
                <button className="flex items-center gap-1 px-2 py-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className={`w-4 h-4 rounded-full ${color}`} />
                  <ChevronDown size={12} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Select Time */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Select Time</label>
            <div className="flex items-center gap-2 flex-wrap">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-400 hover:border-gray-300 transition-colors">
                <Calendar size={14} /> Select Event Day <ChevronDown size={12} />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-400 hover:border-gray-300 transition-colors">
                <Clock size={14} /> Start <ChevronDown size={12} />
              </button>
              <span className="text-sm text-gray-400">to</span>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-400 hover:border-gray-300 transition-colors">
                <Clock size={14} /> End <ChevronDown size={12} />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer">
                <input type="radio" name="allday" className="w-3.5 h-3.5" /> All Day
              </label>
              <button className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 border border-gray-200 rounded-md hover:border-gray-300 transition-colors">
                Repeat <ChevronDown size={12} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Guest */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Guest</label>
            <button className="w-9 h-9 border-2 border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
              <Plus size={16} />
            </button>
          </div>

          {/* Notify Events */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Notify Events</label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" checked={notifyMe} onChange={(e) => setNotifyMe(e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500" />
                Notify Me
              </label>
              <input type="text" value={notifyMin} onChange={(e) => setNotifyMin(e.target.value)} className="w-14 px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-center outline-none focus:border-gray-400 transition-colors" />
              <button className="flex items-center gap-1 px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500 hover:border-gray-300 transition-colors">
                Minutes <ChevronDown size={12} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Cities */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Cities</label>
            <button className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-400 hover:border-gray-300 transition-colors w-full">
              <MapPin size={14} /> <span className="flex-1 text-left">Select Cities</span> <ChevronDown size={14} />
            </button>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Description</label>
            <div className="relative">
              <textarea value={description} onChange={(e) => { if (e.target.value.length <= MAX_DESC) setDescription(e.target.value); }} placeholder="Enter your description here" rows={3} className="w-full p-3 border border-gray-200 rounded-lg text-sm outline-none resize-none focus:border-gray-400 transition-colors placeholder-gray-400" />
              <span className="absolute bottom-2.5 right-3 text-[11px] text-gray-400">{description.length}/{MAX_DESC}</span>
            </div>
          </div>

          {/* Attachment */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Attachment</label>
            <div onDragOver={(e) => e.preventDefault()} onDrop={handleFile} onClick={() => fileRef.current?.click()} className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all">
              <ImageIcon size={28} className="text-gray-400" />
              {fileName ? <span className="text-sm text-gray-600 font-medium">{fileName}</span> : <p className="text-sm text-gray-400">Drag files here or <span className="font-semibold text-gray-600">Browse</span></p>}
              <input ref={fileRef} type="file" className="hidden" onChange={handleFile} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
          <button onClick={handleSave} disabled={!title.trim()} className="flex-1 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
