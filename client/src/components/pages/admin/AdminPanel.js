import { Component } from 'react'
import PlacesService from './../../../service/places.service'
import RestaurantsService from './../../../service/restaurants.service'
import AdminPlacelist from './AdminPlaceList'
import AdminRestaurantlist from './AdminRestaurantList'
import { Container, Spinner, Row, Col, Button, Modal } from 'react-bootstrap'
import NewPlace from './../newPlace/NewPlace'
import NewRestaurant from './../newRestaurant/NewRestaurant'
import EditPlace from '../editPlace/EditPlace'
import EditRestaurant from '../editRestaurant/EditRestaurant'

class AdminPanel extends Component {

    constructor() {
        super()
        this.state = {
            places: undefined,
            restaurants: undefined,
            showModal: false,
            modalForm: null
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

    openCreatePlaceForm() {
        this.setState({
            modalForm: <NewPlace closeModalCreatePlace={() => this.setState({ showModal: false })} refreshPlaces={() => this.loadPlaces()} />,
            showModal: true
        })
    }

    openCreateRestaurantForm() {
        this.setState({
            modalForm: <NewRestaurant closeModalCreateRestaurant={() => this.setState({ showModal: false })} refreshRestaurants={() => this.loadRestaurants()} />,
            showModal: true
        })
    }

    openEditPlace(_id) {
        this.setState({
            modalForm: <EditPlace id={_id} closeModalEditPlace={() => this.setState({ showModal: false })} refreshPlaces={() => this.loadPlaces()} />,
            showModal: true
        })
    }

    openEditRestaurant(_id) {
        this.setState({
            modalForm: <EditRestaurant id={_id} closeModalEditRestaurant={() => this.setState({ showModal: false })} refreshRestaurants={() => this.loadRestaurants()} />,
            showModal: true
        })
    }
    render() {

        return (
            !this.state.places
                ?
                <Spinner animation="border" className="spinner" />
                :

                <Container>
                    <Row>
                        <Col lg={4}>
                            <Button onClick={() => this.openCreatePlaceForm()} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear Lugar de Interés</Button>
                            {this.state.places?.map(elm => <AdminPlacelist key={elm._id}{...elm} openEditPlace={(_id) => this.openEditPlace(_id)} deletePlace={() => this.deletePlace(elm._id)} />)}
                        </Col>
                        <Col lg={4}>
                            <Button onClick={() => this.openCreateRestaurantForm()} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear Restaurante</Button>
                            {this.state.restaurants?.map(elm => <AdminRestaurantlist key={elm._id}{...elm} openEditRestaurant={(_id) => this.openEditRestaurant(_id)} deleteRestaurant={() => this.deleteRestaurant(elm._id)} />)}
                        </Col>
                    </Row>
                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                        <Modal.Body>
                            {this.state.modalForm}
                        </Modal.Body>
                    </Modal>

                </Container>
        )
    }
}
export default AdminPanel
