import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from './SignupForm'
import './../login/Login.css'

const Signup = ({ history, handleAlert }) => {

    return (
        <div className='login'>
            <Container>

                <Row className="justify-content-center">

                    <Col md={6}>

                        <SignupForm history={history} handleAlert={handleAlert} />

                    </Col>

                </Row>

            </Container>
        </div>

    )
}

export default Signup