import {
  Inbox,
  Star,
  Send,
  Archive,
  AlertCircle,
  Trash2,
  Plus,
  Tag,
} from 'lucide-react';

const categories = [
  { key: 'all', label: 'All Mails', icon: <Inbox size={16} />, count: 21 },
  { key: 'favourites', label: 'Favourites', icon: <Star size={16} />, count: 2 },
  { key: 'sent', label: 'Sent', icon: <Send size={16} />, count: 8 },
  { key: 'archived', label: 'Archived', icon: <Archive size={16} />, count: 24 },
  { key: 'spam', label: 'Spam', icon: <AlertCircle size={16} />, count: 15 },
  { key: 'trash', label: 'Trash', icon: <Trash2 size={16} />, count: 28 },
];

const labels = [
  { name: 'Projects', color: 'bg-blue-500' },
  { name: 'Customers', color: 'bg-red-500' },
  { name: 'Companies', color: 'bg-amber-500' },
];

const MailSidebar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-[220px] border-r border-gray-200 flex flex-col bg-white flex-shrink-0 h-full">
      <div className="flex-1 overflow-y-auto px-3 pt-4">
        {/* Categories */}
        <div className="flex flex-col gap-0.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onCategoryChange(cat.key)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {cat.icon}
                <span>{cat.label}</span>
              </div>
              <span
                className={`text-xs font-semibold ${
                  activeCategory === cat.key ? 'text-gray-300' : 'text-gray-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Labels */}
        <div className="mt-8">
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Label</span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Plus size={14} />
            </button>
          </div>
          <div className="flex flex-col gap-0.5">
            {labels.map((label) => (
              <button
                key={label.name}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${label.color}`} />
                <span>{label.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSidebar;
