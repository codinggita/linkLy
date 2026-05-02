import React from 'react';

const AccountSettings = () => {
  return (
    <div className="max-w-3xl">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Account Settings</h3>
      
      <div className="space-y-8">
        {/* Profile Picture */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Profile Picture</h4>
          <div className="flex items-center gap-6">
            <img 
              src="https://ui-avatars.com/api/?name=Brian+F&background=random&size=120" 
              alt="Profile" 
              className="w-20 h-20 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Upload New
                </button>
                <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Remove
                </button>
              </div>
              <p className="text-xs text-gray-500">Must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Personal Details */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Personal Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">First Name</label>
              <input type="text" defaultValue="Brian" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Last Name</label>
              <input type="text" defaultValue="Fernandes" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5 col-span-2">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input type="email" defaultValue="brian.fernandes@example.com" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
