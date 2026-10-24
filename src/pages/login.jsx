import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioLogin } from '../components/organism/formularioLogin'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { useAuth } from '../context/AuthContext'
import usuariosIniciales from '../data/usuarios.json'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  useTituloPagina('Ingresar')

  const [error, setError] = useState('')

  function manejarIngreso(arg1, arg2) {
    setError('')

    let emailNormalizado = ''
    let claveNormalizada = ''

    if (arg1 && typeof arg1 === 'object' && typeof arg1.preventDefault === 'function') {
      arg1.preventDefault()
      
      const formData = new FormData(arg1.target)
      emailNormalizado = (
        formData.get('correo') ||
        formData.get('email') ||
        formData.get('usuario') ||
        ''
      ).toString()

      claveNormalizada = (
        formData.get('clave') ||
        formData.get('password') ||
        formData.get('contrasena') ||
        ''
      ).toString()

      if (!emailNormalizado || !claveNormalizada) {
        const inputs = arg1.target?.querySelectorAll('input') || document.querySelectorAll('input')
        inputs.forEach((input) => {
          if (input.type === 'email' || (input.type === 'text' && !emailNormalizado)) {
            emailNormalizado = input.value
          }
          if (input.type === 'password') {
            claveNormalizada = input.value
          }
        })
      }
    } 
    else if (arg1 && typeof arg1 === 'object') {
      emailNormalizado = (arg1.correo || arg1.email || arg1.usuario || '').toString()
      claveNormalizada = (arg1.clave || arg1.password || arg1.contrasena || '').toString()
    } 
    else {
      emailNormalizado = (arg1 || '').toString()
      claveNormalizada = (arg2 || '').toString()
    }

    if (!emailNormalizado || !claveNormalizada) {
      const emailInput = document.querySelector('input[type="email"], input[type="text"]')
      const passInput = document.querySelector('input[type="password"]')
      if (emailInput && !emailNormalizado) emailNormalizado = emailInput.value
      if (passInput && !claveNormalizada) claveNormalizada = passInput.value
    }

    emailNormalizado = emailNormalizado.trim().toLowerCase()
    claveNormalizada = claveNormalizada.trim()

    let usuarios = JSON.parse(localStorage.getItem('tienda_usuarios') || '[]')
    const tieneAdmin = usuarios.some((u) => u.email?.toLowerCase() === 'admin@eltarugo.cl')

    if (!tieneAdmin) {
      const combinados = [...usuarios, ...usuariosIniciales]
      const mapaUnicos = new Map(combinados.map((u) => [u.email?.toLowerCase(), u]))
      usuarios = Array.from(mapaUnicos.values())
      localStorage.setItem('tienda_usuarios', JSON.stringify(usuarios))
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email?.toLowerCase() === emailNormalizado && u.clave === claveNormalizada
    )

    if (!usuarioEncontrado) {
      setError('Correo electrónico o contraseña incorrectos.')
      return
    }

    const { clave: _, ...datosSesion } = usuarioEncontrado
    login(datosSesion)

    if (datosSesion.rol === 'Administrador') {
      navigate('/admin')
    } else {
      navigate('/catalogo')
    }
  }

  return (
    <PlantillaPublica>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <h2 className="display-6 text-center fw-bold text-dark mb-4">Ingresar</h2>
            
            <div className="card shadow-sm border-0 p-4 rounded-4">
              <p className="text-muted mb-3 text-center">
                Ingresa con tu correo y tu clave para hacer pedidos y revisar tu historial de compras.
              </p>

              {error && (
                <Alert
                  variant="danger"
                  className="d-flex align-items-center justify-content-between rounded-3 py-2 px-3 mb-3 small"
                  dismissible
                  onClose={() => setError('')}
                >
                  <div>
                    <strong className="me-1">Error:</strong> {error}
                  </div>
                </Alert>
              )}
              
              <FormularioLogin onEnviar={manejarIngreso} />
              
              <p className="text-muted small mt-4 mb-0 text-center">
                ¿No tienes cuenta?{' '}
                <Link to="/registro" className="text-warning fw-bold text-decoration-none">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}