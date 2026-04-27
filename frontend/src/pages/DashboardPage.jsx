import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import TaskProgress from '../components/dashboard/TaskProgress';
import TotalExpenses from '../components/dashboard/TotalExpenses';
import TaskManagementSummaries from '../components/dashboard/TaskManagementSummaries';
import TotalRevenue from '../components/dashboard/TotalRevenue';
import ExpensesAllocation from '../components/dashboard/ExpensesAllocation';
import AverageFinishedTask from '../components/dashboard/AverageFinishedTask';
import HighlightedCompanies from '../components/dashboard/HighlightedCompanies';
import CompletedTask from '../components/dashboard/CompletedTask';

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8">
          <div className="max-w-6xl mx-auto h-full">
            <div className="flex flex-col gap-6 w-full h-full pb-8">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {/* Top Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TaskProgress />
                    <TotalExpenses />
                  </div>

                  {/* Task Management Summaries */}
                  <TaskManagementSummaries />

                  {/* Bottom Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TotalRevenue />
                    <ExpensesAllocation />
                  </div>
                </div>
                
                <div className="lg:col-span-1 flex flex-col gap-6">
                  {/* Right Column */}
                  <AverageFinishedTask />
                  <HighlightedCompanies />
                  <CompletedTask />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
