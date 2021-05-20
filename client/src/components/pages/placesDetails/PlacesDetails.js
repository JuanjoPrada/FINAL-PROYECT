import { Component } from 'react'
import { Container, Spinner, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PlacesService from '../../../service/places.service'
import MapContainer from './../../shared/map/Map'
import './PlacesDetails.css'

class PlacesDetails extends Component {
  constructor() {
    super()
    this.state = {
      place: undefined
    }
    this.placesService = new PlacesService()
  }
  componentDidMount() {
    this.loadPlace()
  }

  loadPlace() {
    const { place_id } = this.props.match.params;

    this.placesService
      .getOnePlace(place_id)
      .then((response) => this.setState({ place: response.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { place } = this.state

    return (
      <>
        {!this.state.place ? (
          <Spinner animation="border" className="spinner" />
        ) : (
          <>
            <Link className="btn btn-outline-light back-button" to={`/${place.city}/lugares-de-interes`}>◁</Link>
            <Container className="details-container">
              <Row className="justify-content-between">
                <Col lg={4}>
                  <img
                    src={place.image}
                    alt={place.name}
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col lg={6}>
                  <h3>{place.name}</h3>
                  <p>{place.cost}</p>
                  <p>{place.description}</p>
                  <p>{place.url}</p>
                  <p>
                    {place.address} {place.city}
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <MapContainer {...this.props} />
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}

export default PlacesDetails
