import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Financier Bot — Asesor Financiero por WhatsApp con IA',
  description:
    'Registra, analiza y proyecta tus finanzas por WhatsApp en segundos. Deja que la IA haga el trabajo pesado por ti. 14 días gratis, sin tarjeta de crédito.',
  keywords: ['finanzas personales', 'WhatsApp', 'inteligencia artificial', 'control de gastos', 'presupuesto'],
  authors: [{ name: 'Financier Bot' }],
  openGraph: {
    title: 'Financier Bot — Controla tus finanzas por WhatsApp',
    description: 'Tu asesor financiero inteligente con IA. Pruébalo 14 días gratis.',
    type: 'website',
    locale: 'es_CO',
  },
}

export const viewport: Viewport = {
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
