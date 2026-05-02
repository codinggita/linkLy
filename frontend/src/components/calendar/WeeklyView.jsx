const SLOT_HEIGHT = 48;
const TIME_SLOTS = [];
for (let h = 7; h <= 18; h++) {
  TIME_SLOTS.push(`${String(h).padStart(2, '0')}.00`);
  TIME_SLOTS.push(`${String(h).padStart(2, '0')}.30`);
}

const getSlotIndex = (time) => {
  const [h, m] = time.split(':').map(Number);
  return (h - 7) * 2 + (m >= 30 ? 1 : 0);
};

const WeeklyView = ({ weekStart, events }) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    days.push(d);
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const now = new Date();
  const currentSlotIdx = (now.getHours() - 7) * 2 + (now.getMinutes() >= 30 ? 1 : 0);

  const getEventsForDay = (dayOfWeek) =>
    events.filter((e) => e.dayOfWeek === dayOfWeek);

  return (
    <div className="flex flex-col flex-1 border border-gray-200 rounded-xl overflow-hidden">
      {/* Day Headers */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] bg-gray-50 border-b border-gray-200">
        <div />
        {days.map((d, i) => (
          <div key={i} className="py-2.5 text-center border-l border-gray-200">
            <span className="text-xs font-semibold text-gray-500 uppercase">
              {dayNames[d.getDay()]} {d.getDate()}
            </span>
          </div>
        ))}
      </div>

      {/* Time Grid */}
      <div className="flex-1 overflow-y-auto relative">
        {TIME_SLOTS.map((slot, si) => (
          <div key={si} className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-gray-50" style={{ height: SLOT_HEIGHT }}>
            <div className="flex items-start justify-end pr-3 pt-1">
              <span className="text-[11px] text-gray-400 font-medium">{slot}</span>
            </div>
            {Array.from({ length: 7 }).map((_, di) => (
              <div key={di} className="border-l border-gray-100 relative" />
            ))}
          </div>
        ))}

        {/* Current Time Indicator */}
        {currentSlotIdx >= 0 && currentSlotIdx < TIME_SLOTS.length && (
          <div
            className="absolute left-[60px] right-0 flex items-center z-10 pointer-events-none"
            style={{ top: currentSlotIdx * SLOT_HEIGHT + (now.getMinutes() % 30) * (SLOT_HEIGHT / 30) }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5" />
            <div className="flex-1 h-[2px] bg-red-500" />
          </div>
        )}

        {/* Events */}
        {Array.from({ length: 7 }).map((_, dayIdx) => {
          const dayEvents = getEventsForDay(dayIdx);
          return dayEvents.map((ev, ei) => {
            const startIdx = getSlotIndex(ev.start);
            const endIdx = getSlotIndex(ev.end);
            const slots = Math.max(endIdx - startIdx, 1);
            const colWidth = `calc((100% - 60px) / 7)`;
            const left = `calc(60px + ${dayIdx} * ${colWidth})`;

            return (
              <div
                key={`${dayIdx}-${ei}`}
                className={`absolute rounded-lg px-2 py-1 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${ev.bgClass}`}
                style={{
                  top: startIdx * SLOT_HEIGHT + 2,
                  height: slots * SLOT_HEIGHT - 4,
                  left,
                  width: colWidth,
                }}
              >
                <span className={`text-xs font-semibold ${ev.textClass}`}>{ev.title}</span>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default WeeklyView;
