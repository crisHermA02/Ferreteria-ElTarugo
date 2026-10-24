import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { ProductosProvider } from './context/ProductosContext'
import { CarritoProvider } from './context/CarritoContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductosProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductosProvider>
    </AuthProvider>
  </StrictMode>,
)
