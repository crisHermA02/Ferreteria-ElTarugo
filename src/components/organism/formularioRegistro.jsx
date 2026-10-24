import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { CampoFormulario } from '../molecules/formulario'
import { Boton } from '../atoms/boton'
import {
    validarObligatorio,
    validarEmail,
    validarClave,
    validarConfirmacion,
} from '../../utils/validaciones'

export function FormularioRegistro(props) {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [clave, setClave] = useState('')
    const [confirmacion, setConfirmacion] = useState('')
    const [errores, setErrores] = useState({})

    function manejarEnvio(evento) {
        evento.preventDefault()
        const nuevos = {
            nombre: validarObligatorio(nombre, 'El nombre es obligatorio.'),
            email: validarEmail(email),
            clave: validarClave(clave),
            confirmacion: validarConfirmacion(clave, confirmacion),
        }
        setErrores(nuevos)

        const sinErrores = Object.values(nuevos).every((mensaje) => mensaje === '')
        if (sinErrores) {
            props.onEnviar({ nombre: nombre.trim(), email: email.trim() })
        }
    }

    return (
        <Form onSubmit={manejarEnvio} noValidate className="text-start">
            <CampoFormulario id="registro-nombre" etiqueta="Nombre completo" valor={nombre} onChange={setNombre} error={errores.nombre} />
            <CampoFormulario id="registro-email" etiqueta="Correo" tipo="email" valor={email} onChange={setEmail} error={errores.email} />
            <CampoFormulario id="registro-clave" etiqueta="Clave" tipo="password" valor={clave} onChange={setClave} error={errores.clave} />
            <CampoFormulario id="registro-confirmacion" etiqueta="Confirmar clave" tipo="password" valor={confirmacion} onChange={setConfirmacion} error={errores.confirmacion} />
            <div className="d-grid mt-4">
                <Boton type="submit" variant="warning">Crear cuenta</Boton>
            </div>
        </Form>
    )
}

export default FormularioRegistro