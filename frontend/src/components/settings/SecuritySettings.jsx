import React from 'react';

const SecuritySettings = () => {
  return (
    <div className="max-w-3xl">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Security & Privacy</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Change Password</h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Current Password</label>
              <input type="password" placeholder="••••••••" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">New Password</label>
              <input type="password" placeholder="••••••••" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
              <input type="password" placeholder="••••••••" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400" />
            </div>
          </div>
          <div className="mt-4">
            <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Update Password
            </button>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Two-Factor Authentication (2FA)</h4>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div>
              <p className="text-sm font-semibold text-gray-900">Enable 2FA</p>
              <p className="text-sm text-gray-500 mt-0.5">Adds an extra layer of security to your account.</p>
            </div>
            <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Set Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
