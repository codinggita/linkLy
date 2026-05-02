import { 
  LayoutDashboard, 
  Bell, 
  StickyNote, 
  ClipboardList, 
  Mail, 
  Calendar, 
  BarChart2, 
  Users, 
  Briefcase, 
  Grid, 
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sidebarLinks = {
  Dashboard: '/dashboard',
  Notifications: '/notifications',
};

const Sidebar = ({ activePage = 'Dashboard' }) => {
  return (
    <div className="w-64 bg-[#F8F9FA] border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-tr-lg rounded-bl-lg flex items-center justify-center">
            {/* abstract logo */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          <span className="font-bold text-lg">Linkly</span>
        </div>
        <div className="flex border border-gray-200 rounded-md">
           <button className="p-1 hover:bg-gray-100 border-r border-gray-200"><ChevronLeft className="w-3 h-3 text-gray-400" /></button>
           <button className="p-1 hover:bg-gray-100"><ChevronRight className="w-3 h-3 text-gray-400" /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active={activePage === 'Dashboard'} href="/dashboard" />
        <SidebarItem icon={<Bell size={18} />} label="Notifications" active={activePage === 'Notifications'} href="/notifications" />
        <SidebarItem icon={<StickyNote size={18} />} label="Notes" active={activePage === 'Notes'} href="/notes" />
        <SidebarItem icon={<ClipboardList size={18} />} label="Tasks" active={activePage === 'Tasks'} href="/tasks" />
        <SidebarItem icon={<Mail size={18} />} label="Emails" hasDropdown active={activePage === 'Emails'} />
        <SidebarItem icon={<Calendar size={18} />} label="Calendars" active={activePage === 'Calendars'} />

        <div className="mt-6 mb-2 px-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Database</p>
        </div>
        <SidebarItem icon={<BarChart2 size={18} />} label="Analytics" active={activePage === 'Analytics'} />
        <SidebarItem icon={<Users size={18} />} label="Contacts" active={activePage === 'Contacts'} />

      </div>

      <div className="p-3 border-t border-gray-200 flex flex-col gap-1">

        <SidebarItem icon={<Settings size={18} />} label="Settings" active={activePage === 'Settings'} />
      </div>
      
      <div className="p-4 border-t border-gray-200 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center font-bold text-gray-600">
            M
          </div>
          <span className="text-sm font-medium">Marketing Team's</span>
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active, hasDropdown, href }) => {
  return (
    <Link to={href || '#'} className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
    </Link>
  );
};

export default Sidebar;
