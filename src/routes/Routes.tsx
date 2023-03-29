import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTE_PATHS } from '../constants/routePaths'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={ROUTE_PATHS.HOME} replace />} />
      <Route path={ROUTE_PATHS.HOME} element={<h1>home</h1>} />
      <Route path={ROUTE_PATHS.ABOUT} element={<h1>about</h1>} />
      <Route path={ROUTE_PATHS.PORTFOLIO} element={<h1>portfolio</h1>} />
      <Route path={ROUTE_PATHS.CONTACT} element={<h1>contact</h1>} />
    </Routes>
  )
}
