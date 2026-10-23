import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Precio } from './precio'

describe('Precio', () => {
  it('Muestra únicamente el precio actual formateado cuando no hay oferta', () => {
    render(<Precio valor={15000} />)

    expect(screen.getByText('$15.000')).toBeInTheDocument()
    expect(screen.queryByLabelText('Precio anterior')).not.toBeInTheDocument()
  })

  it('Muestra el precio anterior tachado si este es mayor al valor actual', () => {
    render(<Precio valor={15000} anterior={20000} />)

    expect(screen.getByText('$15.000')).toBeInTheDocument()
    const precioAnterior = screen.getByLabelText('Precio anterior')
    expect(precioAnterior).toBeInTheDocument()
    expect(precioAnterior).toHaveTextContent('$20.000')
  })
})