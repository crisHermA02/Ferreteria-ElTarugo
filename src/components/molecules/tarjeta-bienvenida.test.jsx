import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TarjetaBienvenida from './tarjeta-bienvenida'

describe('TarjetaBienvenida', () => {
  it('Muestra la información institucional y la dirección de la ferretería', () => {
    render(<TarjetaBienvenida />)

    const elementosUbicacion = screen.getAllByText(/La Serena, Región de Coquimbo/i)
    expect(elementosUbicacion.length).toBeGreaterThan(0)

    expect(screen.getByText(/22 años trabajando/i)).toBeInTheDocument()
  })

  it('Activa las funciones de navegación al hacer clic en los botones de acción', async () => {
    const onCatalogo = vi.fn()
    const onLogin = vi.fn()
    const onRegister = vi.fn()

    render(<TarjetaBienvenida onCatalogo={onCatalogo} onLogin={onLogin} onRegister={onRegister} />)

    await userEvent.click(screen.getByRole('button', { name: /ver catálogo/i }))
    expect(onCatalogo).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }))
    expect(onLogin).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole('button', { name: /crear cuenta/i }))
    expect(onRegister).toHaveBeenCalledTimes(1)
  })
})