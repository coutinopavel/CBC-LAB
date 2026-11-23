import type { DashboardMetric } from '../data/dashboardData.ts'

export function StatCard({ label, value, detail, icon: Icon, tone }: DashboardMetric) {
  return (
    <article className={`stat-card stat-card--${tone}`}>
      <div className="stat-card__header">
        <span>{label}</span>
        <span className="stat-card__icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
        </span>
      </div>
      <strong className="stat-card__value">{value}</strong>
      <span className="stat-card__detail">{detail}</span>
    </article>
  )
}
