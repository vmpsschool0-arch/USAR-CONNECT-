package com.example.ui.theme

import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext

private val DarkColorScheme = darkColorScheme(
    primary = UsarCyanLight,
    onPrimary = UsarNavyPrimary,
    primaryContainer = UsarBlueSecondary,
    onPrimaryContainer = UsarCyanLight,
    secondary = UsarRoboticsGold,
    onSecondary = UsarNavyPrimary,
    tertiary = UsarEmeraldGreen,
    background = UsarBackgroundDark,
    surface = UsarSurfaceDark,
    onBackground = UsarTextPrimaryDark,
    onSurface = UsarTextPrimaryDark,
    surfaceVariant = UsarCardBorderDark,
    onSurfaceVariant = UsarTextSecondaryDark
)

private val LightColorScheme = lightColorScheme(
    primary = UsarCyanAccent,
    onPrimary = UsarSurfaceLight,
    primaryContainer = Color(0xFFE0F2FE),
    onPrimaryContainer = UsarNavyPrimary,
    secondary = UsarRoboticsGold,
    onSecondary = UsarSurfaceLight,
    tertiary = UsarEmeraldGreen,
    background = UsarBackgroundLight,
    surface = UsarSurfaceLight,
    onBackground = UsarTextPrimaryLight,
    onSurface = UsarTextPrimaryLight,
    surfaceVariant = UsarCardBorderLight,
    onSurfaceVariant = UsarTextSecondaryLight
)

@Composable
fun UsarConnectTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = false, // Keep default USAR branding
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
