import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthServices from "./../service/auth.service";
import Routes from "./routes/Routes";
import Alert from "./shared/alert/Alert";
import Navigation from "./layout/navigation/Navigation";
import { Modal, Spinner } from "react-bootstrap";

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedUser: null,
      showAlert: true,
      alertText: "",
      showModal: true
    }

    this.authService = new AuthServices()
  }

  storeUser = (loggedUser) => this.setState({ loggedUser })

  fetchUser = () => {

    this.authService
      .isloggedin()
      .then((response) => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }))
  }

  componentDidMount() {
    this.fetchUser()
  }

  handleAlert(alertText, showAlert = true) {
    this.setState({ showAlert, alertText })
  }

  render() {

    return (

      <>
        <Navigation
          loggedUser={this.state.loggedUser}
          storeUser={(user) => this.storeUser(user)}
          handleAlert={(alertText) => this.handleAlert(alertText)} />

        <main>

          {this.state.loggedUser !== null ?
            <Routes
              storeUser={(user) => this.storeUser(user)}
              loggedUser={this.state.loggedUser}
              handleAlert={(alertText) => this.handleAlert(alertText)}
            />
            :
            <Modal
              show={this.state.showModal}
              onHide={() => this.setState({ showModal: false })}
            >
              <Modal.Body>
                <Spinner animation="border" className="spinner" />
              </Modal.Body>
            </Modal>
          }

        </main>

        <Alert
          handleAlert={(alertText, showAlert) =>
            this.handleAlert(alertText, showAlert)
          }
          show={this.state.showAlert}
          text={this.state.alertText} />

      </>
    );
  }
}

export default App;
