/**
 * ============================================================
 * AI SMART BOT — LANDING PAGE
 * ============================================================
 *
 * DESIGN SYSTEM PANEL:
 *   Todas las variables de estilo globales están en:
 *   → lib/design-system.ts
 *
 *   Cambia los valores allí para actualizar:
 *   ✓ Colores de botones CTA "14 días GRATIS"
 *   ✓ Iconos de las habilidades del bot
 *   ✓ Bordes del chatbot flotante
 *   ✓ Toda la página automáticamente
 *
 * ============================================================
 */

import { HeroSection } from '@/components/hero-section'
import { DashboardPreview } from '@/components/dashboard-preview'
import { WhatsAppChat } from '@/components/whatsapp-chat'
import { SkillsGrid } from '@/components/skills-grid'
import { SocialProof } from '@/components/social-proof'
import { FreeBanner } from '@/components/cta-button'
import { PricingSection } from '@/components/pricing-section'
import { FloatingAgent } from '@/components/floating-agent'
import { Navbar, Footer } from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. Hero ── */}
        <HeroSection />

        {/* ── 2. Dashboard Preview ── */}
        <section id="demo">
          <DashboardPreview />
        </section>

        {/* ── 3. WhatsApp Experience ── */}
        <WhatsAppChat />

        {/* ── 4. Catálogo de Habilidades ── */}
        <section id="skills">
          <SkillsGrid />
        </section>

        {/* ── 5. Social Proof & Testimonios ── */}
        <section id="testimonios">
          <SocialProof />
        </section>

        {/* ── 6. Pricing — 2 planes ── */}
        <PricingSection />

        {/* ── 7. Free Trial Banner ── */}
        <section id="precio">
          <FreeBanner />
        </section>
      </main>

      <Footer />

      {/* ── 8. Floating WhatsApp Support Button ── */}
      <FloatingAgent />
    </>
  )
}
