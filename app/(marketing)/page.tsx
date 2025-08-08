"use client"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles, CalendarSync } from "lucide-react"

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 leading-relaxed">
    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
)

/* Phone-like frame smaller height */
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-[320px] sm:w-[340px]">
    <div className="rounded-[2.25rem] border border-black/15 dark:border-white/10 shadow-2xl bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="relative h-7 bg-black/5 dark:bg-white/5">
        <div className="absolute inset-x-1/2 -translate-x-1/2 top-0 h-5 w-28 bg-black/80 rounded-b-2xl" />
      </div>
      <div className="p-5 min-h-[440px]">{children}</div>
    </div>
  </div>
)

/* Mini public page preview with hover on services */
const PublicPageMini = () => (
  <div className="rounded-2xl bg-neutral-900 text-white p-4 dark:bg-brand-700">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-black grid place-items-center text-sm font-bold ring-2 ring-white/20">
        SR
      </div>
      <div>
        <p className="font-medium">Studio Reserva</p>
        <p className="text-xs text-white/80">Cortes & barba no Centro</p>
      </div>
    </div>
    <p className="mt-1 text-[11px] text-white/70">Rua das Palmeiras, 120 — Centro</p>

    <p className="mt-4 text-sm font-medium">Selecione o serviço que quer agendar:</p>
    <ul className="mt-3 space-y-2 text-sm">
      {[
        { name: "Corte masculino", price: "R$ 59 · 30 min" },
        { name: "Corte + Barba", price: "R$ 89 · 45 min" },
        { name: "Barba completa", price: "R$ 49 · 25 min" }
      ].map((srv) => (
        <li
          key={srv.name}
          className="flex items-center justify-between rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/20 cursor-pointer"
        >
          <div className="space-y-0.5">
            <p className="font-medium">{srv.name}</p>
            <p className="text-xs text-white/70">{srv.price}</p>
          </div>
          <ArrowRight size={16} className="opacity-80" />
        </li>
      ))}
    </ul>
  </div>
)

export default function Page() {
  return (
    <div className="container py-12">
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Demo ativa</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
            Agendamentos <span className="underline decoration-emerald-500/80 underline-offset-[10px] decoration-4">simples</span> para pequenos negócios.
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
            Link público, serviços e preços em poucos passos. Reservas em segundos — UX direta para celular.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admin" className="btn btn-primary">
              Comece agora, de graça <ArrowRight size={16} />
            </Link>
            <Link href="/admin?demo=1" className="btn btn-ghost">Veja o demo</Link>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} className="flex justify-center">
          <PhoneFrame>
            <PublicPageMini />
          </PhoneFrame>
        </motion.div>
      </section>

      <section className="mt-12 grid lg:grid-cols-3 gap-4 [grid-auto-rows:1fr]">
        <div className="card flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/10"><MessageCircle /></div>
            <h3 className="text-lg font-semibold">WhatsApp que reduz faltas</h3>
          </div>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Bullet>Lembretes automáticos em 24h e 2h (Pro)</Bullet>
            <Bullet>Mensagem clara com botão de confirmar</Bullet>
            <Bullet>Reenvio se não visualizar</Bullet>
          </ul>
        </div>
        <div className="card flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/10"><Sparkles /></div>
            <h3 className="text-lg font-semibold">UX rápida, zero atrito</h3>
          </div>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Bullet>Escolhe serviço → horário → confirma</Bullet>
            <Bullet>Slots com buffers e bloqueios</Bullet>
            <Bullet>Mobile‑first, carregamento leve</Bullet>
          </ul>
        </div>
        <div className="card flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/10"><CalendarSync /></div>
            <h3 className="text-lg font-semibold">Agenda + pagamentos</h3>
          </div>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Bullet>Google Calendar: bloqueia e cria eventos</Bullet>
            <Bullet>PIX/cartão opcional para garantir presença</Bullet>
            <Bullet>Regras de cancelamento e reagendamento</Bullet>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-center">Planos simples, sem pegadinha</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-4 [grid-auto-rows:1fr]">
          <div className="card flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide opacity-70">Grátis</p>
                <h4 className="text-xl font-semibold mt-1">Plano Free</h4>
              </div>
              <p className="text-2xl font-semibold">R$ 0</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <Bullet>Até <b>30 reservas/mês</b></Bullet>
              <Bullet>Página pública simples (sem personalização)</Bullet>
              <Bullet>WhatsApp: <b>1 lembrete</b> (2h antes)</Bullet>
            </ul>
            <div className="mt-auto">
              <Link href="/admin" className="btn btn-primary mt-5 w-full">Começar grátis</Link>
            </div>
          </div>
          <div className="card flex flex-col border-2 border-emerald-500/40">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide opacity-70">Mais popular</p>
                <h4 className="text-xl font-semibold mt-1">Plano Pro</h4>
              </div>
              <p className="text-2xl font-semibold">R$ 39,90/mês</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <Bullet>Até <b>2000 reservas/mês</b></Bullet>
              <Bullet>Logo, capa e cor da sua marca</Bullet>
              <Bullet>WhatsApp: lembretes em <b>24h</b> e <b>2h</b></Bullet>
              <Bullet>Controle de cancelamento e reagendamento</Bullet>
            </ul>
            <div className="mt-auto">
              <Link href="/admin?upgrade=pro" className="btn btn-primary mt-5 w-full">Assinar Pro</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-center">Perguntas frequentes</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="card"><h4 className="font-medium">Como funciona o link público?</h4><p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Você recebe uma página suareserva.online/<b>sua‑marca</b> com seus serviços, preços e horários disponíveis.</p></div>
          <div className="card"><h4 className="font-medium">Posso integrar com meu Google Calendar?</h4><p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Sim — eventos existentes bloqueiam horários e novas reservas aparecem na agenda.</p></div>
          <div className="card"><h4 className="font-medium">Preciso cobrar na reserva?</h4><p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">É opcional. Você pode habilitar pagamento antecipado (PIX/cartão) para garantir presença ou só confirmar no local.</p></div>
          <div className="card"><h4 className="font-medium">Consigo personalizar a página?</h4><p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">No plano Pro você define logo, capa e cor principais.</p></div>
        </div>
      </section>
    </div>
  )
}
