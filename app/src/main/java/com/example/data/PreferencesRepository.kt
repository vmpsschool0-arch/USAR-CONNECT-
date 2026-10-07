package com.example.data

import android.content.Context
import android.content.SharedPreferences
import com.squareup.moshi.Moshi
import com.squareup.moshi.Types
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory

class PreferencesRepository(context: Context) {

    private val prefs: SharedPreferences =
        context.getSharedPreferences("usar_connect_prefs", Context.MODE_PRIVATE)

    private val moshi = Moshi.Builder()
        .addLast(KotlinJsonAdapterFactory())
        .build()

    // -------------------------------------------------------------
    // STUDENT PROFILE PREFERENCES
    // -------------------------------------------------------------
    fun saveStudentProfile(profile: StudentProfile) {
        prefs.edit().apply {
            putString("KEY_NAME", profile.name)
            putString("KEY_ENROLLMENT", profile.enrollmentNumber)
            putString("KEY_BRANCH", profile.branch.code)
            putInt("KEY_SEMESTER", profile.semester)
            putInt("KEY_YEAR", profile.year)
            putString("KEY_EMAIL", profile.email)
            putBoolean("KEY_SETUP_COMPLETE", profile.isSetupComplete)
            apply()
        }
    }

    fun getStudentProfile(): StudentProfile {
        val name = prefs.getString("KEY_NAME", "") ?: ""
        val enrollment = prefs.getString("KEY_ENROLLMENT", "") ?: ""
        val branchCode = prefs.getString("KEY_BRANCH", "AIDS") ?: "AIDS"
        val semester = prefs.getInt("KEY_SEMESTER", 3)
        val year = prefs.getInt("KEY_YEAR", 2)
        val email = prefs.getString("KEY_EMAIL", "") ?: ""
        val isSetup = prefs.getBoolean("KEY_SETUP_COMPLETE", false)

        return StudentProfile(
            name = name,
            enrollmentNumber = enrollment,
            branch = UsarBranch.fromCode(branchCode),
            semester = semester,
            year = year,
            email = email,
            isSetupComplete = isSetup
        )
    }

    fun clearProfile() {
        prefs.edit().clear().apply()
    }

    // -------------------------------------------------------------
    // BOOKMARKED NOTICES PREFERENCES
    // -------------------------------------------------------------
    fun getBookmarkedNoticeIds(): Set<String> {
        return prefs.getStringSet("KEY_BOOKMARKS", emptySet()) ?: emptySet()
    }

    fun toggleBookmarkNotice(id: String): Boolean {
        val current = getBookmarkedNoticeIds().toMutableSet()
        val isNowBookmarked = if (current.contains(id)) {
            current.remove(id)
            false
        } else {
            current.add(id)
            true
        }
        prefs.edit().putStringSet("KEY_BOOKMARKS", current).apply()
        return isNowBookmarked
    }

    // -------------------------------------------------------------
    // ATTENDANCE STATS PREFERENCES
    // -------------------------------------------------------------
    fun getAttendanceStats(): Pair<Int, Int> {
        val attended = prefs.getInt("KEY_ATT_ATTENDED", 42)
        val total = prefs.getInt("KEY_ATT_TOTAL", 50)
        return Pair(attended, total)
    }

    fun saveAttendanceStats(attended: Int, total: Int) {
        prefs.edit().apply {
            putInt("KEY_ATT_ATTENDED", attended)
            putInt("KEY_ATT_TOTAL", total)
            apply()
        }
    }

    // -------------------------------------------------------------
    // CUSTOM TIMETABLE SLOTS PREFERENCES
    // -------------------------------------------------------------
    fun getCustomTimetableSlots(): List<TimetableSlot> {
        val json = prefs.getString("KEY_CUSTOM_SLOTS", null) ?: return emptyList()
        return try {
            val type = Types.newParameterizedType(List::class.java, TimetableSlot::class.java)
            val adapter = moshi.adapter<List<TimetableSlot>>(type)
            adapter.fromJson(json) ?: emptyList()
        } catch (e: Exception) {
            emptyList()
        }
    }

    fun saveCustomTimetableSlot(slot: TimetableSlot) {
        val current = getCustomTimetableSlots().toMutableList()
        current.add(slot)
        try {
            val type = Types.newParameterizedType(List::class.java, TimetableSlot::class.java)
            val adapter = moshi.adapter<List<TimetableSlot>>(type)
            val json = adapter.toJson(current)
            prefs.edit().putString("KEY_CUSTOM_SLOTS", json).apply()
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}
