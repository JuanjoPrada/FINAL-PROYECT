import { Switch, Route} from 'react-router-dom'
import Restaurants from '../pages/restaurants/Restaurants'
import RestaurantDetails from '../pages/restaurantDetails/Restaurant-details'


const Routes = ({ storeUser, loggedUser, handleAlert }) => {

    return (
        <Switch>
            <Route path="/:city/restaurantes" exact render={props => <Restaurants {...props}/>} />
            <Route path="/:city/restaurantes/detalles/:restaurant_id" render={props => <RestaurantDetails {...props} />} />
        </Switch>
    )
}

export default Routes