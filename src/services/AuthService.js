import { api, obtenerMensajeError } from './api'

export async function autenticarUsuario(email, clave) {
  try {
    const { data } = await api.post('/auth/login', { email, contrasena: clave })

    localStorage.setItem('token', data.token)
    localStorage.setItem('usuario_sesion', JSON.stringify(data.usuario))

    return { ok: true, usuario: data.usuario }
  } catch (error) {
    console.error('Error en el login:', error)
    return { ok: false, mensaje: obtenerMensajeError(error) }
  }
}

export function cerrarSesion() {
  localStorage.removeItem('token')
  localStorage.removeItem('usuario_sesion')
}

export async function registrarUsuario(usuarioDatos) {
  try {
    const { data } = await api.post('/auth/registro', usuarioDatos)
    return { ok: true, mensaje: data.mensaje }
  } catch (error) {
    console.error('Error en el registro:', error)
    return { ok: false, mensaje: obtenerMensajeError(error) }
  }
}

export async function obtenerSesion() {
  const { data } = await api.get('/auth/me')
  return data.usuario
}