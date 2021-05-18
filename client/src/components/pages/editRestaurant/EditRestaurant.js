import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import RestaurantsService from '../../../service/restaurants.service'
import UploadsService from '../../../service/uploads.service'

class EditRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: {
                name: '',
                address: '',
                city: '',
                foodType: '',
                image: '',
                description: '',
                recommendations: '',
                cost: '',
                location: { type: "Point", coordinates: [] },
                _id: undefined
            },
            showModal: true,
            isUploading: false
        }

        this.restaurantService = new RestaurantsService()
        this.uploadsService = new UploadsService()
    }


    componentDidMount() {
        this.setUpForm()

    }

    setUpForm() {
        const restaurantId = (this.props.id)
        this.restaurantService
            .getOneRestaurant(restaurantId)
            .then((response) => {
                this.setState({ restaurant: response.data })
            })
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ restaurant: { ...this.state.restaurant, [name]: value } })
    }

    handleLocation(e) {
        const { name, value } = e.target
        const coords = [this.state.restaurant.location.coordinates[0], this.state.restaurant.location.coordinates[1]]

        if (name === "latitude") {
            coords[0] = value
        } else if (name === "longitude") {
            coords[1] = value
        }

        this.setState(
            {
                restaurant: {
                    ...this.state.restaurant,
                    location: { type: "Point", coordinates: coords }
                }
            })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.restaurantService
            .editRestaurant(this.state.restaurant)
            .then(() => {
                this.props.closeModalEditRestaurant()
                this.setUpForm()
                this.props.refreshRestaurants()
            })
            .catch(err => console.log(err))
    }


    handleFileUpload(e) {
        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadimage(uploadData)
            .then(response => this.setState({ isUploading: false, restaurant: { ...this.state.restaurant, image: response.data.secure_url } }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)} closeModal={() => this.setState({ showModal: false })}>

                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.name} onChange={e => this.handleInputChange(e)} name="name" />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.address} onChange={e => this.handleInputChange(e)} name="address" />
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.city} onChange={e => this.handleInputChange(e)} name="city" />
                </Form.Group>

                <Form.Group controlId="foodType">
                    <Form.Label>Tipo de comida</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.foodType} onChange={e => this.handleInputChange(e)} name="foodType" />
                </Form.Group>

                <Form.Group controlId="recommendations">
                    <Form.Label>Platos Recomendados</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.recommendations} onChange={e => this.handleInputChange(e)} name="recommendations" />
                </Form.Group>

                <Form.Group controlId="cost">
                    <Form.Label>Coste</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.cost} onChange={e => this.handleInputChange(e)} name="cost" />
                </Form.Group>

                <Form.Group controlId="latitude">
                    <Form.Label>Latitud</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.location.coordinates[0]} onChange={e => this.handleLocation(e)} name="latitude" />
                </Form.Group>

                <Form.Group controlId="longitude">
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="text" value={this.state.restaurant.location.coordinates[1]} onChange={e => this.handleLocation(e)} name="longitude" />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.restaurant.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                </Form.Group>
                <br></br>
                <Button variant="dark" style={{ width: '100%' }} type="submit" disabled={this.state.isUploading}>
                    {this.state.isUploading ? 'Un momento...' : 'Editar restaurante'}
                </Button>
            </Form>
        )
    }
}

export default EditRestaurant