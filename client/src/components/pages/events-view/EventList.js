import { Card, Col, Row } from "react-bootstrap";
import FavButton from "../../shared/favoriteButton/FavoriteButton";

const EventList = ({ images, name, url, dates, handleAlert, loggedUser, fetchUser, id }) => {
  const dateFormat = (str) => {
    const date = str.split("-");
    return `${date[2]}-${date[1]}-${date[0]}`;
  };

  const showDate = dateFormat(dates.start.localDate);
console.log(loggedUser.favouriteEvents, id, "salgo mil veces")
  return (
    <Col lg={4}>
      <Card className="events-card">
        <Card.Img className="img-card" variant="top" src={images[3].url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Fecha: {showDate}</Card.Text>
          <Card.Text>Hora: {dates.start.localTime}</Card.Text>
          <Row>
            <Card.Text>
              <a target="_blank" rel="noreferrer" href={url}>
                Mas Info
              </a>
            </Card.Text>
            <Card.Text>
              <FavButton
                added={loggedUser.favouriteEvents.includes(id)}
                palabra={"events"}
                id={id}
                loggedUser={loggedUser}
                fetchUser={fetchUser}
                handleAlert={handleAlert}
              />
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EventList;
