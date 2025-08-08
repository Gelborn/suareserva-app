
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, LinkIcon, Settings } from 'lucide-react'
import SlotsPreview from '@/components/SlotsPreview'

type Service = { name: string; duration: number; price: number }

export default function Page() {
  const [biz, setBiz] = useState({
    name: 'Café Aurora',
    handle: 'cafe-aurora',
    city: 'São Paulo',
    phone: '+55 11 99999-0000',
    slot: 30,
    buffer: 10,
    hours: { weekday: { open: '09:00', close: '18:00'}, sat: { open: '10:00', close: '14:00' } },
    services: [
      { name: 'Corte + Barba', duration: 45, price: 89 },
      { name: 'Corte', duration: 30, price: 59 },
    ] as Service[]
  })

  const updateService = (i:number, patch: Partial<Service>) => {
    const next = [...biz.services]; next[i] = { ...next[i], ...patch }; setBiz({ ...biz, services: next })
  }
  const add = () => setBiz({ ...biz, services: [...biz.services, { name: 'Novo serviço', duration: 30, price: 100 }] })
  const rm  = (i:number) => setBiz({ ...biz, services: biz.services.filter((_,idx)=> idx!==i) })

  return (
    <div className="container py-10">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{biz.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{biz.handle} · {biz.city}</p>
              </div>
              <a href={`https://suareserva.online/${biz.handle}`} target="_blank" className="inline-flex items-center gap-2 text-sm rounded-xl px-3 py-2 border border-neutral-300 hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-white/10">
                <LinkIcon size={16}/> Link público
              </a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay: .05}} className="card mt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Serviços</h4>
              <button onClick={add} className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-3 py-2 text-sm dark:bg-white dark:text-black"><Plus size={16}/> Adicionar</button>
            </div>
            <div className="space-y-3">
              {biz.services.map((s, i) => (
                <motion.div key={i} layout className="grid sm:grid-cols-12 gap-3 items-center rounded-2xl border border-neutral-200 p-3 dark:border-white/10">
                  <div className="sm:col-span-5">
                    <label className="text-xs text-neutral-500 dark:text-neutral-300">Nome</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 dark:bg-transparent dark:border-white/10">
                      <input className="w-full bg-transparent outline-none" value={s.name} onChange={(e)=> updateService(i, { name: e.target.value })} />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-xs text-neutral-500 dark:text-neutral-300">Duração</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 dark:bg-transparent dark:border-white/10">
                      <input type="number" className="w-full bg-transparent outline-none" value={s.duration} onChange={(e)=> updateService(i, { duration: Number(e.target.value) })} />
                      <span className="text-neutral-500 text-sm">min</span>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-xs text-neutral-500 dark:text-neutral-300">Preço</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 dark:bg-transparent dark:border-white/10">
                      <span className="text-neutral-500 text-sm">R$</span>
                      <input type="number" className="w-full bg-transparent outline-none" value={s.price} onChange={(e)=> updateService(i, { price: Number(e.target.value) })} />
                    </div>
                  </div>
                  <div className="sm:col-span-1 flex justify-end">
                    <button onClick={()=> rm(i)} className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10"><Trash2 size={16}/></button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay: .1}} className="card mt-6">
            <h4 className="font-medium mb-3">Horários do Negócio</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-neutral-200 p-4 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Semana</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">{biz.hours.weekday.open} — {biz.hours.weekday.close}</p>
                  </div>
                  <Settings size={16} className="opacity-50"/>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <input type="time" className="rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={biz.hours.weekday.open} onChange={(e)=> setBiz({ ...biz, hours: { ...biz.hours, weekday: { ...biz.hours.weekday, open: e.target.value }}})} />
                  <input type="time" className="rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={biz.hours.weekday.close} onChange={(e)=> setBiz({ ...biz, hours: { ...biz.hours, weekday: { ...biz.hours.weekday, close: e.target.value }}})} />
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-4 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Sábado</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">{biz.hours.sat.open} — {biz.hours.sat.close}</p>
                  </div>
                  <Settings size={16} className="opacity-50"/>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <input type="time" className="rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={biz.hours.sat.open} onChange={(e)=> setBiz({ ...biz, hours: { ...biz.hours, sat: { ...biz.hours.sat, open: e.target.value }}})} />
                  <input type="time" className="rounded-xl border px-3 py-2 dark:bg-transparent dark:border-white/10" value={biz.hours.sat.close} onChange={(e)=> setBiz({ ...biz, hours: { ...biz.hours, sat: { ...biz.hours.sat, close: e.target.value }}})} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-1">
          <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay: .15}} className="card">
            <h4 className="font-medium mb-2">Prévia pública</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">Como os clientes verão.</p>
            <div className="rounded-2xl border border-neutral-200 p-4 dark:border-white/10 glass">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{biz.name}</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">{biz.city} · {biz.phone}</p>
                </div>
                <div className="text-xs bg-neutral-100 px-3 py-1.5 rounded-xl dark:bg-white/10">/{biz.handle}</div>
              </div>
              <div className="mt-3 h-24 rounded-xl bg-neutral-100 p-3 dark:bg-white/10">
                <SlotsPreview />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
