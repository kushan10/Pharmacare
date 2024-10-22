import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import PharmacyContextProvider from './context/PharmacyContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <PharmacyContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </PharmacyContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
