import {  Row  } from "react-bootstrap";
import FavouriteCard from './FavouriteCard'

const ShowFavourites = ({ places, restaurants, events }) => {

  return (
    <>
      <h2>Tus Lugares Favoritos</h2>
      <Row>
        {places.map((elm) => (
          <FavouriteCard key={elm._id} {...elm} />
        ))}
      </Row>
      <h2>Tus Restaurantes Favoritos</h2>
      <Row>
        {restaurants.map((elm) => (
          <FavouriteCard key={elm._id} {...elm} />
        ))}
      </Row>
      <h2>Tus Eventos Favoritos</h2>
      <Row>
        {events.map((elm) => (
          <FavouriteCard key={elm._id} {...elm} />
        ))}
      </Row>
    </>
  );
};

export default ShowFavourites;
