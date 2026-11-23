import { ArrowLeft, LayoutTemplate } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { findModuleById } from '../../../app/config/navigation.ts'
import { PageHeader } from '../../../shared/components/PageHeader.tsx'
import { StatusBadge } from '../../../shared/components/StatusBadge.tsx'

export function ModulePlaceholderPage() {
  const { moduleId } = useParams()
  const moduleItem = findModuleById(moduleId)

  if (!moduleItem) {
    return <Navigate to="/ruta-no-encontrada" replace />
  }

  const Icon = moduleItem.icon

  return (
    <div className="module-page">
      <PageHeader
        eyebrow="Módulo CBC-LAB"
        title={moduleItem.label}
        description={moduleItem.description}
        meta={<StatusBadge tone="info">En desarrollo</StatusBadge>}
      />

      <section className="module-placeholder" aria-labelledby="module-status-title">
        <div className="module-placeholder__visual" aria-hidden="true">
          <span><Icon size={36} strokeWidth={1.5} /></span>
          <div className="module-placeholder__lines"><i /><i /><i /></div>
          <LayoutTemplate size={56} strokeWidth={1.2} />
        </div>
        <div className="module-placeholder__content">
          <p className="eyebrow">Próximamente</p>
          <h2 id="module-status-title">Espacio preparado para evolución modular</h2>
          <p>
            Esta vista define la ubicación del módulo dentro de la navegación. Aún no contiene procesos, formularios ni datos operativos.
          </p>
          <div className="module-placeholder__actions">
            <Link className="button button--primary" to="/"><ArrowLeft size={17} />Volver al Dashboard</Link>
            <span>Contenido exclusivamente visual</span>
          </div>
        </div>
      </section>
    </div>
  )
}
