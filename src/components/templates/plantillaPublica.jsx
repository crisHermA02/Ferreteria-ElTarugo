// src/components/templates/plantillaPublica.jsx
import Nav from "../organism/nav";
import Footer from "../organism/footer";

function PlantillaPublica({ children, onNavegar, cantidadCarrito }) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Nav onNavegar={onNavegar} cantidadCarrito={cantidadCarrito} />
      <main className="container my-5 flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
}

export default PlantillaPublica;