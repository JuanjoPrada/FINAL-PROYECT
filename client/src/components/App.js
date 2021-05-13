import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AuthServices from './../service/auth.service'
import Routes from './routes/routes'
import Alert from './shared/alert/alert'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      showAlert: true,
      alertText: ''
    }
    this.authService = new AuthServices()
  }

  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.authService
      .isloggedin()
      .then(response => this.setState({ loggedUser: response.data }))
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
      <h1>ESTAMOS IN</h1>
        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} handleAlert={alertText => this.handleAlert(alertText)} />
        </main>
          <Alert handleAlert={(alertText, showAlert) => this.handleAlert(alertText, showAlert)} show={this.state.showAlert} text={this.state.alertText} />
      </>
    )
  }
}

export default App
