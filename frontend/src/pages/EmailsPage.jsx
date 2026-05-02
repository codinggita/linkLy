import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MailSidebar from '../components/emails/MailSidebar';
import EmailList from '../components/emails/EmailList';
import EmailDetail from '../components/emails/EmailDetail';
import { Plus, SlidersHorizontal, Filter } from 'lucide-react';

/* ───────────────────────────── mock emails ───────────────────────────── */
const mockEmails = [
  {
    id: 1,
    sender: 'Dianne Russell',
    email: 'diannerussel@email.com',
    subject: 'Why choose a theme that looks good with WooCommerce',
    preview: 'Hello, I\'m having trouble navigating the site and finding the i...',
    date: 'Oct 23',
    fullDate: 'Feb 2, 2019 19:28',
    read: false,
    body: [
      'Interaction Design can greatly alleviate the quality of any UI/UX Project. A thorough survey of an existing product will also reveal spaces where interaction design principles can be utilized to greatly enhance user experience.',
      'However, for a lot of UI/UX Designers, Figma is the tool of choice and it is a hassle to do the tiniest bit of motion prototyping in AE or Principal, or for that matter, use Lottie Plugin which sometimes gives pixelated visual.',
      'Here I list four interactions that can be implemented across multitude of project and they are very easy to implement in Figma.',
      'Simply following the motion of a ball which first readies itself to move then stops as if stuck to a wall. The curves we\'ve used are On C...',
    ],
  },
  {
    id: 2,
    sender: 'Annette Black',
    email: 'annetteblack@email.com',
    subject: 'Help with navigation issues',
    preview: 'Hello, I\'m having trouble navigating the site and finding the information I need. Can you assist m...',
    date: 'Oct 23',
    fullDate: 'Oct 23, 2024 10:15',
    read: false,
    body: [
      'Hello, I\'m having trouble navigating the site and finding the information I need. Can you assist me with this?',
      'I\'ve been trying to locate the documentation section but the links seem to be broken or redirecting to the wrong pages.',
      'Any help would be greatly appreciated. Thank you!',
    ],
  },
  {
    id: 3,
    sender: 'Robert Fox',
    email: 'robertfox@email.com',
    subject: 'Website support request',
    preview: 'Hello, I\'m trying to submit a support ticket but I\'m having trouble. Can you assist me with this?',
    date: 'Oct 23',
    fullDate: 'Oct 23, 2024 09:42',
    read: true,
    body: [
      'Hello, I\'m trying to submit a support ticket but I\'m having trouble. Can you assist me with this?',
      'The form keeps showing an error when I try to submit. I\'ve tried different browsers but the issue persists.',
    ],
  },
  {
    id: 4,
    sender: 'Brooklyn Simmons',
    email: 'brooklynsimmons@email.com',
    subject: 'How to use the feature',
    preview: 'Hello, I\'m having trouble using a feature on the site. Can you provide me with some guidance or inst...',
    date: 'Oct 23',
    fullDate: 'Oct 23, 2024 08:30',
    read: true,
    body: [
      'Hello, I\'m having trouble using a feature on the site. Can you provide me with some guidance or instructions?',
      'Specifically, I\'m trying to use the export feature but can\'t find where to configure the output format.',
    ],
  },
  {
    id: 5,
    sender: 'Cameron Williamson',
    email: 'cameronw@email.com',
    subject: 'Waiting for response',
    preview: 'Hi, I\'ve been waiting for a response to my support ticket for several days. Can you give me an updat...',
    date: 'Oct 22',
    fullDate: 'Oct 22, 2024 16:20',
    read: true,
    body: [
      'Hi, I\'ve been waiting for a response to my support ticket for several days. Can you give me an update?',
      'The ticket number is #4521. I submitted it last Monday regarding billing issues.',
    ],
  },
  {
    id: 6,
    sender: 'Dianne Russell',
    email: 'diannerussel@email.com',
    subject: 'Status update request',
    preview: 'Hi, I\'ve been waiting for a response to my support ticket for several days. Can you give me an updat...',
    date: 'Oct 22',
    fullDate: 'Oct 22, 2024 14:10',
    read: true,
    body: [
      'Hi, I\'ve been waiting for a response to my support ticket for several days.',
      'Could you please provide me with a status update? I appreciate your help.',
    ],
  },
  {
    id: 7,
    sender: 'Ronald Richards',
    email: 'ronaldrichards@email.com',
    subject: 'Help with feature',
    preview: 'Hello, I\'m having trouble using a feature on the site. Can you provide me with some guidance or inst...',
    date: 'Oct 21',
    fullDate: 'Oct 21, 2024 11:45',
    read: true,
    body: [
      'Hello, I\'m having trouble using a feature on the site.',
      'Can you provide me with some guidance or instructions on how to properly configure the dashboard widgets?',
    ],
  },
  {
    id: 8,
    sender: 'Floyd Miles',
    email: 'floydmiles@email.com',
    subject: 'How to configure settings',
    preview: 'Hello, I\'m having trouble using a feature on the site. Can you provide me with some guidance or inst...',
    date: 'Oct 21',
    fullDate: 'Oct 21, 2024 09:30',
    read: true,
    body: [
      'Hello, I\'m having trouble configuring the notification settings.',
      'Every time I try to change my email preferences, the changes don\'t seem to save properly.',
    ],
  },
  {
    id: 9,
    sender: 'Albert Flores',
    email: 'albertflores@email.com',
    subject: 'How to access privacy policy',
    preview: 'Hi there, I\'m interested in learning more about the company\'s privacy policy. Can you direct me to t...',
    date: 'Oct 20',
    fullDate: 'Oct 20, 2024 15:00',
    read: true,
    body: [
      'Hi there, I\'m interested in learning more about the company\'s privacy policy.',
      'Can you direct me to the right page? I\'ve looked in the footer but couldn\'t find a working link.',
    ],
  },
  {
    id: 10,
    sender: 'Jenny Wilson',
    email: 'jennywilson@email.com',
    subject: 'Account setup assistance',
    preview: 'Hello, I need help setting up my account. The verification email hasn\'t arrived yet...',
    date: 'Oct 20',
    fullDate: 'Oct 20, 2024 12:15',
    read: true,
    body: [
      'Hello, I need help setting up my account.',
      'The verification email hasn\'t arrived yet and I\'ve checked my spam folder. Could you resend it?',
    ],
  },
  {
    id: 11,
    sender: 'Guy Hawkins',
    email: 'guyhawkins@email.com',
    subject: 'Billing inquiry',
    preview: 'Hi, I have a question about my recent invoice. The amount seems different from what was quoted...',
    date: 'Oct 19',
    fullDate: 'Oct 19, 2024 17:30',
    read: true,
    body: [
      'Hi, I have a question about my recent invoice.',
      'The amount seems different from what was quoted. Could you clarify the charges?',
    ],
  },
  {
    id: 12,
    sender: 'Savannah Nguyen',
    email: 'savannahnguyen@email.com',
    subject: 'Feature request',
    preview: 'Hi team, I\'d like to suggest a new feature for the platform. It would be great if we could...',
    date: 'Oct 19',
    fullDate: 'Oct 19, 2024 10:00',
    read: true,
    body: [
      'Hi team, I\'d like to suggest a new feature for the platform.',
      'It would be great if we could have dark mode support and keyboard shortcuts for common actions.',
    ],
  },
];

/* ───────────────────────────── page ───────────────────────────── */
const EmailsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEmail, setSelectedEmail] = useState(null);

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
              {selectedEmail ? (
                <EmailDetail
                  email={selectedEmail}
                  onBack={() => setSelectedEmail(null)}
                />
              ) : (
                <EmailList
                  emails={mockEmails}
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
