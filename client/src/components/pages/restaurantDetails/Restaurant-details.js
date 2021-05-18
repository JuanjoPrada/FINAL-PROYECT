import { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Modal, Spinner } from 'react-bootstrap'
import  MapContainer  from "../../shared/map/Map";

class RestaurantDetails extends Component {

    constructor() {
        super()
        this.state = {
            restaurant: undefined,
            showModal: true
        }
        this.restaurantService = new RestaurantsService()
    }

  
    componentDidMount() {

      const { restaurant_id } = this.props.match.params

        this.restaurantService
            .getOneRestaurant(restaurant_id)
            .then(response => this.setState({ restaurant: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { restaurant } = this.state

        return (
          <Container>
            {!this.state.restaurant ? (
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
                <Row className="justify-content-between">
                  <Col md={4}>
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col md={6}>
                    <h1>{restaurant.name}</h1>
                    <hr />
                    <h3>Información</h3>
                    <p>{restaurant.description}</p>
                    <hr />
                    <h3>Especificaciones</h3>
                    <p>
                      <strong>Dirección:</strong> {restaurant.address}
                    </p>
                    <p>
                      <strong>Tipo de Comida:</strong> {restaurant.foodType}
                    </p>
                    <hr />
                    <Link
                      to={`/${restaurant.city}/restaurantes`}
                      className="btn btn-dark"
                    >
                      Volver al listado
                    </Link>
                  </Col>
                </Row>
                <br></br>
                <Row>
                    <MapContainer {...this.props} />
                </Row>
              </>
            )}
          </Container>
        );
    }
}

export default RestaurantDetails