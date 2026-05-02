import React from 'react';
import { MapPin, Mail, Phone, MoreVertical } from 'lucide-react';

const ContactGridItem = ({ contact, onClick }) => {
  const badgeColors = {
    Employee: 'bg-purple-100 text-purple-600',
    Customers: 'bg-blue-100 text-blue-600',
    Partners: 'bg-orange-100 text-orange-600'
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors cursor-pointer group"
      onClick={() => onClick(contact)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=random`} 
              alt={contact.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            {contact.gender === 'female' ? (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-[10px]">♀️</span>
              </div>
            ) : (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-[10px]">♂️</span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 leading-tight">{contact.name}</h3>
            <div className="flex items-center gap-1 text-gray-400 mt-1">
              <MapPin size={12} />
              <span className="text-xs">{contact.location}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => { e.stopPropagation(); }}>
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="mb-4">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${badgeColors[contact.category] || 'bg-gray-100 text-gray-600'}`}>
          {contact.category}
        </span>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail size={14} className="text-gray-400" />
          <a href={`mailto:${contact.email}`} className="hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors" onClick={e => e.stopPropagation()}>
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone size={14} className="text-gray-400" />
          <span>{contact.phone}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" onClick={e => e.stopPropagation()}>
          <Phone size={14} /> Call
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" onClick={e => e.stopPropagation()}>
          <Mail size={14} /> Mail
        </button>
      </div>
    </div>
  );
};

export default ContactGridItem;
