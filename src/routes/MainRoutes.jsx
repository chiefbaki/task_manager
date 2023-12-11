import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import AuthPage from '../pages/AuthPage'

function MainRoutes() {
  return (
 <Routes>
      <Route  element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default MainRoutes
