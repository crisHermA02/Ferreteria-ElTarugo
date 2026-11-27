import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export function usePedidos() {
    const { usuario } = useAuth()
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        if (!usuario?.email) {
            setPedidos([])
            return
        }

        const todosLosPedidos = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
        const emailUsuario = usuario.email.toLowerCase()
        setPedidos(
            todosLosPedidos.filter((p) => p.cliente?.email?.toLowerCase() === emailUsuario)
        )
    }, [usuario])

    return { pedidos }
}
