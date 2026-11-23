import { Bell, ChevronDown, Menu } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { findNavigationItemByPath } from '../../app/config/navigation.ts'
import { sites, type SiteName } from '../../app/types.ts'

interface TopbarProps {
  selectedSite: SiteName
  onSiteChange: (site: SiteName) => void
  onMenuOpen: () => void
}

export function Topbar({ selectedSite, onSiteChange, onMenuOpen }: TopbarProps) {
  const { pathname } = useLocation()
  const currentPage = findNavigationItemByPath(pathname)

  return (
    <header className="topbar">
      <div className="topbar__title">
        <button className="icon-button menu-button" type="button" onClick={onMenuOpen} aria-label="Abrir navegación">
          <Menu size={21} />
        </button>
        <div>
          <span>Espacio de trabajo</span>
          <strong>{currentPage?.label ?? 'CBC-LAB'}</strong>
        </div>
      </div>

      <div className="topbar__actions">
        <label className="site-selector">
          <span>Sede</span>
          <span className="site-selector__control">
            <select value={selectedSite} onChange={(event) => onSiteChange(event.target.value as SiteName)}>
              {sites.map((site) => (
                <option key={site} value={site}>{site}</option>
              ))}
            </select>
            <ChevronDown size={15} aria-hidden="true" />
          </span>
        </label>

        <button className="icon-button notification-button" type="button" aria-label="Notificaciones de demostración">
          <Bell size={20} />
          <span aria-hidden="true" />
        </button>

        <div className="profile" aria-label="Perfil simulado">
          <span className="profile__avatar">OP</span>
          <span className="profile__copy">
            <strong>Operador demo</strong>
            <small>Vista de prototipo</small>
          </span>
        </div>
      </div>
    </header>
  )
}
