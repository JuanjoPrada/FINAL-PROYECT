import { Link } from 'react-router-dom'
import { Card, Row, Col, Container } from "react-bootstrap";
import './Index.css'
import place from './place-dark.png'

const IndexPage = () => {
    return (
        <>
            <div className='main'>
                <section>
                    <hero>
                        <div className='hero'>
                            <h1>OH MY PLAN!</h1>
                        </div>
                    </hero>
                </section>
                <section>
                    <div className='card-container'>
                        <Container>
                            <Row>
                                <Col md={4}><Card>
                                    <Card.Body>
                                        <img alt='place-logo' src={place}></img>
                                        <Card.Title>Descubre los lugares con más encanto</Card.Title>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}> <Card>
                                    <Card.Body>
                                        <img alt='place-logo' src={place}></img>
                                        <Card.Title>Disfruta de la mejor gastronomía local</Card.Title>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}><Card>
                                    <Card.Body>
                                        <img alt='place-logo' src={place}></img>
                                        <Card.Title>No te pierdas lo último en espectáculos</Card.Title>
                                    </Card.Body>
                                </Card></Col>
                            </Row>
                        </Container>

                    </div>
                </section>
                <section>
                    <div className='explore'>
                        <Link to={'/ciudades'} >
                            <p className='explore-link'>Explora tu ciudad </p>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default IndexPage