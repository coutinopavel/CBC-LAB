# CBC-LAB

CBC-LAB es un prototipo en desarrollo para la gestión y digitalización de operaciones de laboratorio. El repositorio se encuentra en una etapa de cimentación técnica y todavía no implementa funcionalidades operativas de laboratorio.

## Stack

- React
- TypeScript en modo estricto
- Vite
- React Router
- CSS convencional con variables CSS
- Oxlint

## Requisitos

- Node.js compatible con las dependencias declaradas en `package.json`
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local del entorno de desarrollo.

## Validaciones

```bash
npm run lint
npm run typecheck
npm run build
```

- `lint` analiza el código con Oxlint.
- `typecheck` valida los proyectos TypeScript sin generar JavaScript.
- `build` ejecuta la validación de tipos y genera la compilación de producción.

Para revisar localmente una compilación ya generada:

```bash
npm run preview
```

## Estructura inicial

- `src/app`: composición, routing, layouts y páginas estructurales de la aplicación.
- `src/assets`: contendrá recursos visuales locales cuando sean necesarios.
- `src/shared`: piezas reutilizables cuando exista un uso compartido real.
- `src/styles`: variables visuales y estilos globales.
- `src/modules`: se incorporará progresivamente cuando se implementen dominios funcionales; no se crean módulos vacíos por adelantado.

## Estado actual

La fase actual proporciona una base frontend mínima, routing y una estrategia centralizada de estilos. No incluye backend, autenticación, permisos, formularios operativos ni módulos de negocio.
