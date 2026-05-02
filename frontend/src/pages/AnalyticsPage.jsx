import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import CompletedTaskWidget from '../components/analytics/CompletedTaskWidget';
import TopCompaniesWidget from '../components/analytics/TopCompaniesWidget';
import ActiveProjectsWidget from '../components/analytics/ActiveProjectsWidget';
import ActiveCompaniesWidget from '../components/analytics/ActiveCompaniesWidget';
import ProjectTargetWidget from '../components/analytics/ProjectTargetWidget';

const AnalyticsPage = () => {
  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Analytics" />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-6 pb-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics</h1>
              <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  <span className="font-bold">$</span> Sales
                </button>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-4 translate-y-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-4-4"/></svg>
                  Activity
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto bg-white p-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">
              {/* Top Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column (1/3) */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <CompletedTaskWidget />
                  <div className="flex-1">
                    <TopCompaniesWidget />
                  </div>
                </div>

                {/* Right Column (2/3) */}
                <div className="lg:col-span-2">
                  <ActiveProjectsWidget />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column (2/3) */}
                <div className="lg:col-span-2">
                  <ActiveCompaniesWidget />
                </div>

                {/* Right Column (1/3) */}
                <div className="lg:col-span-1">
                  <ProjectTargetWidget />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;
