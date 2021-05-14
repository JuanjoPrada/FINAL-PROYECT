import { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import AuthService from '../../../service/auth.service'
import { Link } from 'react-router-dom'

class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            name: '',
            surname: '',
            address: '',
            showModal: true
        }
        this.authService = new AuthService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(() => {
                this.setState({ showModal: false })
                this.props.handleAlert('Usuario resgistrado correctamente')
                this.props.history.push('/inicio-sesion')
            })
            .catch(err => {
                const errorMessage = err.response.data.message
                this.props.handleAlert(errorMessage)
            })
    }


    render() {

        return (
            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                <Modal.Header> <Modal.Title>Registro de usuario</Modal.Title> </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => this.handleSubmit(e)}>

                        <Form.Group controlId="username">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control type="text" value={this.state.username} onChange={e => this.handleInputChange(e)} name="username" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={e => this.handleInputChange(e)} name="password" />
                        </Form.Group>

                        <Form.Group controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                        </Form.Group>

                        <Form.Group controlId="surname">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" value={this.state.surname} onChange={e => this.handleInputChange(e)} name="surname" />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" value={this.state.address} onChange={e => this.handleInputChange(e)} name="address" />
                        </Form.Group>

                        <Button variant="dark" style={{ width: '100%', marginTop: '20px' }} type="submit">Registro</Button>
                        <p>Ya estas registrad@?</p>
                        <Link to="/inicio-sesion" className="btn btn-dark">Iniciar sesión</Link>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SignupForm