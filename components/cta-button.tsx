'use client'

import { ds } from '@/lib/design-system'
import { ArrowRight, CreditCard } from 'lucide-react'

interface CtaButtonProps {
  label: string
  href?: string
  variant?: 'primary' | 'outline'
  size?: 'default' | 'lg'
}

/**
 * Botón CTA reutilizable.
 * Todos los estilos vienen de ds.colors.primary — cámbialo en el Design System Panel
 * para actualizar TODOS los botones "14 días gratis" de la página a la vez.
 */
export function CtaButton({ label, href = '#', variant = 'primary', size = 'default' }: CtaButtonProps) {
  const padding = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'

  const baseStyle: React.CSSProperties = {
    borderRadius: ds.geometry.borderRadiusPill,
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: `all ${ds.effects.transitionDuration} ease`,
    textDecoration: 'none',
  }

  const primaryStyle: React.CSSProperties = {
    ...baseStyle,
    background: ds.colors.primary,       /* cambia ds.colors.primary en lib/design-system.ts */
    color: ds.colors.background,
    boxShadow: ds.effects.shadowGlowPrimary,
  }

  const outlineStyle: React.CSSProperties = {
    ...baseStyle,
    background: 'transparent',
    color: ds.colors.primary,             /* usa --brand-primary para color del texto/borde */
    border: `1px solid ${ds.colors.primary}`,
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={variant === 'primary' ? primaryStyle : outlineStyle}
      className={`${padding} hover:opacity-90 active:scale-95`}
    >
      {label}
      <ArrowRight size={16} />
    </a>
  )
}

export function FreeBanner() {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center"
          style={{
            background: `linear-gradient(135deg, ${ds.colors.primary}15, ${ds.colors.secondary}10)`,
            border: `1px solid ${ds.colors.primary}40`,
            borderRadius: '24px',
            boxShadow: `${ds.effects.shadowGlowPrimary}, ${ds.effects.shadowCard}`,
          }}
        >
          {/* Decoración de fondo */}
          <div
            className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
            style={{ background: ds.colors.primary }}
            aria-hidden
          />
          <div
            className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10 blur-3xl"
            style={{ background: ds.colors.secondary }}
            aria-hidden
          />

          <span
            className="mb-4 inline-block rounded-full px-5 py-1.5 text-sm font-bold tracking-wide"
            style={{
              background: ds.colors.primary,
              color: ds.colors.background,
              /* Badge de prueba gratuita — usa --brand-primary */
            }}
          >
            14 DIAS GRATIS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-foreground text-balance leading-tight">
            Empieza hoy sin riesgos.{' '}
            <span className="gradient-text-brand">Sin tarjeta de crédito.</span>
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Prueba Financier Bot durante 14 días completamente gratis. Registro automático
            vía WhatsApp desde el primer día, sin compromisos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Botón principal — color viene de ds.colors.primary */}
            <CtaButton label="Empezar mis 14 días GRATIS" size="lg" href="https://wa.me/573045308884?text=Hola!%20Vengo%20de%20la%20web%20y%20quiero%20probar%20el%20bot%20gratis." />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CreditCard size={14} />
            <span>Sin tarjeta de crédito · Cancela cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  )
}
