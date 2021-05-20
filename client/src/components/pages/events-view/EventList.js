import { Card, Col } from "react-bootstrap";

const EventList = ({ images, name, url, dates }) => {
  const dateFormat = (str) => {
    const date = str.split("-");
    return `${date[2]}-${date[1]}-${date[0]}`;
  };

  const showDate = dateFormat(dates.start.localDate);

  return (
    <Col lg={4}>
      <Card className="event-list card">
        <Card.Img variant="top" src={images[3].url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Fecha: {showDate}</Card.Text>
          <Card.Text>Hora: {dates.start.localTime}</Card.Text>
          <Card.Text>
            <a target="_blank" rel="noreferrer" href={url}>
              Mas Info
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EventList;
