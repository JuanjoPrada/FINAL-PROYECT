import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './loginForm'

const Login = ({ storeUser, history }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <LoginForm storeUser={storeUser} history={history} />                    

                </Col>

            </Row>

        </Container>

    )
}

export default Login