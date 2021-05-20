import { Row, Col } from "react-bootstrap";
import FavouritePlacesCard from "./FavouritePlacesCard";
import FavouriteRestaurantsCard from "./FavouriteRestaurantsCard";
import FavouriteEventsCard from "./FavouriteEventsCard"


const ShowFavourites = ({ places, restaurants, events }) => {
  return (
    <>
      <Row>
        <Col>
          <h2>Tus Lugares <br></br> Favoritos</h2>
          {places.map((elm) => (
            <FavouritePlacesCard key={elm._id} {...elm} />))}
        </Col>

        <Col>
          <h2>Tus Restaurantes<br></br> Favoritos</h2>
          {restaurants.map((elm) => (
            <FavouriteRestaurantsCard key={elm._id} {...elm} />))}
        </Col>

        <Col>
          <h2>Tus Eventos<br></br> Favoritos</h2>
          {events.map((elm, idx) => (
            <FavouriteEventsCard key={idx} eventId={elm} />))}
        </Col>
      </Row>
    </>
  );
};

export default ShowFavourites;
