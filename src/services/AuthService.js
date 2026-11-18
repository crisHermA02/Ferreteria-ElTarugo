const API_URL = 'http://44.218.174.107:3000/api/auth';

export async function autenticarUsuario(email, clave) {
  try {
    const respuesta = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, contrasena: clave })
    });

    const data = await respuesta.json();

    if (respuesta.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario_sesion', JSON.stringify(data.usuario));

      return { ok: true, usuario: data.usuario };
    }

    return { ok: false, mensaje: data.error || 'Credenciales inválidas' };

  } catch (error) {
    console.error('Error conectando al backend:', error);
    return { ok: false, mensaje: 'Error de conexión con el servidor' };
  }
}

export function cerrarSesion() {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario_sesion');
}

export async function registrarUsuario(usuarioDatos) {
  try {
    const respuesta = await fetch(`${API_URL}/registro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuarioDatos)
    });

    const data = await respuesta.json();

    if (respuesta.ok) {
      return { ok: true, mensaje: data.mensaje };
    }

    return { ok: false, mensaje: data.error || 'Error al registrar el usuario' };

  } catch (error) {
    console.error('Error conectando al backend:', error);
    return { ok: false, mensaje: 'Error de conexión con el servidor' };
  }
}