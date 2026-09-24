import { Container, Row, Col } from "react-bootstrap";
import panel from "../components/molecules/formulario";

function Login(props) {
  return (
    <Container>
      <Row>
        <Col key={m.id} xs={12} md={6} lg={4} className="panel-login">
        <Panel/>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;