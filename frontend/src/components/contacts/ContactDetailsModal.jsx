import React from 'react';
import { X, Phone, Mail, Send, MoreHorizontal, User, Calendar, MapPin, Building2 } from 'lucide-react';

const ContactDetailsModal = ({ isOpen, onClose, contact }) => {
  if (!isOpen || !contact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl bg-white rounded-2xl shadow-xl flex flex-col p-8 relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-1 text-gray-400 hover:text-gray-600 rounded-md transition-colors">
          <X size={18} />
        </button>

        <h2 className="text-lg font-bold text-gray-900 mb-8">Contact Details</h2>

        <div className="flex items-start gap-12">
          {/* Left Column: Avatar & Quick Actions */}
          <div className="flex flex-col items-center w-48 shrink-0">
            <img 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=random&size=96`} 
              alt={contact.name} 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-3">{contact.name}</h3>
            
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium text-gray-500">Last Activity: 2 days ago</span>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-50 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Call</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-50 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Mail</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-50 transition-colors">
                  <Send size={18} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Message</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-50 transition-colors">
                  <MoreHorizontal size={18} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">More</span>
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Account Information</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <User size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">US219410</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">{contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">{contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Building2 size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">Marketing</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Personal Information</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">14/07/1988</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400 w-5 flex items-center justify-center text-xs">♀️</span>
                  <span className="text-gray-600">Female</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 flex items-center justify-center">
                    <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 rounded-[2px]" />
                  </div>
                  <span className="text-gray-600">United States</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Building2 size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">{contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-gray-400 w-5" />
                  <span className="text-gray-600">Majestic Ave, 21 Tree St.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsModal;
