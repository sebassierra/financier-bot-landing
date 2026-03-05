'use client'

import { ds } from '@/lib/design-system'
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Cell,
} from 'recharts'

/* ─── datos mock ─────────────────────────────────────────────────────────── */
const barData = [
  { mes: 'Ene', gastos: 420, ingresos: 650 },
  { mes: 'Feb', gastos: 380, ingresos: 620 },
  { mes: 'Mar', gastos: 510, ingresos: 700 },
  { mes: 'Abr', gastos: 290, ingresos: 680 },
  { mes: 'May', gastos: 460, ingresos: 710 },
  { mes: 'Jun', gastos: 330, ingresos: 740 },
]

const pieData = [
  { name: 'Comida', value: 35 },
  { name: 'Transporte', value: 20 },
  { name: 'Ocio', value: 15 },
  { name: 'Servicios', value: 30 },
]

/** Colores del pie — usa --brand-primary y variantes */
const PIE_COLORS = ['#10B981', '#F59E0B', '#3B82F6', '#8B5CF6']

const stats = [
  { label: 'Ahorro este mes', value: '$342k', trend: 'up', icon: TrendingUp },
  { label: 'Gasto total', value: '$658k', trend: 'down', icon: TrendingDown },
  { label: 'Balance neto', value: '$1.2M', trend: 'up', icon: DollarSign },
  { label: 'Meta cubierta', value: '73%', trend: 'up', icon: PieChart },
]

export function DashboardPreview() {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header de sección */}
        <div className="mb-12 text-center">
          <span
            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: `${ds.colors.primary}20`,
              color: ds.colors.primary,
              /* Cambia ds.colors.primary en lib/design-system.ts para actualizar este badge */
            }}
          >
            Dashboard en Tiempo Real
          </span>
          <h2 className="text-3xl font-bold text-foreground text-balance">
            Tus finanzas, al instante
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Visualiza ingresos, gastos y proyecciones directamente desde tu Google Sheets.
          </p>
        </div>

        {/* Tarjeta principal del dashboard */}
        <div
          className="glass rounded-2xl overflow-hidden"
          style={{ boxShadow: ds.effects.shadowCard }}
        >
          {/* Barra superior tipo app */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full" style={{ background: ds.colors.primary }} />
            <span className="ml-4 text-xs text-muted-foreground font-mono">
              financierbot.app/dashboard
            </span>
          </div>

          {/* Contenido del dashboard */}
          <div className="p-6 space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map(({ label, value, trend, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl p-4"
                  style={{
                    background: ds.colors.surfaceElevated,
                    borderRadius: ds.geometry.borderRadius,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">{label}</span>
                    <Icon
                      size={14}
                      /* color: usa ds.colors.primary/secondary para cambiar todos los iconos */
                      style={{ color: trend === 'up' ? ds.colors.primary : '#EF4444' }}
                    />
                  </div>
                  <p className="text-lg font-bold text-foreground">{value}</p>
                </div>
              ))}
            </div>

            {/* Gráficas */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Bar chart */}
              <div
                className="rounded-xl p-4"
                style={{ background: ds.colors.surfaceElevated, borderRadius: ds.geometry.borderRadius }}
              >
                <p className="mb-3 text-sm font-semibold text-foreground">Ingresos vs Gastos</p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={barData} barSize={10}>
                    <XAxis dataKey="mes" tick={{ fontSize: 11, fill: '#8B949E' }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: ds.colors.surface,
                        border: `1px solid ${ds.colors.border}`,
                        borderRadius: ds.geometry.borderRadius,
                        color: ds.colors.text,
                        fontSize: 12,
                      }}
                      formatter={(v: number) => [`$${v}k`, '']}
                    />
                    {/* Cambia ds.colors.primary / secondary para actualizar colores del gráfico */}
                    <Bar dataKey="ingresos" fill={ds.colors.primary} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="gastos" fill={ds.colors.secondary} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie chart */}
              <div
                className="rounded-xl p-4"
                style={{ background: ds.colors.surfaceElevated, borderRadius: ds.geometry.borderRadius }}
              >
                <p className="mb-3 text-sm font-semibold text-foreground">Distribución de gastos</p>
                <div className="flex items-center gap-4">
                  <ResponsiveContainer width={120} height={120}>
                    <RechartsPie>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} dataKey="value" strokeWidth={0}>
                        {pieData.map((_, i) => (
                          <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                    </RechartsPie>
                  </ResponsiveContainer>
                  <div className="flex flex-col gap-1.5">
                    {pieData.map((d, i) => (
                      <div key={d.name} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i] }} />
                        <span className="text-xs text-muted-foreground">{d.name}</span>
                        <span className="text-xs font-semibold text-foreground ml-auto">{d.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
