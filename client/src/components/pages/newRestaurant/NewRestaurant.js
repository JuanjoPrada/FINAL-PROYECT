import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import RestaurantsService from '../../../service/restaurants.service'
import UploadsService from '../../../service/uploads.service'

class NewRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: {
                name: "",
                address: "",
                city: "",
                foodType: "",
                image: '',
                description: "",
                recommendations: "",
                cost: "",
                location: "",
            },
            isUploading: false
        }

        this.restaurantService = new RestaurantsService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ restaurant: { ...this.state.restaurant, [name]: value } })
    }


    handleSubmit(e) {

        e.preventDefault()


        this.restaurantService
            .newRestaurant(this.state.restaurant)
            .then(() => {
                this.props.closeModal()
                this.props.refreshRestaurant()
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

    
                 <Form onSubmit={e => this.handleSubmit(e)}>

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

                <Form.Group controlId="foodType">
                    <Form.Label>Tipo de Comida</Form.Label>
                    <Form.Control as="select" value={this.state.foodType} onChange={e => this.handleInputChange(e)} name="foodType">
                    <option>variada</option> 
                    <option>italiana</option> 
                    <option>asiática</option>
                    <option>mediterránea</option>
                    <option>mexicana</option>
                    <option>turca</option>
                    <option>americana</option>
                    <option>vegana</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>

                <Form.Group controlId="recommendations">
                    <Form.Label>Platos Recomendados</Form.Label>
                    <Form.Control type="text" value={this.state.recommendations} onChange={e => this.handleInputChange(e)} name="recommendations" />
                </Form.Group>

                 <Form.Group controlId="cost">
                    <Form.Label>Coste</Form.Label>
                    <Form.Control as="select" value={this.state.cost} onChange={e => this.handleInputChange(e)} name="cost">
                    <option>€</option>
                    <option>€€</option>
                    <option>€€€</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="dark" style={{ width: '100%' }} type="submit" disabled={this.state.isUploading}>
                    {this.state.isUploading ? 'Un momento...' : 'Crear restaurante'}
                </Button>
            </Form>
        )
    }
}

export default NewRestaurant