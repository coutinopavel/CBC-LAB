import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="empty-page" aria-labelledby="not-found-title">
      <span className="empty-page__code">404</span>
      <div>
        <p className="eyebrow">Ruta no encontrada</p>
        <h1 id="not-found-title">Esta página no está disponible.</h1>
        <p className="page-description">
          La dirección puede ser incorrecta o la vista aún no forma parte del prototipo.
        </p>
        <Link className="button button--primary" to="/">
          Volver al Dashboard
        </Link>
      </div>
    </section>
  )
}
