import {
  Activity,
  AlertTriangle,
  ClipboardCheck,
  FlaskConical,
  ListTodo,
  PackageOpen,
  type LucideIcon,
} from 'lucide-react'

export interface DashboardMetric {
  label: string
  value: string
  detail: string
  icon: LucideIcon
  tone: 'blue' | 'teal' | 'amber' | 'slate'
}

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Órdenes activas', value: '24', detail: 'Dato ilustrativo', icon: ClipboardCheck, tone: 'blue' },
  { label: 'Procesos en seguimiento', value: '18', detail: 'Dato ilustrativo', icon: Activity, tone: 'teal' },
  { label: 'Alertas pendientes', value: '03', detail: 'Dato ilustrativo', icon: AlertTriangle, tone: 'amber' },
  { label: 'Equipos registrados', value: '42', detail: 'Dato ilustrativo', icon: FlaskConical, tone: 'slate' },
  { label: 'Actividades pendientes', value: '11', detail: 'Dato ilustrativo', icon: ListTodo, tone: 'blue' },
]

export const recentActivity = [
  { type: 'Orden', description: 'Se creó un registro demostrativo de orden', time: 'Hace 12 min', status: 'Registrado', tone: 'info' as const },
  { type: 'Inventario', description: 'Actualización ficticia de existencia de material', time: 'Hace 38 min', status: 'Actualizado', tone: 'success' as const },
  { type: 'Equipo', description: 'Registro simulado de mantenimiento preventivo', time: 'Hace 1 h', status: 'Revisión', tone: 'warning' as const },
  { type: 'Documentación', description: 'Documento de demostración enviado a revisión', time: 'Hace 2 h', status: 'Pendiente', tone: 'neutral' as const },
  { type: 'Laboratorio', description: 'Actividad ficticia actualizada en el prototipo', time: 'Hace 3 h', status: 'Actualizado', tone: 'success' as const },
]

export const systemStatus = [
  { label: 'Interfaz del prototipo', value: 'Disponible' },
  { label: 'Datos mostrados', value: 'Simulados' },
  { label: 'Conexión de servicios', value: 'No configurada' },
]

export const dashboardDecorativeIcon = PackageOpen
