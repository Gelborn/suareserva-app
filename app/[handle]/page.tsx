
'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const SVC = [
  { name: 'Corte + Barba', duration: 45, price: 89 },
  { name: 'Corte', duration: 30, price: 59 },
]

export default function Page({ params }: { params: { handle: string }}) {
  const [svc, setSvc] = useState(0)
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10))
  const [time, setTime] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const slots = useMemo(()=> ['09:00','09:45','10:30','11:15','14:00','14:45','15:30'], [date, svc])

  return (
    <div className="container py-10">
      <div className="card">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{params.handle}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">São Paulo · +55 11 99999-0000</p>
          </div>
          <div className="text-xs bg-neutral-100 px-3 py-1.5 rounded-xl dark:bg-white/10">suareserva.online/{params.handle}</div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-5">
          <div className="space-y-2">
            {SVC.map((s, i) => (
              <button key={i} onClick={()=> setSvc(i)} className={"w-full text-left rounded-xl border p-3 transition " + (svc===i ? "border-black bg-neutral-50 dark:bg-white/10": "border-neutral-200 hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/10")}>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{s.name}</p>
                  <span className="text-sm">R$ {s.price}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-0.5">{s.duration} min</p>
              </button>
            ))}
          </div>
          <div className="sm:col-span-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-500 dark:text-neutral-300">Data</label>
                <input type="date" className="mt-1 w-full rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={date} onChange={e=> setDate(e.target.value)} />
              </div>
              <div className="text-sm mt-6">{new Date(date).toLocaleDateString()} · {SVC[svc].duration} min · R$ {SVC[svc].price}</div>
            </div>
            <div className="mt-3">
              <label className="text-xs text-neutral-500 dark:text-neutral-300">Horários</label>
              <div className="mt-2 overflow-x-auto snap-row flex gap-2 py-1">
                {slots.map((t)=>(
                  <motion.button key={t}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=> setTime(t)}
                    className={"snap-item min-w-[90px] px-3 py-2 rounded-xl border text-sm transition " + (time===t ? "bg-black text-white border-black dark:bg-white dark:text-black":"border-neutral-200 hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-white/10")}>
                    {t}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="mt-3 grid sm:grid-cols-3 gap-2 items-end">
              <div className="sm:col-span-1">
                <label className="text-xs text-neutral-500 dark:text-neutral-300">Nome</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={name} onChange={e=> setName(e.target.value)} />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs text-neutral-500 dark:text-neutral-300">Telefone (WhatsApp)</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={phone} onChange={e=> setPhone(e.target.value)} placeholder="55..." />
              </div>
              <button disabled={!time || !name || !phone} className={"h-10 rounded-xl text-sm transition " + (!time||!name||!phone ? "bg-neutral-200 text-neutral-500 dark:bg-white/10 dark:text-neutral-400":"bg-black text-white dark:bg-white dark:text-black")}>
                Reservar {time ? "· " + time : ""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
