import { Hexagon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BrandProps {
  compact?: boolean
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link className="brand" to="/" aria-label="CBC-LAB, ir al Dashboard">
      <span className="brand__mark" aria-hidden="true">
        <Hexagon size={23} strokeWidth={1.7} />
        <span>CB</span>
      </span>
      {!compact && (
        <span className="brand__copy">
          <strong>CBC-LAB</strong>
          <small>Laboratory operations</small>
        </span>
      )}
    </Link>
  )
}
