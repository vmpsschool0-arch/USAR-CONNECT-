import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  AlertCircle, 
  CheckCircle2, 
  Search, 
  RotateCcw, 
  Save, 
  Calculator, 
  SlidersHorizontal, 
  BookOpen, 
  FlaskConical, 
  Layers, 
  Check, 
  Clock, 
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { StudentAttendanceRecord, SubjectAttendanceSummary } from '../types';

interface Props {
  studentProfile: {
    name: string;
    enrollmentNumber: string;
    branch: string;
    batch: 'Batch 1' | 'Batch 2';
    group: 'Group A' | 'Group B';
  };
}

export const BatchAttendanceTracker: React.FC<Props> = ({ studentProfile }) => {
  // Navigation sub-tab inside Attendance module
  const [viewMode, setViewMode] = useState<'class-marker' | 'my-attendance'>('my-attendance');

  // Filter Selectors
  const [selectedBranch, setSelectedBranch] = useState<string>('B.Tech AI & ML');
  const [selectedBatch, setSelectedBatch] = useState<'Batch 1' | 'Batch 2'>('Batch 1');
  const [selectedSubjectType, setSelectedSubjectType] = useState<'Theory' | 'Lab'>('Lab');
  const [selectedGroup, setSelectedGroup] = useState<'Group A' | 'Group B'>('Group A');
  const [selectedSubject, setSelectedSubject] = useState<string>('AIML-301L: Machine Learning Lab');

  // Search filter
  const [searchTerm, setSearchTerm] = useState('');
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Initial Class Roster Data for Batch 1 - Group A
  const initialRoster: StudentAttendanceRecord[] = [
    { rollNo: '04576803122', name: 'Aryan Sharma (You)', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 22, totalClasses: 25, percentage: 88.0 },
    { rollNo: '04676803122', name: 'Aanya Gupta', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 24, totalClasses: 25, percentage: 96.0 },
    { rollNo: '04776803122', name: 'Aditya Verma', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Absent', totalAttended: 17, totalClasses: 25, percentage: 68.0 },
    { rollNo: '04876803122', name: 'Ananya Roy', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 23, totalClasses: 25, percentage: 92.0 },
    { rollNo: '04976803122', name: 'Bhavya Saxena', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Medical Leave', totalAttended: 19, totalClasses: 25, percentage: 76.0 },
    { rollNo: '05076803122', name: 'Chirag Malhotra', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 21, totalClasses: 25, percentage: 84.0 },
    { rollNo: '05176803122', name: 'Devansh Kumar', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 20, totalClasses: 25, percentage: 80.0 },
    { rollNo: '05276803122', name: 'Diya Kapoor', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Absent', totalAttended: 16, totalClasses: 25, percentage: 64.0 },
    { rollNo: '05376803122', name: 'Eshaan Joshi', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 25, totalClasses: 25, percentage: 100.0 },
    { rollNo: '05476803122', name: 'Ishita Singh', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 22, totalClasses: 25, percentage: 88.0 },
    { rollNo: '05576803122', name: 'Kabir Mehta', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Present', totalAttended: 23, totalClasses: 25, percentage: 92.0 },
    { rollNo: '05676803122', name: 'Kavya Nair', branch: 'B.Tech AI & ML', batch: 'Batch 1', group: 'Group A', status: 'Absent', totalAttended: 18, totalClasses: 25, percentage: 72.0 },
  ];

  const [roster, setRoster] = useState<StudentAttendanceRecord[]>(initialRoster);

  // Student Personal Subject-wise attendance breakdowns
  const [personalSubjects] = useState<SubjectAttendanceSummary[]>([
    { subjectCode: 'AIML-301L', subjectName: 'Machine Learning Lab', type: 'Lab Practical', batchOrGroup: 'Batch 1 • Group A', attended: 22, total: 25, percentage: 88.0, faculty: 'Dr. S. Verma' },
    { subjectCode: 'AIML-305L', subjectName: 'Deep Neural Networks Lab', type: 'Lab Practical', batchOrGroup: 'Batch 1 • Group A', attended: 15, total: 21, percentage: 71.4, faculty: 'Dr. R. Gupta' },
    { subjectCode: 'AIML-307L', subjectName: 'Computer Vision & Image Lab', type: 'Lab Practical', batchOrGroup: 'Batch 1 • Group A', attended: 23, total: 25, percentage: 92.0, faculty: 'Prof. A. Malhotra' },
    { subjectCode: 'AIML-309L', subjectName: 'Natural Language Processing Lab', type: 'Lab Practical', batchOrGroup: 'Batch 1 • Group A', attended: 18, total: 22, percentage: 81.8, faculty: 'Dr. P. Sharma' },
    { subjectCode: 'AIML-301', subjectName: 'Machine Learning Theory', type: 'Theory', batchOrGroup: 'Batch 1 (Entire Batch)', attended: 28, total: 32, percentage: 87.5, faculty: 'Dr. S. Verma' },
    { subjectCode: 'AIML-303', subjectName: 'Robotics Kinematics', type: 'Theory', batchOrGroup: 'Batch 1 (Entire Batch)', attended: 21, total: 30, percentage: 70.0, faculty: 'Prof. K. Iyer' },
    { subjectCode: 'AIML-305', subjectName: 'Deep Neural Networks Theory', type: 'Theory', batchOrGroup: 'Batch 1 (Entire Batch)', attended: 26, total: 30, percentage: 86.7, faculty: 'Dr. R. Gupta' },
    { subjectCode: 'HS-305', subjectName: 'Ethics in AI & IPR', type: 'Theory', batchOrGroup: 'Batch 1 (Entire Batch)', attended: 18, total: 20, percentage: 90.0, faculty: 'Guest Faculty' },
  ]);

  // Attendance Calculator local state
  const [calcAttended, setCalcAttended] = useState(112);
  const [calcTotal, setCalcTotal] = useState(136);

  const calcCurrentPct = calcTotal > 0 ? ((calcAttended / calcTotal) * 100).toFixed(1) : '0.0';
  const calcNeeded75 = Math.max(0, Math.ceil((0.75 * calcTotal - calcAttended) / (1 - 0.75)));
  const calcSafeBunks75 = Math.max(0, Math.floor((calcAttended - 0.75 * calcTotal) / 0.75));

  // Roster status toggle
  const handleStatusChange = (rollNo: string, newStatus: 'Present' | 'Absent' | 'Medical Leave') => {
    setRoster(prev => prev.map(student => {
      if (student.rollNo === rollNo) {
        return { ...student, status: newStatus };
      }
      return student;
    }));
  };

  const handleMarkAllPresent = () => {
    setRoster(prev => prev.map(s => ({ ...s, status: 'Present' })));
  };

  const handleResetRoster = () => {
    setRoster(initialRoster);
  };

  const handleSaveAttendance = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 4000);
  };

  // Filtered Roster
  const filteredRoster = roster.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.rollNo.includes(searchTerm)
  );

  const presentCount = roster.filter(s => s.status === 'Present').length;
  const absentCount = roster.filter(s => s.status === 'Absent').length;
  const medicalCount = roster.filter(s => s.status === 'Medical Leave').length;
  const averageAttendancePct = roster.length > 0 
    ? (roster.reduce((acc, curr) => acc + curr.percentage, 0) / roster.length).toFixed(1)
    : '0.0';

  return (
    <div className="space-y-6">
      
      {/* MODULE HEADER BANNER - MINT GRADIENT STYLE */}
      <div className="bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 rounded-3xl shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 text-white backdrop-blur-md rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GGSIPU EDC Academic Tracker</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Batch & Lab-Group Attendance Tracker
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-2xl">
              Track Theory lectures by Batch (Batch 1 / Batch 2) and Practical Labs by Group (Group A / Group B).
            </p>
          </div>

          {/* TOGGLE MODES */}
          <div className="flex items-center space-x-2 bg-black/20 p-1.5 rounded-2xl shrink-0 backdrop-blur-xs">
            <button
              onClick={() => setViewMode('my-attendance')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                viewMode === 'my-attendance'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>My Attendance Overview</span>
            </button>

            <button
              onClick={() => setViewMode('class-marker')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                viewMode === 'class-marker'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Class Attendance Marker</span>
            </button>
          </div>
        </div>
      </div>

      {/* SAVE TOAST NOTIFICATION */}
      {showSaveToast && (
        <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg border border-emerald-500 flex items-center justify-between animate-fade-in">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
            <div>
              <p className="font-black text-xs">Attendance Saved Successfully!</p>
              <p className="text-[11px] text-emerald-100 font-medium">
                Recorded for {selectedBranch} • {selectedBatch} • {selectedSubjectType === 'Lab' ? selectedGroup : 'Theory Batch'} • {selectedSubject}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold bg-emerald-700/60 px-2 py-1 rounded-md">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      )}

      {/* ========================================================
          MODE 1: MY PERSONAL ATTENDANCE OVERVIEW
         ======================================================== */}
      {viewMode === 'my-attendance' && (
        <div className="space-y-6">
          
          {/* PROFILE SUMMARY BADGE */}
          <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 font-black rounded-2xl flex items-center justify-center text-lg shadow-sm">
                AS
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">{studentProfile.name}</h3>
                <p className="text-xs text-slate-500 font-semibold">
                  Enrollment: <span className="font-mono text-slate-800">{studentProfile.enrollmentNumber}</span> • {studentProfile.branch}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 font-black text-[10px] rounded-md border border-amber-200">
                    {studentProfile.batch}
                  </span>
                  <span className="px-2.5 py-0.5 bg-sky-100 text-sky-900 font-black text-[10px] rounded-md border border-sky-200">
                    {studentProfile.group} (Practical Roster)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-amber-50/60 p-3 rounded-2xl border border-amber-200/80">
              <div className="text-right">
                <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider block">Overall Aggregate</span>
                <span className="text-2xl font-black text-slate-900">{calcCurrentPct}%</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm">
                OK
              </div>
            </div>
          </div>

          {/* THEORY VS LAB ATTENDANCE COMPARISON GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LAB PRACTICAL ATTENDANCE (GROUP A / B) */}
            <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-sky-100 text-sky-900 rounded-xl">
                    <FlaskConical className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Lab Practical Attendance</h3>
                    <p className="text-xs text-slate-500 font-semibold">Tracked specifically for {studentProfile.group}</p>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase text-sky-900 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  Sub-Group A
                </span>
              </div>

              <div className="space-y-4">
                {personalSubjects.filter(s => s.type === 'Lab Practical').map((sub) => {
                  const isWarning = sub.percentage < 75;
                  return (
                    <div key={sub.subjectCode} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                            {sub.subjectCode}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-sm mt-1">{sub.subjectName}</h4>
                          <p className="text-xs text-slate-500 font-medium">{sub.faculty} • {sub.batchOrGroup}</p>
                        </div>

                        <div className="text-right">
                          <span className={`text-base font-black ${isWarning ? 'text-rose-600' : 'text-slate-900'}`}>
                            {sub.percentage}%
                          </span>
                          <p className="text-[11px] text-slate-500 font-semibold">{sub.attended} / {sub.total} Conducted</p>
                        </div>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-2.5 rounded-full transition-all duration-500 ${
                            isWarning ? 'bg-rose-500' : sub.percentage >= 85 ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${sub.percentage}%` }}
                        ></div>
                      </div>

                      {isWarning && (
                        <div className="flex items-center space-x-1.5 text-rose-700 bg-rose-50 p-2 rounded-xl border border-rose-200 text-xs font-bold">
                          <ShieldAlert className="w-4 h-4 shrink-0" />
                          <span>⚠️ Below 75% GGSIPU Threshold! Must attend next 2 lab sessions.</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* THEORY LECTURE ATTENDANCE (BATCH 1 / 2) */}
            <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-amber-100 text-amber-900 rounded-xl">
                    <BookOpen className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Theory Lecture Attendance</h3>
                    <p className="text-xs text-slate-500 font-semibold">Tracked for entire {studentProfile.batch}</p>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Main Batch 1
                </span>
              </div>

              <div className="space-y-4">
                {personalSubjects.filter(s => s.type === 'Theory').map((sub) => {
                  const isWarning = sub.percentage < 75;
                  return (
                    <div key={sub.subjectCode} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {sub.subjectCode}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-sm mt-1">{sub.subjectName}</h4>
                          <p className="text-xs text-slate-500 font-medium">{sub.faculty} • {sub.batchOrGroup}</p>
                        </div>

                        <div className="text-right">
                          <span className={`text-base font-black ${isWarning ? 'text-rose-600' : 'text-slate-900'}`}>
                            {sub.percentage}%
                          </span>
                          <p className="text-[11px] text-slate-500 font-semibold">{sub.attended} / {sub.total} Conducted</p>
                        </div>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-2.5 rounded-full transition-all duration-500 ${
                            isWarning ? 'bg-rose-500' : sub.percentage >= 85 ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${sub.percentage}%` }}
                        ></div>
                      </div>

                      {isWarning && (
                        <div className="flex items-center space-x-1.5 text-rose-700 bg-rose-50 p-2 rounded-xl border border-rose-200 text-xs font-bold">
                          <ShieldAlert className="w-4 h-4 shrink-0" />
                          <span>⚠️ Below 75% Threshold! Minimum 3 theory lectures required.</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* INTERACTIVE ATTENDANCE CALCULATOR CARD */}
          <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-amber-500 text-slate-950 font-black rounded-2xl">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">GGSIPU 75% Attendance Allowance Calculator</h3>
                <p className="text-xs text-slate-500 font-medium">Calculate exact classes required to meet or retain 75% end-term exam eligibility.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-700 block">Classes Attended So Far</label>
                <input
                  type="number"
                  value={calcAttended}
                  onChange={(e) => setCalcAttended(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-700 block">Total Classes Conducted</label>
                <input
                  type="number"
                  value={calcTotal}
                  onChange={(e) => setCalcTotal(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl flex flex-col justify-center space-y-2">
                <span className="text-[10px] font-black uppercase text-amber-800">Current Status</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-black text-slate-900">{calcCurrentPct}%</span>
                  <span className={`text-xs font-black px-2 py-0.5 rounded ${
                    parseFloat(calcCurrentPct) >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {parseFloat(calcCurrentPct) >= 75 ? 'ELIGIBLE' : 'INELIGIBLE'}
                  </span>
                </div>

                {parseFloat(calcCurrentPct) >= 75 ? (
                  <p className="text-xs text-emerald-800 font-bold">
                    🎉 Safe Buffer: You can skip up to <span className="underline">{calcSafeBunks75}</span> consecutive classes without dropping below 75%.
                  </p>
                ) : (
                  <p className="text-xs text-rose-700 font-bold">
                    ⚠️ Shortage: You need to attend the next <span className="underline">{calcNeeded75}</span> classes continuously to achieve 75%.
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================
          MODE 2: CLASS ATTENDANCE MARKER (FACULTY / CR VIEW)
         ======================================================== */}
      {viewMode === 'class-marker' && (
        <div className="space-y-6">
          
          {/* FILTER CONTROLS BAR */}
          <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center space-x-2">
                <SlidersHorizontal className="w-5 h-5 text-amber-600" />
                <span>Select Class Batch & Group Roster</span>
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                Faculty / Class Rep Mode
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* BRANCH SELECTOR */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500">1. Select Branch</label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="B.Tech AI & ML">B.Tech AI & ML (USAR)</option>
                  <option value="B.Tech AI & DS">B.Tech AI & DS (USAR)</option>
                  <option value="B.Tech Automation & Robotics">B.Tech Automation & Robotics (USAR)</option>
                  <option value="B.Tech Industrial IoT">B.Tech Industrial IoT (USAR)</option>
                  <option value="Bachelor of Architecture">B.Arch (USAP)</option>
                  <option value="Bachelor of Design">B.Des (USAP)</option>
                </select>
              </div>

              {/* BATCH SELECTOR */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500">2. Select Main Batch</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Batch 1">Batch 1 (Roll 001 - 060)</option>
                  <option value="Batch 2">Batch 2 (Roll 061 - 120)</option>
                </select>
              </div>

              {/* SUBJECT TYPE SELECTOR */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500">3. Class Type</label>
                <select
                  value={selectedSubjectType}
                  onChange={(e) => setSelectedSubjectType(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Lab">Practical Lab Session</option>
                  <option value="Theory">Theory Lecture</option>
                </select>
              </div>

              {/* LAB GROUP SELECTOR (Only active for Lab) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500">
                  4. Lab Practical Group
                </label>
                <select
                  disabled={selectedSubjectType === 'Theory'}
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value as any)}
                  className={`w-full p-2.5 border rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    selectedSubjectType === 'Theory' 
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <option value="Group A">Group A (First Half)</option>
                  <option value="Group B">Group B (Second Half)</option>
                </select>
              </div>

              {/* SUBJECT SELECTOR */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500">5. Course Subject</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {selectedSubjectType === 'Lab' ? (
                    <>
                      <option value="AIML-301L: Machine Learning Lab">AIML-301L: Machine Learning Lab</option>
                      <option value="AIML-305L: Deep Neural Networks Lab">AIML-305L: DNN Lab</option>
                      <option value="AIML-307L: Computer Vision Lab">AIML-307L: CV & Image Lab</option>
                    </>
                  ) : (
                    <>
                      <option value="AIML-301: Machine Learning Theory">AIML-301: Machine Learning</option>
                      <option value="AIML-303: Robotics Dynamics">AIML-303: Robotics Kinematics</option>
                      <option value="AIML-305: Deep Neural Networks">AIML-305: DNN Theory</option>
                    </>
                  )}
                </select>
              </div>

            </div>
          </div>

          {/* SUMMARY STATS & ACTION BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs space-y-0.5">
              <span className="text-[10px] font-black text-slate-400 uppercase">Selected Strength</span>
              <p className="text-xl font-black text-slate-900">{roster.length} Students</p>
              <p className="text-[10px] text-slate-500 font-bold">{selectedBranch} • {selectedBatch}</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs space-y-0.5">
              <span className="text-[10px] font-black text-emerald-600 uppercase">Present</span>
              <p className="text-xl font-black text-emerald-600">{presentCount}</p>
              <p className="text-[10px] text-emerald-700 font-bold">{((presentCount/roster.length)*100).toFixed(0)}% Attendance</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs space-y-0.5">
              <span className="text-[10px] font-black text-rose-600 uppercase">Absent</span>
              <p className="text-xl font-black text-rose-600">{absentCount}</p>
              <p className="text-[10px] text-rose-700 font-bold">{((absentCount/roster.length)*100).toFixed(0)}% Absenteeism</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs space-y-0.5">
              <span className="text-[10px] font-black text-amber-600 uppercase">Medical Leave</span>
              <p className="text-xl font-black text-amber-600">{medicalCount}</p>
              <p className="text-[10px] text-amber-700 font-bold">Duty Leave Verified</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs space-y-0.5">
              <span className="text-[10px] font-black text-sky-600 uppercase">Class Avg</span>
              <p className="text-xl font-black text-slate-900">{averageAttendancePct}%</p>
              <p className="text-[10px] text-sky-700 font-bold">GGSIPU Target: 75%+</p>
            </div>
          </div>

          {/* STUDENT ROSTER TABLE */}
          <div className="bg-white rounded-3xl border border-amber-200 shadow-xs overflow-hidden space-y-4 p-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search student by name or roll..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={handleMarkAllPresent}
                  className="flex-1 sm:flex-initial px-3.5 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-black text-xs rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Mark All Present</span>
                </button>

                <button
                  onClick={handleResetRoster}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                  title="Reset Roster"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleSaveAttendance}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Attendance</span>
                </button>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs font-semibold text-slate-800">
                <thead className="bg-slate-100 text-slate-700 uppercase font-black text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Roll Number</th>
                    <th className="p-3.5">Student Name</th>
                    <th className="p-3.5">Batch / Group</th>
                    <th className="p-3.5 text-center">Cum. Attendance</th>
                    <th className="p-3.5 text-center">Mark Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRoster.map((student) => (
                    <tr key={student.rollNo} className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3.5 font-mono font-bold text-slate-900">{student.rollNo}</td>
                      <td className="p-3.5">
                        <span className="font-extrabold text-slate-900 block">{student.name}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{student.branch}</span>
                      </td>
                      <td className="p-3.5">
                        <span className="inline-flex items-center space-x-1">
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-black text-[10px]">
                            {student.batch}
                          </span>
                          <span className="px-2 py-0.5 bg-sky-100 text-sky-900 rounded font-black text-[10px]">
                            {student.group}
                          </span>
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <span className={`font-black ${student.percentage < 75 ? 'text-rose-600' : 'text-slate-900'}`}>
                          {student.percentage}%
                        </span>
                        <p className="text-[10px] text-slate-400">({student.totalAttended}/{student.totalClasses})</p>
                      </td>
                      <td className="p-3.5 text-center">
                        <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl space-x-1 border border-slate-200">
                          <button
                            onClick={() => handleStatusChange(student.rollNo, 'Present')}
                            className={`px-3 py-1 rounded-lg font-black text-[11px] transition-all ${
                              student.status === 'Present'
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Present
                          </button>

                          <button
                            onClick={() => handleStatusChange(student.rollNo, 'Absent')}
                            className={`px-3 py-1 rounded-lg font-black text-[11px] transition-all ${
                              student.status === 'Absent'
                                ? 'bg-rose-600 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Absent
                          </button>

                          <button
                            onClick={() => handleStatusChange(student.rollNo, 'Medical Leave')}
                            className={`px-3 py-1 rounded-lg font-black text-[11px] transition-all ${
                              student.status === 'Medical Leave'
                                ? 'bg-amber-500 text-slate-950 shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Medical
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
