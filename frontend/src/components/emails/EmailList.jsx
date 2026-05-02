import { useState } from 'react';
import { ChevronDown, RefreshCw, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const EmailList = ({ emails, selectedId, onSelect }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkedIds, setCheckedIds] = useState(new Set());

  const toggleCheck = (id, e) => {
    e.stopPropagation();
    setCheckedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setCheckedIds(new Set());
    } else {
      setCheckedIds(new Set(emails.map((e) => e.id)));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500 cursor-pointer"
            />
            <ChevronDown size={14} className="text-gray-400" />
          </div>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <RefreshCw size={15} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <MoreVertical size={15} />
          </button>
          <div className="ml-2 flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-900">Inbox Messages</h3>
            <span className="text-sm text-gray-400">{emails.length} messages</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>1-{Math.min(emails.length, 50)} from {emails.length}</span>
          <button className="p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Email Rows */}
      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => onSelect(email)}
            className={`flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 ${
              selectedId === email.id ? 'bg-gray-50' : ''
            } ${!email.read ? 'bg-white' : ''}`}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={checkedIds.has(email.id)}
              onChange={(e) => toggleCheck(email.id, e)}
              className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500 cursor-pointer flex-shrink-0"
            />

            {/* Avatar */}
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(email.sender)}&background=random&size=36`}
              alt={email.sender}
              className="w-9 h-9 rounded-full flex-shrink-0"
            />

            {/* Content */}
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <span className={`text-sm flex-shrink-0 ${!email.read ? 'font-bold text-gray-900' : 'font-medium text-gray-600'}`}>
                {email.sender.length > 14 ? email.sender.slice(0, 14) + '...' : email.sender}
              </span>
              <span className={`text-sm flex-shrink-0 ${!email.read ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>
                {email.subject.length > 22 ? email.subject.slice(0, 22) + '...' : email.subject}
              </span>
              <span className="text-sm text-gray-400 truncate">
                {email.preview}
              </span>
            </div>

            {/* Date */}
            <span className="text-xs text-gray-400 flex-shrink-0">{email.date}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 py-3 border-t border-gray-200">
        <button className="w-8 h-8 rounded-lg text-sm text-gray-400 hover:bg-gray-100 flex items-center justify-center transition-colors">
          <ChevronLeft size={14} />
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`w-8 h-8 rounded-lg text-sm font-medium flex items-center justify-center transition-colors ${
              n === 1
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {n}
          </button>
        ))}
        <span className="text-sm text-gray-400 mx-1">...</span>
        <button className="w-8 h-8 rounded-lg text-sm text-gray-500 hover:bg-gray-100 flex items-center justify-center transition-colors">
          10
        </button>
        <button className="w-8 h-8 rounded-lg text-sm text-gray-400 hover:bg-gray-100 flex items-center justify-center transition-colors">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default EmailList;
