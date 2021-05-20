import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../hoover/Hoover.css'

const RestaurantCard = ({ name, image, _id, foodType, cost, city }) => {

    return (
        <Col lg={4}>
            <Link to={`/${city}/restaurantes/detalles/${_id}`} >
                <Card className="restaurant-card card">
                    <Card.Img className="img-card" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{foodType}</Card.Text>
                        <Card.Text>{cost}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default RestaurantCard