import React from 'react';

const Toggle = ({ checked }) => (
  <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${checked ? 'bg-emerald-500' : 'bg-gray-300'}`}>
    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
  </div>
);

const NotificationSettings = () => {
  return (
    <div className="max-w-3xl">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Notification Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
          <div>
            <p className="text-sm font-semibold text-gray-900">Email Notifications</p>
            <p className="text-sm text-gray-500 mt-0.5">Receive daily summaries and important alerts via email.</p>
          </div>
          <Toggle checked={true} />
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
          <div>
            <p className="text-sm font-semibold text-gray-900">Push Notifications</p>
            <p className="text-sm text-gray-500 mt-0.5">Get notified immediately in your browser or desktop app.</p>
          </div>
          <Toggle checked={false} />
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
          <div>
            <p className="text-sm font-semibold text-gray-900">SMS Notifications</p>
            <p className="text-sm text-gray-500 mt-0.5">Receive text messages for critical alerts only.</p>
          </div>
          <Toggle checked={false} />
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
          <div>
            <p className="text-sm font-semibold text-gray-900">Marketing & Updates</p>
            <p className="text-sm text-gray-500 mt-0.5">Receive news about product updates and features.</p>
          </div>
          <Toggle checked={true} />
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
