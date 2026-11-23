import { Link, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link className="brand" to="/" aria-label="CBC-LAB, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            CBC
          </span>
          <span>CBC-LAB</span>
        </Link>
        <span className="prototype-label">Prototipo en desarrollo</span>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
