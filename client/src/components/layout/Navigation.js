import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './Navigation.css'
import AuthService from '../../service/auth.service'

const Navigation = ({ loggedUser, storeUser, handleAlert }) => {

    const logout = () => {

        const authService = new AuthService()

        authService
            .logout()
            .then(() => {
                storeUser(undefined)
                handleAlert('Conexión Finalizada')
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">

            <Navbar.Brand>
                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}NameOfApp!
            </Navbar.Brand>

            <Nav className="mr-auto">
                
                {
                    !loggedUser ?
                        <>
                            <Link to="/registro" className="nav-link">Registro</Link>
                            <Link to="/inicio-sesion" className="nav-link">Iniciar sesión</Link>
                            <Link to="/inicio-sesion" className="nav-link">Contacto</Link>
                        </>
                        :
                        <>
                            <Link to="/inicio-sesion" className="nav-link">Mi Perfil</Link>
                            <Link to="/inicio-sesion" className="nav-link"><span onClick={() => logout()} className="nav-link">Cerrar sesión</span></Link>
                            
                            <Link to="/inicio-sesion" className="nav-link">Contacto</Link>
                        </>
                }


                <span className="nav-link">Hola, {loggedUser ? loggedUser.username : 'invitad@'}</span>
            </Nav>
        </Navbar>
    )
}

export default Navigation