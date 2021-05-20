import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../navigation/logo.png";
import "./Navigation.css";
import AuthService from "../../../service/auth.service";

const Navigation = ({ loggedUser, storeUser, handleAlert }) => {
  const logout = () => {
    const authService = new AuthService();

    authService
      .logout()
      .then(() => {
        storeUser(undefined);
        handleAlert("Conexión Finalizada");
      })
      .catch((err) => console.log(err));
  };

  return (

    <Navbar bg="dark" variant="dark" className="justify-content-between nav-bar">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          <img
            alt="Oh-my-plan-logo"
            src={logo}
            width="70"
            height="65"
            className="d-inline-block align-top nav-logo"
          />{" "}
        </Link>
      </Navbar.Brand>

      <Nav className="mr-auto">

        {
          !loggedUser ?
            <>
              <Link to="/inicio-sesion" className="nav-link">
                Iniciar sesión
            </Link>
            </>
            :
            <>
              <Link to="/perfil" className="nav-link">
                Mi Perfil
            </Link>

              {
                loggedUser.role === 'ADMIN'
                  ?
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                  :
                  ''
              }

              <Link to="/" className="nav-link">
                <span onClick={() => logout()} className="nav-link">
                  Cerrar sesión
              </span>
              </Link>
            </>
        }
        <Link to="/contacto" className="nav-link">
          Contacto
            </Link>

        {
          loggedUser ? <span className="nav-link"> {'¡Hola, ' + loggedUser.username + "!" } </span> : ''
        }
      </Nav>
    </Navbar>
  );
};

export default Navigation;
