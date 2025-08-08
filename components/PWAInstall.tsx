
'use client'
import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

export default function PWAInstall() {
  const [prompt, setPrompt] = useState<any>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setPrompt(e)
      setTimeout(()=> setVisible(true), 300)
    }
    window.addEventListener('beforeinstallprompt', handler as any)
    return () => window.removeEventListener('beforeinstallprompt', handler as any)
  }, [])

  if (!visible || !prompt) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glass rounded-2xl p-4 flex items-center gap-3">
        <Download size={18} />
        <div className="text-sm">
          <p className="font-medium">Instalar aplicativo</p>
          <p className="text-neutral-600 dark:text-neutral-300 text-xs">Acesse mais rápido pelo atalho do seu celular.</p>
        </div>
        <button
          className="btn btn-primary h-9"
          onClick={async () => {
            prompt.prompt()
            const { outcome } = await prompt.userChoice
            setVisible(false)
          }}
        >
          Instalar
        </button>
      </div>
    </div>
  )
}
