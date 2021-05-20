import { Row } from "react-bootstrap";
import FavouritePlacesCard from "./FavouritePlacesCard";
import FavouriteRestaurantsCard from "./FavouriteRestaurantsCard";
import FavouriteEventsCard from "./FavouriteEventsCard"


const ShowFavourites = ({ places, restaurants, events }) => {
  return (
    <>
    
      <Row>
        <h2>Tus Lugares Favoritos</h2>
        {places.map((elm) => (
          <FavouritePlacesCard key={elm._id} {...elm} />))}
      </Row>

      <Row>
        <h2>Tus Restaurantes Favoritos</h2>
        {restaurants.map((elm) => (
          <FavouriteRestaurantsCard key={elm._id} {...elm} />))}
      </Row>

      <Row>
        <h2>Tus Eventos Favoritos</h2>
        {events.map((elm, idx) => (
          <FavouriteEventsCard key={idx} eventId={elm} />))}
      </Row>
    </>
  );
};

export default ShowFavourites;
