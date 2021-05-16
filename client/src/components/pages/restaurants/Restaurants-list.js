import { Component } from 'react'
import RestaurantsService from './../../../service/restaurants.service'
import RestaurantCard from './Restaurant-card'

import { Row, Button, Modal, Spinner } from 'react-bootstrap'
import NewRestaurant from '../newRestaurant/NewRestaurant'



class RestaurantsList extends Component {

    constructor() {
        super()
        this.state = {
            restaurants: undefined,
            showModal: false
        }
        this.restaurantsService = new RestaurantsService()
    }


    componentDidMount() {

        const {city} = this.props.match.params

        this.restaurantsService
            .getAllRestaurants(city)
            .then(response => this.setState({ restaurants: response.data }))
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

  

    render() {

        const  {restaurants}  = this.state

        return (
          <>
            <Button
              onClick={() => this.setState({ showModal: true })}
              variant="dark"
              size="sm"
              style={{ marginBottom: "20px" }}
            >
              Crear Restaurante
            </Button>

            {!restaurants ? (
              <Spinner animation="border" className="spinner" />
            ) : (
              <Row>
                {restaurants.map((elm) => (
                  <RestaurantCard key={elm._id} {...elm} />
                ))}
              </Row>
            )}
            <Modal
              show={this.state.showModal}
              onHide={() => this.setState({ showModal: false })}
            >
              <Modal.Header>
                {" "}
                <Modal.Title>Complete el formulario</Modal.Title>{" "}
              </Modal.Header>
              <Modal.Body>
                <NewRestaurant
                  closeModal={() => this.setState({ showModal: false })}
                  refreshCoasters={() => this.loadCoasters()}
                />
              </Modal.Body>
            </Modal>
          </>
        );
    }
}

export default RestaurantsList