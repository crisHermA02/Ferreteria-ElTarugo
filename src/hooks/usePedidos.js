import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export function usePedidos() {
    const { usuario } = useAuth()
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        const todosLosPedidos = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
        
        if (usuario?.email) {
            const pedidosUsuario = todosLosPedidos.filter(
                (p) => p.cliente?.email === usuario.email
            )
            setPedidos(pedidosUsuario)
        } else {
            setPedidos(todosLosPedidos)
        }
    }, [usuario])

    return { pedidos }
}