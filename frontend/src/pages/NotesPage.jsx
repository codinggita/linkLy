import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import {
  Plus,
  SlidersHorizontal,
  Filter,
  MoreVertical,
  RotateCcw,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ChevronDown,
} from 'lucide-react';
import api from '../services/api';

/* ───────────────────────────── component ───────────────────────────── */
const NotesPage = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(24);
  const [fontFamily, setFontFamily] = useState('Inter');

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/notes');
      
      const transformedNotes = response.data.map(note => ({
        id: note._id,
        title: note.title,
        tags: note.tags || [],
        items: note.items || [],
        description: note.description || '',
        bullets: note.bullets || [],
        date: new Date(note.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        hasImage: false, // Images not yet supported in backend schema
      }));

      setNotes(transformedNotes);
      if (transformedNotes.length > 0 && !selectedNote) {
        setSelectedNote(transformedNotes[0]);
      }
    } catch (error) {
      console.error('Failed to fetch notes', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreateNote = async () => {
    try {
      await api.post('/api/notes', {
        title: 'New Note',
        tags: [{ label: 'General', color: 'bg-gray-100 text-gray-700' }],
        items: [],
        description: 'Start typing your new note here...',
        bullets: []
      });
      fetchNotes();
    } catch (error) {
      console.error('Failed to create note', error);
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Sidebar activePage="Notes" />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* ── Full-width Header ── */}
          <div className="px-8 pt-6 pb-4 flex items-center justify-between flex-shrink-0 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Notes</h1>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <SlidersHorizontal size={14} />
                <span>Sort By</span>
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Filter size={14} />
                <span>Filter</span>
              </button>
              <button 
                onClick={handleCreateNote}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plus size={14} />
                <span>Add Notes</span>
              </button>
            </div>
          </div>

          {/* ── Two-panel content ── */}
          <div className="flex-1 flex overflow-hidden">
            {/* ── Left Panel: Notes List ── */}
            <div className="w-[340px] border-r border-gray-200 flex flex-col bg-white flex-shrink-0">
              <div className="flex-1 overflow-y-auto px-4 pt-4">
                <div className="flex items-center justify-between px-2 mb-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">My Notes</p>
                  <button onClick={handleCreateNote} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Plus size={16} />
                  </button>
                </div>

                {loading ? (
                  <div className="flex justify-center p-6">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {notes.map((note) => (
                      <NoteListItem
                        key={note.id}
                        note={note}
                        isActive={selectedNote?.id === note.id}
                        onClick={() => setSelectedNote(note)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Right Panel: Note Detail ── */}
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {selectedNote ? (
                <>
                  {/* Note Header */}
                  <div className="px-8 pt-6 pb-4 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{selectedNote.title}</h2>
                        <p className="text-sm text-gray-400">{selectedNote.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {selectedNote.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color}`}
                          >
                            {tag.label}
                          </span>
                        ))}
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                          <RotateCcw size={16} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Rich Text Toolbar */}
                  <div className="px-8 py-3 border-b border-gray-100 flex items-center gap-1 overflow-x-auto">
                    {/* Font Family */}
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md hover:border-gray-300 cursor-pointer transition-colors">
                      <span className="text-sm text-gray-700 font-medium">T</span>
                      <span className="text-sm text-gray-600 font-medium">{fontFamily}</span>
                      <ChevronDown size={12} className="text-gray-400" />
                    </div>

                    <div className="w-px h-6 bg-gray-200 mx-2" />

                    {/* Font Size */}
                    <div className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md hover:border-gray-300 cursor-pointer transition-colors">
                      <span className="text-sm text-gray-600 font-medium">{fontSize}</span>
                      <ChevronDown size={12} className="text-gray-400" />
                    </div>

                    <div className="w-px h-6 bg-gray-200 mx-2" />

                    {/* Text Formatting */}
                    <ToolbarButton icon={<Bold size={15} />} />
                    <ToolbarButton icon={<Italic size={15} />} />
                    <ToolbarButton icon={<Underline size={15} />} />

                    <div className="w-px h-6 bg-gray-200 mx-2" />

                    {/* Alignment */}
                    <ToolbarButton icon={<AlignLeft size={15} />} />
                    <ToolbarButton icon={<AlignCenter size={15} />} />
                    <ToolbarButton icon={<AlignRight size={15} />} />
                    <ToolbarButton icon={<AlignJustify size={15} />} />

                    <div className="w-px h-6 bg-gray-200 mx-2" />

                    {/* Lists */}
                    <div className="flex items-center gap-0.5">
                      <ToolbarButton icon={<List size={15} />} />
                      <ChevronDown size={10} className="text-gray-400" />
                    </div>

                    <div className="flex items-center gap-0.5">
                      <ToolbarButton icon={<ListOrdered size={15} />} />
                      <ChevronDown size={10} className="text-gray-400" />
                    </div>

                    <div className="w-px h-6 bg-gray-200 mx-2" />

                    {/* Grid / more options */}
                    <ToolbarButton icon={
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                      </svg>
                    } />
                  </div>

                  {/* Note Content */}
                  <div className="flex-1 overflow-y-auto px-8 py-6">
                    {selectedNote.items.length > 0 ? (
                      <div className="flex flex-col gap-5">
                        {selectedNote.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 group">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 hover:border-gray-400 cursor-pointer transition-colors" />
                            <span className="text-base text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {selectedNote.description && (
                          <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{selectedNote.description}</p>
                        )}
                        {selectedNote.bullets && selectedNote.bullets.length > 0 && (
                          <ul className="list-disc pl-6 space-y-1.5">
                            {selectedNote.bullets.map((bullet, i) => (
                              <li key={i} className="text-sm text-gray-600">{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {selectedNote.hasImage && (
                          <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
                            <img
                              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop"
                              alt="Note attachment"
                              className="w-full max-w-sm h-48 object-cover"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <p>Select a note to view or create a new one.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ───────────────────── toolbar button ───────────────────── */
const ToolbarButton = ({ icon, active }) => (
  <button
    className={`p-1.5 rounded-md transition-colors ${active
      ? 'bg-gray-200 text-gray-900'
      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
      }`}
  >
    {icon}
  </button>
);

/* ───────────────────── note list item ───────────────────── */
const NoteListItem = ({ note, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-4 rounded-xl transition-all ${isActive
        ? 'bg-white shadow-sm border border-gray-200'
        : 'bg-transparent hover:bg-gray-50 border border-transparent'
        }`}
    >
      {/* Tags */}
      {note.tags && note.tags.length > 0 && (
        <div className="flex items-center gap-1.5 mb-2">
          {note.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{note.title}</h3>

      {/* Preview items (checklist) */}
      {note.items && note.items.length > 0 && (
        <div className="flex flex-col gap-1.5">
          {note.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-gray-300 flex-shrink-0" />
              <span className="text-xs text-gray-500 truncate">{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Preview description */}
      {note.description && (
        <div>
          <p className="text-xs text-gray-500 mb-1.5 line-clamp-2">{note.description}</p>
          {note.bullets && note.bullets.length > 0 && (
            <ul className="list-disc pl-4 space-y-0.5">
              {note.bullets.map((bullet, i) => (
                <li key={i} className="text-xs text-gray-500 truncate">{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Image preview */}
      {note.hasImage && (
        <div className="mt-2 rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=120&fit=crop"
            alt="Note preview"
            className="w-full h-24 object-cover"
          />
        </div>
      )}
    </button>
  );
};
export default NotesPage;