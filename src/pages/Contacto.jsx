import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { CampoFormulario } from '../components/molecules/formulario'
import { Boton } from '../components/atoms/boton'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { validarObligatorio, validarEmail } from '../utils/validaciones'

export function Contacto() {
  useTituloPagina('Contacto')

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevosErrores = {
      nombre: validarObligatorio(nombre, 'El nombre es obligatorio.'),
      email: validarEmail(email),
      mensaje: validarObligatorio(mensaje, 'El mensaje no puede estar vacío.'),
    }

    setErrores(nuevosErrores)

    const sinErrores = Object.values(nuevosErrores).every((err) => err === '')

    if (sinErrores) {
      setEnviado(true)
      setNombre('')
      setEmail('')
      setMensaje('')
      setErrores({})
    }
  }

  return (
    <PlantillaPublica>
      <div className="py-4">
        <h1 className="mb-4 text-warning fw-bold border-start border-4 border-warning ps-3">
          Contacto
        </h1>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h3 className="h4 mb-3">Envíanos un mensaje</h3>

              {enviado && (
                <div className="alert alert-success" role="alert">
                  ¡Gracias por contactarnos! Te responderemos a la brevedad.
                </div>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                <CampoFormulario
                  id="contacto-nombre"
                  etiqueta="Nombre completo"
                  valor={nombre}
                  onChange={setNombre}
                  error={errores.nombre}
                />

                <CampoFormulario
                  id="contacto-email"
                  etiqueta="Correo electrónico"
                  tipo="email"
                  valor={email}
                  onChange={setEmail}
                  error={errores.email}
                />

                <Form.Group className="mb-3" controlId="contacto-mensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    isInvalid={Boolean(errores.mensaje)}
                    placeholder="Escribe tu consulta aquí..."
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.mensaje}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid mt-4">
                  <Boton type="submit" variant="warning">
                    Enviar mensaje
                  </Boton>
                </div>
              </Form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm border-0 p-4 mb-4">
              <h3 className="h4 mb-3">Información de atención</h3>
              <p className="mb-1">
                <strong>Dirección:</strong> La Serena, Región de Coquimbo
              </p>
              <p className="mb-1">
                <strong>Teléfono:</strong> +56 51 234 5678
              </p>
              <p className="mb-1">
                <strong>Correo:</strong> contacto@eltarugo.cl
              </p>
              <p className="mb-0">
                <strong>Horario:</strong> Lunes a Sábado de 9:00 a 19:00 hrs
              </p>
            </div>

            <div className="card shadow-sm border-0 overflow-hidden">
              <iframe
                title="Ubicación Ferretería El Tarugo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110594.21557025807!2d-71.2829281143282!3d-29.90453237190011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca639dd61c9b%3A0xc3b8a3e742886f4a!2sLa%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}

export default Contacto