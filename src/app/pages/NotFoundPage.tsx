import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="content-panel" aria-labelledby="not-found-title">
      <p className="eyebrow">Error 404</p>
      <h1 id="not-found-title">La página solicitada no existe.</h1>
      <p className="lead">
        Verifica la dirección o regresa al punto de inicio del prototipo.
      </p>
      <Link className="text-link" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}
