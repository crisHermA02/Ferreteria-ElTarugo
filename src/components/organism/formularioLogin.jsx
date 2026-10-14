import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { CampoFormulario } from '../molecules/formulario'
import { Boton } from '../atoms/boton'
import { validarEmail, validarClave } from '../../utils/validaciones'

export function FormularioLogin(props) {
    const [email, setEmail] = useState('')
    const [clave, setClave] = useState('')
    const [errores, setErrores] = useState({})

    function manejarEnvio(evento) {
        evento.preventDefault()
        const nuevos = { email: validarEmail(email), clave: validarClave(clave) }
        setErrores(nuevos)
        if (nuevos.email === '' && nuevos.clave === '') {
            props.onEnviar({ email })
        }
    }

    return (
        <Form onSubmit={manejarEnvio} noValidate className="text-start">
            <CampoFormulario id="login-email" etiqueta="Correo" tipo="email" valor={email} onChange={setEmail} error={errores.email} />
            <CampoFormulario id="login-clave" etiqueta="Clave" tipo="password" valor={clave} onChange={setClave} error={errores.clave} />
            <div className="d-grid mt-4">
                <Boton type="submit" variant="warning">Ingresar</Boton>
            </div>
        </Form>
    )
}