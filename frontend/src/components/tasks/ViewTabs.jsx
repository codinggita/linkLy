import { List, LayoutGrid, Table } from 'lucide-react';

const tabs = [
  { key: 'list', icon: <List size={14} />, label: 'List' },
  { key: 'kanban', icon: <LayoutGrid size={14} />, label: 'Kanban' },
  { key: 'table', icon: <Table size={14} />, label: 'Table' },
];

const ViewTabs = ({ activeView, onChange }) => (
  <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
    {tabs.map((t) => (
      <button
        key={t.key}
        onClick={() => onChange(t.key)}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          activeView === t.key
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        {t.icon}
        <span>{t.label}</span>
      </button>
    ))}
  </div>
);

export default ViewTabs;
