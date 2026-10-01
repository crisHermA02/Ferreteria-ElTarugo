import { Container, Row, Col } from "react-bootstrap";
import Panel from "../components/molecules/formulario";
import Nav from "../components/organism/nav";

function Login() {

  return (
    <>
      <Nav titulo="El tarugo"/>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="panel-login">
            <Panel />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;