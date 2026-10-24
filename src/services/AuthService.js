import usuariosIniciales from '../data/usuarios.json'

export function inicializarUsuariosSeed() {
  const guardados = localStorage.getItem('tienda_usuarios')
  if (!guardados || JSON.parse(guardados).length === 0) {
    localStorage.setItem('tienda_usuarios', JSON.stringify(usuariosIniciales))
  }
}

export function autenticarUsuario(email, clave) {
  inicializarUsuariosSeed()
  const usuarios = JSON.parse(localStorage.getItem('tienda_usuarios') || '[]')
  
  const encontrado = usuarios.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.clave === clave
  )

  if (encontrado) {
    const { clave: _, ...sesion } = encontrado
    return { ok: true, usuario: sesion }
  }

  return { ok: false, mensaje: 'Credenciales inválidas' }
}