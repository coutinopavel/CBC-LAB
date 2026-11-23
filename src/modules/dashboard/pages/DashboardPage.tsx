import { CalendarDays, CircleCheck, DatabaseZap } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import type { AppOutletContext } from '../../../app/types.ts'
import { PageHeader } from '../../../shared/components/PageHeader.tsx'
import { ActivityItem } from '../components/ActivityItem.tsx'
import { QuickAccess } from '../components/QuickAccess.tsx'
import { StatCard } from '../components/StatCard.tsx'
import { dashboardMetrics, recentActivity, systemStatus } from '../data/dashboardData.ts'

const formattedDate = new Intl.DateTimeFormat('es-MX', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date())

export function DashboardPage() {
  const { selectedSite } = useOutletContext<AppOutletContext>()

  return (
    <div className="dashboard-page">
      <PageHeader
        eyebrow="Vista general"
        title="Dashboard"
        description="Panorama visual del entorno CBC-LAB con información exclusivamente demostrativa."
        meta={
          <>
            <span className="context-chip"><CircleCheck size={16} />{selectedSite}</span>
            <span className="context-chip context-chip--muted"><CalendarDays size={16} />{formattedDate}</span>
          </>
        }
      />

      <section aria-labelledby="indicators-title">
        <div className="section-heading">
          <div><p className="eyebrow">Resumen</p><h2 id="indicators-title">Indicadores generales</h2></div>
          <span className="demo-note">Datos de demostración</span>
        </div>
        <div className="stats-grid">
          {dashboardMetrics.map((metric) => <StatCard key={metric.label} {...metric} />)}
        </div>
      </section>

      <div className="dashboard-grid">
        <section className="panel activity-panel" aria-labelledby="activity-title">
          <div className="panel__header">
            <div><p className="eyebrow">Trazabilidad visual</p><h2 id="activity-title">Actividad reciente</h2></div>
            <span className="demo-note">Simulada</span>
          </div>
          <ul className="activity-list">
            {recentActivity.map((activity) => <ActivityItem key={`${activity.type}-${activity.time}`} {...activity} />)}
          </ul>
        </section>

        <aside className="panel system-panel" aria-labelledby="system-title">
          <div className="panel__header">
            <div><p className="eyebrow">Entorno</p><h2 id="system-title">Estado general</h2></div>
            <DatabaseZap size={20} aria-hidden="true" />
          </div>
          <p className="system-panel__description">Resumen ficticio del estado técnico del prototipo.</p>
          <dl className="system-status-list">
            {systemStatus.map((item) => (
              <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
          <div className="system-panel__notice">
            <span aria-hidden="true" />
            No representa monitoreo operacional real.
          </div>
        </aside>
      </div>

      <section className="panel quick-access-panel" aria-labelledby="quick-access-title">
        <div className="panel__header">
          <div><p className="eyebrow">Navegación</p><h2 id="quick-access-title">Accesos rápidos</h2></div>
          <span className="panel__hint">Áreas frecuentes</span>
        </div>
        <QuickAccess />
      </section>
    </div>
  )
}
