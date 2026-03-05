/**
 * ============================================================
 * DESIGN SYSTEM PANEL — FINANCIER BOT
 * ============================================================
 * Este es el panel centralizado de estilos de la landing page.
 * Modifica cualquier valor aquí y se propagará automáticamente
 * a todos los componentes que lo consumen.
 *
 * CÓMO USAR:
 *   import { ds } from '@/lib/design-system'
 *   <button style={{ backgroundColor: ds.colors.primary }}>...</button>
 *   o usa las clases de Tailwind que mapean a estas variables CSS.
 * ============================================================
 */

export const designSystem = {
  // ----------------------------------------------------------
  // COLORES DE MARCA
  // Cambia estos valores para actualizar TODOS los botones CTA,
  // iconos de habilidades y bordes del chatbot flotante.
  // ----------------------------------------------------------
  colors: {
    /** Color primario — verde éxito financiero.
     *  Se aplica en: botones "14 días gratis", iconos de skills,
     *  borde del widget flotante de WhatsApp, badges activos.
     *  Tailwind: usa la clase `brand-primary` (mapeada en globals.css) */
    primary: '#10B981',       // Emerald-500 — verde confianza/dinero

    /** Color secundario — dorado para acentos de valor premium.
     *  Se aplica en: etiquetas de precio, estrellas de reseñas,
     *  highlights del banner de prueba gratuita.
     *  Tailwind: usa la clase `brand-secondary` */
    secondary: '#F59E0B',     // Amber-400 — oro/dorado premium

    /** Fondo principal — antracita profundo (dark mode premium).
     *  Base de toda la página. */
    background: '#0D1117',    // Casi negro, tono azul-grafito

    /** Fondo de tarjetas/secciones secundarias */
    surface: '#161B22',       // Un tono más claro que background

    /** Fondo de tarjetas con borde sutil */
    surfaceElevated: '#21262D',

    /** Color de texto principal — blanco roto para legibilidad. */
    text: '#E6EDF3',          // Off-white, reduce fatiga visual

    /** Color de texto secundario / subtítulos */
    textMuted: '#8B949E',     // Gris neutro medio

    /** Color para bordes sutiles */
    border: '#30363D',        // Gris oscuro para separadores

    /** Color de fondo para glassmorphism */
    glass: 'rgba(22, 27, 34, 0.75)',
  },

  // ----------------------------------------------------------
  // GEOMETRÍA
  // Ajusta el border-radius global de todos los componentes.
  // ----------------------------------------------------------
  geometry: {
    /** Radio de borde para tarjetas, botones y modales.
     *  '12px' = look moderno y suave. Aumenta para más "redondeado". */
    borderRadius: '12px',

    /** Radio para píldoras y badges */
    borderRadiusPill: '9999px',

    /** Radio para inputs */
    borderRadiusInput: '8px',
  },

  // ----------------------------------------------------------
  // TIPOGRAFÍA
  // Define la fuente y escalas de tamaño.
  // ----------------------------------------------------------
  typography: {
    /** Fuente principal — aplicada globalmente via layout.tsx */
    fontFamily: 'Geist, Inter, system-ui, sans-serif',

    /** Escala de tamaños de título */
    sizes: {
      heroTitle: '3.5rem',     // 56px — Título principal del Hero
      sectionTitle: '2.25rem', // 36px — Títulos de sección
      cardTitle: '1.25rem',    // 20px — Títulos de tarjeta
      body: '1rem',            // 16px — Texto de cuerpo
      small: '0.875rem',       // 14px — Texto auxiliar / labels
      xs: '0.75rem',           // 12px — Badges / captions
    },

    /** Pesos tipográficos */
    weights: {
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400',
    },

    /** Interlineado de cuerpo — entre 1.4 y 1.6 para legibilidad */
    lineHeight: '1.6',
  },

  // ----------------------------------------------------------
  // EFECTOS
  // Controla glassmorphism y sombras.
  // ----------------------------------------------------------
  effects: {
    /** Nivel de blur para fondos de cristal (glassmorphism).
     *  '16px' = sutil y elegante. Aumenta para más desenfoque. */
    glassBlur: '16px',

    /** Intensidad de sombra para tarjetas elevadas */
    shadowCard: '0 4px 24px rgba(0, 0, 0, 0.4)',

    /** Sombra de glow para elementos con color primario */
    shadowGlowPrimary: '0 0 20px rgba(16, 185, 129, 0.3)',

    /** Sombra de glow para elementos con color secundario */
    shadowGlowSecondary: '0 0 20px rgba(245, 158, 11, 0.3)',

    /** Duración de transiciones */
    transitionDuration: '200ms',
  },

  // ----------------------------------------------------------
  // ESPACIADO
  // Unidad base del grid de espaciado (múltiplos de 4px).
  // ----------------------------------------------------------
  spacing: {
    sectionPaddingY: '5rem',   // 80px — padding vertical de secciones
    containerMaxWidth: '1200px',
    containerPadding: '1.5rem',
  },
} as const

/** Alias corto para uso rápido en componentes */
export const ds = designSystem
