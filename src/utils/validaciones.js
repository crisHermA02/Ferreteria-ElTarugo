
export const validarTexto = (texto) => {
  return texto.trim().length > 0;
};

export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
