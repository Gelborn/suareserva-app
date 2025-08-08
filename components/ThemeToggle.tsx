
'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="px-3 py-1.5 rounded-xl hover:bg-neutral-200/60 dark:hover:bg-white/10 text-sm inline-flex items-center gap-2"
    >
      {isDark ? <Sun size={16}/> : <Moon size={16}/>}
      {isDark ? 'Claro' : 'Escuro'}
    </button>
  )
}
