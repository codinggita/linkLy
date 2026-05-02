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

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DailyView = ({ date, events }) => {
  const now = new Date();
  const curIdx = (now.getHours() - 7) * 2 + (now.getMinutes() >= 30 ? 1 : 0);

  return (
    <div className="flex flex-col flex-1 border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 py-2.5 text-center">
        <span className="text-xs font-semibold text-gray-500 uppercase">
          {dayNames[date.getDay()]} {date.getDate()}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto relative">
        {TIME_SLOTS.map((slot, si) => (
          <div key={si} className="grid grid-cols-[60px_1fr] border-b border-gray-50" style={{ height: SLOT_HEIGHT }}>
            <div className="flex items-start justify-end pr-3 pt-1">
              <span className="text-[11px] text-gray-400 font-medium">{slot}</span>
            </div>
            <div className="border-l border-gray-100" />
          </div>
        ))}

        {curIdx >= 0 && curIdx < TIME_SLOTS.length && (
          <div className="absolute left-[60px] right-0 flex items-center z-10 pointer-events-none" style={{ top: curIdx * SLOT_HEIGHT + (now.getMinutes() % 30) * (SLOT_HEIGHT / 30) }}>
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5" />
            <div className="flex-1 h-[2px] bg-red-500" />
          </div>
        )}

        {events.map((ev, i) => {
          const sIdx = getSlotIndex(ev.start);
          const eIdx = getSlotIndex(ev.end);
          const slots = Math.max(eIdx - sIdx, 1);
          return (
            <div key={i} className={`absolute left-[60px] right-0 rounded-lg px-3 py-1.5 cursor-pointer hover:opacity-90 ${ev.bgClass}`} style={{ top: sIdx * SLOT_HEIGHT + 2, height: slots * SLOT_HEIGHT - 4 }}>
              <span className={`text-xs font-semibold ${ev.textClass}`}>{ev.title}</span>
              <p className={`text-[11px] mt-0.5 ${ev.textClass} opacity-70`}>{ev.start} - {ev.end}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyView;
