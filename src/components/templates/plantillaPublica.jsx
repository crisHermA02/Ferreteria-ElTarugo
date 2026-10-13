import {useNavigate } from 'react-router-dom';
import Nav from "../organism/nav";
import Footer from "../organism/footer";

function PlantillaPublica({ children, onNavegar, cantidadCarrito }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Nav onNavegar={onNavegar} cantidadCarrito={cantidadCarrito} />
      <main className="container my-5 flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
}

export default PlantillaPublica;