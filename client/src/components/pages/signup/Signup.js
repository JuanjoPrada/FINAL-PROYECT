import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from './SignupForm'

const Signup = ({ history, handleAlert }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <SignupForm history={history} handleAlert={handleAlert} />

                </Col>

            </Row>

        </Container>

    )
}

export default Signup