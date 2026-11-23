import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout.tsx'
import { NotFoundPage } from '../pages/NotFoundPage.tsx'
import { DashboardPage } from '../../modules/dashboard/pages/DashboardPage.tsx'
import { ModulePlaceholderPage } from '../../modules/module-placeholder/pages/ModulePlaceholderPage.tsx'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="modulos/:moduleId" element={<ModulePlaceholderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
