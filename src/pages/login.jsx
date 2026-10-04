import { Row, Col } from "react-bootstrap";
import PlantillaPublica from "../components/templates/plantillaPublica";
import Panel from "../components/molecules/formulario";

function Login({ onNavegar, cantidadCarrito }) {
  return (
    <PlantillaPublica onNavegar={onNavegar} cantidadCarrito={cantidadCarrito}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="panel-login">
          <Panel />
        </Col>
      </Row>
    </PlantillaPublica>
  );
}

export default Login;