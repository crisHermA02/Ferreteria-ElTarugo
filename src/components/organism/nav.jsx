import { useState } from 'react';

function Nav({ onNavegar, cantidadCarrito = 0 }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const ir = (destino) => (e) => {
    if (!onNavegar) return;
    e.preventDefault();
    setMenuAbierto(false);
    onNavegar(destino);
  };

  return (
    <header className="bg-dark text-white border-bottom border-3 border-warning">
      <nav className="navbar navbar-expand-lg navbar-dark container py-2">
        <a className="navbar-brand d-flex align-items-center gap-2 text-white text-decoration-none" href="/src/inicio.jsx" onClick={ir("inicio")}>
          <img src="/src/assets/img/logo-2.png" alt="Logo EL TARUGO" width="200" height="100" />
        </a>

        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navBarTarugo" aria-expanded={menuAbierto} aria-label="Abrir navegación">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navBarTarugo">
          <ul className="navbar-nav ms-auto gap-lg-3 small align-items-lg-center">
            <li className="nav-item"><a href="#" className="nav-link text-white" onClick={ir("inicio")}>Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-white" onClick={ir("catalogo")}>Catálogo</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-white">Carrito{cantidadCarrito > 0 && <span className="badge text-bg-warning ms-1">{cantidadCarrito}</span>}</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-white">Mis Pedidos</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-white">Cuenta</a></li>
            <li className="nav-item"><a href="/src/pages/login" className="nav-link text-white">Iniciar Sesión</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-white">Registrarse</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;