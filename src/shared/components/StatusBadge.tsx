interface StatusBadgeProps {
  children: string
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info'
}

export function StatusBadge({ children, tone = 'neutral' }: StatusBadgeProps) {
  return <span className={`status-badge status-badge--${tone}`}>{children}</span>
}
