import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./LoginForm";
import './Login.css'
const Login = ({ storeUser, history, handleAlert }) => {

  return (
    <div className='login'>
      <Container >
        <Row className="justify-content-center ">
          <Col md={6}>
            <LoginForm
              storeUser={storeUser}
              history={history}
              handleAlert={handleAlert}
            />
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Login;
