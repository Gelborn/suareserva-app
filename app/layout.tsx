
import './globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import PWAInstall from '@/components/PWAInstall'

export const metadata = {
  metadataBase: new URL('https://suareserva.online'),
  title: {
    default: 'suareserva.online — Agendamentos simples para pequenos negócios',
    template: '%s — suareserva.online'
  },
  description: 'Crie seu link público, receba reservas em segundos e reduza no‑shows com lembretes no WhatsApp. Integração com Google Calendar e pagamentos.',
  openGraph: {
    title: 'suareserva.online — Agendamentos simples para pequenos negócios',
    description: 'Receba reservas, sincronize com Google Calendar e reduza faltas com WhatsApp.',
    url: 'https://suareserva.online',
    siteName: 'suareserva.online',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'suareserva.online' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'suareserva.online',
    description: 'Agendamentos simples com WhatsApp e Google Calendar.',
    images: ['/icon-512.png']
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-512.png'
  }
} as const


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
