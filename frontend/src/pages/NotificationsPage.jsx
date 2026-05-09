import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import {
  Bell,
  ClipboardList,
  Archive,
  SlidersHorizontal,
  CheckCheck,
  Settings2,
  MoreVertical,
} from 'lucide-react';
import api from '../services/api';

/* ───────────────────────────── component ───────────────────────────── */
const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/notifications');
      
      const transformedNotifications = response.data.map((notification) => ({
        id: notification._id,
        type: notification.type,
        user: notification.fromUser,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(notification.fromUser)}&background=random&color=fff&bold=true`,
        action: notification.action,
        target: notification.target,
        extra: notification.extra,
        quote: notification.quote,
        time: new Date(notification.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        team: notification.team,
        unread: notification.unread,
      }));

      setNotifications(transformedNotifications);
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Compute unread count for tabs
  const unreadCount = notifications.filter(n => n.unread).length;
  
  const tabs = [
    { label: 'All', icon: <Bell size={15} />, count: unreadCount > 0 ? unreadCount : null },
    { label: 'Tasks', icon: <ClipboardList size={15} />, count: null },
    { label: 'Archived', icon: <Archive size={15} />, count: null },
  ];

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Notifications" />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto px-8 py-8">
            {/* ── Header ── */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Notifications
                </h1>

                {/* Tabs */}
                <div className="flex items-center gap-1 border-b-2 border-transparent">
                  {tabs.map((tab) => (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTab(tab.label)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors relative
                        ${
                          activeTab === tab.label
                            ? 'text-gray-900'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                      {tab.count && (
                        <span className="ml-0.5 text-[11px] font-bold bg-emerald-500 text-white rounded-full px-1.5 py-0.5 leading-none min-w-[20px] text-center">
                          {tab.count}
                        </span>
                      )}
                      {/* active underline */}
                      {activeTab === tab.label && (
                        <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-emerald-500 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <ActionButton icon={<SlidersHorizontal size={14} />} label="Sort By" />
                <ActionButton icon={<CheckCheck size={14} />} label="Mark All as Read" />
                <ActionButton icon={<Settings2 size={14} />} label="Notification Settings" />
              </div>
            </div>

            {/* green rule under the active tab */}
            <div className="border-b border-gray-200 -mt-1 mb-0" />

            {/* ── Notification List ── */}
            <div className="divide-y divide-gray-100">
              {loading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : notifications.length > 0 ? (
                notifications.map((n) => (
                  <NotificationItem key={n.id} {...n} />
                ))
              ) : (
                <div className="py-12 text-center text-gray-500">
                  <p>No notifications found.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ───────────────────── action button (header) ───────────────────── */
const ActionButton = ({ icon, label }) => (
  <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
    {icon}
    <span>{label}</span>
  </button>
);

/* ───────────────────── single notification ───────────────────── */
const NotificationItem = ({
  type,
  user,
  avatar,
  action,
  target,
  extra,
  quote,
  time,
  team,
  unread,
}) => {
  return (
    <div
      className={`flex gap-4 py-5 px-4 group relative transition-colors rounded-lg ${
        unread ? 'bg-white' : 'bg-white'
      } hover:bg-gray-50`}
    >
      {/* unread dot */}
      <div className="flex items-start pt-1">
        <span
          className={`block w-2 h-2 rounded-full mt-2 ${
            unread ? 'bg-blue-500' : 'bg-transparent'
          }`}
        />
      </div>

      {/* avatar */}
      <img
        src={avatar}
        alt={user}
        className="w-9 h-9 rounded-full flex-shrink-0 mt-0.5"
      />

      {/* content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">{user}</span>{' '}
          {action}{' '}
          <span className="font-semibold text-gray-900">{target}</span>
          {extra && <span className="text-gray-600"> {extra}</span>}
        </p>

        {/* quoted text */}
        {quote && (
          <div className="mt-2.5 pl-3 border-l-2 border-gray-200 py-1">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-blue-600">@me</span>{' '}
              {quote}
            </p>
          </div>
        )}

        {/* access request buttons */}
        {type === 'access' && (
          <div className="flex items-center gap-2 mt-3">
            <button className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
              ✕ Decline
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              ✓ Accept
            </button>
          </div>
        )}

        {/* reply button for mentions */}
        {type === 'mention' && (
          <button className="mt-3 px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
            Reply
          </button>
        )}

        {/* meta */}
        <p className="mt-2 text-xs text-gray-400">
          {time} {team && <><span className="mx-1">|</span> {team}</>}
        </p>
      </div>

      {/* overflow menu */}
      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600 mt-1">
        <MoreVertical size={16} />
      </button>
    </div>
  );
};

export default NotificationsPage;
