"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 hover:bg-primary/20 transition-all duration-300 shadow-lg group"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun className="absolute inset-0 h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                <Moon className="absolute inset-0 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
