import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainContext from './contexts/MainContext.jsx'
import AuthContext from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainContext>
          <AuthContext>
             <App />
          </AuthContext>
        </MainContext>
    </BrowserRouter>
)
