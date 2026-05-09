import React, { useState, useEffect } from 'react';
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
import api from '../services/api';

const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await api.get('/api/dashboard');
        setData(response.data);
      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
        setError(err.response?.data?.message || err.message || 'Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Dashboard" />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8">
          <div className="max-w-6xl mx-auto h-full">
            <div className="flex flex-col gap-6 w-full h-full pb-8">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : error ? (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
                  <p className="font-bold">Error loading dashboard:</p>
                  <p>{error}</p>
                </div>
              ) : data && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TaskProgress 
                        progress={data.taskProgress} 
                        completed={data.completedTasks} 
                        total={data.totalTasks} 
                      />
                      <TotalExpenses />
                    </div>

                    {/* Task Management Summaries */}
                    <TaskManagementSummaries totalTasks={data.totalTasks} />

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TotalRevenue />
                      <ExpensesAllocation />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Right Column */}
                    <AverageFinishedTask />
                    <HighlightedCompanies totalContacts={data.totalContacts} />
                    <CompletedTask completed={data.completedTasks} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
