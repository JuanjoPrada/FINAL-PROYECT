import { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'

class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
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
            .login(this.state)
            .then(response => {
                this.setState({ showModal: false })
                this.props.storeUser(response.data)
                this.props.history.push('/registro')          
            })
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                <Modal.Header> <Modal.Title>Iniciar sesión</Modal.Title> </Modal.Header>
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

                        <Button variant="dark" style={{ width: '100%', marginTop: '20px' }} type="submit">Iniciar sesión</Button>
                        <p>Aun no estas registra@?</p>
                        <Link to="/registro" className="btn btn-dark">Registrarse</Link>

                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default LoginForm


                        
                        
                            
                    
                    