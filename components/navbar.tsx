'use client'

import { ds } from '@/lib/design-system'
import { CtaButton } from '@/components/cta-button'

const navLinks = [
  { label: 'Cómo funciona', href: '#demo' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Precios', href: '#precios' },
]

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3"
      style={{
        background: ds.colors.glass,
        backdropFilter: `blur(${ds.effects.glassBlur})`,
        WebkitBackdropFilter: `blur(${ds.effects.glassBlur})`,
        borderBottom: `1px solid ${ds.colors.border}`,
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 font-bold text-foreground text-sm tracking-tight">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black"
          style={{ background: ds.colors.primary, color: ds.colors.background }}
        >
          AI
        </span>
        <span>AI Smart Bot - Tu asistente financiero personal</span>
      </a>

      {/* Nav links — escritorio */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <CtaButton label="Empezar gratis" href="https://wa.me/573045308884?text=Hola!%20Vengo%20de%20la%20web%20y%20quiero%20probar%20el%20bot%20gratis." variant="primary" />
    </header>
  )
}

export function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: ds.colors.border, background: ds.colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-black"
            style={{ background: ds.colors.primary, color: ds.colors.background }}
          >
            AI
          </span>
          AI Smart Bot
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Financier Bot. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
          <a href="#" className="hover:text-foreground transition-colors">Términos</a>
          <a href="#" className="hover:text-foreground transition-colors">Soporte</a>
        </div>
      </div>
    </footer>
  )
}
