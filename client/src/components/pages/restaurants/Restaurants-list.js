import { Component } from 'react'
import RestaurantsService from './../../../service/restaurants.service'
import RestaurantCard from './Restaurant-card'
import {Link} from 'react-router-dom'
import { Row, Modal, Spinner } from 'react-bootstrap'

class RestaurantsList extends Component {

  constructor() {
    super()
    this.state = {
      restaurants: undefined,
      showModal: true
    }
    this.RestaurantsService = new RestaurantsService()
  }

  componentDidMount() {
    this.loadPlace()
  }

  loadPlace() {
    const { city } = this.props.match.params
    this.RestaurantsService
      .getRestaurantsByCity(city)
      .then(response => this.setState({ restaurants: response.data }))
      .catch(err => console.log('Error', err))
  }

  render() {
    const { restaurants } = this.state
    
    return !restaurants ? (
      <Modal
        show={this.state.showModal}
        onHide={() => this.setState({ showModal: false })}
      >
        <Modal.Body>
          <Spinner animation="border" className="spinner" />
        </Modal.Body>
      </Modal>
    ) : (
        <Row>
          <Link className="btn btn-outline-light" to={`/:city/categorias`}> ← Volver</Link>
          {restaurants.map((elm) => (
            <RestaurantCard key={elm._id} {...elm} />
        ))}
      </Row>
    );

  }
}

export default RestaurantsList