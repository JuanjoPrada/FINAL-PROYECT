import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import PlacesService from '../../../service/places.service'
import UploadsService from '../../../service/uploads.service'

class NewPlace extends Component {
    constructor() {
        super()
        this.state = {
            place: {
                name: '',
                address: '',
                city: '',
                image: '',
                description: '',
                url: '',
                cost: '',
                location: { type: "Point", coordinates: [] },
            },
            showModal: true,
            isUploading: false
        }
        this.placesService = new PlacesService()
        this.uploadsService = new UploadsService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ place: { ...this.state.place, [name]: value } })
    }

    handleLocation(e) {
        const { name, value } = e.target
        const coords = [this.state.place.location.coordinates[0], this.state.place.location.coordinates[1]]

        if (name === "latitude") {
            coords[0] = value
        } else if (name === "longitude") {
            coords[1] = value
        }

        this.setState(
            {
                place: {
                    ...this.state.place,
                    location: { type: "Point", coordinates: coords }
                }
            })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.placesService
            .createPlace(this.state.place)
            .then(() => {
                this.props.closeModalCreatePlace()
                this.props.refreshPlaces()
            })
            .catch(err => console.log(err))
    }

    handleFileUpload(e) {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadimage(uploadData)
            .then(response => this.setState({ isUploading: false, place: { ...this.state.place, image: response.data.secure_url } }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)} closeModal={() => this.setState({ showModal: false })}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={e => this.handleInputChange(e)} name="address" />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" value={this.state.city} onChange={e => this.handleInputChange(e)} name="city" />
                </Form.Group>
                <Form.Group controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="text" value={this.state.url} onChange={e => this.handleInputChange(e)} name="url" />
                </Form.Group>
                <Form.Group controlId="cost">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" value={this.state.cost} onChange={e => this.handleInputChange(e)} name="cost" />
                </Form.Group>
                <Form.Group controlId="latitude">
                    <Form.Label>Latitud</Form.Label>
                    <Form.Control type="text" value={this.state.longitude} onChange={e => this.handleLocation(e)} name="latitude" />
                </Form.Group>
                <Form.Group controlId="longitude">
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="text" value={this.state.longitude} onChange={e => this.handleLocation(e)} name="longitude" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="image">
                    <Form.Label>Cargar imagen</Form.Label>
                    <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                </Form.Group>
                <br></br>
                <Button variant="dark" style={{ width: '100%' }} type="submit" disabled={this.state.isUploading}>
                    {this.state.isUploading ? 'Un momento...' : 'Crear lugar'}
                </Button>
            </Form>
        )
    }
}

export default NewPlace