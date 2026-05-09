import React from 'react';
import { Info } from 'lucide-react';

const HighlightedCompanies = ({ totalContacts = 0 }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center relative flex-1">
      <div className="w-full flex justify-between absolute top-5 px-5">
        <p className="text-sm text-gray-500 font-medium">Highlighted Companies</p>
        <button className="text-gray-400 hover:text-gray-600">
          <Info size={16} />
        </button>
      </div>

      <div className="mt-12 mb-3 w-16 h-16 bg-[#DA552F] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-sm">
        P
      </div>
      <h4 className="text-lg font-bold tracking-tight">Product Hunt</h4>
      <p className="text-xs text-gray-400 mt-0.5 font-medium">Web Design</p>

      <h3 className="text-3xl font-bold mt-5 tracking-tight">{totalContacts}</h3>
      <p className="text-[11px] text-gray-500 mt-1 font-medium leading-tight">
        Total Contacts
        <br />
        in Database
      </p>

      <div className="flex items-end gap-[3px] mt-auto pt-6 w-full h-[70px] justify-center">
        {[
          { h: '40%', c: 'bg-black' },
          { h: '25%', c: 'bg-gray-300' },
          { h: '60%', c: 'bg-black' },
          { h: '85%', c: 'bg-black' },
          { h: '45%', c: 'bg-black' },
          { h: '30%', c: 'bg-black' },
          { h: '65%', c: 'bg-black' },
          { h: '20%', c: 'bg-gray-300' },
          { h: '90%', c: 'bg-black' },
          { h: '55%', c: 'bg-black' },
          { h: '75%', c: 'bg-black' },
          { h: '35%', c: 'bg-gray-300' },
        ].map((bar, i) => (
          <div key={i} className={`w-[9px] rounded-[2px] ${bar.c}`} style={{ height: bar.h }}></div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedCompanies;
