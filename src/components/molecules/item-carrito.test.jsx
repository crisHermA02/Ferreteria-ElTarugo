import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ItemCarrito } from './item-carrito'

describe('ItemCarrito', () => {
  const itemMock = {
    producto: { id: 5, nombre: 'Manguera Tigre', precio: 12000 },
    cantidad: 2,
  }

  it('Calcula y muestra el subtotal correspondiente según la cantidad', () => {
    render(<ItemCarrito item={itemMock} onIncrement={() => {}} onRemove={() => {}} />)

    expect(screen.getByText('Manguera Tigre')).toBeInTheDocument()
    expect(screen.getByText('x2')).toBeInTheDocument()
    expect(screen.getByText('$24.000')).toBeInTheDocument()
  })

  it('Avisa al padre para incrementar o eliminar el ítem con su id exacto', async () => {
    const onIncrement = vi.fn()
    const onRemove = vi.fn()

    render(<ItemCarrito item={itemMock} onIncrement={onIncrement} onRemove={onRemove} />)

    await userEvent.click(screen.getByRole('button', { name: '+' }))
    expect(onIncrement).toHaveBeenCalledWith(5)

    await userEvent.click(screen.getByRole('button', { name: /quitar/i }))
    expect(onRemove).toHaveBeenCalledWith(5)
  })
})