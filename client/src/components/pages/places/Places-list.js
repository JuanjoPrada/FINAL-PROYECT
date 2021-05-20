import { Component } from 'react'
import PlacesService from './../../../service/places.service'
import PlacesCard from './Places-card'
import { Row, Modal, Spinner, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PlacesList extends Component {

  constructor() {
    super()
    this.state = {
      places: undefined,
      showModal: true
    }
    this.placesService = new PlacesService()
  }

  componentDidMount() {
    this.loadPlace()

  }

  loadPlace() {
    const { city } = this.props.match.params
    this.placesService
      .getByCity(city)
      .then(response => this.setState({ places: response.data }))
      .catch(err => console.log('ERROR AL CARGAR LOS LUGARES', err))
  }

  render() {
    const { places } = this.state
    const { city } = this.props.match.params;

    return !places ? (
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Body>
            <Spinner animation="border" className="spinner" />
          </Modal.Body>
        </Modal>
    )
      : (
        <>
          <Link className="btn btn-outline-light back-button" to={`/${city}/categorias`}>◁</Link>
          <Container>
            <Row>
              {places.map((elm) => (
                <PlacesCard key={elm._id} {...elm} />
              ))}
            </Row>
          </Container>
        </>
      );
  }
}
export default PlacesList