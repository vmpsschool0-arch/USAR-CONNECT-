import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  BookOpen, 
  GraduationCap, 
  Bell, 
  Bot, 
  User, 
  Search, 
  RefreshCw, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  Calculator, 
  QrCode, 
  X, 
  ChevronRight, 
  Award, 
  FileText, 
  Building2, 
  Sparkles,
  Menu,
  MapPin,
  Phone,
  Mail,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  HelpCircle,
  Plus,
  SlidersHorizontal,
  MessageSquare,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Edit3,
  Bookmark,
  Camera,
  Heart,
  Share2,
  Send
} from 'lucide-react';

import { Chatbot } from './Chatbot';
import { BatchAttendanceTracker } from './BatchAttendanceTracker';
import { CampusHomeView } from './CampusHomeView';
import { CampusGalleryView } from './CampusGalleryView';
import { TimetableSlot } from '../types';

export const StudentPortalView: React.FC = () => {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<
    'home' | 'dashboard' | 'attendance' | 'timetable' | 'gallery' | 'courses' | 'grades' | 'notices' | 'profile'
  >('home');

  // Sidebar mobile collapse toggle
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Modals & Floating Chatbot State
  const [showIdCard, setShowIdCard] = useState(false);
  const [showAttendanceCalc, setShowAttendanceCalc] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Desired Timetable Slot Modal State
  const [editingSlot, setEditingSlot] = useState<TimetableSlot | null>(null);
  const [desiredTimeInput, setDesiredTimeInput] = useState('');

  // Search & Filter States
  const [noticeSearch, setNoticeSearch] = useState('');
  const [noticeCategory, setNoticeCategory] = useState('All');
  const [selectedDay, setSelectedDay] = useState('Thursday');

  // Student Profile Data
  const [profile, setProfile] = useState({
    name: 'Aryan Sharma',
    enrollmentNumber: '04576803122',
    program: 'B.Tech AI & ML',
    programFull: 'B.Tech Artificial Intelligence & Machine Learning',
    school: 'USAR (School of Automation & Robotics)',
    branch: 'B.Tech AI & ML',
    semester: 'Semester V',
    batch: 'Batch 1' as const,
    group: 'Group A' as const,
    email: 'aryan.04576803122@usar.ipu.ac.in',
    attendancePercent: 82.4,
    attendedClasses: 112,
    totalClasses: 136,
    creditsEarned: 124,
    totalCredits: 160,
    cgpa: 8.92,
    bloodGroup: 'O+',
    batchYears: '2022-2026',
  });

  const [profileFormData, setProfileFormData] = useState(profile);

  const getInitials = (nameStr: string) => {
    return nameStr
      .split(' ')
      .map((n) => n[0])
      .filter(Boolean)
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'AS';
  };

  // Timetable Schedule with Desired Time Table Column
  const [timetable, setTimetable] = useState<TimetableSlot[]>([
    { id: '1', time: '09:00 AM - 11:00 AM', desiredTime: '09:00 AM - 11:00 AM (Pref A1)', subject: 'Machine Learning Lab', code: 'AIML-301L', faculty: 'Dr. S. Verma', room: 'Lab Block B • Room 204', day: 'Thursday', type: 'Lab', batch: 'Batch 1', group: 'Group A' },
    { id: '2', time: '11:30 AM - 12:30 PM', desiredTime: '10:00 AM - 11:00 AM (Morning Pref)', subject: 'Robotics Dynamics', code: 'AIML-303', faculty: 'Prof. K. Iyer', room: 'Lecture Hall 3', day: 'Thursday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '3', time: '02:00 PM - 03:00 PM', desiredTime: '01:00 PM - 02:00 PM (Early Slot)', subject: 'Ethics in AI', code: 'HS-305', faculty: 'Guest Speaker', room: 'Seminar Hall A', day: 'Thursday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '4', time: '09:00 AM - 10:00 AM', desiredTime: '09:00 AM - 10:00 AM (Matched)', subject: 'Deep Neural Networks', code: 'AIML-305', faculty: 'Dr. R. Gupta', room: 'Lecture Hall 1', day: 'Monday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '5', time: '10:00 AM - 11:00 AM', desiredTime: '10:00 AM - 11:00 AM (Matched)', subject: 'Computer Vision', code: 'AIML-307', faculty: 'Prof. A. Malhotra', room: 'Lecture Hall 1', day: 'Monday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '6', time: '01:00 PM - 03:00 PM', desiredTime: '02:00 PM - 04:00 PM (Afternoon Lab)', subject: 'CV & Image Processing Lab', code: 'AIML-307L', faculty: 'Prof. A. Malhotra', room: 'Lab Block A • Room 102', day: 'Monday', type: 'Lab', batch: 'Batch 1', group: 'Group A' },
    { id: '7', time: '09:30 AM - 11:30 AM', desiredTime: '09:00 AM - 11:00 AM (Morning Slot)', subject: 'Natural Language Processing', code: 'AIML-309', faculty: 'Dr. P. Sharma', room: 'Lecture Hall 2', day: 'Tuesday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '8', time: '11:30 AM - 01:30 PM', desiredTime: '11:30 AM - 01:30 PM (Matched)', subject: 'NLP Lab', code: 'AIML-309L', faculty: 'Dr. P. Sharma', room: 'Lab Block B • Room 201', day: 'Tuesday', type: 'Lab', batch: 'Batch 1', group: 'Group A' },
    { id: '9', time: '10:00 AM - 12:00 PM', desiredTime: '10:00 AM - 12:00 PM (Matched)', subject: 'Reinforcement Learning', code: 'AIML-311', faculty: 'Dr. S. Verma', room: 'Lecture Hall 3', day: 'Wednesday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '10', time: '01:30 PM - 03:30 PM', desiredTime: '01:00 PM - 03:00 PM (Early Slot)', subject: 'IoT Systems & Edge AI', code: 'IIOT-302', faculty: 'Prof. M. K. Roy', room: 'Lab Block C • Room 305', day: 'Wednesday', type: 'Lab', batch: 'Batch 1', group: 'Group A' },
    { id: '11', time: '09:00 AM - 11:00 AM', desiredTime: '09:00 AM - 11:00 AM (Matched)', subject: 'Capstone Project Review I', code: 'AIML-399', faculty: 'Department Mentors', room: 'Auditorium Block', day: 'Friday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
    { id: '12', time: '11:30 AM - 01:00 PM', desiredTime: '11:00 AM - 12:30 PM (Midday Slot)', subject: 'Industrial Automation', code: 'AR-304', faculty: 'Dr. V. N. Singh', room: 'Lecture Hall 2', day: 'Friday', type: 'Lecture', batch: 'Batch 1', group: 'Entire Batch' },
  ]);

  // Courses
  const [courses] = useState([
    { code: 'AIML-301', name: 'Machine Learning Algorithms & Models', faculty: 'Dr. S. Verma', credits: 4, type: 'Theory + Lab', progress: 78, syllabus: 'Linear Regression, SVM, Decision Trees, Clustering, Ensembles' },
    { code: 'AIML-305', name: 'Deep Neural Networks & Architectures', faculty: 'Dr. R. Gupta', credits: 4, type: 'Theory', progress: 65, syllabus: 'CNNs, RNNs, LSTMs, Transformers, Attention Mechanisms, PyTorch' },
    { code: 'AIML-307', name: 'Computer Vision & Image Processing', faculty: 'Prof. A. Malhotra', credits: 4, type: 'Theory + Lab', progress: 82, syllabus: 'OpenCV, Object Detection, Segmentation, YOLO, Feature Mapping' },
    { code: 'AIML-309', name: 'Natural Language Processing', faculty: 'Dr. P. Sharma', credits: 3, type: 'Theory + Lab', progress: 70, syllabus: 'Tokenization, N-Grams, BERT, LLMs, Text Embeddings' },
    { code: 'AR-303', name: 'Robotics Dynamics & Kinematics', faculty: 'Prof. K. Iyer', credits: 3, type: 'Theory', progress: 85, syllabus: 'DH Parameters, Forward/Inverse Kinematics, ROS 2 Framework' },
    { code: 'HS-305', name: 'Ethics in AI & Intellectual Property', faculty: 'Guest Faculty', credits: 2, type: 'Humanities', progress: 90, syllabus: 'AI Safety, Bias, Privacy Laws, Patents in Software' },
  ]);

  // Exam Grades Data
  const [semesterGrades] = useState([
    { sem: 'Semester I', sgpa: '8.80', credits: 24, status: 'Passed (Distinction)' },
    { sem: 'Semester II', sgpa: '8.95', credits: 26, status: 'Passed (Distinction)' },
    { sem: 'Semester III', sgpa: '9.10', credits: 24, status: 'Passed (Distinction)' },
    { sem: 'Semester IV', sgpa: '8.85', credits: 25, status: 'Passed (Distinction)' },
    { sem: 'Semester V (Current)', sgpa: '8.92 (Mid-Term)', credits: 25, status: 'In Progress' },
  ]);

  const [subjectMarks] = useState([
    { code: 'AIML-301', subject: 'Machine Learning', internal: 24, maxInternal: 25, external: 68, maxExternal: 75, total: 92, grade: 'O (Outstanding)' },
    { code: 'AIML-305', subject: 'Deep Neural Networks', internal: 23, maxInternal: 25, external: 65, maxExternal: 75, total: 88, grade: 'A+ (Excellent)' },
    { code: 'AIML-307', subject: 'Computer Vision', internal: 25, maxInternal: 25, external: 70, maxExternal: 75, total: 95, grade: 'O (Outstanding)' },
    { code: 'AIML-309', subject: 'Natural Language Processing', internal: 22, maxInternal: 25, external: 62, maxExternal: 75, total: 84, grade: 'A+ (Excellent)' },
    { code: 'AR-303', subject: 'Robotics Dynamics', internal: 21, maxInternal: 25, external: 60, maxExternal: 75, total: 81, grade: 'A+ (Excellent)' },
  ]);

  // Notices
  const [notices] = useState([
    { id: 'n1', title: "Hackathon '26 Registrations Open", category: 'Events', date: 'Aug 10, 2026', summary: 'Annual USAR Hackathon registrations are now live for all AR, AIML, IIoT & Automation students. Win cash prizes up to ₹1,00,000.', author: 'USAR Tech Club', isImportant: true },
    { id: 'n2', title: 'Mid-Term Examination Date Sheet Released', category: 'Exams', date: 'Aug 08, 2026', summary: 'Mid-term evaluation exams for 3rd and 5th Semester start from 25th August 2026. Check official GGSIPU portal for details.', author: 'Controller of Exams', isImportant: true },
    { id: 'n3', title: 'Mandatory Industrial Visit to Automation Expo', category: 'Academic', date: 'Aug 05, 2026', summary: 'All 5th semester AIML and Automation students must complete registration for the upcoming Industrial Visit by Friday.', author: 'Department of AIML', isImportant: false },
    { id: 'n4', title: 'Campus Drive: Robotics & AI Internship 2027', category: 'Placement', date: 'Aug 02, 2026', summary: 'Top AI research lab hiring summer engineering interns. Eligible branches: AIML, AR, IIoT with minimum 7.5 CGPA.', author: 'Training & Placement Cell', isImportant: false },
    { id: 'n5', title: 'East Delhi Campus Sports Meet Announcement', category: 'Events', date: 'Jul 28, 2026', summary: 'Inter-branch cricket, basketball and badminton tournaments commencing next month at Surajmal Vihar sports complex.', author: 'Sports Council', isImportant: false },
  ]);

  // Attendance Calc States
  const [calcAttended, setCalcAttended] = useState(profile.attendedClasses);
  const [calcTotal, setCalcTotal] = useState(profile.totalClasses);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard Feed';
      case 'home': return 'Campus Homepage';
      case 'attendance': return 'Batch & Lab Attendance';
      case 'timetable': return 'Timetable & Desired Slots';
      case 'gallery': return 'Campus Photo Gallery';
      case 'assistant': return 'EDC-Bot Assistant';
      case 'courses': return 'My Courses & Syllabus';
      case 'grades': return 'Exam Results & Grades';
      case 'notices': return 'Campus Circulars';
      case 'profile': return 'Profile & Settings';
      default: return 'Student Portal';
    }
  };

  const daySchedule = timetable.filter(t => t.day === selectedDay);

  const filteredNotices = notices.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(noticeSearch.toLowerCase()) || n.summary.toLowerCase().includes(noticeSearch.toLowerCase());
    const matchesCat = noticeCategory === 'All' || n.category === noticeCategory;
    return matchesSearch && matchesCat;
  });

  const handleSaveDesiredTime = () => {
    if (!editingSlot) return;
    setTimetable(prev => prev.map(slot => {
      if (slot.id === editingSlot.id) {
        return { ...slot, desiredTime: desiredTimeInput };
      }
      return slot;
    }));
    setEditingSlot(null);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/60 to-cyan-50/70 flex flex-col md:flex-row font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* MOBILE TOP BAR NAVIGATION HEADER - VIBRANT MINT GREEN GRADIENT */}
      <div className="md:hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-3.5 flex items-center justify-between border-b border-emerald-400/30 sticky top-0 z-40 shadow-md">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 text-white hover:bg-white/20 rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjEYMtfqpPGj03NXqp-2xvjXfTOA2avV2d871Jr7oLg&s=10" 
              alt="GGSIPU Logo" 
              className="w-8 h-8 object-contain rounded-xl shadow-md bg-white p-0.5"
              referrerPolicy="no-referrer"
            />
            <span className="font-black text-base tracking-tight text-white drop-shadow-xs">GGSIPU EDC</span>
          </div>
        </div>

        <button 
          onClick={() => setShowIdCard(true)}
          className="text-xs font-black text-emerald-950 bg-lime-300 hover:bg-lime-200 px-3.5 py-1.5 rounded-full flex items-center space-x-1 shadow-md transition-all active:scale-95"
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>Pass</span>
        </button>
      </div>

      {/* LEFT SIDEBAR NAVIGATION - BRIGHT MINT GREEN LIGHT LAYOUT */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-md text-slate-900 flex flex-col border-r border-emerald-100 shadow-lg transition-transform duration-300 shrink-0
        ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        {/* BRAND LOGO HEADER */}
        <div className="p-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-3">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjEYMtfqpPGj03NXqp-2xvjXfTOA2avV2d871Jr7oLg&s=10" 
              alt="GGSIPU Logo" 
              className="w-10 h-10 object-contain rounded-2xl shadow-md bg-white p-0.5"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="font-black text-base text-white tracking-tight leading-none drop-shadow-xs">GGSIPU EDC</h1>
              <p className="text-[10px] text-lime-200 font-extrabold tracking-wider uppercase mt-1">East Delhi Campus</p>
            </div>
          </div>

          <button 
            onClick={() => setMobileSidebarOpen(false)}
            className="md:hidden text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STUDENT MINI PROFILE STORY RING CARD */}
        <div className="p-4 border-b border-sky-100 bg-gradient-to-b from-sky-50/80 to-indigo-50/50">
          <div className="flex items-center space-x-3 bg-white p-3 rounded-2xl border border-sky-200/80 shadow-xs">
            {/* Bright gradient story ring */}
            <div className="p-[2.5px] bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 rounded-full shrink-0 shadow-xs">
              <div className="w-10 h-10 bg-white p-0.5 rounded-full">
                <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black rounded-full flex items-center justify-center text-xs shadow-inner">
                  AS
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-slate-900 text-xs truncate">{profile.name}</h3>
              <p className="text-[10px] text-blue-600 font-mono font-black">{profile.enrollmentNumber}</p>
              <p className="text-[10px] text-slate-600 font-semibold truncate">{profile.program} • {profile.batch}</p>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS - INSTAGRAM STYLE */}
        <nav className="p-3 space-y-1 overflow-y-auto flex-1 font-semibold text-xs">
          
          <button
            onClick={() => { setActiveTab('home'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'home'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <Globe className={`w-4 h-4 shrink-0 ${activeTab === 'home' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <span>Campus Explore</span>
          </button>

          <button
            onClick={() => { setActiveTab('dashboard'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'dashboard'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <LayoutDashboard className={`w-4 h-4 shrink-0 ${activeTab === 'dashboard' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <span>Feed Dashboard</span>
          </button>

          <button
            onClick={() => { setActiveTab('attendance'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'attendance'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <Users className={`w-4 h-4 shrink-0 ${activeTab === 'attendance' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <div className="flex items-center justify-between w-full">
              <span>Batch Attendance</span>
              <span className="px-1.5 py-0.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-full text-[9px] font-bold">82%</span>
            </div>
          </button>

          <button
            onClick={() => { setActiveTab('timetable'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'timetable'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <Calendar className={`w-4 h-4 shrink-0 ${activeTab === 'timetable' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <div className="flex items-center justify-between w-full">
              <span>Timetable & Desired</span>
              <span className="px-1.5 py-0.5 bg-teal-100 text-teal-800 rounded-full text-[9px] font-bold">Slots</span>
            </div>
          </button>

          <button
            onClick={() => { setActiveTab('gallery'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'gallery'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <Camera className={`w-4 h-4 shrink-0 ${activeTab === 'gallery' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <div className="flex items-center justify-between w-full">
              <span>Campus Gallery</span>
              <span className="px-1.5 py-0.5 bg-lime-100 text-emerald-900 rounded-full text-[9px] font-bold">Photos</span>
            </div>
          </button>

          <button
            onClick={() => { setActiveTab('courses'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'courses'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <BookOpen className={`w-4 h-4 shrink-0 ${activeTab === 'courses' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <span>Courses & Syllabus</span>
          </button>

          <button
            onClick={() => { setActiveTab('grades'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'grades'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <GraduationCap className={`w-4 h-4 shrink-0 ${activeTab === 'grades' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <span>Grades & SGPA</span>
          </button>

          <button
            onClick={() => { setActiveTab('notices'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'notices'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <Bell className={`w-4 h-4 shrink-0 ${activeTab === 'notices' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <span>Notices Feed</span>
          </button>

          <button
            onClick={() => { setActiveTab('profile'); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-all ${
              activeTab === 'profile'
                ? 'bg-emerald-100/80 text-emerald-950 font-extrabold shadow-2xs border-l-4 border-emerald-600'
                : 'text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950'
            }`}
          >
            <User className={`w-4 h-4 shrink-0 ${activeTab === 'profile' ? 'text-emerald-600' : 'text-slate-600'}`} />
            <span>Profile & Settings</span>
          </button>

        </nav>

        {/* BOTTOM DIGITAL ID CARD BOX */}
        <div className="p-3 border-t border-emerald-100 bg-emerald-50/60">
          <div className="bg-white rounded-2xl p-3 border border-emerald-200/90 space-y-2 text-slate-900 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase text-emerald-600 tracking-wider block">GGSIPU EDC PASS</span>
                <span className="text-xs font-extrabold text-slate-900">{profile.name}</span>
              </div>
              <QrCode className="w-5 h-5 text-emerald-800 shrink-0" />
            </div>

            <button
              onClick={() => setShowIdCard(true)}
              className="w-full py-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-[11px] rounded-xl transition-all shadow-xs"
            >
              Digital Campus Pass
            </button>

            {/* CREATED BY CHECKBOX IN SIDEBAR BOTTOM */}
            <div className="pt-1.5 border-t border-emerald-100 flex items-center justify-center">
              <label className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold text-slate-700 cursor-pointer select-none bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200/80">
                <input
                  type="checkbox"
                  defaultChecked
                  readOnly
                  className="w-3.5 h-3.5 text-emerald-600 rounded border-emerald-300 accent-emerald-600 cursor-pointer"
                />
                <span>CREATED BY: <strong className="text-emerald-700 font-black">Fresh Coders</strong></span>
              </label>
            </div>
          </div>
        </div>

      </aside>

      {/* MAIN SHELL AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* TOP UTILITY HEADER - MINT GREEN ACCENTS */}
        <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100 px-6 py-3.5 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">GGSIPU EDC</span>
              <span className="text-slate-300 font-normal">/</span>
              <span className="text-slate-800">{getPageTitle()}</span>
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAttendanceCalc(true)}
              className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 rounded-full transition-colors font-bold text-xs flex items-center space-x-1.5 border border-emerald-200"
              title="75% Attendance Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Calc 75%</span>
            </button>

            <button
              onClick={() => setShowIdCard(true)}
              className="p-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-full transition-opacity hover:opacity-90 font-bold text-xs shadow-xs"
              title="Digital Student ID"
            >
              <QrCode className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* DYNAMIC MAIN CONTENT VIEW */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-cyan-50/40 p-4 sm:p-6 space-y-6">
          
          {/* HEADER LIVE ALERT BANNER */}
          <div className="bg-white/90 backdrop-blur-md text-slate-900 p-4 sm:p-5 rounded-3xl shadow-xs border border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center">
                  <Bell className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider block">Official Circular</span>
                <p className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  Mid-Term Exam Schedule Announced • Attendance Status: <span className="underline font-mono text-emerald-700 font-extrabold">82.4% (Eligible)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setActiveTab('timetable')}
                className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xs transition-opacity flex items-center space-x-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Desired Slots</span>
              </button>

              <button
                onClick={() => setActiveTab('notices')}
                className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-bold text-xs rounded-xl border border-emerald-200 transition-colors"
              >
                Notices Feed
              </button>
            </div>
          </div>

          {/* ========================================================
              TAB: DASHBOARD FEED
             ======================================================== */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* KEY STATS METRICS */}
              <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-3xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Attendance Status</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black text-slate-900">{profile.attendancePercent}%</span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Eligible (75%+)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">{profile.attendedClasses} / {profile.totalClasses} classes attended</p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Academic CGPA</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black text-slate-900">{profile.cgpa}</span>
                    <span className="text-xs font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      A+ Distinction
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">{profile.semester} • Rank #4 in AIML</p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Earned Credits</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black text-slate-900">{profile.creditsEarned} / {profile.totalCredits}</span>
                    <span className="text-xs font-extrabold text-cyan-800 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                      GGSIPU Norms
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">B.Tech Curriculum Progress</p>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Active Batch Roster</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black text-emerald-600">{profile.batch}</span>
                    <span className="text-xs font-extrabold text-slate-900 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {profile.group}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">USAR AIML • Semester V</p>
                </div>
              </div>

              {/* TIMETABLE & TODAY'S CLASSES WITH DESIRED TIME COLUMN SUMMARY */}
              <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-emerald-100 pb-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Class Schedule ({selectedDay})</h3>
                    <p className="text-xs text-slate-500 font-medium">Official timetable and user-customized desired slot preferences</p>
                  </div>

                  <div className="flex space-x-1 bg-emerald-50 p-1 rounded-2xl text-xs font-bold">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-3 py-1 rounded-xl transition-all ${
                          selectedDay === day ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-extrabold shadow-2xs' : 'text-slate-700 hover:text-slate-950'
                        }`}
                      >
                        {day.substring(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  {daySchedule.length > 0 ? (
                    daySchedule.map((slot) => (
                      <div
                        key={slot.id}
                        className="p-4 rounded-2xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                              slot.type === 'Lab' ? 'bg-teal-100 text-teal-800' : 'bg-cyan-100 text-cyan-800'
                            }`}>
                              {slot.type}
                            </span>
                            <span className="text-xs font-mono font-bold text-emerald-700">{slot.code}</span>
                            <span className="text-[10px] font-bold text-slate-400">• {slot.group}</span>
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">{slot.subject}</h4>
                          <p className="text-xs text-slate-500 font-medium">{slot.faculty} • {slot.room}</p>
                        </div>

                        <div className="flex flex-col sm:items-end gap-1.5">
                          <span className="text-xs font-bold text-slate-800 flex items-center space-x-1 bg-white px-3 py-1 rounded-xl border border-emerald-100">
                            <Clock className="w-3.5 h-3.5 text-emerald-600" />
                            <span><strong>Scheduled:</strong> {slot.time}</span>
                          </span>

                          <span className="text-[11px] font-extrabold text-emerald-800 flex items-center space-x-1 bg-emerald-100/70 px-3 py-1 rounded-xl border border-emerald-200">
                            <Bookmark className="w-3 h-3 text-emerald-600" />
                            <span><strong>Desired Slot:</strong> {slot.desiredTime || slot.time}</span>
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-slate-400 text-xs bg-emerald-50/40 rounded-2xl border border-dashed border-emerald-200 font-medium">
                      No scheduled classes for {selectedDay}.
                    </div>
                  )}
                </div>

                <div className="pt-2 text-right">
                  <button
                    onClick={() => setActiveTab('timetable')}
                    className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center space-x-1"
                  >
                    <span>Open Full Timetable & Edit Desired Columns</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* QUICK ANNOUNCEMENTS & BATCH LINKS */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                
                <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-4">
                  <div className="flex justify-between items-center border-b border-emerald-100 pb-3">
                    <h3 className="font-extrabold text-slate-900 text-base">Recent Circulars</h3>
                    <button
                      onClick={() => setActiveTab('notices')}
                      className="text-xs font-bold text-emerald-600 hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-3">
                    {notices.slice(0, 3).map((n) => (
                      <div key={n.id} className="p-3.5 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                            {n.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">{n.date}</span>
                        </div>
                        <h4 className="font-extrabold text-xs text-slate-900">{n.title}</h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2">{n.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white text-slate-900 p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-xl">
                      <div className="p-2 bg-white rounded-xl">
                        <Bot className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900">EDC-Bot Assistant</h3>
                  </div>
                  <p className="text-xs font-medium leading-relaxed text-slate-600">
                    Have queries regarding your Group A attendance, desired timetable slots, or USAR exam datesheet? Ask your AI companion!
                  </p>
                  <button
                    onClick={() => setActiveTab('assistant')}
                    className="w-full py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xs transition-opacity flex items-center justify-center space-x-2"
                  >
                    <span>Launch EDC-Bot</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================
              TAB: EMBEDDED CAMPUS HOMEPAGE
             ======================================================== */}
          {activeTab === 'home' && (
            <CampusHomeView onNavigateTab={(t) => setActiveTab(t)} />
          )}

          {/* ========================================================
              TAB: CAMPUS GALLERY & OFFICIAL PHOTO TOUR
             ======================================================== */}
          {activeTab === 'gallery' && (
            <CampusGalleryView />
          )}

          {/* ========================================================
              TAB: BATCH & LAB ATTENDANCE TRACKER
             ======================================================== */}
          {activeTab === 'attendance' && (
            <BatchAttendanceTracker studentProfile={{
              name: profile.name,
              enrollmentNumber: profile.enrollmentNumber,
              branch: profile.branch,
              batch: profile.batch,
              group: profile.group,
            }} />
          )}

          {/* ========================================================
              TAB: FULL TIMETABLE & DESIRED SCHEDULE COLUMN VIEW
             ======================================================== */}
          {activeTab === 'timetable' && (
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-emerald-100 pb-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl">Official Timetable & Desired Time Schedule</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      USAR B.Tech AIML (Batch 1 • Group A) — View scheduled times and set your preferred desired time slots
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-extrabold text-xs rounded-full border border-emerald-200">
                      Semester V
                    </span>
                  </div>
                </div>

                {/* DAY FILTER TABS */}
                <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        selectedDay === day
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-2xs font-extrabold'
                          : 'bg-emerald-50/70 text-slate-700 hover:bg-emerald-100'
                      }`}
                    >
                      {day} Schedule
                    </button>
                  ))}
                </div>

                {/* DESIRED TIMETABLE TABLE LAYOUT */}
                <div className="overflow-x-auto border border-emerald-200/80 rounded-2xl">
                  <table className="w-full text-left text-xs font-semibold text-slate-800">
                    <thead className="bg-emerald-50 text-slate-900 uppercase font-bold text-[11px] tracking-wider border-b border-emerald-200">
                      <tr>
                        <th className="p-4">Day</th>
                        <th className="p-4">Subject & Code</th>
                        <th className="p-4">Official Scheduled Time</th>
                        <th className="p-4 text-emerald-900 bg-emerald-100/70 border-x border-emerald-200 font-bold">
                          🎯 Desired Time Column (Preferred)
                        </th>
                        <th className="p-4">Faculty & Venue</th>
                        <th className="p-4 text-center">Batch / Group</th>
                        <th className="p-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-100">
                      {daySchedule.map((slot) => {
                        const isMatch = slot.desiredTime && slot.desiredTime.includes(slot.time.split(' ')[0]);
                        return (
                          <tr key={slot.id} className="hover:bg-emerald-50/40 transition-colors">
                            <td className="p-4 font-extrabold text-slate-900">{slot.day}</td>
                            <td className="p-4">
                              <div className="space-y-0.5">
                                <span className="font-mono font-bold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded text-[10px]">
                                  {slot.code}
                                </span>
                                <p className="font-extrabold text-slate-900 text-xs mt-0.5">{slot.subject}</p>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="font-extrabold text-slate-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 inline-flex items-center space-x-1">
                                <Clock className="w-3.5 h-3.5 text-slate-500" />
                                <span>{slot.time}</span>
                              </span>
                            </td>
                            {/* DESIRED TIME COLUMN */}
                            <td className="p-4 bg-emerald-50/40 border-x border-emerald-200">
                              <div className="space-y-1">
                                <span className="font-extrabold text-emerald-950 bg-emerald-100/80 px-3 py-1 rounded-xl border border-emerald-300 inline-flex items-center space-x-1 shadow-2xs">
                                  <Bookmark className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>{slot.desiredTime || slot.time}</span>
                                </span>
                                {isMatch ? (
                                  <span className="text-[10px] font-extrabold text-emerald-700 block">✓ Matches Official Slot</span>
                                ) : (
                                  <span className="text-[10px] font-extrabold text-teal-700 block">★ Custom Preference Set</span>
                                )}
                              </div>
                            </td>
                            <td className="p-4">
                              <p className="font-bold text-slate-900">{slot.faculty}</p>
                              <p className="text-[11px] text-slate-500">{slot.room}</p>
                            </td>
                            <td className="p-4 text-center">
                              <span className={`px-2.5 py-1 font-bold rounded-full text-[10px] uppercase ${
                                slot.type === 'Lab' ? 'bg-teal-100 text-teal-800' : 'bg-cyan-100 text-cyan-800'
                              }`}>
                                {slot.group}
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <button
                                onClick={() => {
                                  setEditingSlot(slot);
                                  setDesiredTimeInput(slot.desiredTime || slot.time);
                                }}
                                className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xs transition-opacity inline-flex items-center space-x-1"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>Edit Desired</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200 text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900">ℹ️ About the Desired Time Column:</p>
                  <p>
                    Students can specify their preferred study hours or desired slot windows for each subject in this column. Preference data is stored locally for personal schedule planning and faculty feedback.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================
              TAB: COURSES & SYLLABUS
             ======================================================== */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-emerald-100 pb-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Enrolled Courses — {profile.semester}</h3>
                    <p className="text-xs text-slate-500 font-medium">B.Tech Artificial Intelligence & Machine Learning (USAR)</p>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Total Credits: 21
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((c) => (
                    <div key={c.code} className="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded border border-emerald-200">
                            {c.code}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-sm mt-1">{c.name}</h4>
                          <p className="text-xs text-slate-500 font-medium">{c.faculty} • {c.type}</p>
                        </div>
                        <span className="text-xs font-extrabold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-emerald-100">
                          {c.credits} Credits
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-bold text-slate-600">
                          <span>Syllabus Covered</span>
                          <span>{c.progress}%</span>
                        </div>
                        <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 h-2 rounded-full" style={{ width: `${c.progress}%` }}></div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs text-slate-600 font-medium space-y-1">
                        <span className="font-bold text-slate-900 block">Syllabus Outline:</span>
                        <p>{c.syllabus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: EXAM RESULTS & GRADES
             ======================================================== */}
          {activeTab === 'grades' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-emerald-100 pb-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Academic Transcripts & SGPA Records</h3>
                    <p className="text-xs text-slate-500 font-medium">GGSIPU End-Term & Internal Mid-Term Grade Records</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Overall CGPA: {profile.cgpa}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {semesterGrades.map((sg) => (
                    <div key={sg.sem} className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-1">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">{sg.sem}</span>
                      <p className="text-xl font-black text-slate-900">{sg.sgpa}</p>
                      <p className="text-[11px] font-semibold text-emerald-700">{sg.status}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm">Semester V Mid-Term Subject Performance Breakdown</h4>
                  <div className="overflow-x-auto border border-emerald-200/80 rounded-2xl">
                    <table className="w-full text-left text-xs font-semibold text-slate-800">
                      <thead className="bg-emerald-50 text-slate-900 uppercase font-bold text-[11px]">
                        <tr>
                          <th className="p-3">Subject Code</th>
                          <th className="p-3">Subject Name</th>
                          <th className="p-3 text-center">Internal (25)</th>
                          <th className="p-3 text-center">Mid-Term (75)</th>
                          <th className="p-3 text-center">Total (100)</th>
                          <th className="p-3 text-center">Grade Awarded</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-emerald-100">
                        {subjectMarks.map((sm) => (
                          <tr key={sm.code} className="hover:bg-emerald-50/40">
                            <td className="p-3 font-mono font-bold text-emerald-700">{sm.code}</td>
                            <td className="p-3 font-extrabold text-slate-900">{sm.subject}</td>
                            <td className="p-3 text-center font-bold text-slate-800">{sm.internal} / {sm.maxInternal}</td>
                            <td className="p-3 text-center font-bold text-slate-800">{sm.external} / {sm.maxExternal}</td>
                            <td className="p-3 text-center font-black text-slate-900">{sm.total} / 100</td>
                            <td className="p-3 text-center">
                              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-full font-bold text-[10px] border border-emerald-200">
                                {sm.grade}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: NOTICES & CIRCULARS
             ======================================================== */}
          {activeTab === 'notices' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-emerald-100 pb-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl">Official Campus Circulars & Notices</h3>
                    <p className="text-xs text-slate-500 font-medium">GGSIPU EDC Official Announcements, Exam Notifications & Events</p>
                  </div>

                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={noticeSearch}
                        onChange={(e) => setNoticeSearch(e.target.value)}
                        placeholder="Search circulars..."
                        className="w-full pl-9 pr-3 py-1.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
                  {['All', 'Events', 'Exams', 'Academic', 'Placement'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setNoticeCategory(cat)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        noticeCategory === cat
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-extrabold shadow-2xs'
                          : 'bg-emerald-50/70 text-slate-700 hover:bg-emerald-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {filteredNotices.map((n) => (
                    <div key={n.id} className="p-5 bg-emerald-50/30 rounded-2xl border border-emerald-100 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 font-extrabold rounded-full text-[10px] uppercase border border-emerald-200">
                            {n.category}
                          </span>
                          {n.isImportant && (
                            <span className="px-2 py-0.5 bg-lime-200 text-emerald-950 font-extrabold rounded-full text-[10px] uppercase border border-lime-300">
                              Important
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 font-medium">{n.date}</span>
                      </div>

                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{n.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{n.summary}</p>
                      <p className="text-[11px] font-bold text-slate-400 pt-1">Issued by: {n.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: STUDENT PROFILE & SETTINGS
             ======================================================== */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-100 pb-5">
                  <div className="flex items-center space-x-4">
                    <div className="p-[3px] bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-full">
                      <div className="w-16 h-16 bg-white p-1 rounded-full">
                        <div className="w-full h-full bg-emerald-900 text-white font-serif font-black rounded-full flex items-center justify-center text-xl">
                          {getInitials(profile.name)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl text-slate-900">{profile.name}</h3>
                      <p className="text-xs text-emerald-700 font-mono font-bold">{profile.enrollmentNumber}</p>
                      <p className="text-xs text-slate-500 font-medium">{profile.programFull} • {profile.school}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setProfileFormData(profile);
                      setShowEditProfileModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xs transition-opacity flex items-center space-x-1.5 shrink-0"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile Details</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-2 text-xs relative">
                    <div className="flex justify-between items-center border-b border-emerald-200 pb-1">
                      <h4 className="font-extrabold text-slate-900 text-sm">Academic Info</h4>
                      <button
                        onClick={() => {
                          setProfileFormData(profile);
                          setShowEditProfileModal(true);
                        }}
                        className="text-[11px] font-extrabold text-emerald-700 hover:text-emerald-800 inline-flex items-center space-x-1"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <p><strong>School:</strong> {profile.school}</p>
                    <p><strong>Program:</strong> {profile.programFull}</p>
                    <p><strong>Semester:</strong> {profile.semester}</p>
                    <p><strong>Batch & Group:</strong> {profile.batch} • {profile.group}</p>
                    <p><strong>Session Batch:</strong> {profile.batchYears}</p>
                  </div>

                  <div className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-2 text-xs relative">
                    <div className="flex justify-between items-center border-b border-emerald-200 pb-1">
                      <h4 className="font-extrabold text-slate-900 text-sm">Personal & Contact Details</h4>
                      <button
                        onClick={() => {
                          setProfileFormData(profile);
                          setShowEditProfileModal(true);
                        }}
                        className="text-[11px] font-extrabold text-emerald-700 hover:text-emerald-800 inline-flex items-center space-x-1"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <p><strong>Email ID:</strong> {profile.email}</p>
                    <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
                    <p><strong>Overall Attendance:</strong> {profile.attendancePercent}% (Eligible)</p>
                    <p><strong>Current CGPA:</strong> {profile.cgpa} / 10.0</p>
                    <p><strong>Credits Earned:</strong> {profile.creditsEarned} / {profile.totalCredits}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MAIN FOOTER ACKNOWLEDGEMENT WITH CHECKBOX */}
          <footer className="pt-6 pb-2 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-semibold">
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl border border-emerald-200/90 shadow-2xs">
              <input
                type="checkbox"
                id="created-by-main-footer"
                defaultChecked
                readOnly
                className="w-4 h-4 text-emerald-600 rounded border-emerald-300 accent-emerald-600 cursor-pointer"
              />
              <label htmlFor="created-by-main-footer" className="text-xs font-extrabold text-slate-800 tracking-wide select-none cursor-pointer">
                CREATED BY: <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-black">Fresh Coders</span>
              </label>
            </div>
            <p className="text-[11px] text-slate-500 font-bold">
              Guru Gobind Singh Indraprastha University • East Delhi Campus
            </p>
          </footer>

        </main>
      </div>

      {/* MODAL: EDIT DESIRED TIMETABLE SLOT */}
      {editingSlot && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl border border-emerald-100">
            <div className="flex justify-between items-center border-b border-emerald-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-base">Set Desired Time Slot</h3>
              <button onClick={() => setEditingSlot(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-1">
                <p className="font-extrabold text-slate-900 text-sm">{editingSlot.subject} ({editingSlot.code})</p>
                <p className="text-slate-500">Official Slot: <strong>{editingSlot.time}</strong> ({editingSlot.day})</p>
                <p className="text-slate-500">Faculty: {editingSlot.faculty} • {editingSlot.room}</p>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Your Desired Time / Preferred Window:
                </label>
                <input
                  type="text"
                  value={desiredTimeInput}
                  onChange={(e) => setDesiredTimeInput(e.target.value)}
                  placeholder="e.g. 09:00 AM - 11:00 AM (Morning Slot)"
                  className="w-full p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl font-medium text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setEditingSlot(null)}
                className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-slate-800 font-bold text-xs rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveDesiredTime}
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Save Desired Slot
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: 75% ATTENDANCE CALCULATOR */}
      {showAttendanceCalc && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl border border-emerald-100">
            <div className="flex justify-between items-center border-b border-emerald-100 pb-3">
              <div className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-base">75% Attendance Planner</h3>
              </div>
              <button onClick={() => setShowAttendanceCalc(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Attended Classes</label>
                  <input
                    type="number"
                    value={calcAttended}
                    onChange={(e) => setCalcAttended(Number(e.target.value))}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-bold text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Total Conducted</label>
                  <input
                    type="number"
                    value={calcTotal}
                    onChange={(e) => setCalcTotal(Number(e.target.value))}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-bold text-xs"
                  />
                </div>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-2 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Calculated Percentage</span>
                <p className="text-3xl font-black text-emerald-600">
                  {calcTotal > 0 ? ((calcAttended / calcTotal) * 100).toFixed(1) : '0.0'}%
                </p>
                <p className="text-xs font-semibold text-slate-700 pt-1">
                  {((calcAttended / calcTotal) * 100) >= 75
                    ? `✅ Eligible! You can safely miss up to ${Math.max(0, Math.floor((calcAttended - 0.75 * calcTotal) / 0.75))} future classes.`
                    : `⚠️ Deficit! You need to attend the next ${Math.max(0, Math.ceil((0.75 * calcTotal - calcAttended) / 0.25))} consecutive classes.`}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowAttendanceCalc(false)}
              className="w-full py-2.5 bg-emerald-900 text-white font-bold text-xs rounded-xl hover:bg-emerald-950"
            >
              Close Calculator
            </button>
          </div>
        </div>
      )}

      {/* MODAL: DIGITAL ID CARD PASS */}
      {showIdCard && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-xl border border-emerald-100 text-center">
            <div className="flex justify-between items-center border-b border-emerald-100 pb-2">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">GGSIPU Official Digital Pass</span>
              <button onClick={() => setShowIdCard(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-3">
              <div className="p-[2.5px] bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-full mx-auto w-16 h-16">
                <div className="w-full h-full bg-white p-0.5 rounded-full">
                  <div className="w-full h-full bg-emerald-900 text-white font-serif font-black rounded-full flex items-center justify-center text-lg">
                    {getInitials(profile.name)}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-extrabold text-base text-slate-900">{profile.name}</h3>
                <p className="text-xs font-mono font-bold text-emerald-700">{profile.enrollmentNumber}</p>
                <p className="text-xs font-semibold text-slate-500">{profile.programFull}</p>
                <p className="text-[11px] font-bold text-slate-800 mt-1">{profile.school} • {profile.batch}</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-emerald-200 flex items-center justify-center">
                <QrCode className="w-24 h-24 text-slate-900" />
              </div>

              <p className="text-[10px] text-slate-400 font-semibold">Valid for East Delhi Campus (USAR/USAP) Turnstile Access</p>
            </div>

            <button
              onClick={() => setShowIdCard(false)}
              className="w-full py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-xs rounded-xl"
            >
              Close Pass
            </button>
          </div>
        </div>
      )}

      {/* MODAL: EDIT STUDENT PROFILE */}
      {showEditProfileModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-emerald-100 my-8">
            <div className="flex justify-between items-center border-b border-emerald-100 pb-3">
              <div className="flex items-center space-x-2">
                <Edit3 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-base">Edit Student Profile</h3>
              </div>
              <button onClick={() => setShowEditProfileModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setProfile(profileFormData);
                setShowEditProfileModal(false);
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.name}
                    onChange={(e) => setProfileFormData({ ...profileFormData, name: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Enrollment Number</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.enrollmentNumber}
                    onChange={(e) => setProfileFormData({ ...profileFormData, enrollmentNumber: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Program / Degree (Full Title)</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.programFull}
                    onChange={(e) => setProfileFormData({ ...profileFormData, programFull: e.target.value, program: e.target.value, branch: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">School / Institute</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.school}
                    onChange={(e) => setProfileFormData({ ...profileFormData, school: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email ID</label>
                  <input
                    type="email"
                    required
                    value={profileFormData.email}
                    onChange={(e) => setProfileFormData({ ...profileFormData, email: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Semester</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.semester}
                    onChange={(e) => setProfileFormData({ ...profileFormData, semester: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Blood Group</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.bloodGroup}
                    onChange={(e) => setProfileFormData({ ...profileFormData, bloodGroup: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Session Years</label>
                  <input
                    type="text"
                    required
                    value={profileFormData.batchYears}
                    onChange={(e) => setProfileFormData({ ...profileFormData, batchYears: e.target.value })}
                    className="w-full p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-emerald-100">
                <button
                  type="button"
                  onClick={() => setShowEditProfileModal(false)}
                  className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-slate-800 font-bold text-xs rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xs transition-opacity"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING LOWER RIGHT SIDE AI BOT CHAT TRIGGER BUTTON & MODAL POPUP */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
        {/* CHATBOT POPUP WINDOW */}
        {isChatOpen && (
          <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 shadow-2xl rounded-3xl border border-emerald-200 bg-white overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
            <Chatbot isFloatingModal={true} onClose={() => setIsChatOpen(false)} />
          </div>
        )}

        {/* FLOATING BOT CHAT TRIGGER BUTTON */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`group relative p-4 bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-95 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white ${
            isChatOpen ? 'rotate-90 bg-slate-900' : ''
          }`}
          title="Open EDC-Bot AI Assistant"
        >
          {isChatOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <Bot className="w-6 h-6 text-white" />
              {/* Pulsing online indicator dot */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-lime-400 border-2 border-white"></span>
              </span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
