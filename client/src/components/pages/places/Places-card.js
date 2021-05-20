import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../hoover/Hoover.css'
import './Places.css'

const PlacesCard = ({ image, name, cost, _id, city }) => {
    return (
        <Col lg={4}>
            <Link to={`/${city}/lugares-de-interes/detalles/${_id}`} >
                <Card className="places-card card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{cost}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col >
    )
}

export default PlacesCard