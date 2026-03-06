'use client'

import { ds } from '@/lib/design-system'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

/**
 * Botón flotante de soporte por WhatsApp.
 * -------------------------------------------------------
 * WHATSAPP_SUPPORT_URL → número personal para dudas.
 * Cambia el número o el mensaje preescrito aquí.
 * -------------------------------------------------------
 */
const WHATSAPP_SUPPORT_URL =
  'https://wa.me/573006763077?text=Hola!%20Tengo%20una%20duda%20sobre%20AI%20Smart%20Bot.'

export function FloatingAgent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tarjeta de bienvenida del agente */}
      {isOpen && (
        <div
          className="glass rounded-2xl p-4 w-64 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-200"
          style={{
            /* Borde usa --brand-primary — cambia ds.colors.primary en el Design System Panel */
            border: `1px solid ${ds.colors.primary}60`,
            boxShadow: `${ds.effects.shadowCard}, ${ds.effects.shadowGlowPrimary}`,
            borderRadius: ds.geometry.borderRadius,
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: ds.colors.primary, color: ds.colors.background }}
              >
                AI
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">AI Smart Bot</p>
                {/* El punto verde de "en línea" usa --brand-primary */}
                <div className="flex items-center gap-1">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: ds.colors.primary }}
                  />
                  <span className="text-[10px] text-muted-foreground">En línea ahora</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={14} />
            </button>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            Hola! ¿Tienes dudas sobre AI Smart Bot? Escríbenos y te respondemos de inmediato.
          </p>

          <a
            href={WHATSAPP_SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: ds.colors.primary,
              color: ds.colors.background,
              borderRadius: ds.geometry.borderRadius,
              /* Botón de contacto usa --brand-primary */
            }}
          >
            <MessageCircle size={15} />
            Enviar mensaje
          </a>
        </div>
      )}

      {/* Botón flotante principal */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: ds.colors.primary,
          /* El borde exterior usa --brand-primary; cambia ds.colors.primary en el panel */
          boxShadow: `0 0 0 4px ${ds.colors.primary}30, ${ds.effects.shadowGlowPrimary}, ${ds.effects.shadowCard}`,
          color: ds.colors.background,
        }}
        aria-label="Abrir soporte por WhatsApp"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
