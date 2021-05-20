import { Component } from 'react'
import RestaurantsService from './../../../service/restaurants.service'
import RestaurantCard from './Restaurant-card'
import {Link} from 'react-router-dom'
import { Row, Modal } from 'react-bootstrap'
import NewRestaurant from '../newRestaurant/NewRestaurant'



class RestaurantsList extends Component {

  constructor() {
    super()
    this.state = {
      restaurants: undefined,
      showModal: false
    }
    this.RestaurantsService = new RestaurantsService()
  }


  componentDidMount() {

    const { city } = this.props.match.params

    this.RestaurantsService
      .getRestaurantsByCity(city)
      .then(response => this.setState({ restaurants: response.data }))
      .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
  }



  render() {

    const { restaurants } = this.state

    return (
      <>
        <br></br>
        <Link className="btn btn-outline-light" to={`/:city/categorias`}> ← Volver</Link>
        <br></br>
        <br></br>
        {!restaurants
          ?
          <h1>CARGANDO</h1>
          :
          <Row>
            {restaurants.map(elm => <RestaurantCard key={elm._id}{...elm} />)}
          </Row>}
        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
          <Modal.Header> <Modal.Title>Complete el formulario</Modal.Title> </Modal.Header>
          <Modal.Body>
            <NewRestaurant closeModal={() => this.setState({ showModal: false })} refreshRestaurant={() => this.loadRestaurant()} />
          </Modal.Body>
        </Modal>

      </>

    )
  }
}

export default RestaurantsList