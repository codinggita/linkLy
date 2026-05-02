import { useState } from 'react';
import {
  ArrowLeft,
  Archive,
  AlertCircle,
  Trash2,
  Star,
  Reply,
  Printer,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ChevronDown,
  Paperclip,
  Image,
  Smile,
  Type,
  Undo2,
  Redo2,
  Send,
  Forward,
} from 'lucide-react';

const EmailDetail = ({ email, onBack }) => {
  const [replyText, setReplyText] = useState('');
  const [showReply, setShowReply] = useState(true);

  return (
    <div className="flex flex-col h-full">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            <ArrowLeft size={16} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Archive size={16} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <AlertCircle size={16} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>1-50 from 115</span>
          <button className="p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Sender Info */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(email.sender)}&background=random&size=44`}
              alt={email.sender}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h3 className="text-sm font-bold text-gray-900">{email.sender}</h3>
              <p className="text-xs text-gray-400">{email.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{email.fullDate}</span>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-gray-100 rounded-md transition-colors">
                <Star size={16} />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                <Reply size={16} />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                <Printer size={16} />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Subject */}
        <h2 className="text-xl font-bold text-gray-900 mb-5">{email.subject}</h2>

        {/* Body */}
        <div className="text-sm text-gray-600 leading-relaxed space-y-4 mb-8">
          {email.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Reply Composer */}
        {showReply && (
          <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
            {/* To field */}
            <div className="flex items-center px-4 py-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <Undo2 size={14} />
                </button>
                <ChevronDown size={12} className="text-gray-300" />
              </div>
              <div className="flex items-center gap-2 ml-3 flex-1">
                <span className="text-sm text-gray-400">To:</span>
                <div className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md">
                  <span className="text-sm text-gray-700">{email.sender}</span>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={12} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-gray-400">
                <button className="hover:text-gray-600 transition-colors">Cc</button>
                <button className="hover:text-gray-600 transition-colors">Bcc</button>
              </div>
            </div>

            {/* Reply Body */}
            <div className="px-4 py-3">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write your reply..."
                rows={3}
                className="w-full text-sm text-gray-700 outline-none resize-none placeholder-gray-400 bg-transparent leading-relaxed"
              />
            </div>

            {/* Rich Text Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
              <div className="flex items-center gap-0.5">
                <ToolBtn icon={<Undo2 size={14} />} />
                <ToolBtn icon={<Redo2 size={14} />} />
                <Divider />
                <ToolBtn icon={<Type size={14} />} />
                <span className="text-xs text-gray-400 mx-1">Inter</span>
                <ChevronDown size={10} className="text-gray-400 mr-1" />
                <span className="text-xs text-gray-400">24</span>
                <ChevronDown size={10} className="text-gray-400" />
                <Divider />
                <ToolBtn icon={<Bold size={14} />} />
                <ToolBtn icon={<Italic size={14} />} />
                <ToolBtn icon={<Underline size={14} />} />
                <Divider />
                <ToolBtn icon={<AlignLeft size={14} />} />
                <ToolBtn icon={<AlignCenter size={14} />} />
                <ToolBtn icon={<AlignRight size={14} />} />
                <Divider />
                <ToolBtn icon={<List size={14} />} />
                <ChevronDown size={10} className="text-gray-400" />
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100">
              <div className="flex items-center gap-1">
                <ToolBtn icon={<Paperclip size={15} />} />
                <ToolBtn icon={<Image size={15} />} />
                <ToolBtn icon={<Smile size={15} />} />
                <ToolBtn icon={<Type size={15} />} />
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                  <Trash2 size={15} />
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  <span>Send Mail</span>
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reply / Forward Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowReply(true)}
            className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            <Reply size={14} />
            <span>Reply</span>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
            <Forward size={14} />
            <span>Forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* Small helpers */
const ToolBtn = ({ icon }) => (
  <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
    {icon}
  </button>
);

const Divider = () => <div className="w-px h-5 bg-gray-200 mx-1" />;

export default EmailDetail;
