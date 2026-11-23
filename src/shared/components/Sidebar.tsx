import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationGroups } from '../../app/config/navigation.ts'
import { Brand } from './Brand.tsx'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <button
        className={`navigation-backdrop${isOpen ? ' is-visible' : ''}`}
        type="button"
        aria-label="Cerrar navegación"
        onClick={onClose}
      />
      <aside className={`sidebar${isOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
        <div className="sidebar__header">
          <Brand />
          <button className="icon-button sidebar__close" type="button" onClick={onClose} aria-label="Cerrar menú">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar__navigation">
          {navigationGroups.map((group) => (
            <div className="navigation-group" key={group.label}>
              <p className="navigation-group__label">{group.label}</p>
              <ul className="navigation-list">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <NavLink
                        className={({ isActive }) => `navigation-link${isActive ? ' is-active' : ''}`}
                        to={item.path}
                        end={item.path === '/'}
                        onClick={onClose}
                      >
                        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                        <span>{item.label}</span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="sidebar__footer">
          <span className="environment-dot" aria-hidden="true" />
          <div>
            <strong>Entorno de prototipo</strong>
            <span>Datos demostrativos</span>
          </div>
        </div>
      </aside>
    </>
  )
}
