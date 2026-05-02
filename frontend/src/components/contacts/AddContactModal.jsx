import React from 'react';
import { X, Upload, ChevronDown, Calendar, MapPin } from 'lucide-react';

const AddContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px]" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-lg font-bold text-gray-900">Create New Contact</h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-5">
          {/* Image Upload */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <Upload size={14} /> Upload Image
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* First Name & Last Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">First Name</label>
              <input type="text" placeholder="Enter first name here" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Last Name</label>
              <input type="text" placeholder="Enter last name here" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
            </div>

            {/* Contact Categories & Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Contact Categories</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 appearance-none outline-none focus:border-gray-400">
                  <option>Select Category</option>
                  <option>Employee</option>
                  <option>Customers</option>
                  <option>Partners</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input type="email" placeholder="Enter email here" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
            </div>

            {/* Phone & Personal ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Phone</label>
              <div className="flex items-center gap-2">
                <div className="relative w-20 flex-shrink-0">
                  <select className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 appearance-none outline-none focus:border-gray-400">
                    <option>+1</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <input type="text" placeholder="Enter phone number" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Personal ID / Passport</label>
              <input type="text" placeholder="Enter personal ID here" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
            </div>

            {/* Birth Date & Occupation */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Birth Date</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <Calendar size={14} />
                </div>
                <input type="text" placeholder="Select Date" className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400 cursor-pointer" readOnly />
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Occupation</label>
              <input type="text" placeholder="Enter occupation here" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-semibold text-gray-700">Gender</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="gender" defaultChecked className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900" />
                Male
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="gender" className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900" />
                Female
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Country & Cities */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Country</label>
              <div className="relative flex items-center border border-gray-200 rounded-lg px-3 py-2 bg-white focus-within:border-gray-400">
                <div className="w-5 h-3.5 bg-blue-800 flex items-center justify-center mr-2 relative overflow-hidden rounded-[2px]">
                   <div className="absolute w-1/3 h-full bg-white left-1/3"></div>
                   <div className="absolute w-1/3 h-full bg-red-600 right-0"></div>
                </div>
                <select className="flex-1 appearance-none outline-none text-sm text-gray-600 bg-transparent">
                  <option>Select country</option>
                  <option>France</option>
                </select>
                <ChevronDown size={14} className="text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Cities</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <MapPin size={14} />
                </div>
                <select className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-lg text-sm text-gray-400 appearance-none outline-none focus:border-gray-400">
                  <option>Select Cities</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Address</label>
            <input type="text" placeholder="Enter address here" className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-400 placeholder-gray-400" />
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
          <button onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;
