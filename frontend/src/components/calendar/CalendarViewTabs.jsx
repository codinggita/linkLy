const CalendarViewTabs = ({ activeView, onChange }) => {
  const tabs = ['Monthly', 'Weekly', 'Daily'];

  return (
    <div className="flex items-center gap-1">
      {tabs.map((tab) => {
        const key = tab.toLowerCase();
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeView === key
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default CalendarViewTabs;
