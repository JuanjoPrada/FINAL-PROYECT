import { Switch, Route } from 'react-router-dom'
import Login from './../../components/pages/login/login'
import Signup from './../../components/pages/signup/signup'

const Routes = ({ storeUser, handleAlert }) => {

    return (
        <Switch>
            <Route path="/registro" render={props => <Signup history={props.history} handleAlert={handleAlert} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} history={props.history} />} />
        </Switch>
    )
}

export default Routes