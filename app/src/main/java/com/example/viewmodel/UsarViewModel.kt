package com.example.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.example.data.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.Calendar

enum class NavTab(val title: String) {
    DASHBOARD("Timetable"),
    NOTICES("Feed"),
    RULES("Rules Hub"),
    CAMPUS_MAP("Campus Map"),
    PROFILE("Student ID")
}

class UsarViewModel(application: Application) : AndroidViewModel(application) {

    private val prefsRepo = PreferencesRepository(application)

    // -------------------------------------------------------------
    // STATE FLOWS
    // -------------------------------------------------------------
    private val _studentProfile = MutableStateFlow(prefsRepo.getStudentProfile())
    val studentProfile: StateFlow<StudentProfile> = _studentProfile.asStateFlow()

    private val _selectedDay = MutableStateFlow(getCurrentDayOfWeekName())
    val selectedDay: StateFlow<String> = _selectedDay.asStateFlow()

    private val _searchNoticeQuery = MutableStateFlow("")
    val searchNoticeQuery: StateFlow<String> = _searchNoticeQuery.asStateFlow()

    private val _selectedNoticeCategory = MutableStateFlow(NoticeCategory.ALL)
    val selectedNoticeCategory: StateFlow<NoticeCategory> = _selectedNoticeCategory.asStateFlow()

    private val _searchRuleQuery = MutableStateFlow("")
    val searchRuleQuery: StateFlow<String> = _searchRuleQuery.asStateFlow()

    private val _selectedRuleCategory = MutableStateFlow<String?>(null)
    val selectedRuleCategory: StateFlow<String?> = _selectedRuleCategory.asStateFlow()

    private val _bookmarkedNoticeIds = MutableStateFlow(prefsRepo.getBookmarkedNoticeIds())
    val bookmarkedNoticeIds: StateFlow<Set<String>> = _bookmarkedNoticeIds.asStateFlow()

    private val _attendanceStats = MutableStateFlow(prefsRepo.getAttendanceStats())
    val attendanceStats: StateFlow<Pair<Int, Int>> = _attendanceStats.asStateFlow()

    private val _customSlots = MutableStateFlow(prefsRepo.getCustomTimetableSlots())
    val customSlots: StateFlow<List<TimetableSlot>> = _customSlots.asStateFlow()

    private val _currentNavTab = MutableStateFlow(
        if (studentProfile.value.isSetupComplete) NavTab.DASHBOARD else NavTab.PROFILE
    )
    val currentNavTab: StateFlow<NavTab> = _currentNavTab.asStateFlow()

    // -------------------------------------------------------------
    // ACTIONS & LOGIC
    // -------------------------------------------------------------
    fun saveProfile(name: String, enrollment: String, branch: UsarBranch, semester: Int, email: String) {
        val year = (semester + 1) / 2
        val updated = StudentProfile(
            name = name,
            enrollmentNumber = enrollment,
            branch = branch,
            semester = semester,
            year = year,
            email = email,
            isSetupComplete = true
        )
        prefsRepo.saveStudentProfile(updated)
        _studentProfile.value = updated
        _currentNavTab.value = NavTab.DASHBOARD
    }

    fun selectNavTab(tab: NavTab) {
        _currentNavTab.value = tab
    }

    fun setSelectedDay(day: String) {
        _selectedDay.value = day
    }

    fun setNoticeSearchQuery(query: String) {
        _searchNoticeQuery.value = query
    }

    fun setNoticeCategory(category: NoticeCategory) {
        _selectedNoticeCategory.value = category
    }

    fun setRuleSearchQuery(query: String) {
        _searchRuleQuery.value = query
    }

    fun setRuleCategory(category: String?) {
        _selectedRuleCategory.value = category
    }

    fun toggleNoticeBookmark(noticeId: String) {
        val isBookmarked = prefsRepo.toggleBookmarkNotice(noticeId)
        val updated = prefsRepo.getBookmarkedNoticeIds()
        _bookmarkedNoticeIds.value = updated
    }

    fun updateAttendance(attended: Int, total: Int) {
        prefsRepo.saveAttendanceStats(attended, total)
        _attendanceStats.value = Pair(attended, total)
    }

    fun addCustomTimetableSlot(
        subjectName: String,
        subjectCode: String,
        faculty: String,
        room: String,
        day: String,
        timeSlotStr: String,
        type: SlotType
    ) {
        val currentProfile = _studentProfile.value
        val newSlot = TimetableSlot(
            id = "custom_${System.currentTimeMillis()}",
            dayOfWeek = day,
            timeSlot = timeSlotStr,
            startHour24 = 10,
            startMinute = 0,
            endHour24 = 11,
            endMinute = 0,
            subjectName = subjectName,
            subjectCode = subjectCode,
            facultyName = faculty,
            roomNumber = room,
            type = type,
            branchCode = currentProfile.branch.code,
            semester = currentProfile.semester,
            isCustom = true
        )
        prefsRepo.saveCustomTimetableSlot(newSlot)
        _customSlots.value = prefsRepo.getCustomTimetableSlots()
    }

    fun resetProfile() {
        prefsRepo.clearProfile()
        _studentProfile.value = StudentProfile()
    }

    // Filtered Timetable Slots for Current Student's Branch & Selected Day
    fun getTimetableForSelectedDay(): List<TimetableSlot> {
        val profile = _studentProfile.value
        val day = _selectedDay.value

        val defaultSlots = MockData.sampleTimetableSlots.filter {
            it.branchCode.equals(profile.branch.code, ignoreCase = true) &&
                    it.semester == profile.semester &&
                    it.dayOfWeek.equals(day, ignoreCase = true)
        }

        val customForDay = _customSlots.value.filter {
            it.branchCode.equals(profile.branch.code, ignoreCase = true) &&
                    it.semester == profile.semester &&
                    it.dayOfWeek.equals(day, ignoreCase = true)
        }

        return (defaultSlots + customForDay).sortedBy { it.startHour24 * 60 + it.startMinute }
    }

    // Filtered Notices Feed
    fun getFilteredNotices(): List<NoticeItem> {
        val query = _searchNoticeQuery.value.trim().lowercase()
        val category = _selectedNoticeCategory.value
        val bookmarks = _bookmarkedNoticeIds.value
        val studentBranchCode = _studentProfile.value.branch.code

        return MockData.sampleNotices.map { notice ->
            notice.copy(isBookmarked = bookmarks.contains(notice.id))
        }.filter { notice ->
            // Filter by branch scope
            val matchesBranch = notice.targetBranchCode == null ||
                    notice.targetBranchCode.equals(studentBranchCode, ignoreCase = true)

            // Filter by category
            val matchesCategory = (category == NoticeCategory.ALL) || (notice.category == category)

            // Filter by query
            val matchesQuery = query.isEmpty() ||
                    notice.title.lowercase().contains(query) ||
                    notice.summary.lowercase().contains(query) ||
                    notice.publisher.lowercase().contains(query)

            matchesBranch && matchesCategory && matchesQuery
        }
    }

    // Filtered Rules Items
    fun getFilteredRules(): List<RuleItem> {
        val query = _searchRuleQuery.value.trim().lowercase()
        val category = _selectedRuleCategory.value

        return MockData.sampleRules.filter { rule ->
            val matchesCat = (category == null) || rule.category.equals(category, ignoreCase = true)
            val matchesQuery = query.isEmpty() ||
                    rule.title.lowercase().contains(query) ||
                    rule.summary.lowercase().contains(query) ||
                    rule.ordinanceNumber.lowercase().contains(query) ||
                    rule.keyTakeaway.lowercase().contains(query)

            matchesCat && matchesQuery
        }
    }

    private fun getCurrentDayOfWeekName(): String {
        return when (Calendar.getInstance().get(Calendar.DAY_OF_WEEK)) {
            Calendar.MONDAY -> "Monday"
            Calendar.TUESDAY -> "Tuesday"
            Calendar.WEDNESDAY -> "Wednesday"
            Calendar.THURSDAY -> "Thursday"
            Calendar.FRIDAY -> "Friday"
            Calendar.SATURDAY -> "Saturday"
            else -> "Monday" // Default on Sunday
        }
    }
}
