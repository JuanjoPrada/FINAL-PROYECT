import { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import PlacesService from '../../../service/places.service'


class EditPlace extends Component {
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
                _id: undefined
            },
            showModal: true,
            isUploading: false
        }

        this.placesService = new PlacesService()
    }

    componentDidMount() {
        this.setUpForm()
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
            .editPlace(this.state.place)
            .then(() => {
                this.setUpForm()
                this.props.history.push('/admin')
            })
            .catch(err => console.log(err))
    }


    setUpForm() {
        const placeId = (this.props.match.params).place_id

        this.placesService
            .getOnePlace(placeId)
            .then(response => {
                this.setState({ place: response.data })

            })
    }



    render() {

        return (
            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                <Modal.Header> <Modal.Title>Editar {this.state.place.name} </Modal.Title> </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => this.handleSubmit(e)} closeModal={() => this.setState({ showModal: false })}>

                        <Form.Group controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={this.state.place.name} onChange={e => this.handleInputChange(e)} name="name" />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" value={this.state.place.address} onChange={e => this.handleInputChange(e)} name="address" />
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" value={this.state.place.city} onChange={e => this.handleInputChange(e)} name="city" />
                        </Form.Group>


                        <Form.Group controlId="url">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" value={this.state.place.url} onChange={e => this.handleInputChange(e)} name="url" />
                        </Form.Group>

                        <Form.Group controlId="cost">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" value={this.state.place.cost} onChange={e => this.handleInputChange(e)} name="cost" />
                        </Form.Group>

                        <Form.Group controlId="latitude">
                            <Form.Label>Latitud</Form.Label>
                            <Form.Control type="text" value={this.state.place.location.coordinates[0]} onChange={e => this.handleLocation(e)} name="latitude" />
                        </Form.Group>

                        <Form.Group controlId="longitude">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="text" value={this.state.place.location.coordinates[1]} onChange={e => this.handleLocation(e)} name="longitude" />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" value={this.state.place.description} onChange={e => this.handleInputChange(e)} name="description" />
                        </Form.Group>

                        <Form.Group controlId="image">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                        </Form.Group>

                        <Button variant="dark" style={{ width: '100%', marginTop: '20px' }} type="submit">Editar: {this.state.place.name} </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default EditPlace