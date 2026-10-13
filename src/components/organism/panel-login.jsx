// useState guarda un dato que puede cambiar. Cuando cambia, React vuelve a dibujar.
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { CampoFormulario } from '../molecules/Formulario'
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
    <Form onSubmit={manejarEnvio} noValidate>
      <CampoFormulario id="login-email" etiqueta="Correo" tipo="email" valor={email} onChange={setEmail} error={errores.email} />
      <CampoFormulario id="login-clave" etiqueta="Clave" tipo="password" valor={clave} onChange={setClave} error={errores.clave} />
      <Boton type="submit">Ingresar</Boton>
    </Form>
  )
}