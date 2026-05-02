import React from 'react';

const BillingSettings = () => {
  return (
    <div className="max-w-3xl">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Billing Options</h3>
      
      <div className="space-y-8">
        {/* Current Plan */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Current Plan</h4>
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl font-bold text-gray-900">Pro Plan</span>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-600">Active</span>
              </div>
              <p className="text-sm text-gray-500">$19.00 / month. Renews on Oct 24, 2024.</p>
            </div>
            <button className="px-4 py-2 border border-gray-200 bg-white text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Change Plan
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Payment Methods</h4>
          <div className="flex flex-col gap-3">
            <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center font-bold text-blue-800 italic">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Visa ending in 4242</p>
                  <p className="text-xs text-gray-500 mt-0.5">Expires 12/2025</p>
                </div>
              </div>
              <button className="text-sm font-medium text-gray-400 hover:text-red-500 transition-colors">
                Remove
              </button>
            </div>
            <button className="w-full py-3 border border-dashed border-gray-300 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              + Add New Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSettings;
