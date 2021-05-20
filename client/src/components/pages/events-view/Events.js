import { Component } from "react";
import TmasterApp from "../../../service/api-handler";
import { Container, Row, Modal, Spinner } from "react-bootstrap";
import EventList from "./EventList";
import Widget from "./widget";
import { Link } from 'react-router-dom'
import "./Events.css"

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: undefined,
    };

    this.tmasterApp = new TmasterApp();
  }

  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents() {

    const { city } = this.props.match.params;

    this.tmasterApp
      .searchAll(city)
      .then((response) => this.setState({ events: response.data._embedded.events }))
      .catch((err) => console.log("ERROR AL CARGAR LOS EVENTOS", err));
  }

  render() {

    const { city } = this.props.match.params;
    const { events } = this.state;

    return !events ? (
      <Modal
        show={this.state.showModal}
        onHide={() => this.setState({ showModal: false })}
      >
        <Modal.Body>
          <Spinner animation="border" className="spinner" />
        </Modal.Body>
      </Modal>
    ) : (
      <>
        <Link className="btn btn-outline-light back-button" to={`/${city}/categorias`}>◁</Link>
        <Container className="events-container">
          <Widget />
          <h1>Proximos Eventos en {city}</h1>
          <hr />
          <Row>
            {events.map((elm) => (
              <EventList key={elm.id} {...elm} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Events;
