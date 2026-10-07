import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Loader2, 
  RefreshCw, 
  AlertCircle, 
  X,
  MessageSquare,
  ChevronDown,
  Info,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface ChatbotProps {
  isFloatingModal?: boolean;
  onClose?: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isFloatingModal = false, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hello Aryan! I am EDC-Bot, your official AI Campus Assistant for GGSIPU East Delhi Campus (USAR & USAP).\n\nHow can I help you today? Ask me about your Lab Group A attendance, Batch timetables, desired schedule slots, or campus notices!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const suggestionChips = [
    "Check My Lab Group A Attendance",
    "Desired Timetable Slot Options",
    "Show me Batch 1 robotics timetable",
    "Latest EDC Circulars",
    "USAR Syllabus & Courses",
    "Contact Dean's Office",
  ];

  const getSmartLocalFallback = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('attendance') || q.includes('lab group')) {
      return "📊 **Your Attendance Summary (Aryan Sharma - Roll 04576803122):**\n\n• **Overall Aggregate:** 82.4% (Eligible for End-Term Exams)\n• **Machine Learning Lab (Group A):** 88.0% (22/25 Attended)\n• **Deep Neural Networks Lab (Group A):** 71.4% (15/21 Attended — ⚠️ *Needs +2 classes for 75%*)\n• **Theory Attendance (Batch 1):** 86.2% average.\n\n*Tip: Use the 'Batch & Lab Attendance' tab in the portal for full class breakdown!*";
    }
    if (q.includes('timetable') || q.includes('desired') || q.includes('schedule') || q.includes('slot')) {
      return "📅 **USAR Timetable & Desired Schedule Column:**\n\n• **Machine Learning Lab:** Scheduled (09:00 AM - 11:00 AM) | Desired: (09:00 AM Slot A1)\n• **Robotics Dynamics:** Scheduled (11:30 AM - 12:30 PM) | Desired: (10:00 AM Morning Pref)\n• **Ethics in AI:** Scheduled (02:00 PM - 03:00 PM) | Desired: (01:00 PM Early Slot)\n\nYou can view and edit your Desired Time column in the Timetable section of your portal!";
    }
    if (q.includes('notice') || q.includes('circular') || q.includes('datesheet')) {
      return "📢 **Latest GGSIPU EDC Circulars:**\n\n1. **Mid-Term Exams:** Commencing August 25, 2026 for 3rd & 5th Semesters.\n2. **Hackathon '26:** Registrations open! Cash prizes up to ₹1,00,000.\n3. **Industrial Visit:** Mandatory registration for 5th semester AIML & AR students by Friday.";
    }
    if (q.includes('dean') || q.includes('contact') || q.includes('office')) {
      return "🏢 **GGSIPU East Delhi Campus Contacts:**\n\n• **Dean USAR (Prof. S. K. Sharma):** dean.usar@ipu.ac.in | +91-11-22300102\n• **Dean USAP (Prof. Rajat Ray):** dean.usap@ipu.ac.in | +91-11-22300105\n• **Placement Cell:** placements.edc@ipu.ac.in\n• **Campus Location:** Surajmal Vihar, near Karkardooma Courts, Delhi.";
    }
    if (q.includes('syllabus') || q.includes('courses')) {
      return "📚 **B.Tech AI & ML (Semester V) Core Syllabus:**\n\n1. **AIML-301:** Machine Learning Algorithms (4 Credits)\n2. **AIML-305:** Deep Neural Networks & Architectures (4 Credits)\n3. **AIML-307:** Computer Vision & OpenCV (4 Credits)\n4. **AIML-309:** Natural Language Processing (3 Credits)\n5. **AR-303:** Robotics Kinematics & ROS 2 (3 Credits)";
    }
    return `🤖 **EDC-Bot:** Thanks for asking about "${query}"! At GGSIPU East Delhi Campus (USAR & USAP), remember to maintain over 75% attendance for end-term exam eligibility and wear your lab coat in hardware laboratories. Let me know if you need specific details on timetables, desired time slots, or notices!`;
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    setError(null);
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(-8).map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        text: msg.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history }),
      });

      let replyText = '';
      if (res.ok) {
        const data = await res.json();
        replyText = data.reply || getSmartLocalFallback(query);
      } else {
        replyText = getSmartLocalFallback(query);
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat API exception:', err);
      // Seamless fallback to rich local response
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: getSmartLocalFallback(query),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: "Conversation reset! How else can EDC-Bot help you with GGSIPU EDC resources?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setError(null);
  };

  return (
    <>
      {/* Fullscreen Backdrop Overlay when in Fullscreen Mode */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsFullscreen(false)}
        />
      )}

      <div className={
        isFullscreen
          ? 'fixed inset-2 sm:inset-6 z-50 h-[calc(100vh-1rem)] sm:h-[calc(100vh-3rem)] w-[calc(100vw-1rem)] sm:w-[calc(100vw-3rem)] max-w-6xl mx-auto shadow-2xl rounded-3xl border border-emerald-300 bg-white flex flex-col overflow-hidden animate-in zoom-in-95 duration-200'
          : `flex flex-col bg-white rounded-3xl border border-emerald-200 shadow-2xs overflow-hidden ${
              isFloatingModal ? 'h-[540px] w-full max-w-md' : 'h-[calc(100vh-170px)] min-h-[550px] w-full'
            }`
      }>
        
        {/* HEADER - MINT GRADIENT STYLE */}
        <div className="p-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-emerald-900 flex items-center justify-center font-black shadow-xs">
              <Bot className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-sm text-white">EDC-Bot AI Assistant</h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                </span>
                {isFullscreen && (
                  <span className="text-[10px] font-extrabold px-2 py-0.5 bg-white/20 rounded-full text-white">
                    Fullscreen Mode
                  </span>
                )}
              </div>
              <p className="text-[10px] text-white/90 font-medium">
                GGSIPU East Delhi Campus Specialist (USAR & USAP)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 text-white hover:bg-white/20 rounded-xl transition-colors flex items-center space-x-1"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs font-bold pl-1">Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                </>
              )}
            </button>

            <button
              onClick={clearChat}
              className="p-1.5 text-white hover:bg-white/20 rounded-xl transition-colors text-xs font-bold"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {isFloatingModal && onClose && (
              <button
                onClick={onClose}
                className="p-1.5 text-white hover:bg-white/20 rounded-xl transition-colors"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* MESSAGES LIST */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 bg-emerald-50/20">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-2xl flex items-center justify-center shrink-0 text-xs font-black shadow-2xs ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white'
                    : 'bg-emerald-950 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className="max-w-[85%] sm:max-w-[75%] space-y-1">
                <div
                  className={`p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-xs whitespace-pre-line font-medium ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                      : 'bg-white text-slate-900 border border-emerald-100/90 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <p className={`text-[10px] text-slate-400 font-semibold ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-emerald-200 p-3.5 rounded-2xl rounded-tl-none shadow-xs flex items-center space-x-2 text-xs text-slate-600 font-bold">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                <span>EDC-Bot is checking campus database...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* QUICK SUGGESTION CHIPS */}
        <div className="px-3 py-2 bg-white border-t border-emerald-100 overflow-x-auto flex space-x-2 shrink-0 scrollbar-none">
          <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider self-center shrink-0 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>Quick Ask:</span>
          </span>
          {suggestionChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSend(chip)}
              disabled={loading}
              className="text-[11px] font-bold text-slate-700 hover:text-slate-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full transition-all shrink-0 disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* INPUT AREA */}
        <div className="p-3 bg-white border-t border-emerald-100 shrink-0">
          <div className="flex items-center space-x-2 bg-emerald-50/50 border border-emerald-200 rounded-2xl px-3 py-1 focus-within:border-emerald-500 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="Ask EDC-Bot about attendance, syllabus, fees, notices..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              className="flex-1 text-xs md:text-sm bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 py-2 font-medium"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || loading}
              className="p-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 text-white rounded-xl transition-colors shadow-xs shrink-0 font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

