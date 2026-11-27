import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export function obtenerMensajeError(error) {
  if (error.response) {
    const datos = error.response.data;
    const texto = datos?.mensaje || datos?.error;
    if (typeof texto === 'string') {
      const detalles = Array.isArray(datos.detalles) ? datos.detalles.join(' ') : '';
      return texto + (detalles ? ' ' + detalles : '');
    }
    return `La API respondió con un error (${error.response.status}).`;
  }
  if (error.code === 'ECONNABORTED') {
    return 'La API tardó demasiado. Revisa el estado antes de volver a intentar.';
  }
  return 'No fue posible contactar la API. Revisa la conexión, su dirección y CORS.';
}