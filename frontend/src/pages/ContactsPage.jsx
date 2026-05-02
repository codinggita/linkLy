import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ContactGridItem from '../components/contacts/ContactGridItem';
import AddContactModal from '../components/contacts/AddContactModal';
import ContactDetailsModal from '../components/contacts/ContactDetailsModal';
import { List, Kanban, Table, Grid as GridIcon, SlidersHorizontal, Filter, Plus } from 'lucide-react';

const mockContacts = [
  { id: 1, name: 'Robert Fox', location: 'Austin', category: 'Employee', email: 'robertfox@example.com', phone: '(671) 555-0110', gender: 'male' },
  { id: 2, name: 'Cody Fisher', location: 'Austin', category: 'Customers', email: 'codyfisher@example.com', phone: '(671) 555-0110', gender: 'male' },
  { id: 3, name: 'Albert Flores', location: 'Austin', category: 'Customers', email: 'albertflores@example.com', phone: '(671) 555-0110', gender: 'female' },
  { id: 4, name: 'Floyd Miles', location: 'Austin', category: 'Employee', email: 'floydmiles@example.com', phone: '(671) 555-0110', gender: 'male' },
  { id: 5, name: 'Arlene McCoy', location: 'Austin', category: 'Partners', email: 'arlenecoy@example.com', phone: '(671) 555-0110', gender: 'female' },
  { id: 6, name: 'Jenny Wilson', location: 'Austin', category: 'Customers', email: 'jennywilson@example.com', phone: '(671) 555-0110', gender: 'female' },
  { id: 7, name: 'Jacob Jones', location: 'Austin', category: 'Partners', email: 'jacobjones@example.com', phone: '(671) 555-0110', gender: 'male' },
  { id: 8, name: 'Wade Warren', location: 'Austin', category: 'Partners', email: 'wadewarren@example.com', phone: '(671) 555-0110', gender: 'male' },
  { id: 9, name: 'Devon Lane', location: 'Austin', category: 'Customers', email: 'devonlane@example.com', phone: '(671) 555-0110', gender: 'female' },
  { id: 10, name: 'Kristin Watson', location: 'Austin', category: 'Employee', email: 'kristinwatson@example.com', phone: '(671) 555-0110', gender: 'female' },
  { id: 11, name: 'Kathryn Murphy', location: 'Austin', category: 'Customers', email: 'kathrynmurphy@example.com', phone: '(671) 555-0110', gender: 'female' },
];

const categories = ['All Contacts', 'Employee', 'Partners', 'Customers'];

const ContactsPage = () => {
  const [activeView, setActiveView] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('All Contacts');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = mockContacts.filter(c => 
    activeCategory === 'All Contacts' ? true : c.category === activeCategory
  );

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Contacts" />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-6 pb-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Contacts</h1>
              
              <div className="flex items-center gap-1">
                <button onClick={() => setActiveView('list')} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'list' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                  <List size={16} /> List
                </button>
                <button onClick={() => setActiveView('kanban')} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'kanban' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                  <Kanban size={16} /> Kanban
                </button>
                <button onClick={() => setActiveView('table')} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'table' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                  <Table size={16} /> Table
                </button>
                <button onClick={() => setActiveView('grid')} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'grid' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                  <GridIcon size={16} /> Grid
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <SlidersHorizontal size={14} />
                <span>Sort By</span>
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Filter size={14} />
                <span>Filter</span>
              </button>
              <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <Plus size={14} />
                <span>Add Contact</span>
              </button>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="px-8 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              <Plus size={14} /> Add Categories
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredContacts.map(contact => (
                <ContactGridItem 
                  key={contact.id} 
                  contact={contact} 
                  onClick={(c) => setSelectedContact(c)} 
                />
              ))}
            </div>
          </div>

        </main>
      </div>

      <AddContactModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      
      <ContactDetailsModal 
        isOpen={!!selectedContact} 
        contact={selectedContact} 
        onClose={() => setSelectedContact(null)} 
      />

    </div>
  );
};

export default ContactsPage;
