import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MailSidebar from '../components/emails/MailSidebar';
import EmailList from '../components/emails/EmailList';
import EmailDetail from '../components/emails/EmailDetail';
import { Plus, SlidersHorizontal, Filter } from 'lucide-react';
import api from '../services/api';

/* ───────────────────────────── page ───────────────────────────── */
const EmailsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/emails');
      
      // Transform backend data to match frontend component expected props
      const transformedEmails = response.data.map((email) => ({
        id: email._id,
        sender: email.sender,
        email: email.senderEmail,
        subject: email.subject,
        preview: email.preview,
        date: new Date(email.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        fullDate: new Date(email.createdAt).toLocaleString('en-US', { 
          month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' 
        }),
        read: email.read,
        body: email.body,
        folder: email.folder,
        starred: email.starred
      }));
      
      setEmails(transformedEmails);
    } catch (error) {
      console.error('Failed to fetch emails', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  // Filter emails based on the active category (folder or starred)
  const filteredEmails = emails.filter((email) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'starred') return email.starred;
    return email.folder === activeCategory;
  });

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Emails" />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Page Header */}
          <div className="px-8 pt-6 pb-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Emails</h1>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <SlidersHorizontal size={14} />
                <span>Sort By</span>
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Filter size={14} />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <Plus size={14} />
                <span>Add Mail</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Mail Sidebar */}
            <MailSidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Email List or Detail */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : selectedEmail ? (
                <EmailDetail
                  email={selectedEmail}
                  onBack={() => setSelectedEmail(null)}
                />
              ) : (
                <EmailList
                  emails={filteredEmails}
                  selectedId={null}
                  onSelect={setSelectedEmail}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmailsPage;
