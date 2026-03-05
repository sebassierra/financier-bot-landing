'use client'

import { ds } from '@/lib/design-system'
import { Star, Clock, ShieldCheck, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Ahorro de tiempo',
    description: 'Lo que antes tomaba 30 minutos en llenar tu hoja de gastos, ahora toma 5 segundos.',
  },
  {
    icon: Zap,
    title: 'Cero errores',
    description: 'Sin errores de tipeo, sin fórmulas rotas. La IA registra y calcula con precisión milimétrica.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacidad total',
    description: 'Tus datos viven en tu propio Google Sheets. Nosotros nunca almacenamos tu información financiera.',
  },
]

const testimonials = [
  {
    name: 'Camila R.',
    role: 'Freelancer, Bogotá',
    text: 'Llevo 3 meses usándolo y ya ahorré $800k que antes "desaparecían". Ahora sé exactamente en qué gasto.',
    rating: 5,
  },
  {
    name: 'Juan Sebastián M.',
    role: 'Emprendedor',
    text: 'Lo que más me gustó fue que no tuve que cambiar nada. Solo escribirle por WhatsApp como siempre.',
    rating: 5,
  },
  {
    name: 'Laura V.',
    role: 'Profesora universitaria',
    text: 'Pensé que la IA era complicada. Resulta que solo tengo que decirle "gasté X en Y" y listo. Increíble.',
    rating: 5,
  },
]

export function SocialProof() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6 space-y-20">
        {/* Benefits */}
        <div>
          <div className="mb-12 text-center">
            <span
              className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
              style={{ background: `${ds.colors.primary}20`, color: ds.colors.primary }}
            >
              Por qué elegirlo
            </span>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Beneficios que cambian tu relación con el dinero
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-4 rounded-2xl p-6"
                style={{
                  background: ds.colors.surface,
                  borderRadius: ds.geometry.borderRadius,
                  border: `1px solid ${ds.colors.border}`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${ds.colors.primary}20` }}
                >
                  {/* Icono usa --brand-primary — modifica ds.colors.primary en el panel */}
                  <Icon size={24} style={{ color: ds.colors.primary }} />
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="mb-12 text-center">
            <span
              className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
              style={{ background: `${ds.colors.secondary}20`, color: ds.colors.secondary }}
            >
              Testimonios
            </span>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Lo que dicen quienes ya toman control
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map(({ name, role, text, rating }) => (
              <div
                key={name}
                className="flex flex-col gap-4 rounded-2xl p-6"
                style={{
                  background: ds.colors.surface,
                  borderRadius: ds.geometry.borderRadius,
                  border: `1px solid ${ds.colors.border}`,
                  boxShadow: ds.effects.shadowCard,
                }}
              >
                {/* Estrellas — usa --brand-secondary para el color dorado */}
                <div className="flex gap-0.5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={ds.colors.secondary}
                      style={{ color: ds.colors.secondary }}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">"{text}"</p>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: `${ds.colors.primary}30`, color: ds.colors.primary }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
