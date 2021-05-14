import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'

const Login = ({ storeUser, history, handleAlert }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <LoginForm storeUser={storeUser} history={history} handleAlert={handleAlert} />                    

                </Col>

            </Row>

        </Container>

    )
}

export default Login