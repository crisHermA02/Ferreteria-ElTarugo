function sinMovimiento() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export function rebotar(elemento, escala = 1.06) {
  if (!elemento?.animate || sinMovimiento()) return
  elemento.animate(
    [
      { transform: 'scale(1)' },
      { transform: `scale(${escala})` },
      { transform: 'scale(0.97)' },
      { transform: 'scale(1)' },
    ],
    { duration: 380, easing: 'ease-out' },
  )
}

export function volarAlCarrito(origen) {
  const destino = document.querySelector('[data-carrito]')
  if (!origen?.animate || !destino || sinMovimiento()) return

  const desde = origen.getBoundingClientRect()
  const hasta = destino.getBoundingClientRect()
  if (hasta.width === 0) return

  const tamano = 28
  const dx = hasta.left + hasta.width / 2 - (desde.left + desde.width / 2)
  const dy = hasta.top + hasta.height / 2 - (desde.top + desde.height / 2)

  const burbuja = document.createElement('div')
  burbuja.textContent = '+1'
  burbuja.setAttribute('aria-hidden', 'true')
  Object.assign(burbuja.style, {
    position: 'fixed',
    left: `${desde.left + desde.width / 2 - tamano / 2}px`,
    top: `${desde.top + desde.height / 2 - tamano / 2}px`,
    width: `${tamano}px`,
    height: `${tamano}px`,
    borderRadius: '50%',
    background: '#ffc107',
    color: '#212529',
    font: '700 12px/28px system-ui, sans-serif',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
    pointerEvents: 'none',
    zIndex: '2000',
  })
  document.body.appendChild(burbuja)

  const vuelo = burbuja.animate(
    [
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      {
        transform: `translate(${dx * 0.45}px, ${dy * 0.45 - 70}px) scale(1.15)`,
        opacity: 1,
        offset: 0.4,
      },
      { transform: `translate(${dx}px, ${dy}px) scale(0.35)`, opacity: 0.85 },
    ],
    { duration: 750, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
  )

  vuelo.onfinish = () => {
    burbuja.remove()
    rebotar(destino, 1.15)
  }
  vuelo.oncancel = () => burbuja.remove()
}
