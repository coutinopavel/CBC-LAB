import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../shared/components/Sidebar.tsx'
import { Topbar } from '../../shared/components/Topbar.tsx'
import type { AppOutletContext, SiteName } from '../types.ts'

export function AppLayout() {
  const [selectedSite, setSelectedSite] = useState<SiteName>('Puerto Vallarta')
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const outletContext: AppOutletContext = { selectedSite }

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={isNavigationOpen}
        onClose={() => setIsNavigationOpen(false)}
      />
      <div className="app-workspace">
        <Topbar
          selectedSite={selectedSite}
          onSiteChange={setSelectedSite}
          onMenuOpen={() => setIsNavigationOpen(true)}
        />
        <main className="app-main">
          <Outlet context={outletContext} />
        </main>
      </div>
    </div>
  )
}
