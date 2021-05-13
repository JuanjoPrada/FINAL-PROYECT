import { Component } from 'react'
import PlacesService from './../../../service/places.service'
import PlacesCard from './Places-card'
import { Row, Spinner } from 'react-bootstrap'

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
                <Spinner animation="border" className="spinner" />
                :
                <Row>
                    {places.map(elm => <PlacesCard key={elm._id}{...elm} />)}
                </Row>

        )
    }
}
export default PlacesList