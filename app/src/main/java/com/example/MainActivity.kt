package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.animation.Crossfade
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import com.example.ui.components.UsarBottomNavBar
import com.example.ui.components.UsarTopAppBar
import com.example.ui.screens.*
import com.example.ui.theme.UsarConnectTheme
import com.example.viewmodel.NavTab
import com.example.viewmodel.UsarViewModel

class MainActivity : ComponentActivity() {

    private val viewModel: UsarViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            UsarConnectTheme {
                USARConnectApp(viewModel = viewModel)
            }
        }
    }
}

@Composable
fun USARConnectApp(viewModel: UsarViewModel) {
    val studentProfile by viewModel.studentProfile.collectAsState()
    val currentTab by viewModel.currentNavTab.collectAsState()
    val selectedDay by viewModel.selectedDay.collectAsState()
    val searchNoticeQuery by viewModel.searchNoticeQuery.collectAsState()
    val selectedNoticeCategory by viewModel.selectedNoticeCategory.collectAsState()
    val searchRuleQuery by viewModel.searchRuleQuery.collectAsState()
    val selectedRuleCategory by viewModel.selectedRuleCategory.collectAsState()
    val attendanceStats by viewModel.attendanceStats.collectAsState()

    val timetableList = viewModel.getTimetableForSelectedDay()
    val noticeList = viewModel.getFilteredNotices()
    val ruleList = viewModel.getFilteredRules()

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        topBar = {
            UsarTopAppBar(
                profile = studentProfile,
                onProfileClick = { viewModel.selectNavTab(NavTab.PROFILE) }
            )
        },
        bottomBar = {
            if (studentProfile.isSetupComplete) {
                UsarBottomNavBar(
                    selectedTab = currentTab,
                    onTabSelected = { viewModel.selectNavTab(it) }
                )
            }
        }
    ) { innerPadding ->

        Crossfade(
            targetState = if (!studentProfile.isSetupComplete) NavTab.PROFILE else currentTab,
            modifier = Modifier.padding(innerPadding),
            label = "ScreenTransition"
        ) { targetTab ->
            if (!studentProfile.isSetupComplete) {
                OnboardingScreen(
                    currentProfile = studentProfile,
                    onSaveProfile = { name, enrollment, branch, semester, email ->
                        viewModel.saveProfile(name, enrollment, branch, semester, email)
                    }
                )
            } else {
                when (targetTab) {
                    NavTab.DASHBOARD -> {
                        DashboardTimetableScreen(
                            profile = studentProfile,
                            selectedDay = selectedDay,
                            timetableList = timetableList,
                            onDaySelected = { viewModel.setSelectedDay(it) },
                            onAddCustomSlot = { name, code, faculty, room, day, timeStr, type ->
                                viewModel.addCustomTimetableSlot(name, code, faculty, room, day, timeStr, type)
                            }
                        )
                    }

                    NavTab.NOTICES -> {
                        NoticeFeedScreen(
                            notices = noticeList,
                            searchQuery = searchNoticeQuery,
                            selectedCategory = selectedNoticeCategory,
                            onSearchQueryChange = { viewModel.setNoticeSearchQuery(it) },
                            onCategorySelected = { viewModel.setNoticeCategory(it) },
                            onToggleBookmark = { viewModel.toggleNoticeBookmark(it) }
                        )
                    }

                    NavTab.RULES -> {
                        RulesHubScreen(
                            rules = ruleList,
                            searchQuery = searchRuleQuery,
                            selectedCategory = selectedRuleCategory,
                            onSearchQueryChange = { viewModel.setRuleSearchQuery(it) },
                            onCategorySelected = { viewModel.setRuleCategory(it) },
                            onGoToAttendanceCalculator = { viewModel.selectNavTab(NavTab.PROFILE) }
                        )
                    }

                    NavTab.CAMPUS_MAP -> {
                        CampusMapScreen()
                    }

                    NavTab.PROFILE -> {
                        ProfileScreen(
                            profile = studentProfile,
                            attendanceStats = attendanceStats,
                            onUpdateAttendance = { attended, total ->
                                viewModel.updateAttendance(attended, total)
                            },
                            onEditProfile = {
                                viewModel.saveProfile(
                                    studentProfile.name,
                                    studentProfile.enrollmentNumber,
                                    studentProfile.branch,
                                    studentProfile.semester,
                                    studentProfile.email
                                )
                            },
                            onResetProfile = { viewModel.resetProfile() }
                        )
                    }
                }
            }
        }
    }
}
