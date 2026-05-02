import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SettingsSidebar from '../components/settings/SettingsSidebar';
import GeneralSettings from '../components/settings/GeneralSettings';
import AccountSettings from '../components/settings/AccountSettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import SecuritySettings from '../components/settings/SecuritySettings';
import BillingSettings from '../components/settings/BillingSettings';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general': return <GeneralSettings />;
      case 'account': return <AccountSettings />;
      case 'notifications': return <NotificationSettings />;
      case 'security': return <SecuritySettings />;
      case 'billing': return <BillingSettings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-sm">This settings section is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Settings" />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />

        <main className="flex-1 flex overflow-hidden">
          {/* Internal Sidebar for Settings */}
          <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          
          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-10 bg-white">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
