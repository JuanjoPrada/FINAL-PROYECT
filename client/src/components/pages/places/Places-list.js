import { Component } from 'react'
import PlacesService from './../../../service/places.service'
import PlacesCard from './Places-card'
import { Row, Modal, Spinner } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class PlacesList extends Component {

    constructor() {
        super()
        this.state = {
            places: undefined
        }
        this.placesService = new PlacesService()
    }
    componentDidMount() {

        const { city } = this.props.match.params
        
        this.placesService
            .getByCity(city)
            .then(response => this.setState({ places: response.data }))
            .catch(err => console.log('ERROR AL CARGAR LOS LUGARES', err))

    }

    render() {
      const { places } = this.state
      
      return !places ? (
          <Modal
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
        >
          <br></br>
          <Link className="btn btn-outline-light" to={`/:city/categorias`}> ← Volver</Link>
          <br></br>
          <br></br>
            <Modal.Body>
              <Spinner animation="border" className="spinner" />
            </Modal.Body>
          </Modal>
        ) : (
          <Row>
            {places.map((elm) => (
              <PlacesCard key={elm._id} {...elm} />
            ))}
          </Row>
        );
    }
}
export default PlacesList