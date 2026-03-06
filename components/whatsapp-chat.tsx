'use client'

import { ds } from '@/lib/design-system'
import { CheckCircle2, Clock } from 'lucide-react'

/**
 * Conversación del chat.
 * Modifica los mensajes aquí para actualizar el mockup de WhatsApp.
 * El color de las burbujas de usuario usa ds.colors.primary del Design System Panel.
 *
 * SCROLL: El contenedor tiene overflow-y-auto y altura fija (max-h-96).
 * El chat inicia mostrando el primer mensaje; el usuario hace scroll para leer el resto.
 */
const messages = [
  // 1. Registro de gasto — inicio de la interacción
  {
    sender: 'user',
    text: 'Gasté 50k en almuerzo con la Nu',
    time: '1:45 PM',
  },
  {
    sender: 'bot',
    text: '✅ Registrado en Comida.',
    time: '1:45 PM',
  },
  // 2. Consulta semanal — interacción media
  {
    sender: 'user',
    text: '¿Cuánto llevo gastado esta semana?',
    time: '2:03 PM',
  },
  {
    sender: 'bot',
    text: '📊 Esta semana llevas $230k en gastos:\n• Comida: $120k\n• Transporte: $65k\n• Otros: $45k',
    time: '2:03 PM',
  },
  // 3. Consulta de límites — cierre impactante
  {
    sender: 'user',
    text: '¿Cómo van mis topes este mes?',
    time: '2:08 PM',
  },
  {
    sender: 'bot',
    text: 'Con gusto reviso tus topes... 📊\n\nFebrero 2026 — Estado de Topes\n\n🚩 Transporte\nTope: $443.000 | Gastado: $1.183.548\nExcedido: $740.548\n\n🚩 Almuerzo\nTope: $300.000 | Gastado: $1.008.801\nExcedido: $708.801\n\n🚩 Mercado\nTope: $500.000 | Gastado: $1.127.390\nExcedido: $627.390\n\n⚠️ Todas las categorías han superado su tope este mes. Te recomiendo revisar tus hábitos.',
    time: '2:08 PM',
  },
]

function ChatBubble({ msg }: { msg: (typeof messages)[number] }) {
  const isUser = msg.sender === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className="max-w-[85%] px-4 py-2.5"
        style={{
          /* Burbuja del usuario — color viene de ds.colors.primary del Design System Panel */
          background: isUser ? `${ds.colors.primary}CC` : '#1F2C34',
          color: isUser ? '#fff' : ds.colors.text,
          borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        }}
      >
        <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] opacity-60">{msg.time}</span>
          {isUser
            ? <CheckCircle2 size={10} className="opacity-60" />
            : <Clock size={10} className="opacity-40" />
          }
        </div>
      </div>
    </div>
  )
}

export function WhatsAppChat() {
  return (
    <section id="demo" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">

          {/* Copy lateral */}
          <div>
            <span
              className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
              style={{ background: `${ds.colors.secondary}20`, color: ds.colors.secondary }}
            >
              Desde WhatsApp
            </span>
            <h2 className="text-3xl font-bold text-foreground text-balance leading-snug mb-4">
              Controla tus topes desde el chat
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Registra gastos, consulta resúmenes y revisa el estado de tus topes
              sin salir de WhatsApp. Bajo solicitud también te envía resúmenes
              semanales y mensuales para que tengas el control total de tus finanzas.
            </p>
            <ul className="space-y-3">
              {[
                'Registra gastos con un mensaje de texto simple',
                'Consulta cuánto llevas gastado en la semana',
                'Revisa el estado de tus topes al instante',
                'Alertas de categorías excedidas en tiempo real',
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
                background: '#111B21',
                boxShadow: `${ds.effects.shadowCard}, ${ds.effects.shadowGlowPrimary}`,
              }}
            >
              {/* Barra superior */}
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#1F2C34' }}>
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full font-bold text-sm flex-shrink-0"
                  style={{ background: ds.colors.primary, color: ds.colors.background }}
                >
                  AI
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">AI Smart Bot</p>
                  <p className="text-xs" style={{ color: ds.colors.primary }}>en línea</p>
                </div>
              </div>

              {/*
               * Contenedor de mensajes con scroll vertical.
               * max-h-96 fija la altura; overflow-y-auto habilita el scroll manual.
               * El chat inicia en la parte superior — el usuario hace scroll para ver el resto.
               */}
              <div className="flex flex-col gap-3 p-4 max-h-96 overflow-y-auto">
                {messages.map((msg, i) => (
                  <ChatBubble key={i} msg={msg} />
                ))}
              </div>

              {/* Input inferior */}
              <div className="flex items-center gap-2 px-3 py-2" style={{ background: '#1F2C34' }}>
                <div
                  className="flex-1 rounded-full px-4 py-2 text-sm text-muted-foreground"
                  style={{ background: '#2A3942' }}
                >
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
