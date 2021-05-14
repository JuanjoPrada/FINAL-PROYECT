import { Component } from 'react'
import PlacesService from './../../../service/places.service'
import PlacesCard from './Places-card'
import { Row, Modal, Spinner } from 'react-bootstrap'

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

        const { city } = this.props.match.params
        this.placesService
            .getAllPlaces(city)
            .then(response => this.setState({ places: response.data }))
            .catch(err => console.log('ERROR AL CARGAR LOS LUGARES', err))

        console.log('----------AQUI-------', this.props.match.params)
    }

    render() {
        const { places } = this.state

        return (
            !places
                ?
                <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                <Modal.Body>
                <Spinner animation="border" className="spinner" />
                </Modal.Body>
                </Modal>
                :
                
                <Row>
                    {places.map(elm => <PlacesCard key={elm._id}{...elm} />)}
                </Row>

        )
    }
}
export default PlacesList