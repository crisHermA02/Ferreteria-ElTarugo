import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Boton } from './boton'

describe('Boton', () => {
  it('Renderiza el texto entregado y ejecuta onClick al presionar', async () => {
    const handleClick = vi.fn()
    render(<Boton onClick={handleClick}>Agregar</Boton>)

    await userEvent.click(screen.getByRole('button', { name: /agregar/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Desaprueba la interacción cuando la propiedad disabled es verdadera', async () => {
    const handleClick = vi.fn()
    render(<Boton disabled={true} onClick={handleClick}>Agregar</Boton>)

    const boton = screen.getByRole('button', { name: /agregar/i })
    expect(boton).toBeDisabled()

    await userEvent.click(boton)
    expect(handleClick).not.toHaveBeenCalled()
  })
})