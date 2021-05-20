import { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Modal, Spinner } from 'react-bootstrap'
import MapContainer from "../../shared/map/Map";
import './RestaurantDetails.css'
import logo from './../index/place-logo.png'


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
      <>
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
              <Link className="btn btn-outline-light back-button" to={`/${restaurant.city}/restaurantes`}>◁</Link>
            <Container>
              <Row className="justify-content-between details">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{ width: "100%" }}
                />
              </Row>
              <Row className="justify-content-between details">
                <Col lg={8}>
                  <h3>{restaurant.name}</h3>
                </Col>

                <Col lg={4}>
                  <p>
                    <img alt='place-logo' src={logo}></img>
                    {restaurant.address}
                  </p>
                  <p>
                    {restaurant.foodType}
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-between details">
                <p>{restaurant.description}</p>
              </Row>
              <Row >
                <MapContainer {...this.props} />
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}

export default RestaurantDetails