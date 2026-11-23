export function HomePage() {
  return (
    <section className="content-panel" aria-labelledby="home-title">
      <p className="eyebrow">Cimentación técnica</p>
      <h1 id="home-title">Una base preparada para crecer por módulos.</h1>
      <p className="lead">
        CBC-LAB se encuentra en su etapa inicial. Esta versión establece la
        estructura del frontend antes de incorporar flujos operativos.
      </p>
      <div className="status-card" aria-label="Estado del proyecto">
        <span className="status-indicator" aria-hidden="true" />
        <div>
          <strong>Base técnica activa</strong>
          <p>React, TypeScript, routing y estilos globales configurados.</p>
        </div>
      </div>
    </section>
  )
}
