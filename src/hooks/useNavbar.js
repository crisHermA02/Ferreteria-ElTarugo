import { useState } from 'react'

export function useNavbar(props) {
    const [texto, setTexto] = useState('')

    function ir(evento, ruta) {
        evento.preventDefault()
        if (props.onNavegar) {
            props.onNavegar(ruta)
        }
    }

    function buscar(evento) {
        evento.preventDefault()
        if (texto.trim() !== '' && props.onBuscar) {
            props.onBuscar(texto.trim())
        }
    }

    return {
        texto,
        setTexto,
        ir,
        buscar
    }
}