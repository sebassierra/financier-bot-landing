'use client'

import { ds } from '@/lib/design-system'
import { CheckCircle2, Clock } from 'lucide-react'

const messages = [
  {
    sender: 'user',
    text: 'Gasté 50k en almuerzo con la Nu',
    time: '1:14 PM',
  },
  {
    sender: 'bot',
    text: '✅ Registrado en Comida. Te quedan $150k de presupuesto este mes.',
    time: '1:14 PM',
  },
  {
    sender: 'user',
    text: '¿Cuánto llevo gastado esta semana?',
    time: '1:15 PM',
  },
  {
    sender: 'bot',
    text: '📊 Esta semana llevas $230k en gastos:\n• Comida: $120k\n• Transporte: $65k\n• Otros: $45k\n\nVas un 12% por encima de tu promedio semanal.',
    time: '1:15 PM',
  },
  {
    sender: 'user',
    text: 'Ponme una alerta si supero $500k este mes',
    time: '1:16 PM',
  },
  {
    sender: 'bot',
    text: '🔔 ¡Listo! Te avisaré cuando superes $500k en gastos este mes. Llevas $380k hasta ahora.',
    time: '1:16 PM',
  },
]

export function WhatsAppChat() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Copy */}
          <div>
            <span
              className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
              style={{ background: `${ds.colors.secondary}20`, color: ds.colors.secondary }}
            >
              Desde WhatsApp
            </span>
            <h2 className="text-3xl font-bold text-foreground text-balance leading-snug mb-4">
              Registra tus gastos sin salir del chat
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sin apps que instalar, sin formularios tediosos. Solo escríbele a tu agente
              financiero como le escribirías a un amigo — él hace el resto.
            </p>
            <ul className="space-y-3">
              {[
                'Registro instantáneo en lenguaje natural',
                'Resúmenes diarios, semanales y mensuales',
                'Alertas de presupuesto en tiempo real',
                'Consultas de historial por categoría',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* CheckCircle usa --brand-primary — cambia ds.colors.primary en el panel */}
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: ds.colors.primary }}
                  />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup de WhatsApp */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm rounded-3xl overflow-hidden"
              style={{
                background: '#111B21', /* fondo oscuro característico de WA */
                boxShadow: `${ds.effects.shadowCard}, ${ds.effects.shadowGlowPrimary}`,
                /* El glow usa --brand-primary; cámbialo en el Design System Panel */
              }}
            >
              {/* Barra superior del chat */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ background: '#1F2C34' }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full font-bold text-sm"
                  style={{ background: ds.colors.primary, color: ds.colors.background }}
                >
                  FB
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Financier Bot</p>
                  <p className="text-xs" style={{ color: ds.colors.primary }}>en línea</p>
                </div>
              </div>

              {/* Mensajes */}
              <div className="flex flex-col gap-2 p-4 h-96 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className="max-w-[80%] rounded-2xl px-4 py-2.5"
                      style={{
                        background: msg.sender === 'user'
                          /* Color de burbuja del usuario — usa --brand-primary */
                          ? `${ds.colors.primary}CC`
                          : '#1F2C34',
                        color: msg.sender === 'user' ? '#fff' : ds.colors.text,
                        borderRadius: msg.sender === 'user'
                          ? '18px 18px 4px 18px'
                          : '18px 18px 18px 4px',
                      }}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] opacity-60">{msg.time}</span>
                        {msg.sender === 'user' && (
                          <CheckCircle2 size={10} className="opacity-60" />
                        )}
                        {msg.sender === 'bot' && (
                          <Clock size={10} className="opacity-40" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input inferior */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ background: '#1F2C34' }}
              >
                <div className="flex-1 rounded-full px-4 py-2 text-sm text-muted-foreground" style={{ background: '#2A3942' }}>
                  Escribe un mensaje...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
