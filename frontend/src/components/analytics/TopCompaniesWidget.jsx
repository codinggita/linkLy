import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const companies = [
  { rank: 1, name: 'Product Hunt', icon: 'P', color: 'bg-orange-500', trend: 'up', value: 5 },
  { rank: 2, name: 'Google', icon: 'G', color: 'bg-blue-500', trend: 'up', value: 2 },
  { rank: 3, name: 'Wordpress', icon: 'W', color: 'bg-blue-600', trend: 'up', value: 1 },
  { rank: 4, name: 'Tripadvisor', icon: 'T', color: 'bg-emerald-500', trend: 'down', value: 3 },
  { rank: 5, name: 'Slack', icon: 'S', color: 'bg-purple-500', trend: 'down', value: 2 },
  { rank: 6, name: 'Zendesk', icon: 'Z', color: 'bg-teal-700', trend: 'down', value: 3 },
];

const TopCompaniesWidget = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Top Companies</h3>
      <div className="flex flex-col gap-4">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500 w-3">{company.rank}.</span>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${company.color}`}>
                {company.icon}
              </div>
              <span className="text-sm font-medium text-gray-900">{company.name}</span>
            </div>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
              company.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
            }`}>
              {company.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {company.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompaniesWidget;
