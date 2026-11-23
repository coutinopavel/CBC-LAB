import {
  Archive,
  BookOpenText,
  Boxes,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  Container,
  Dna,
  FileSpreadsheet,
  FlaskConical,
  GraduationCap,
  HandCoins,
  HeartPulse,
  Microscope,
  PackageCheck,
  PackageOpen,
  Route,
  ShieldCheck,
  Snowflake,
  Sprout,
  ThermometerSun,
  Truck,
  type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
  id: string
  label: string
  description: string
  path: string
  icon: LucideIcon
}

export interface NavigationGroup {
  label: string
  items: NavigationItem[]
}

export const dashboardNavigationItem: NavigationItem = {
  id: 'dashboard',
  label: 'Dashboard',
  description: 'Vista general del prototipo CBC-LAB.',
  path: '/',
  icon: ChartNoAxesCombined,
}

export const navigationGroups: NavigationGroup[] = [
  {
    label: 'General',
    items: [dashboardNavigationItem],
  },
  {
    label: 'Operaciones de laboratorio',
    items: [
      { id: 'formatos', label: 'Formatos CBC-LAB', description: 'Espacio previsto para formatos digitales configurables.', path: '/modulos/formatos', icon: FileSpreadsheet },
      { id: 'cultivo-celular', label: 'Cultivo celular', description: 'Área futura para la organización visual de procesos de cultivo celular.', path: '/modulos/cultivo-celular', icon: Sprout },
      { id: 'exosomas', label: 'Exosomas', description: 'Área reservada para futuras funciones relacionadas con exosomas.', path: '/modulos/exosomas', icon: Dna },
      { id: 'aislamiento-cordon', label: 'Aislamiento de cordón', description: 'Espacio reservado para futuras funciones de aislamiento de cordón.', path: '/modulos/aislamiento-cordon', icon: HeartPulse },
      { id: 'aislamiento-placentario', label: 'Aislamiento placentario', description: 'Espacio reservado para futuras funciones de aislamiento placentario.', path: '/modulos/aislamiento-placentario', icon: Microscope },
      { id: 'criopreservacion', label: 'Criopreservación', description: 'Área futura para la organización de información de criopreservación.', path: '/modulos/criopreservacion', icon: Snowflake },
    ],
  },
  {
    label: 'Control y recursos',
    items: [
      { id: 'inventario', label: 'Inventario', description: 'Espacio previsto para la gestión futura de existencias y materiales.', path: '/modulos/inventario', icon: Boxes },
      { id: 'equipos', label: 'Equipos', description: 'Área futura para el registro y seguimiento de equipos.', path: '/modulos/equipos', icon: FlaskConical },
      { id: 'monitoreo-ambiental', label: 'Monitoreo ambiental', description: 'Área reservada para futuras vistas de monitoreo ambiental.', path: '/modulos/monitoreo-ambiental', icon: ThermometerSun },
      { id: 'calidad', label: 'Calidad', description: 'Espacio previsto para la futura gestión de calidad.', path: '/modulos/calidad', icon: ShieldCheck },
      { id: 'incidencias', label: 'Incidencias', description: 'Área futura para el registro y seguimiento de incidencias.', path: '/modulos/incidencias', icon: ClipboardCheck },
      { id: 'capacitacion', label: 'Capacitación', description: 'Espacio previsto para contenidos y seguimiento de capacitación.', path: '/modulos/capacitacion', icon: GraduationCap },
    ],
  },
  {
    label: 'Administración y logística',
    items: [
      { id: 'ordenes', label: 'Órdenes', description: 'Área futura para la consulta y gestión de órdenes.', path: '/modulos/ordenes', icon: ClipboardList },
      { id: 'administracion', label: 'Administración', description: 'Espacio reservado para futuras herramientas administrativas.', path: '/modulos/administracion', icon: BriefcaseBusiness },
      { id: 'ventas', label: 'Ventas', description: 'Área futura para funciones comerciales y de seguimiento.', path: '/modulos/ventas', icon: HandCoins },
      { id: 'empaque', label: 'Empaque', description: 'Espacio previsto para la gestión futura de empaque.', path: '/modulos/empaque', icon: PackageCheck },
      { id: 'traslados', label: 'Traslados', description: 'Área futura para la coordinación visual de traslados.', path: '/modulos/traslados', icon: Route },
      { id: 'distribucion', label: 'Distribución', description: 'Espacio reservado para futuras funciones de distribución.', path: '/modulos/distribucion', icon: Truck },
    ],
  },
  {
    label: 'Documentación',
    items: [
      { id: 'documentacion', label: 'Documentación', description: 'Área futura para organizar y consultar documentación.', path: '/modulos/documentacion', icon: BookOpenText },
    ],
  },
]

export const moduleNavigationItems = navigationGroups
  .flatMap((group) => group.items)
  .filter((item) => item.id !== 'dashboard')

export function findNavigationItemByPath(pathname: string) {
  return navigationGroups
    .flatMap((group) => group.items)
    .find((item) => item.path === pathname)
}

export function findModuleById(moduleId: string | undefined) {
  return moduleNavigationItems.find((item) => item.id === moduleId)
}

export const utilityIcons = {
  archive: Archive,
  container: Container,
  packageOpen: PackageOpen,
}
