import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FavouriteRestaurantsCard = ({ image, name, _id, city }) => {
  return (
    <Col lg={4}>
      <Link to={`/${city}/restaurantes/detalles/${_id}`}>
        <Card className="favourite-card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default FavouriteRestaurantsCard;
