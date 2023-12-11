import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import AuthPage from '../pages/AuthPage'
import AddPage from '../pages/AddPage'
import EditPage from '../pages/EditPage'

function MainRoutes() {
  return (
 <Routes>
      <Route  element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/edit/:id' element={<EditPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default MainRoutes
