export interface Program {
  id: string;
  name: string;
  degree: string;
  duration: string;
  intake: number;
  description: string;
  eligibility: string;
  highlights: string[];
  iconName: string;
}

export interface AcademicSchool {
  id: 'usar' | 'usap';
  shortName: string;
  fullName: string;
  tagline: string;
  description: string;
  dean: string;
  badge: string;
  bgGradient: string;
  accentColor: string;
  programs: Program[];
}

export interface CampusNotice {
  id: string;
  title: string;
  category: 'Admissions' | 'Exams' | 'Academic' | 'Events' | 'Circulars' | 'Placement';
  date: string;
  summary: string;
  linkText?: string;
  isImportant?: boolean;
  author?: string;
}

export interface TimetableSlot {
  id: string;
  time: string;
  desiredTime?: string;
  subject: string;
  code: string;
  room: string;
  faculty: string;
  day: string;
  type: 'Lecture' | 'Lab' | 'Tutorial';
  batch?: string;
  group?: string;
}

export interface StudentAttendanceRecord {
  rollNo: string;
  name: string;
  branch: string;
  batch: 'Batch 1' | 'Batch 2';
  group: 'Group A' | 'Group B';
  status: 'Present' | 'Absent' | 'Medical Leave';
  totalAttended: number;
  totalClasses: number;
  percentage: number;
}

export interface SubjectAttendanceSummary {
  subjectCode: string;
  subjectName: string;
  type: 'Theory' | 'Lab Practical';
  batchOrGroup: string;
  attended: number;
  total: number;
  percentage: number;
  faculty: string;
}

export interface StudentProfile {
  name: string;
  enrollmentNumber: string;
  branch: string;
  school: string;
  semester: string;
  batch: 'Batch 1' | 'Batch 2';
  group: 'Group A' | 'Group B';
  email: string;
  attendancePercent: number;
  attendedClasses: number;
  totalClasses: number;
  creditsEarned: number;
  totalCredits: number;
  cgpa: number;
  bloodGroup: string;
  sessionBatch: string;
  avatarUrl?: string;
}
