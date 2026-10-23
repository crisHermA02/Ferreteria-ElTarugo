import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TarjetaProducto } from './tarjeta-producto'

describe('TarjetaProducto', () => {
  it('Muestra un mensaje de estado cuando el catálogo de productos está vacío', () => {
    render(<TarjetaProducto productos={[]} />)

    const mensaje = screen.getByRole('status')
    expect(mensaje).toBeInTheDocument()
    expect(mensaje).toHaveTextContent('No hay productos que coincidan con tu búsqueda.')
  })

  it('Renderiza las tarjetas individuales para cada producto entregado en props', () => {
    const listaMock = [
      { id: 1, nombre: 'Ladrillo Prensado', precio: 500, stock: 10, categoria: 'Obra Gruesa' },
      { id: 2, nombre: 'Arena Fina 25kg', precio: 2500, stock: 5, categoria: 'Obra Gruesa' },
    ]

    render(<TarjetaProducto productos={listaMock} />)

    expect(screen.getByText('Ladrillo Prensado')).toBeInTheDocument()
    expect(screen.getByText('Arena Fina 25kg')).toBeInTheDocument()
  })
})