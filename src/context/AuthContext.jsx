import { createContext, useContext, useState, useEffect } from 'react'
import { obtenerSesion, cerrarSesion } from '../services/AuthService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        let activo = true

        async function revalidarSesion() {
            const token = localStorage.getItem('token')
            if (!token) {
                localStorage.removeItem('usuario_sesion')
                if (activo) setCargando(false)
                return
            }

            try {
                const sesion = await obtenerSesion()
                if (!activo) return
                setUsuario(sesion)
                localStorage.setItem('usuario_sesion', JSON.stringify(sesion))
            } catch (error) {
                if (!activo) return
                if (error.response?.status === 401) {
                    cerrarSesion()
                    setUsuario(null)
                } else {

                    try {
                        setUsuario(JSON.parse(localStorage.getItem('usuario_sesion')))
                    } catch {
                        cerrarSesion()
                    }
                }
            } finally {
                if (activo) setCargando(false)
            }
        }

        revalidarSesion()

        const alExpirar = () => setUsuario(null)
        window.addEventListener('sesion-expirada', alExpirar)

        return () => {
            activo = false
            window.removeEventListener('sesion-expirada', alExpirar)
        }
    }, [])

    const login = (datosUsuario) => {
        setUsuario(datosUsuario)
        localStorage.setItem('usuario_sesion', JSON.stringify(datosUsuario))
    }

    const logout = () => {
        setUsuario(null)
        cerrarSesion()
    }

    const valor = {
        usuario,
        login,
        logout,
        cargando
    }

    return (
        <AuthContext.Provider value={valor}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider')
    }
    return context
}
