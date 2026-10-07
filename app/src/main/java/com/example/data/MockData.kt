package com.example.data

object MockData {

    // -------------------------------------------------------------
    // USAR BRANCH-SPECIFIC TIMETABLE MOCK DATA
    // -------------------------------------------------------------
    val sampleTimetableSlots: List<TimetableSlot> = listOf(
        // AIDS - Semester 3
        TimetableSlot(
            id = "aids_s3_m1",
            dayOfWeek = "Monday",
            timeSlot = "09:00 AM - 10:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 10, endMinute = 0,
            subjectName = "Data Structures & Algorithms",
            subjectCode = "AIDS-201",
            facultyName = "Dr. Ritu Sharma",
            roomNumber = "EDC-204",
            type = SlotType.LECTURE,
            branchCode = "AIDS", semester = 3
        ),
        TimetableSlot(
            id = "aids_s3_m2",
            dayOfWeek = "Monday",
            timeSlot = "10:00 AM - 11:00 AM",
            startHour24 = 10, startMinute = 0, endHour24 = 11, endMinute = 0,
            subjectName = "Discrete Mathematical Structures",
            subjectCode = "AIDS-203",
            facultyName = "Prof. S. K. Gupta",
            roomNumber = "EDC-204",
            type = SlotType.LECTURE,
            branchCode = "AIDS", semester = 3
        ),
        TimetableSlot(
            id = "aids_s3_m3",
            dayOfWeek = "Monday",
            timeSlot = "11:15 AM - 01:15 PM",
            startHour24 = 11, startMinute = 15, endHour24 = 13, endMinute = 15,
            subjectName = "Data Science Lab using Python",
            subjectCode = "AIDS-251",
            facultyName = "Dr. Ritu Sharma / Er. Amit Verma",
            roomNumber = "NVIDIA AI Lab (Lab-301)",
            type = SlotType.LAB,
            branchCode = "AIDS", semester = 3
        ),
        TimetableSlot(
            id = "aids_s3_m4",
            dayOfWeek = "Monday",
            timeSlot = "02:00 PM - 03:00 PM",
            startHour24 = 14, startMinute = 0, endHour24 = 15, endMinute = 0,
            subjectName = "Object Oriented Programming (Java)",
            subjectCode = "AIDS-205",
            facultyName = "Dr. Neha Kapoor",
            roomNumber = "EDC-204",
            type = SlotType.LECTURE,
            branchCode = "AIDS", semester = 3
        ),
        TimetableSlot(
            id = "aids_s3_t1",
            dayOfWeek = "Tuesday",
            timeSlot = "09:00 AM - 10:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 10, endMinute = 0,
            subjectName = "Computer Organization & Architecture",
            subjectCode = "AIDS-207",
            facultyName = "Dr. Vikas Singh",
            roomNumber = "EDC-204",
            type = SlotType.LECTURE,
            branchCode = "AIDS", semester = 3
        ),
        TimetableSlot(
            id = "aids_s3_t2",
            dayOfWeek = "Tuesday",
            timeSlot = "10:00 AM - 12:00 PM",
            startHour24 = 10, startMinute = 0, endHour24 = 12, endMinute = 0,
            subjectName = "OOPs & Java Practical Lab",
            subjectCode = "AIDS-255",
            facultyName = "Dr. Neha Kapoor",
            roomNumber = "Computer Center 2",
            type = SlotType.LAB,
            branchCode = "AIDS", semester = 3
        ),
        TimetableSlot(
            id = "aids_s3_w1",
            dayOfWeek = "Wednesday",
            timeSlot = "09:00 AM - 11:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 11, endMinute = 0,
            subjectName = "Database Management Systems",
            subjectCode = "AIDS-209",
            facultyName = "Dr. Priyanka Aggarwal",
            roomNumber = "EDC-204",
            type = SlotType.LECTURE,
            branchCode = "AIDS", semester = 3
        ),

        // AIML - Semester 3
        TimetableSlot(
            id = "aiml_s3_m1",
            dayOfWeek = "Monday",
            timeSlot = "09:00 AM - 10:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 10, endMinute = 0,
            subjectName = "Foundations of Machine Learning",
            subjectCode = "AIML-201",
            facultyName = "Prof. Manoj Kumar",
            roomNumber = "EDC-102",
            type = SlotType.LECTURE,
            branchCode = "AIML", semester = 3
        ),
        TimetableSlot(
            id = "aiml_s3_m2",
            dayOfWeek = "Monday",
            timeSlot = "10:00 AM - 12:00 PM",
            startHour24 = 10, startMinute = 0, endHour24 = 12, endMinute = 0,
            subjectName = "Machine Learning Studio Lab",
            subjectCode = "AIML-251",
            facultyName = "Prof. Manoj Kumar / Er. Swati",
            roomNumber = "NVIDIA Supercomputing Studio",
            type = SlotType.LAB,
            branchCode = "AIML", semester = 3
        ),
        TimetableSlot(
            id = "aiml_s3_m3",
            dayOfWeek = "Monday",
            timeSlot = "01:30 PM - 02:30 PM",
            startHour24 = 13, startMinute = 30, endHour24 = 14, endMinute = 30,
            subjectName = "Linear Algebra & Optimization",
            subjectCode = "BS-203",
            facultyName = "Dr. Meenakshi Rai",
            roomNumber = "EDC-102",
            type = SlotType.LECTURE,
            branchCode = "AIML", semester = 3
        ),
        TimetableSlot(
            id = "aiml_s3_t1",
            dayOfWeek = "Tuesday",
            timeSlot = "09:00 AM - 10:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 10, endMinute = 0,
            subjectName = "Python for Artificial Intelligence",
            subjectCode = "AIML-205",
            facultyName = "Dr. Ankur Bhalotia",
            roomNumber = "EDC-102",
            type = SlotType.LECTURE,
            branchCode = "AIML", semester = 3
        ),

        // IIoT - Semester 3
        TimetableSlot(
            id = "iiot_s3_m1",
            dayOfWeek = "Monday",
            timeSlot = "09:00 AM - 10:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 10, endMinute = 0,
            subjectName = "Sensors & Actuators in Industry 4.0",
            subjectCode = "IIOT-201",
            facultyName = "Dr. Harish Kumar",
            roomNumber = "EDC-301",
            type = SlotType.LECTURE,
            branchCode = "IIoT", semester = 3
        ),
        TimetableSlot(
            id = "iiot_s3_m2",
            dayOfWeek = "Monday",
            timeSlot = "10:15 AM - 12:15 PM",
            startHour24 = 10, startMinute = 15, endHour24 = 12, endMinute = 15,
            subjectName = "Embedded Microcontrollers Lab",
            subjectCode = "IIOT-251",
            facultyName = "Dr. Harish Kumar",
            roomNumber = "IIoT Smart Hardware Lab",
            type = SlotType.LAB,
            branchCode = "IIoT", semester = 3
        ),

        // Automation & Robotics (AR) - Semester 3
        TimetableSlot(
            id = "ar_s3_m1",
            dayOfWeek = "Monday",
            timeSlot = "09:00 AM - 10:00 AM",
            startHour24 = 9, startMinute = 0, endHour24 = 10, endMinute = 0,
            subjectName = "Kinematics & Dynamics of Robots",
            subjectCode = "AR-201",
            facultyName = "Prof. Rajesh Tyagi",
            roomNumber = "EDC-003",
            type = SlotType.LECTURE,
            branchCode = "AR", semester = 3
        ),
        TimetableSlot(
            id = "ar_s3_m2",
            dayOfWeek = "Monday",
            timeSlot = "10:00 AM - 12:00 PM",
            startHour24 = 10, startMinute = 0, endHour24 = 12, endMinute = 0,
            subjectName = "Robotic Arms Simulation Lab",
            subjectCode = "AR-251",
            facultyName = "Prof. Rajesh Tyagi / Er. Deepa",
            roomNumber = "Robotics COE Lab (Block B)",
            type = SlotType.LAB,
            branchCode = "AR", semester = 3
        ),
        TimetableSlot(
            id = "ar_s3_m3",
            dayOfWeek = "Monday",
            timeSlot = "01:30 PM - 02:30 PM",
            startHour24 = 13, startMinute = 30, endHour24 = 14, endMinute = 30,
            subjectName = "Control Systems Engineering",
            subjectCode = "AR-203",
            facultyName = "Dr. Parul Jain",
            roomNumber = "EDC-003",
            type = SlotType.LECTURE,
            branchCode = "AR", semester = 3
        )
    )

    // -------------------------------------------------------------
    // GGSIPU & USAR RULES AND REGULATIONS HUB DATA
    // -------------------------------------------------------------
    val sampleRules: List<RuleItem> = listOf(
        RuleItem(
            id = "rule_att_75",
            title = "Mandatory 75% Attendance Criteria",
            ordinanceNumber = "GGSIPU Ordinance 11, Clause 3.2",
            category = "Attendance",
            summary = "A student must secure a minimum of 75% attendance in both lectures and practical labs to be eligible for End-Term Examinations.",
            detailedText = "As per GGSIPU Ordinance 11, students having attendance between 60% and 74% may be condoned by the Dean USAR only under genuine medical grounds (duly supported by Medical Certificate from a Govt Hospital) or extraordinary co-curricular representation. Students below 60% will be strictly detained and awarded 'N' grade.",
            keyTakeaway = "Maintain at least 75% overall in all subjects to avoid exam detention notices.",
            penaltyOrWarning = "Detention from End-Term Practical and Theory Examinations."
        ),
        RuleItem(
            id = "rule_eval_scheme",
            title = "Credit Evaluation & Marking Scheme",
            ordinanceNumber = "USAR Academic Scheme 2023-27",
            category = "Examination",
            summary = "Total marks per course = 100. Split into 25/30 Marks Continuous Internal Evaluation (CIE) + 75/70 Marks End-Term Examination (ETE).",
            detailedText = "CIE includes Mid-Term Examination (15 marks), Assignments & Quizzes (5 marks), and Attendance/Class Participation (5 marks). For Practical NUES (Non-University Examination System) courses, evaluation is 100% internal based on lab continuous assessment and viva-voce.",
            keyTakeaway = "Mid-Term exams carry 15 marks directly into your final result card. Do not skip internals!",
            penaltyOrWarning = "Scoring below 40% aggregate in a subject results in a Backlog (F Grade)."
        ),
        RuleItem(
            id = "rule_lab_safety",
            title = "Robotics & Hardware Lab Protocols",
            ordinanceNumber = "USAR Lab Safety Guideline #04",
            category = "Lab Safety",
            summary = "Strict protocols for working in Industrial Robotics COE, IIoT Hardware Studios, and High-Performance Compute Labs.",
            detailedText = "1. Closed-toe shoes and safety glasses are mandatory inside Robotics and Mechatronics labs.\n2. Do not override emergency stop switches on KUKA or ABB robotic arms.\n3. High-performance NVIDIA GPU workstations must not be left running unauthorized mining or heavy personal scripts.\n4. ESD (Electrostatic Discharge) wrist bands must be worn when handling exposed microcontrollers in IIoT labs.",
            keyTakeaway = "Safety first when interacting with robotic manipulators, high-voltage sensors, and hardware.",
            penaltyOrWarning = "Immediate lab suspension and fine for safety violation."
        ),
        RuleItem(
            id = "rule_dress_id",
            title = "Campus ID Card & Decorum",
            ordinanceNumber = "USAR Student Code of Conduct Section 2",
            category = "Discipline",
            summary = "Wearing official USAR GGSIPU Smart Student ID Card around the neck is mandatory at all times inside the Surajmal Vihar EDC Campus.",
            detailedText = "Security guards at the EDC Entrance Gate and Library entry strictly verify physical or digital USAR Connect ID cards. Formal or neat smart-casual attire is required during industrial visits, guest lectures, and viva sessions.",
            keyTakeaway = "Always carry your physical or digital USAR ID Card on campus.",
            penaltyOrWarning = "Denial of campus entry and library borrowing rights."
        ),
        RuleItem(
            id = "rule_anti_ragging",
            title = "Zero Tolerance Anti-Ragging Policy",
            ordinanceNumber = "UGC Regulations 2009 / GGSIPU Directive",
            category = "Discipline",
            summary = "Ragging in any form (physical, verbal, psychological, or electronic) inside or outside the campus is a punishable offense under law.",
            detailedText = "USAR EDC maintains an active Anti-Ragging Squad. Any aggrieved student can instantly report incidents anonymously via the USAR Anti-Ragging Committee or National Helpline (1800-180-5522). All 1st year students and parents must submit the UGC Anti-Ragging Affidavit.",
            keyTakeaway = "USAR is a 100% ragging-free premier campus.",
            penaltyOrWarning = "Immediate expulsion, FIR with Delhi Police, and blacklisting."
        ),
        RuleItem(
            id = "rule_sgpa_promotion",
            title = "Yearly Promotion & CGPA Criteria",
            ordinanceNumber = "GGSIPU B.Tech Ordinance 11, Section 8",
            category = "Examination",
            summary = "To be promoted to the next academic year, a student must secure at least 50% of the total credits offered in the academic year.",
            detailedText = "A student must earn a minimum of 200 credits out of 210+ total B.Tech credits to be awarded the dual degree / B.Tech degree at the end of 4 years. Re-appear examinations are conducted along with odd/even semester main exams.",
            keyTakeaway = "Clear your backlogs in the immediate next semester re-appear cycle.",
            penaltyOrWarning = "Year back (Academic Year Retention) if credits criteria is not met."
        )
    )

    // -------------------------------------------------------------
    // DAILY UPDATES & NOTIFICATION FEED MOCK DATA
    // -------------------------------------------------------------
    val sampleNotices: List<NoticeItem> = listOf(
        NoticeItem(
            id = "notif_01",
            title = "Mid-Term Examination Schedule - Autumn Semester 2026",
            summary = "Official datesheet released for 2nd, 3rd, and 4th Year B.Tech students across AIDS, AIML, IIoT, and AR branches.",
            content = "The Mid-Term Examinations for B.Tech Autumn Semester 2026 will commence from September 18, 2026. All examinations will be held in Block A and Block B lecture halls. Students are instructed to report 15 minutes prior to start time with physical ID cards. No electronic gadgets except non-programmable calculators allowed.",
            date = "Today, 09:30 AM",
            category = NoticeCategory.EXAMS,
            isUrgent = true,
            publisher = "Controller of Examinations, USAR"
        ),
        NoticeItem(
            id = "notif_02",
            title = "INNOWAVE 2026 - USAR Annual Robotics & AI Hackathon",
            summary = "36-hour flagship hackathon with total cash prize pool of ₹2,50,000 sponsored by Delhi Robotics Guild.",
            content = "USAR EDC is proud to announce INNOWAVE 2026! Tracks include: 1) Autonomous Drone Swarms, 2) Generative AI in Healthcare, 3) Industrial IoT for Smart Cities, 4) Humanoid Assistive Robotics. Registration closes on August 25. Open to all GGSIPU and pan-India tech students.",
            date = "Yesterday",
            category = NoticeCategory.FESTS,
            isUrgent = false,
            publisher = "USAR Robotics & Innovation Club",
            venueOrLink = "Surajmal Vihar EDC Auditorium"
        ),
        NoticeItem(
            id = "notif_03",
            title = "Mandatory Biometric Registration for Library Access",
            summary = "All 1st and 2nd Year USAR students must complete RFID card mapping at the Central Library desk.",
            content = "To streamline entry and book issue/return automated kiosks, Central Library Surajmal Vihar EDC is organizing RFID mapping sessions from 10:00 AM to 04:00 PM till Friday. Bring your admission slip and student enrollment number.",
            date = "Aug 09, 2026",
            category = NoticeCategory.OFFICIAL,
            isUrgent = false,
            publisher = "Central Library Head, USAR EDC"
        ),
        NoticeItem(
            id = "notif_04",
            title = "NVIDIA AI Supercomputing Workshop for AIDS & AIML",
            summary = "Hands-on session on CUDA Acceleration & Large Vision Models by Senior NVIDIA Engineers.",
            content = "An exclusive 2-day workshop hosted in NVIDIA AI Lab (Lab-301) on August 22-23. Certificates will be awarded upon successful project submission. Limited to 60 seats on first-come-first-serve basis for AIDS & AIML students.",
            date = "Aug 08, 2026",
            category = NoticeCategory.CLUBS,
            targetBranchCode = "AIDS",
            publisher = "USAR AI Society"
        ),
        NoticeItem(
            id = "notif_05",
            title = "Gazetted Holiday Notice - Janmashtami",
            summary = "USAR EDC Campus will remain closed on the occasion of Janmashtami.",
            content = "As per GGSIPU official holiday list, all teaching and administrative operations at USAR EDC Surajmal Vihar campus will remain suspended. Classes will resume as per normal timetable on the following working day.",
            date = "Aug 05, 2026",
            category = NoticeCategory.HOLIDAYS,
            publisher = "Joint Registrar, GGSIPU"
        )
    )

    // -------------------------------------------------------------
    // USAR EDC SURAJMAL VIHAR CAMPUS LOCATIONS
    // -------------------------------------------------------------
    val campusLocations: List<CampusLocation> = listOf(
        CampusLocation(
            id = "loc_01",
            name = "NVIDIA AI Supercomputing Studio",
            block = "Academic Block A",
            floor = "3rd Floor (Room 301)",
            description = "State-of-the-art AI Lab equipped with high-performance NVIDIA A100 GPU clusters for Deep Learning and Vision research.",
            category = "Lab"
        ),
        CampusLocation(
            id = "loc_02",
            name = "Robotics Center of Excellence (COE)",
            block = "Robotics COE Block B",
            floor = "Ground Floor",
            description = "Advanced mechatronics arena featuring industrial robotic arms (KUKA, ABB), drone testing cage, and 3D printing bay.",
            category = "Lab"
        ),
        CampusLocation(
            id = "loc_03",
            name = "IIoT Smart Hardware Lab",
            block = "Academic Block A",
            floor = "2nd Floor (Room 210)",
            description = "Industrial Internet of Things setup with LoRaWAN gateways, embedded ARM controllers, and smart sensor testbeds.",
            category = "Lab"
        ),
        CampusLocation(
            id = "loc_04",
            name = "Lecture Halls EDC-201 to EDC-206",
            block = "Academic Block A",
            floor = "2nd Floor",
            description = "Tiered smart lecture halls with interactive displays, acoustic design, and lecture recording cameras.",
            category = "Lecture Hall"
        ),
        CampusLocation(
            id = "loc_05",
            name = "USAR EDC Central Library",
            block = "Library Block",
            floor = "1st & 2nd Floor",
            description = "Digital & physical repository with IEEE Xplore access, quiet reading zones, and automated RFID self-checkout.",
            category = "Facility"
        ),
        CampusLocation(
            id = "loc_06",
            name = "Main Auditorium & EDC Food Court",
            block = "Amenities Center",
            floor = "Ground Floor",
            description = "500-seater air-conditioned auditorium for fests/hackathons and multi-cuisine student cafeteria.",
            category = "Facility"
        ),
        CampusLocation(
            id = "loc_07",
            name = "Dean USAR Secretariat & Admin Office",
            block = "Admin Block",
            floor = "1st Floor",
            description = "Administrative offices for Student Affairs, Fee Counter, Examination Cell, and Training & Placement Cell.",
            category = "Admin"
        )
    )
}
