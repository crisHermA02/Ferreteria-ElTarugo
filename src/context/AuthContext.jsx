import { createContext, useContext, useState, useEffect } from 'react'
import usuariosIniciales from '../data/usuarios.json'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const guardados = JSON.parse(localStorage.getItem('tienda_usuarios') || '[]')

        const existeAdmin = guardados.some((u) => u.email === 'admin@eltarugo.cl')

        if (!existeAdmin) {
            const todosLosUsuarios = [...guardados, ...usuariosIniciales]
            const mapaUsuarios = new Map(todosLosUsuarios.map((u) => [u.email.toLowerCase(), u]))
            const listaDefinitiva = Array.from(mapaUsuarios.values())

            localStorage.setItem('tienda_usuarios', JSON.stringify(listaDefinitiva))
        }

        const sesionGuardada = localStorage.getItem('tienda_usuario')
        if (sesionGuardada) {
            try {
                setUsuario(JSON.parse(sesionGuardada))
            } catch (error) {
                console.error('Error al leer la sesión:', error)
                localStorage.removeItem('tienda_usuario')
            }
        }
        setCargando(false)
    }, [])

    const login = (datosUsuario) => {
        setUsuario(datosUsuario)
        localStorage.setItem('tienda_usuario', JSON.stringify(datosUsuario))
    }

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem('tienda_usuario')
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