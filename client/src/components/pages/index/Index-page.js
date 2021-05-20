import { Link } from 'react-router-dom'
import { Card, Row, Col, Container } from "react-bootstrap";
import './Index.css'
import place from './place-dark.png'
import restaurant from './restaurant-logo.png'
import show from './show-logo.png'

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
                                <h2>La web donde descubrir los mejores planes cuando viajas</h2>
                            </Row>
                            <Row>
                                <Col md={4}><Card className="text-center card-size-front">
                                    <Card.Body>
                                        <img alt='place-logo' src={place}></img>
                                        <br></br>
                                        <br></br>
                                        <Card.Title>Descubre los lugares con más encanto</Card.Title>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}> <Card className="text-center card-size-front">
                                    <Card.Body>
                                        <img alt='place-logo' src={restaurant}></img>
                                        <br></br>
                                        <br></br>
                                        <Card.Title>Disfruta de la mejor gastronomía local</Card.Title>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}><Card className="text-center card-size-front">
                                    <Card.Body>
                                        <img alt='place-logo' src={show}></img>
                                        <br></br>
                                        <br></br>
                                        <Card.Title>No te pierdas lo último en espectáculos</Card.Title>
                                    </Card.Body>
                                </Card></Col>
¡                            </Row>
                        </Container>

                    </div>
                </section>
                <section>
                    <div className='explore'>
                        <Link to={'/ciudades'} >
                            <p className='explore-link'>¡Explora tu ciudad! </p>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default IndexPage