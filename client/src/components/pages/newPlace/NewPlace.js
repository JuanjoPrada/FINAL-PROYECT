import { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import PlacesService from '../../../service/places.service'


class NewPlace extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            image: '',
            description: '',
            url: '',
            cost: '',
            location: 0,
            showModal: true
        }

        this.placesService = new PlacesService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.placesService
            .createPlace(this.state)
            .then(response => {
                this.props.closeModal()
                this.props.refreshCoasters()
            })
            .catch(err => console.log(err))
    }




    render() {

        return (
            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                <Modal.Header> <Modal.Title>Crear un nuevo lugar de interés</Modal.Title> </Modal.Header>
                <Modal.Body>
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

                        <Form.Group controlId="longitude">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="number" value={this.state.longitude} onChange={e => this.handleInputChange(e)} name="longitude" />
                        </Form.Group>
                        <Form.Group controlId="latitude">
                            <Form.Label>Latitud</Form.Label>
                            <Form.Control type="number" value={this.state.longitude} onChange={e => this.handleInputChange(e)} name="latitude" />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                        </Form.Group>

                        <Form.Group controlId="image">
                            <Form.Label>Cargar foto</Form.Label>
                            <Form.Control type="text" value={this.state.image} onChange={e => this.handleInputChange(e)} name="image" />
                        </Form.Group>

                        <Button variant="dark" style={{ width: '100%', marginTop: '20px' }} type="submit">Crear</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default NewPlace