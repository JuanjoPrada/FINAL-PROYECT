import { Card, Col } from "react-bootstrap";
import TmasterApp from "../../../service/api-handler";
import { Component } from "react";

class FavouriteEventsCard extends Component {
  constructor() {
    super();
    this.state = {
      fav: undefined,
    };

    this.TmasterApp = new TmasterApp();
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    this.TmasterApp.searchById(this.props.eventId)
      .then((response) => {
        this.setState({ fav: response.data._embedded.events[0] });
      })
      .catch((err) => console.log("ERROR AL CARGAR LOS DATOS", err));
  }

  render() {
    return (
      <Col lg={4}>
        <Card className="event-list">
          <Card.Img variant="top" src={this.state.fav?.images[3].url} />
          <Card.Body>
            <Card.Title>{this.state.fav?.name}</Card.Title>
            <Card.Text>Fecha: {this.state.fav?.showDate}</Card.Text>
            <Card.Text>Hora: {this.state.fav?.dates.start.localTime}</Card.Text>
            <Card.Text>
              <a target="_blank" rel="noreferrer" href={this.state.fav?.url}>
                Mas Info
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default FavouriteEventsCard;
