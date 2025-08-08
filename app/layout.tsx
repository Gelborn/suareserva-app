
import './globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import PWAInstall from '@/components/PWAInstall'

export const metadata = {
  title: 'suareserva.online',
  description: 'Agendamentos simples e elegantes.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <footer className="border-t border-neutral-200 dark:border-white/10 mt-16">
            <div className="container py-10 text-sm text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
              <span>© {new Date().getFullYear()} suareserva.online</span>
              <span className="opacity-70">Demo · PWA pronto</span>
            </div>
          </footer>
          <PWAInstall />
        </ThemeProvider>
      </body>
    </html>
  )
}
