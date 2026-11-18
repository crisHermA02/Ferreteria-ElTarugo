import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const sesionGuardada = localStorage.getItem('usuario_sesion')
        const tokenGuardado = localStorage.getItem('token')

        if (sesionGuardada && tokenGuardado) {
            try {
                setUsuario(JSON.parse(sesionGuardada))
            } catch (error) {
                console.error('Error al leer la sesión:', error)
                localStorage.removeItem('usuario_sesion')
                localStorage.removeItem('token')
            }
        }
        setCargando(false)
    }, [])

    const login = (datosUsuario) => {
        setUsuario(datosUsuario)
        localStorage.setItem('usuario_sesion', JSON.stringify(datosUsuario))
    }

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem('usuario_sesion')
        localStorage.removeItem('token')
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