package com.example.data

import androidx.compose.ui.graphics.Color

enum class UsarBranch(
    val code: String,
    val fullName: String,
    val description: String,
    val hexColor: Long
) {
    AIDS(
        code = "AIDS",
        fullName = "Artificial Intelligence & Data Science",
        description = "Focus on Deep Learning, Big Data Analytics, Neural Networks & Smart Data Engineering.",
        hexColor = 0xFF0284C7 // Cyan
    ),
    AIML(
        code = "AIML",
        fullName = "Artificial Intelligence & Machine Learning",
        description = "Specialization in Computer Vision, NLP, Reinforcement Learning & Intelligent Systems.",
        hexColor = 0xFF6366F1 // Indigo
    ),
    IIOT(
        code = "IIoT",
        fullName = "Industrial Internet of Things",
        description = "Smart Sensors, Embedded Systems, Cyber-Physical Systems & Industry 4.0 Protocols.",
        hexColor = 0xFF10B981 // Emerald
    ),
    AR(
        code = "AR",
        fullName = "Automation & Robotics",
        description = "Mechatronics, Kinematics, Control Engineering, ROS & Autonomous Robotic Systems.",
        hexColor = 0xFFF59E0B // Amber
    );

    companion object {
        fun fromCode(code: String): UsarBranch {
            return entries.find { it.code.equals(code, ignoreCase = true) } ?: AIDS
        }
    }
}

enum class SlotType(val label: String, val badgeColorHex: Long) {
    LECTURE("Lecture", 0xFF2563EB),
    LAB("Practical Lab", 0xFF0D9488),
    TUTORIAL("Tutorial", 0xFF8B5CF6)
}

data class TimetableSlot(
    val id: String,
    val dayOfWeek: String, // "Monday", "Tuesday", etc.
    val timeSlot: String,  // e.g. "09:00 AM - 10:00 AM"
    val startHour24: Int,   // 9
    val startMinute: Int,   // 0
    val endHour24: Int,     // 10
    val endMinute: Int,     // 0
    val subjectName: String,
    val subjectCode: String,
    val facultyName: String,
    val roomNumber: String,
    val type: SlotType,
    val branchCode: String,
    val semester: Int,
    val isCustom: Boolean = false
)

enum class NoticeCategory(val label: String) {
    ALL("All Updates"),
    OFFICIAL("Official"),
    EXAMS("Exams"),
    FESTS("Fests & Events"),
    CLUBS("Clubs & Societies"),
    HOLIDAYS("Holidays")
}

data class NoticeItem(
    val id: String,
    val title: String,
    val summary: String,
    val content: String,
    val date: String,
    val category: NoticeCategory,
    val isUrgent: Boolean = false,
    val isBookmarked: Boolean = false,
    val targetBranchCode: String? = null, // null means all branches
    val publisher: String = "USAR Dean Office",
    val venueOrLink: String? = null
)

data class RuleItem(
    val id: String,
    val title: String,
    val ordinanceNumber: String,
    val category: String, // "Attendance", "Examination", "Lab Safety", "Discipline"
    val summary: String,
    val detailedText: String,
    val keyTakeaway: String,
    val penaltyOrWarning: String? = null
)

data class CampusLocation(
    val id: String,
    val name: String,
    val block: String, // "Academic Block A", "Robotics COE Block B", etc.
    val floor: String,
    val description: String,
    val category: String // "Lab", "Lecture Hall", "Facility", "Admin"
)

data class StudentProfile(
    val name: String = "",
    val enrollmentNumber: String = "",
    val branch: UsarBranch = UsarBranch.AIDS,
    val semester: Int = 1,
    val year: Int = 1,
    val email: String = "",
    val isSetupComplete: Boolean = false
)
