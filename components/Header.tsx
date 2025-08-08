
'use client'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-neutral-50/80 dark:bg-brand-900/70 backdrop-blur border-b border-neutral-200/60 dark:border-white/10">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          suareserva.online
        </Link>
        <nav className="text-sm flex items-center gap-2">
          <Link className="px-3 py-1.5 rounded-xl hover:bg-neutral-200/60 dark:hover:bg-white/10" href="/">Início</Link>
          <Link className="px-3 py-1.5 rounded-xl hover:bg-neutral-200/60 dark:hover:bg-white/10" href="/admin">Painel</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
