import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description: string
  meta?: ReactNode
}

export function PageHeader({ eyebrow, title, description, meta }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {meta && <div className="page-header__meta">{meta}</div>}
    </header>
  )
}
