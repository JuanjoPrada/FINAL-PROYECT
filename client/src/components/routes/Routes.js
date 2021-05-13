import { Switch, Route } from 'react-router-dom'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import Restaurants from '../pages/restaurants/Restaurants'
import RestaurantDetails from '../pages/restaurantDetails/Restaurant-details'

const Routes = ({ storeUser, handleAlert }) => {

    return (
        <Switch>
            <Route path="/registro" render={props => <Signup history={props.history} handleAlert={handleAlert} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} history={props.history} />} />
            <Route path="/:city/restaurantes" exact render={props => <Restaurants {...props}/>} />
            <Route path="/:city/restaurantes/detalles/:restaurant_id" render={props => <RestaurantDetails {...props} />} />
        </Switch>
    )
}

export default Routes