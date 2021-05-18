import { Component } from "react";
import TmasterApp from "../../../service/api-handler";
import { Container, Row, Modal, Spinner } from "react-bootstrap";
import EventList from "./EventList";
import Widget from "./widget";

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

    const script = document.createElement("script");
    script.src =
      "https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js";
    document.body.append(script);
  }

  getAllEvents() {
    const { city } = this.props.match.params;

    this.tmasterApp
      .searchAll(city)
      .then((response) => {
        this.setState({ events: response.data._embedded.events });
        console.log("----------AQUI-------", this.state.events);
      })
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
      <Container>
        <Widget />
        <div
          w-type="event-discovery"
          w-tmapikey="oGfB9moRTPyVnKLJHowq3XANU6acUF4b"
          w-googleapikey="AIzaSyAr9ipwI-lyXYSq3UH8SZk23md2Wt6t77M"
          w-keyword=""
          w-theme="simple"
          w-colorscheme="light"
          w-width="1115"
          w-height="286"
          w-size="20"
          w-border="2"
          w-borderradius="6"
          w-postalcode=""
          w-radius="25"
          w-city=""
          w-period="month"
          w-layout="horizontal"
          w-attractionid=""
          w-promoterid=""
          w-venueid=""
          w-affiliateid=""
          w-segmentid=""
          w-proportion="custom"
          w-titlelink="off"
          w-sorting="groupByName"
          w-id="id_d3bah"
          w-countrycode="ES"
          w-source=""
          w-branding="Ticketmaster"
          w-latlong=""
        ></div>
        <h1>Proximos Eventos en {city}</h1>
        <hr />
        <Row>
          {events.map((elm) => (
            <EventList key={elm.id} {...elm} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default Events;
