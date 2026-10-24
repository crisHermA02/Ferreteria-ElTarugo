import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'
import { useAuth } from '../context/AuthContext' 
import { validarObligatorio, validarEmail } from '../utils/validaciones'

export function useCheckout() {
    const carrito = useCarrito()
    const navigate = useNavigate()
    const { usuario } = useAuth() 

    const [nombre, setNombre] = useState(usuario?.nombre || '')
    const [email, setEmail] = useState(usuario?.email || '')
    const [direccion, setDireccion] = useState(usuario?.direccion || '')
    const [errores, setErrores] = useState({})

    useEffect(() => {
        if (usuario) {
            setNombre(usuario.nombre || '')
            setEmail(usuario.email || '')
            setDireccion(usuario.direccion || '')
        }
    }, [usuario])

    function manejarEnvio(e) {
        e.preventDefault()

        const nuevosErrores = {
            nombre: validarObligatorio(nombre, 'El nombre es obligatorio'),
            email: validarEmail(email),
            direccion: validarObligatorio(direccion, 'La dirección es obligatoria para el envío')
        }
        
        setErrores(nuevosErrores)

        const sinErrores = Object.values(nuevosErrores).every((err) => err === '')

        if (sinErrores) {
            const esExito = Math.random() > 0.1 
            
            if (esExito) {
                const numeroOrden = Math.floor(Math.random() * 1000000)
                
                const nuevaOrden = {
                    id: numeroOrden,
                    fecha: new Date().toISOString(),
                    items: [...carrito.items],
                    total: carrito.totalPrecio,
                    cliente: { nombre, email, direccion },
                    estado: 'En preparación'
                }

                const pedidosExistentes = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
                localStorage.setItem('tienda_pedidos', JSON.stringify([nuevaOrden, ...pedidosExistentes]))

                carrito.clear()
                navigate(`/resultado?estado=exito&orden=${numeroOrden}&total=${carrito.totalPrecio}`)
            } else {
                navigate('/resultado?estado=error')
            }
        }
    }

    return {
        carrito,
        navigate,
        nombre,
        setNombre,
        email,
        setEmail,
        direccion,
        setDireccion,
        errores,
        manejarEnvio
    }
}