import React from 'react'

export default function SlotsPreview({ times = ['09:00','09:45','10:30','11:15','14:00','14:45','15:30'] }: { times?: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-2 text-xs">
      {times.map((t) => (
        <div
          key={t}
          className="rounded-xl border border-neutral-200 bg-neutral-50 py-2 text-center text-neutral-900 dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          {t}
        </div>
      ))}
    </div>
  )
}
