import React from 'react';
import { User, Bell, Shield, Users, CreditCard, Puzzle, Sliders } from 'lucide-react';

const tabs = [
  { id: 'general', label: 'General', icon: <Sliders size={18} /> },
  { id: 'account', label: 'Account Settings', icon: <User size={18} /> },
  { id: 'notifications', label: 'Notification Settings', icon: <Bell size={18} /> },
  { id: 'security', label: 'Security & Privacy', icon: <Shield size={18} /> },
  { id: 'team', label: 'Manage Team', icon: <Users size={18} /> },
  { id: 'billing', label: 'Billing Options', icon: <CreditCard size={18} /> },
  { id: 'integrations', label: 'Connected Apps', icon: <Puzzle size={18} /> },
];

const SettingsSidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-[240px] border-r border-gray-200 bg-white h-full flex flex-col py-6 px-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6 px-2">Settings</h2>
      <div className="flex flex-col gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <div className={`${activeTab === tab.id ? 'text-gray-300' : 'text-gray-400'}`}>
              {tab.icon}
            </div>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsSidebar;
