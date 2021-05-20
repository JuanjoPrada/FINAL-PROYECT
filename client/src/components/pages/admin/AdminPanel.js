import { Component } from 'react'
import PlacesService from './../../../service/places.service'
import RestaurantsService from './../../../service/restaurants.service'
import AdminPlacelist from './AdminPlaceList'
import AdminRestaurantlist from './AdminRestaurantList'
import { Container, Spinner, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AdminPanel extends Component {

    constructor() {
        super()
        this.state = {
            places: undefined,
            restaurants: undefined
        }
        this.placesService = new PlacesService()
        this.RestaurantsService = new RestaurantsService()

    }
    componentDidMount() {
        this.loadPlaces()
        this.loadRestaurants()

    }

    loadPlaces() {
        this.placesService
            .getAllPlaces()
            .then(response => this.setState({ places: response.data }))
            .catch(err => console.log('ERROR AL CARGAR LOS LUGARES', err))
    }

    loadRestaurants() {
        this.RestaurantsService
            .getAllRestaurants()
            .then(response => this.setState({ restaurants: response.data }))
            .catch(err => console.log('ERROR AL CARGAR LOS LUGARES', err))
    }

    deletePlace(_id) {
        this.placesService
            .deletePlace(_id)
            .then(() => this.loadPlaces())
            .catch(err => console.log(err))
    }
    deleteRestaurant(_id) {
        this.RestaurantsService
            .deleteRestaurant(_id)
            .then(() => this.loadRestaurants())
            .catch(err => console.log(err))
    }

    mostrar

    render() {

        return (
            !this.state.places
                ?
                <Spinner animation="border" className="spinner" />
                :

                <Container>
                    <Row>
                        <Col lg={4}>
                            < Link to={"/lugares-de-interes/crear"} > Crear nuevo lugar de interés</Link >
                            {this.state.places?.map(elm => <AdminPlacelist key={elm._id}{...elm} deletePlace={() => this.deletePlace(elm._id)} />)}
                        </Col >
                        <Col lg={4}>
                            < Link to={"/lugares-de-interes/crear"} > Crear nuevo lugar de interés</Link >
                            {this.state.restaurants?.map(elm => <AdminRestaurantlist key={elm._id}{...elm} deleteRestaurant={() => this.deleteRestaurant(elm._id)} />)}
                        </Col >
                    </Row>

                </Container>
        )
    }
}
export default AdminPanel