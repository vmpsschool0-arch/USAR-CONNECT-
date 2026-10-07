import { AcademicSchool, CampusNotice, Facility, FAQItem } from '../types';

export const CAMPUS_INFO = {
  name: "GGSIPU East Delhi Campus",
  shortName: "GGSIPU EDC",
  address: "Surajmal Vihar, East Delhi, New Delhi - 110092, India",
  email: "info.edc@ipu.ac.in",
  admissionsEmail: "admissions.edc@ipu.ac.in",
  phone: "+91-11-23900100",
  helpline: "+91-11-25302170",
  affiliation: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  naacRating: "NAAC Grade 'A++' Accredited State University",
  campusArea: "18.75 Acres Net-Zero Green Smart Campus",
};

export const SCHOOLS_DATA: AcademicSchool[] = [
  {
    id: 'usar',
    shortName: 'USAR',
    fullName: 'University School of Automation & Robotics',
    tagline: 'Pioneering AI, Robotics, and Smart Industrial Technologies',
    description: 'USAR is GGSIPU\'s flagship school dedicated to cutting-edge emerging technologies, artificial intelligence, robotics, and automation engineering with industry 4.0 standard hardware labs.',
    dean: 'Prof. (Dr.) Arvinder Kaur',
    badge: 'Technology & AI Wing',
    bgGradient: 'from-blue-900 via-indigo-900 to-slate-900',
    accentColor: 'blue',
    programs: [
      {
        id: 'btech-aiml',
        name: 'B.Tech Artificial Intelligence & Machine Learning',
        degree: 'B.Tech (AIML)',
        duration: '4 Years (8 Semesters)',
        intake: 120,
        description: 'Comprehensive study of deep learning, computer vision, natural language processing, neural networks, and scalable AI infrastructure.',
        eligibility: 'Pass 10+2 with Physics, Chemistry & Mathematics (PCM) with minimum 55% aggregate + JEE Main qualified / IPU CET.',
        highlights: ['GPU Acceleration AI Lab', 'Generative AI Research Group', 'Industry Internships with Top Tech Firms'],
        iconName: 'BrainCircuit'
      },
      {
        id: 'btech-aids',
        name: 'B.Tech Artificial Intelligence & Data Science',
        degree: 'B.Tech (AI-DS)',
        duration: '4 Years (8 Semesters)',
        intake: 120,
        description: 'Focuses on big data analytics, statistical modeling, data engineering, machine learning pipelines, and predictive algorithms.',
        eligibility: 'Pass 10+2 with PCM (55% aggregate) + JEE Main qualified.',
        highlights: ['Big Data & Cloud Analytics Suite', 'Apache Spark & Hadoop Clusters', 'Real-world Data Mining Projects'],
        iconName: 'Database'
      },
      {
        id: 'btech-ar',
        name: 'B.Tech Automation & Robotics',
        degree: 'B.Tech (AR)',
        duration: '4 Years (8 Semesters)',
        intake: 120,
        description: 'Hands-on training in industrial manipulator arms, autonomous mobile robots (AMRs), mechatronics, embedded systems, and PLC automation.',
        eligibility: 'Pass 10+2 with PCM (55% aggregate) + JEE Main qualified.',
        highlights: ['KUKA & ABB Robotic Manipulators Lab', '3D Fabrication Studio', 'ROS 2 Autonomous Navigation'],
        iconName: 'Bot'
      },
      {
        id: 'btech-iiot',
        name: 'B.Tech Industrial Internet of Things',
        degree: 'B.Tech (IIoT)',
        duration: '4 Years (8 Semesters)',
        intake: 120,
        description: 'Blends IoT sensor networks, industrial communication protocols, cyber-physical systems, edge computing, and smart factory architecture.',
        eligibility: 'Pass 10+2 with PCM (55% aggregate) + JEE Main qualified.',
        highlights: ['Siemens Smart Factory Testbed', 'Wireless Sensor Network Lab', 'Edge Computing Hardware'],
        iconName: 'Cpu'
      }
    ]
  },
  {
    id: 'usap',
    shortName: 'USAP',
    fullName: 'University School of Architecture & Planning',
    tagline: 'Designing Sustainable Futures and Human-Centric Environments',
    description: 'USAP is a premier institution blending creative architecture, spatial design, urban planning, and digital design disciplines within state-of-the-art design studios.',
    dean: 'Prof. (Dr.) Neerja Lugani',
    badge: 'Architecture & Design Wing',
    bgGradient: 'from-amber-950 via-slate-900 to-indigo-950',
    accentColor: 'amber',
    programs: [
      {
        id: 'barch',
        name: 'Bachelor of Architecture',
        degree: 'B.Arch',
        duration: '5 Years (10 Semesters)',
        intake: 80,
        description: 'Council of Architecture (COA) approved program emphasizing sustainable design, climate-responsive structures, and parametric architecture.',
        eligibility: 'Pass 10+2 with PCM (50% aggregate) or 10+3 Diploma + NATA Score / JEE Main Paper 2.',
        highlights: ['COA Recognized Studio', 'Climatology & Material Lab', 'Hands-on Carpentry & Model Making'],
        iconName: 'Compass'
      },
      {
        id: 'bdes',
        name: 'Bachelor of Design (B.Des)',
        degree: 'B.Des (Interior, Industrial, Interaction)',
        duration: '4 Years (8 Semesters)',
        intake: 120,
        description: 'Specializations in Interior Design, Industrial & Product Design, and Interaction (UX/UI) Design with digital prototyping labs.',
        eligibility: 'Pass 10+2 in any stream with minimum 50% aggregate + IPU CET / NID DAT / UCEED.',
        highlights: ['AR/VR Interaction Studio', 'Ergonomics & Product Prototyping', 'Annual Design Degree Show'],
        iconName: 'Palette'
      },
      {
        id: 'mdes',
        name: 'Master of Design',
        degree: 'M.Des',
        duration: '2 Years (4 Semesters)',
        intake: 30,
        description: 'Advanced postgraduate specialization in strategic design, user experience systems, and sustainable product innovation.',
        eligibility: 'Bachelor\'s degree in Design, Architecture, or Fine Arts / Engineering with 50% marks + CEED / IPU CET.',
        highlights: ['Design Research Cell', 'Industry Sponsored Live Projects', 'Patent & IP Support'],
        iconName: 'Layers'
      },
      {
        id: 'march-mplan',
        name: 'M.Arch (Urban Design) & M.Plan',
        degree: 'M.Arch / M.Plan',
        duration: '2 Years (4 Semesters)',
        intake: 40,
        description: 'Postgraduate education focused on urban infrastructure planning, smart city policies, GIS mapping, and environmental design.',
        eligibility: 'B.Arch / B.Plan with 50% aggregate + GATE / IPU CET score.',
        highlights: ['GIS & Spatial Data Lab', 'Smart City Policy Seminars', 'International Academic Collaborations'],
        iconName: 'Building2'
      }
    ]
  }
];

export const NOTICES_DATA: CampusNotice[] = [
  {
    id: 'n1',
    title: 'GGSIPU Admissions 2026: Online Registration Window Extended for B.Tech & B.Arch',
    category: 'Admissions',
    date: 'Aug 10, 2026',
    summary: 'The online application portal for admission to USAR (B.Tech AIML, AR, IIoT, AI-DS) and USAP (B.Arch & B.Des) for Session 2026-27 has been extended up to 25th August 2026.',
    isImportant: true,
    linkText: 'Apply Online via IPU Portal'
  },
  {
    id: 'n2',
    title: 'Odd Semester End-Term Examination Datesheet 2026 Released',
    category: 'Exams',
    date: 'Aug 08, 2026',
    summary: 'Controller of Examinations GGSIPU has published the tentative datesheet for B.Tech and B.Arch End-Term Practical & Theory Examinations commencing 1st September 2026.',
    isImportant: true,
    linkText: 'Download Datesheet PDF'
  },
  {
    id: 'n3',
    title: 'AIC-GGSIPU Hackathon 2026: ₹5 Lakh Seed Grant & Incubation Cohort 4',
    category: 'Events',
    date: 'Aug 05, 2026',
    summary: 'Atal Incubation Centre GGSIPU invites innovative tech and hardware product startups from USAR & USAP students for the National Hardware & AI Hackathon.',
    isImportant: true,
    linkText: 'Register Team'
  },
  {
    id: 'n4',
    title: 'Mandatory 75% Attendance Requirement & Hall Ticket Clearance Notice',
    category: 'Academic',
    date: 'Aug 02, 2026',
    summary: 'All students are reminded that 75% aggregate attendance across all theory and lab subjects is strictly mandatory as per GGSIPU Statute 12. Shortfall cases will be debarred.',
    isImportant: false,
    linkText: 'View Circular'
  },
  {
    id: 'n5',
    title: 'Industry Visit to Siemens Smart Automation & Robotics Experience Centre',
    category: 'Academic',
    date: 'Jul 28, 2026',
    summary: 'Department of Automation & Robotics is organizing an industrial exposure visit for 5th semester students on 18th August 2026.',
    isImportant: false,
    linkText: 'Registration Details'
  },
  {
    id: 'n6',
    title: 'USAP Annual Architecture & Interior Design Exhibition 2026',
    category: 'Events',
    date: 'Jul 24, 2026',
    summary: 'Public showcase of sustainable building models, parametric artwork, and urban design projects crafted by USAP students at Block B Design Gallery.',
    isImportant: false,
    linkText: 'Exhibition Schedule'
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'f1',
    name: 'Advanced Robotics & Mechatronics Lab',
    category: 'USAR Engineering Labs',
    description: 'Equipped with 6-axis industrial manipulator arms, pneumatics workbenches, mobile robotics testing grounds, and high-precision CNC machines.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    highlights: ['6-Axis Industrial Robotic Arm', 'ROS 2 & Gazebo Simulation PC Suite', '3D Metal & Polymer Printers']
  },
  {
    id: 'f2',
    name: 'AI & GPU High-Performance Compute Cluster',
    category: 'USAR Computer Labs',
    description: 'NVIDIA Tensor Core GPU workstation farm optimized for training deep learning models, LLMs, computer vision, and autonomous vehicle simulations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    highlights: ['NVIDIA H100 / A100 Workstations', '1 Gbps High Speed Fiber Backbone', 'PyTorch & TensorFlow Environment']
  },
  {
    id: 'f3',
    name: 'Architectural Design Studios & Workshop',
    category: 'USAP Design Spaces',
    description: 'Spacious, climate-controlled drafting studios featuring adjustable drafting tables, laser cutting machines, carpentry workshops, and material libraries.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Precision Laser Cutters & CNC Routers', 'Acoustic & Climatology Test Rig', 'Drafting & Ergonomic Desks']
  },
  {
    id: 'f4',
    name: 'Central Library & Digital Knowledge Hub',
    category: 'Campus Infrastructure',
    description: 'Multi-level eco-friendly library housing over 40,000 physical volumes, IEEE Xplore, ScienceDirect digital subscriptions, and 24/7 quiet reading pods.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    highlights: ['IEEE & ACM Digital Subscriptions', 'RFID Book Checkout Kiosks', 'Air-Conditioned Silent Study Zones']
  },
  {
    id: 'f5',
    name: 'Atal Incubation Centre (AIC-GGSIPU)',
    category: 'Innovation & Research',
    description: 'Government of India Supported incubation space providing seed funds, patent assistance, co-working desks, and veteran mentor networks to student founders.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    highlights: ['₹5 Crore Seed Fund Ecosystem', 'Dedicated Co-Working Pods', 'Patent Attorney Consultation']
  },
  {
    id: 'f6',
    name: 'Net-Zero Green Campus & Sports Complex',
    category: 'Student Life',
    description: 'Solar-powered smart campus with rainwater harvesting, zero-waste management, indoor badminton courts, gymnasium, canteen, and open amphitheatre.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    highlights: ['Solar Rooftop Energy Grid', 'Indoor Sports Complex & Gym', 'Open Air Amphitheatre']
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Admissions',
    question: 'How do I apply for B.Tech programs in USAR for Session 2026?',
    answer: 'Admissions to B.Tech (AIML, AI-DS, AR, IIoT) in USAR are strictly conducted through GGSIPU Centralized Counseling based on JEE Main Paper 1 rank. Candidates must register on the official GGSIPU admission portal (ipu.admissions.nic.in).'
  },
  {
    id: 'faq2',
    category: 'Admissions',
    question: 'What is the eligibility for B.Arch and B.Des in USAP?',
    answer: 'For B.Arch, candidates must pass 10+2 with PCM (minimum 50% aggregate) and possess a valid NATA score or JEE Main Paper 2 rank. For B.Des, candidates need 10+2 in any stream (50% aggregate) and appear in IPU CET / NID DAT / UCEED.'
  },
  {
    id: 'faq3',
    category: 'Academics',
    question: 'Is the 75% attendance rule strictly enforced at GGSIPU East Delhi Campus?',
    answer: 'Yes. As per GGSIPU Ordinance 11, a minimum of 75% aggregate attendance is mandatory across all theory lectures and practical labs to be eligible for end-term university examinations.'
  },
  {
    id: 'faq4',
    category: 'Hostels',
    question: 'Are hostel facilities available at East Delhi Campus (Surajmal Vihar)?',
    answer: 'Yes, modern air-conditioned Boys\' and Girls\' hostels are available on campus with 24/7 security, high-speed Wi-Fi, dining halls, and recreational rooms. Priority is given to outside Delhi candidates.'
  },
  {
    id: 'faq5',
    category: 'Campus Life',
    question: 'What incubation support does AIC GGSIPU offer to student entrepreneurs?',
    answer: 'AIC-GGSIPU offers pre-incubation grants, prototype development funds up to ₹5 Lakhs, free co-working space, legal & patent registration assistance, and direct connections to venture capitalists.'
  }
];

export const STATS_DATA = [
  { label: "Specialized Programs", value: "8+", detail: "4 B.Tech, 1 B.Arch, 1 B.Des, 2 PG Courses" },
  { label: "High-Tech Hardware Labs", value: "25+", detail: "Robotics, AI GPU, Climatology, Prototyping" },
  { label: "AIC Startup Seed Pool", value: "₹5 Cr+", detail: "Atal Incubation Centre Support" },
  { label: "GGSIPU University Rank", value: "NAAC A++", detail: "Premier State University of Delhi" }
];
