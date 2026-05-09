import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import CalendarViewTabs from '../components/calendar/CalendarViewTabs';
import MonthlyView from '../components/calendar/MonthlyView';
import WeeklyView from '../components/calendar/WeeklyView';
import DailyView from '../components/calendar/DailyView';
import AddEventModal from '../components/calendar/AddEventModal';
import { ChevronLeft, ChevronRight, ChevronDown, Plus, Filter } from 'lucide-react';
import api from '../services/api';

/* ── helpers ── */
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const getWeekStart = (date) => {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
};

const formatWeekRange = (ws) => {
  const we = new Date(ws);
  we.setDate(we.getDate() + 6);
  return `${MONTHS[ws.getMonth()]} ${ws.getDate()} - ${we.getDate()}, ${ws.getFullYear()}`;
};

const colorMap = {
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200' }
};

/* ── page ── */
const CalendarPage = () => {
  const [view, setView] = useState('monthly');
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(now);
  const [weekStart, setWeekStart] = useState(getWeekStart(now));

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Failed to fetch events', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  /* Filter events for views */
  const monthlyEvents = events
    .filter(ev => {
      const d = new Date(ev.date);
      return d.getFullYear() === year && d.getMonth() === month;
    })
    .map(ev => {
      const d = new Date(ev.date);
      const c = colorMap[ev.colorPreset] || colorMap.amber;
      return { day: d.getDate(), title: ev.title, colorClass: `${c.bg} ${c.text}` };
    });

  const weeklyEvents = events
    .filter(ev => {
      const d = new Date(ev.date);
      const ws = new Date(weekStart);
      const we = new Date(ws);
      we.setDate(we.getDate() + 6);
      return d >= ws && d <= we;
    })
    .map(ev => {
      const d = new Date(ev.date);
      const c = colorMap[ev.colorPreset] || colorMap.amber;
      return { 
        dayOfWeek: d.getDay(), 
        title: ev.title, 
        start: ev.startTime, 
        end: ev.endTime, 
        bgClass: `${c.bg} border ${c.border}`, 
        textClass: c.text 
      };
    });

  const dailyEvents = events
    .filter(ev => {
      const d = new Date(ev.date);
      return d.toDateString() === selectedDate.toDateString();
    })
    .map(ev => {
      const c = colorMap[ev.colorPreset] || colorMap.amber;
      return { 
        title: ev.title, 
        start: ev.startTime, 
        end: ev.endTime, 
        bgClass: `${c.bg} border ${c.border}`, 
        textClass: c.text 
      };
    });

  /* navigation */
  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };
  const goToday = () => { const t = new Date(); setYear(t.getFullYear()); setMonth(t.getMonth()); setSelectedDate(t); setWeekStart(getWeekStart(t)); };

  const prevWeek = () => { const d = new Date(weekStart); d.setDate(d.getDate() - 7); setWeekStart(d); };
  const nextWeek = () => { const d = new Date(weekStart); d.setDate(d.getDate() + 7); setWeekStart(d); };

  const prevDay = () => { const d = new Date(selectedDate); d.setDate(d.getDate() - 1); setSelectedDate(d); };
  const nextDay = () => { const d = new Date(selectedDate); d.setDate(d.getDate() + 1); setSelectedDate(d); };

  /* nav bar per view */
  const renderNav = () => {
    if (view === 'monthly') {
      return (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-gray-900">{MONTHS[month]} {year}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-100 transition-colors"><ChevronLeft size={16} className="text-gray-500" /></button>
          <button onClick={goToday} className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Today</button>
          <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-100 transition-colors"><ChevronRight size={16} className="text-gray-500" /></button>
        </div>
      );
    }
    if (view === 'weekly') {
      return (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-gray-900">{formatWeekRange(weekStart)}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <button onClick={prevWeek} className="p-1 rounded hover:bg-gray-100 transition-colors"><ChevronLeft size={16} className="text-gray-500" /></button>
          <button onClick={goToday} className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Today</button>
          <button onClick={nextWeek} className="p-1 rounded hover:bg-gray-100 transition-colors"><ChevronRight size={16} className="text-gray-500" /></button>
        </div>
      );
    }
    /* daily */
    return (
      <div className="flex items-center gap-3">
        <button onClick={prevDay} className="p-1 rounded hover:bg-gray-100 transition-colors"><ChevronLeft size={16} className="text-gray-500" /></button>
        <button onClick={goToday} className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Today</button>
        <button onClick={nextDay} className="p-1 rounded hover:bg-gray-100 transition-colors"><ChevronRight size={16} className="text-gray-500" /></button>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-gray-900">{MONTHS[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    );
  };

  const handleCreateEvent = async (eventData) => {
    try {
      await api.post('/api/events', eventData);
      fetchEvents();
      setShowModal(false);
    } catch (error) {
      console.error('Failed to create event', error);
      alert('Error creating event');
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Calendars" />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-6 pb-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Calendar</h1>
              <CalendarViewTabs activeView={view} onChange={setView} />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Filter size={14} /><span>Filter</span>
              </button>
              <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <Plus size={14} /><span>Add Event</span>
              </button>
            </div>
          </div>

          {/* Nav bar */}
          <div className="px-8 py-3 flex-shrink-0">{renderNav()}</div>

          {/* Calendar View */}
          <div className="flex-1 overflow-hidden px-8 pb-6 flex flex-col">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <>
                {view === 'monthly' && (
                  <MonthlyView
                    year={year}
                    month={month}
                    events={monthlyEvents}
                    onDayClick={(day) => { setSelectedDate(new Date(year, month, day)); setView('daily'); }}
                  />
                )}
                {view === 'weekly' && <WeeklyView weekStart={weekStart} events={weeklyEvents} />}
                {view === 'daily' && <DailyView date={selectedDate} events={dailyEvents} />}
              </>
            )}
          </div>
        </main>
      </div>

      <AddEventModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onCreate={handleCreateEvent} 
      />
    </div>
  );
};

export default CalendarPage;
