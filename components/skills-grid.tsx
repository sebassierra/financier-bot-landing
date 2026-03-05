'use client'

import { ds } from '@/lib/design-system'
import { Bot, TrendingUp, BellRing, MessageCircleQuestion } from 'lucide-react'

const skills = [
  {
    icon: Bot,
    title: 'Registro Automático',
    description:
      'Interpreta tus mensajes en lenguaje natural y registra gastos e ingresos en tu hoja de cálculo sin que tengas que escribir nada más.',
    badge: 'IA NLP',
  },
  {
    icon: TrendingUp,
    title: 'Análisis de Tendencias',
    description:
      'Detecta patrones en tus hábitos de gasto, identifica categorías donde más gastas y sugiere oportunidades de ahorro personalizadas.',
    badge: 'Machine Learning',
  },
  {
    icon: BellRing,
    title: 'Control Presupuestal',
    description:
      'Define límites de gasto por categoría y recibe alertas inteligentes antes de que los superes, no después.',
    badge: 'Alertas en vivo',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Consultas Inteligentes',
    description:
      'Pregúntale cualquier cosa sobre tus finanzas: "¿Cuánto gasté en comida este mes?" y obtén respuestas claras al instante.',
    badge: 'GPT Powered',
  },
]

export function SkillsGrid() {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span
            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
            style={{ background: `${ds.colors.primary}20`, color: ds.colors.primary }}
          >
            Habilidades del Bot
          </span>
          <h2 className="text-3xl font-bold text-foreground text-balance">
            Todo lo que tu agente financiero puede hacer
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Un asistente financiero que trabaja 24/7, nunca comete errores y habla tu idioma.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map(({ icon: Icon, title, description, badge }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: ds.colors.surfaceElevated,
                borderRadius: ds.geometry.borderRadius,
                border: `1px solid ${ds.colors.border}`,
                boxShadow: ds.effects.shadowCard,
              }}
              /* Al hacer hover el borde cambia a --brand-primary via JS inline en el evento */
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = ds.colors.primary
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = ds.effects.shadowGlowPrimary
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = ds.colors.border
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = ds.effects.shadowCard
              }}
            >
              {/* Icono — usa ds.colors.primary — cambia en el Design System Panel */}
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: `${ds.colors.primary}20`,
                  borderRadius: ds.geometry.borderRadius,
                }}
              >
                <Icon size={22} style={{ color: ds.colors.primary }} />
              </div>

              {/* Badge de tecnología */}
              <span
                className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
                style={{ background: `${ds.colors.secondary}20`, color: ds.colors.secondary }}
              >
                {badge}
              </span>

              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
