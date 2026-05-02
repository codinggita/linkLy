import React from 'react';

const Toggle = ({ checked }) => (
  <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${checked ? 'bg-emerald-500' : 'bg-gray-300'}`}>
    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
  </div>
);

const GeneralSettings = () => {
  return (
    <div className="max-w-3xl">
      <h3 className="text-lg font-bold text-gray-900 mb-6">General Settings</h3>
      
      <div className="space-y-8">
        {/* App Design */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">App Design</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div>
                <p className="text-sm font-semibold text-gray-900">Light / Dark Mode</p>
                <p className="text-sm text-gray-500 mt-0.5">Choose your preferred theme for the interface.</p>
              </div>
              <Toggle checked={false} />
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div>
                <p className="text-sm font-semibold text-gray-900">Compact Layout</p>
                <p className="text-sm text-gray-500 mt-0.5">Reduce padding to fit more content on screen.</p>
              </div>
              <Toggle checked={true} />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Timezone & Language */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Localization</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Language</label>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:border-gray-400">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Timezone</label>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:border-gray-400">
                <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                <option>(GMT-08:00) Pacific Time (US & Canada)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
