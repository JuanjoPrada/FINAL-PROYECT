import { Row, Col } from "react-bootstrap";
import FavouriteEventsCard from "./FavouriteEventsCard"
// import FavouritePlacesCard from "./FavouritePlacesCard";
// import FavouriteRestaurantsCard from "./FavouriteRestaurantsCard";


const ShowFavourites = ({ places, restaurants, events }) => {
  return (
    <>
      <div className="profile-info">
        <Row>
            <h2>Tus Eventos Favoritos</h2>
            {events.map((elm, idx) => (
              <FavouriteEventsCard key={idx} eventId={elm} />))}
        </Row>
      </div>
      {/* <Col>
          <h2>Tus Lugares <br></br> Favoritos</h2>
          {places.map((elm) => (
            <FavouritePlacesCard key={elm._id} {...elm} />))}
        </Col>

        <Col>
          <h2>Tus Restaurantes<br></br> Favoritos</h2>
          {restaurants.map((elm) => (
            <FavouriteRestaurantsCard key={elm._id} {...elm} />))}
        </Col> */}

    </>
  );
};

export default ShowFavourites;
