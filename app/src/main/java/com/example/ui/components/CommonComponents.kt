package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.SlotType
import com.example.data.StudentProfile
import com.example.viewmodel.NavTab

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun UsarTopAppBar(
    profile: StudentProfile,
    onProfileClick: () -> Unit
) {
    Surface(
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 4.dp
    ) {
        TopAppBar(
            title = {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    // Tech Robot / Campus Emblem Badge
                    Box(
                        modifier = Modifier
                            .size(38.dp)
                            .clip(CircleShape)
                            .background(MaterialTheme.colorScheme.primaryContainer),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Default.PrecisionManufacturing,
                            contentDescription = "USAR",
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(24.dp)
                        )
                    }

                    Column {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(
                                text = "USAR",
                                style = MaterialTheme.typography.titleLarge.copy(
                                    fontWeight = FontWeight.ExtraBold,
                                    letterSpacing = 1.sp
                                ),
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Spacer(modifier = Modifier.width(4.dp))
                            Text(
                                text = "CONNECT",
                                style = MaterialTheme.typography.titleLarge.copy(
                                    fontWeight = FontWeight.Bold,
                                    letterSpacing = 1.sp
                                ),
                                color = MaterialTheme.colorScheme.primary
                            )
                        }
                        Text(
                            text = "GGSIPU Surajmal Vihar EDC",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            },
            actions = {
                if (profile.isSetupComplete) {
                    // Branch Tag Pill
                    Surface(
                        shape = RoundedCornerShape(16.dp),
                        color = Color(profile.branch.hexColor).copy(alpha = 0.15f),
                        modifier = Modifier
                            .padding(end = 8.dp)
                            .clickable { onProfileClick() }
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(8.dp)
                                    .clip(CircleShape)
                                    .background(Color(profile.branch.hexColor))
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = "${profile.branch.code} - S${profile.semester}",
                                style = MaterialTheme.typography.labelMedium.copy(fontWeight = FontWeight.Bold),
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }
                    }
                }
            },
            colors = TopAppBarDefaults.topAppBarColors(
                containerColor = MaterialTheme.colorScheme.surface
            )
        )
    }
}

@Composable
fun UsarBottomNavBar(
    selectedTab: NavTab,
    onTabSelected: (NavTab) -> Unit
) {
    NavigationBar(
        containerColor = MaterialTheme.colorScheme.surface,
        tonalElevation = 8.dp
    ) {
        val items = listOf(
            Triple(NavTab.DASHBOARD, Icons.Default.CalendarToday, Icons.Outlined.CalendarToday),
            Triple(NavTab.NOTICES, Icons.Default.Campaign, Icons.Outlined.Campaign),
            Triple(NavTab.RULES, Icons.Default.Gavel, Icons.Outlined.Gavel),
            Triple(NavTab.CAMPUS_MAP, Icons.Default.Map, Icons.Outlined.Map),
            Triple(NavTab.PROFILE, Icons.Default.Badge, Icons.Outlined.Badge)
        )

        items.forEach { (tab, selectedIcon, unselectedIcon) ->
            val isSelected = selectedTab == tab
            NavigationBarItem(
                selected = isSelected,
                onClick = { onTabSelected(tab) },
                icon = {
                    Icon(
                        imageVector = if (isSelected) selectedIcon else unselectedIcon,
                        contentDescription = tab.title
                    )
                },
                label = {
                    Text(
                        text = tab.title,
                        fontSize = 11.sp,
                        fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = MaterialTheme.colorScheme.primary,
                    selectedTextColor = MaterialTheme.colorScheme.primary,
                    indicatorColor = MaterialTheme.colorScheme.primaryContainer
                )
            )
        }
    }
}

@Composable
fun AddClassDialog(
    onDismiss: () -> Unit,
    onAddSlot: (
        subjectName: String,
        subjectCode: String,
        faculty: String,
        room: String,
        day: String,
        timeSlotStr: String,
        type: SlotType
    ) -> Unit
) {
    var subjectName by remember { mutableStateOf("") }
    var subjectCode by remember { mutableStateOf("") }
    var faculty by remember { mutableStateOf("") }
    var room by remember { mutableStateOf("") }
    var selectedDay by remember { mutableStateOf("Monday") }
    var timeSlotStr by remember { mutableStateOf("09:00 AM - 10:00 AM") }
    var selectedType by remember { mutableStateOf(SlotType.LECTURE) }

    val days = listOf("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Text(
                text = "Add Custom Class / Lab",
                style = MaterialTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold)
            )
        },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                OutlinedTextField(
                    value = subjectName,
                    onValueChange = { subjectName = it },
                    label = { Text("Subject Name") },
                    placeholder = { Text("e.g. Deep Learning Studio") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                OutlinedTextField(
                    value = subjectCode,
                    onValueChange = { subjectCode = it },
                    label = { Text("Subject Code") },
                    placeholder = { Text("e.g. AIDS-301") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                OutlinedTextField(
                    value = faculty,
                    onValueChange = { faculty = it },
                    label = { Text("Faculty Name") },
                    placeholder = { Text("e.g. Dr. A. K. Sharma") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                OutlinedTextField(
                    value = room,
                    onValueChange = { room = it },
                    label = { Text("Room / Lab") },
                    placeholder = { Text("e.g. NVIDIA AI Lab / EDC-204") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                OutlinedTextField(
                    value = timeSlotStr,
                    onValueChange = { timeSlotStr = it },
                    label = { Text("Time Slot") },
                    placeholder = { Text("09:00 AM - 10:00 AM") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )

                // Day Selection Chips
                Text("Select Day:", style = MaterialTheme.typography.labelMedium)
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    days.take(3).forEach { day ->
                        FilterChip(
                            selected = selectedDay == day,
                            onClick = { selectedDay = day },
                            label = { Text(day.take(3)) }
                        )
                    }
                }
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    days.drop(3).forEach { day ->
                        FilterChip(
                            selected = selectedDay == day,
                            onClick = { selectedDay = day },
                            label = { Text(day.take(3)) }
                        )
                    }
                }

                // Type Selection Chips
                Text("Type:", style = MaterialTheme.typography.labelMedium)
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    SlotType.entries.forEach { type ->
                        FilterChip(
                            selected = selectedType == type,
                            onClick = { selectedType = type },
                            label = { Text(type.label) }
                        )
                    }
                }
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    if (subjectName.isNotBlank() && subjectCode.isNotBlank()) {
                        onAddSlot(
                            subjectName,
                            subjectCode,
                            faculty.ifBlank { "TBD" },
                            room.ifBlank { "EDC Main" },
                            selectedDay,
                            timeSlotStr,
                            selectedType
                        )
                        onDismiss()
                    }
                }
            ) {
                Text("Save Class")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    )
}
