
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, Users, ArrowRight } from 'lucide-react'

const Value = ({icon, title, desc}:{icon: any, title: string, desc: string}) => (
  <div className="card">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/10">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
      </div>
    </div>
  </div>
)

export default function Page() {
  return (
    <div className="container py-10">
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Demo ativa</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Agendamentos <span className="bg-black text-white px-2 rounded-xl dark:bg-white dark:text-black">simples</span> para pequenos negócios.</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">Compartilhe seu link público, exiba serviços e preços e deixe seus clientes reservarem em segundos. UX minimalista e direta.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/admin" className="btn btn-primary">Experimentar demo <ArrowRight size={16} /></Link>
            <a className="btn btn-ghost" href="#">Falar com a gente</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Value icon={<CalendarDays />} title="Link público" desc="suareserva.online/sua-marca" />
            <Value icon={<Clock />} title="Horários inteligentes" desc="Buffers, bloqueios, durações" />
            <Value icon={<Users />} title="Multi-equipe" desc="Atribua reservas por colaborador" />
          </div>
        </div>
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:.4}} className="relative">
          <div className="card">
            <div className="rounded-2xl bg-neutral-900 text-white p-6 dark:bg-brand-700">
              <p className="text-sm opacity-80">Página pública</p>
              <div className="mt-3 h-48 rounded-xl bg-neutral-800 grid place-items-center dark:bg-brand-900/40">
                <span className="text-neutral-400">calendário/slots preview</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute -right-6 -bottom-6 w-72 card">
            <div>
              <p className="text-sm font-medium">Serviço: Corte + Barba</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">R$ 89 · 45 min</p>
              <div className="mt-3 h-16 rounded-xl bg-neutral-100 grid place-items-center text-neutral-500 text-xs dark:bg-white/10">horários</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid lg:grid-cols-3 gap-4 mt-12">
        <div className="card">
          <h4 className="font-medium">O que entra no build real</h4>
          <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-inside">
            <li>Onboarding + autenticação</li>
            <li>Regras de serviço e horários</li>
            <li>Sincronização Google Calendar</li>
            <li>Pagamentos (PIX/cartão)</li>
            <li>Lembretes WhatsApp/E-mail</li>
            <li>SEO por página pública</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="font-medium">Modelo de dados</h4>
          <pre className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 overflow-auto whitespace-pre-wrap">{`business(id, handle, owner_user_id, name, phone, city, settings_json)
service(id, business_id, name, duration_min, price_cents, active)
booking(id, business_id, service_id, customer_name, phone_e164, date, start_min, end_min, status)`}</pre>
        </div>
        <div className="card">
          <h4 className="font-medium">Próximos passos</h4>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Scaffold Next.js + Supabase, Edge Functions para slots e criação de reserva, e rota pública <code>/[handle]</code>.</p>
          <Link href="/admin" className="mt-3 inline-flex items-center gap-2 text-sm underline">Abrir painel</Link>
        </div>
      </section>
    </div>
  )
}
