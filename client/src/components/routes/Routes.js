import { Switch, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Restaurants from '../pages/restaurants/Restaurants'
import RestaurantDetails from '../pages/restaurantDetails/Restaurant-details'

import IndexPage from '../pages/index/Index-page'
import PlacesDetails from '../pages/placesDetails/PlacesDetails'
import Places from '../pages/places/Places'
import NewRestaurant from '../pages/newRestaurant/NewRestaurant'


const Routes = ({ storeUser, handleAlert }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/:city/lugares-de-interes" exact render={props => <Places {...props} />} />
            <Route path="/:city/lugares-de-interes/detalles/:place_id" render={props => <PlacesDetails {...props} />} />
            <Route path="/:city/restaurantes" exact render={props => <Restaurants {...props} />} />
            <Route path="/:city/restaurantes/detalles/:restaurant_id" render={props => <RestaurantDetails {...props} />} />
            <Route path="/:city/restaurantes/nuevo"  render={props => <NewRestaurant/>} />
            <Route path="/registro" render={props => <Signup history={props.history} handleAlert={handleAlert} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
        </Switch>
    )
}



export default Routes