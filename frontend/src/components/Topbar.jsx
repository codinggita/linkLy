import React, { useContext } from 'react';
import { Search, HelpCircle, ChevronDown } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Topbar = () => {
  const { user } = useContext(AuthContext);

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const displayName = user?.name || 'User';

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex-1 max-w-md">
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-10 pr-12 py-1.5 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow"
          />
          <div className="absolute right-3 flex items-center gap-1 text-xs text-gray-400 font-medium">
            <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">⌘</span>
            <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">F</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 font-medium">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </button>
        
        <button className="flex items-center gap-2 hover:opacity-80">
          <div className="w-8 h-8 rounded-full border border-gray-200 bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
            {getInitials(displayName)}
          </div>
          <span className="text-sm font-medium text-gray-700">{displayName}</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
