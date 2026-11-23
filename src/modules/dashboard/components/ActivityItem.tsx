import { StatusBadge } from '../../../shared/components/StatusBadge.tsx'

interface ActivityItemProps {
  type: string
  description: string
  time: string
  status: string
  tone: 'neutral' | 'success' | 'warning' | 'danger' | 'info'
}

export function ActivityItem({ type, description, time, status, tone }: ActivityItemProps) {
  return (
    <li className="activity-item">
      <span className="activity-item__marker" aria-hidden="true" />
      <div className="activity-item__body">
        <div>
          <span className="activity-item__type">{type}</span>
          <p>{description}</p>
        </div>
        <div className="activity-item__meta">
          <StatusBadge tone={tone}>{status}</StatusBadge>
          <time>{time}</time>
        </div>
      </div>
    </li>
  )
}
