const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const rows = [];
  let day = 1;
  let nextDay = 1;

  for (let week = 0; week < 6; week++) {
    const row = [];
    for (let d = 0; d < 7; d++) {
      const idx = week * 7 + d;
      if (idx < firstDay) {
        row.push({ day: daysInPrev - firstDay + d + 1, current: false });
      } else if (day > daysInMonth) {
        row.push({ day: nextDay++, current: false });
      } else {
        row.push({ day: day++, current: true });
      }
    }
    rows.push(row);
    if (day > daysInMonth && week >= 4) break;
  }
  return rows;
};

const MonthlyView = ({ year, month, events, onDayClick }) => {
  const weeks = getCalendarDays(year, month);
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  const getEventsForDay = (day) =>
    events.filter((e) => e.day === day);

  return (
    <div className="flex flex-col flex-1 border border-gray-200 rounded-xl overflow-hidden">
      {/* Day Headers */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {DAYS.map((d) => (
          <div key={d} className="py-2.5 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      <div className="flex-1 flex flex-col">
        {weeks.map((row, wi) => (
          <div key={wi} className="grid grid-cols-7 flex-1 border-b border-gray-100 last:border-b-0">
            {row.map((cell, di) => {
              const isToday = isCurrentMonth && cell.current && cell.day === today.getDate();
              const dayEvents = cell.current ? getEventsForDay(cell.day) : [];
              return (
                <div
                  key={di}
                  onClick={() => cell.current && onDayClick?.(cell.day)}
                  className={`min-h-[90px] p-1.5 border-r border-gray-100 last:border-r-0 cursor-pointer transition-colors hover:bg-gray-50 ${
                    !cell.current ? 'bg-gray-50/50' : ''
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full ${
                      isToday
                        ? 'bg-gray-900 text-white'
                        : cell.current
                        ? 'text-gray-700'
                        : 'text-gray-300'
                    }`}
                  >
                    {cell.day}
                  </span>
                  <div className="mt-0.5 flex flex-col gap-0.5">
                    {dayEvents.slice(0, 2).map((ev, i) => (
                      <div
                        key={i}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-medium truncate ${ev.colorClass}`}
                      >
                        {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[10px] text-gray-400 px-1">+{dayEvents.length - 2} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyView;
