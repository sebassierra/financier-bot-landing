'use client'

import { ds } from '@/lib/design-system'
import { CtaButton } from '@/components/cta-button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: ds.colors.background }}
    >
      {/* Grid de fondo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${ds.colors.text} 1px, transparent 1px), linear-gradient(90deg, ${ds.colors.text} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      {/* Glow decorativo superior izquierdo — usa --brand-primary */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]"
        style={{ background: ds.colors.primary }}
        aria-hidden
      />
      {/* Glow decorativo derecho — usa --brand-secondary */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-8 blur-[120px]"
        style={{ background: ds.colors.secondary }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-32 pb-24 text-center">
        {/* Badge de anuncio */}
        <a
          href="#"
          className="mb-8 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80"
          style={{
            background: ds.colors.surface,
            border: `1px solid ${ds.colors.border}`,
            color: ds.colors.textMuted,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ background: ds.colors.primary }}
          />
          <span style={{ color: ds.colors.primary }} className="font-semibold">Nuevo</span>
          &nbsp;· Ahora con análisis predictivo de gastos
          <ArrowRight size={12} />
        </a>

        {/* Título principal */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl">
          Toma el Control Total de tu Dinero{' '}
          <span className="gradient-text-brand">sin Perder un Segundo</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Registra, analiza y proyecta tus finanzas por WhatsApp en segundos.
          Deja que la IA haga el trabajo pesado por ti.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {/* Botón primario — usa ds.colors.primary; cámbialo en el Design System Panel */}
          <CtaButton label="Empezar mis 14 días GRATIS" size="lg" href="#" />
          <a
            href="#demo"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: ds.colors.textMuted }}
          >
            Ver cómo funciona
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {['Sin tarjeta de crédito', '14 días gratis', 'Cancela cuando quieras', '100% vía WhatsApp'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: ds.colors.primary }}
              />
              {item}
            </span>
          ))}
        </div>

        {/* Social proof numbers */}
        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 rounded-2xl px-8 py-5"
          style={{
            background: ds.colors.surface,
            border: `1px solid ${ds.colors.border}`,
            borderRadius: ds.geometry.borderRadius,
          }}
        >
          {[
            { value: '+2.400', label: 'usuarios activos' },
            { value: '$18M+', label: 'en gastos rastreados' },
            { value: '4.9/5', label: 'valoración promedio' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: ds.colors.primary }}
                /* Los números destacados usan --brand-primary */
              >
                {value}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
