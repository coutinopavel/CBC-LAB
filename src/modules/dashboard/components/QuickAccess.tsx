import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { moduleNavigationItems } from '../../../app/config/navigation.ts'

const quickAccessIds = ['formatos', 'inventario', 'equipos', 'incidencias', 'ordenes', 'documentacion']

export function QuickAccess() {
  const quickAccessItems = quickAccessIds
    .map((id) => moduleNavigationItems.find((item) => item.id === id))
    .filter((item) => item !== undefined)

  return (
    <div className="quick-access-grid">
      {quickAccessItems.map((item) => {
        const Icon = item.icon
        return (
          <Link className="quick-access" to={item.path} key={item.id}>
            <span className="quick-access__icon" aria-hidden="true">
              <Icon size={20} strokeWidth={1.8} />
            </span>
            <span>{item.label}</span>
            <ArrowUpRight className="quick-access__arrow" size={17} aria-hidden="true" />
          </Link>
        )
      })}
    </div>
  )
}
