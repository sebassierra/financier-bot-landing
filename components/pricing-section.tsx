'use client'

import { ds } from '@/lib/design-system'
import { Check, Zap, Star } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

/**
 * PRICING SECTION — AI Smart Bot
 * -------------------------------------------------------
 * Para cambiar los precios o los ítems de cada plan,
 * edita los objetos `plans` a continuación.
 *
 * Para cambiar los links de WhatsApp, actualiza los
 * campos `href` de cada plan.
 * -------------------------------------------------------
 */

const plans = [
  {
    id: 'explorador',
    name: 'Explorador',
    badge: null,
    price: 'Gratis',
    priceNote: '14 días de acceso total',
    description: 'Prueba el poder del bot sin ningún compromiso. Acceso completo desde el primer día.',
    features: [
      '14 días de acceso total',
      'Dashboard automático en tiempo real',
      'Registro ilimitado de gastos e ingresos',
      'Consultas por WhatsApp 24/7',
      'Alertas de presupuesto',
    ],
    cta: 'Probar Gratis',
    /* Link del Plan Explorador — redirige al bot de prueba */
    href: 'https://wa.me/573045308884?text=Hola!%20Vengo%20de%20la%20web%20y%20quiero%20probar%20el%20bot%20gratis.',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Lanzamiento',
    price: '$30.000',
    priceNote: 'COP / mes',
    description: 'Para quienes quieren el control total de sus finanzas, para siempre.',
    features: [
      'Dashboard automatizado de por vida',
      'Análisis avanzado de comportamientos',
      'Gráficas y reportes avanzados',
      'Registro ilimitado de gastos e ingresos',
      'Resúmenes semanales y mensuales',
      'Soporte prioritario por WhatsApp',
    ],
    cta: 'Activar Plan Pro',
    /* Link del Plan Pro — redirige al número personal para coordinar el pago */
    href: 'https://wa.me/573006763077?text=Hola!%20Quiero%20activar%20mi%20Plan%20Pro%20de%20%2430k%20mediante%20transferencia.',
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section id="precios" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span
            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
            style={{ background: `${ds.colors.secondary}20`, color: ds.colors.secondary }}
          >
            Planes y Precios
          </span>
          <h2 className="text-3xl font-bold text-foreground text-balance">
            Elige tu plan y empieza hoy
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Sin contratos largos, sin letra pequeña. Empieza gratis y actualiza cuando quieras.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-2xl p-7 transition-all duration-200"
              style={{
                background: plan.highlighted ? ds.colors.surfaceElevated : ds.colors.surface,
                borderRadius: ds.geometry.borderRadius,
                border: plan.highlighted
                  /* Borde del plan Pro usa --brand-primary */
                  ? `2px solid ${ds.colors.primary}80`
                  : `1px solid ${ds.colors.border}`,
                boxShadow: plan.highlighted
                  ? `${ds.effects.shadowCard}, ${ds.effects.shadowGlowPrimary}`
                  : ds.effects.shadowCard,
              }}
            >
              {/* Badge de lanzamiento */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide"
                    style={{
                      background: ds.colors.secondary,
                      color: ds.colors.background,
                    }}
                  >
                    <Star size={10} fill={ds.colors.background} />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{ background: `${ds.colors.primary}20` }}
                  >
                    <Zap size={14} style={{ color: ds.colors.primary }} />
                  </div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: ds.colors.textMuted }}
                  >
                    Plan
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6" style={{ borderBottom: `1px solid ${ds.colors.border}` }}>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-black"
                    /* El precio del plan Pro usa --brand-primary */
                    style={{ color: plan.highlighted ? ds.colors.primary : ds.colors.text }}
                  >
                    {plan.price}
                  </span>
                  {plan.highlighted && (
                    <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
                  )}
                </div>
                {!plan.highlighted && (
                  <p className="mt-1 text-sm" style={{ color: ds.colors.primary }}>
                    {plan.priceNote}
                  </p>
                )}
              </div>

              {/* Features list */}
              <ul className="mb-8 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full mt-0.5"
                      style={{ background: `${ds.colors.primary}20` }}
                    >
                      <Check size={11} style={{ color: ds.colors.primary }} />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: plan.highlighted ? ds.colors.primary : 'transparent',
                  color: plan.highlighted ? ds.colors.background : ds.colors.primary,
                  border: plan.highlighted ? 'none' : `1px solid ${ds.colors.primary}`,
                  borderRadius: ds.geometry.borderRadius,
                  /* Botones de pricing usan --brand-primary del Design System Panel */
                }}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Pago del Plan Pro mediante transferencia bancaria. Sin tarjeta de crédito requerida.
        </p>
      </div>
    </section>
  )
}
