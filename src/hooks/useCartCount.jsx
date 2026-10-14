import { useCarrito } from '../context/CarritoContext';

export function useCartCount() {
  const { totalItems } = useCarrito();
  return totalItems;
}