import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/index/Index-page'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Profile from '../pages/profile/Profile'
import Restaurants from '../pages/restaurants/Restaurants'
import RestaurantDetails from '../pages/restaurantDetails/Restaurant-details'
import PlacesDetails from '../pages/placesDetails/PlacesDetails'
import Places from '../pages/places/Places'
import NewPlace from '../pages/newPlace/NewPlace'
import EditPlace from '../pages/editPlace/EditPlace'
import AdminPanel from '../pages/admin/AdminPanel'

const Routes = ({ storeUser, loggedUser, handleAlert }) => {
    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/:city/lugares-de-interes" exact render={props => <Places {...props} />} />
            <Route path="/:city/lugares-de-interes/detalles/:place_id" render={props => <PlacesDetails {...props} />} />
            <Route path="/lugares-de-interes/crear" render={props => <NewPlace {...props} />} />
            <Route path="/editar/:place_id" render={props => <EditPlace history={props.history}{...props} />} />
            <Route path="/lugares-de-interes/eliminar/:place_id" render={<Redirect to="/inicio-sesion" />} />
            <Route path="/:city/restaurantes" exact render={props => <Restaurants {...props} />} />
            <Route path="/:city/restaurantes/detalles/:restaurant_id" render={props => <RestaurantDetails {...props} />} />
            <Route path="/registro" render={props => <Signup history={props.history} handleAlert={handleAlert} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/inicio-sesion" />} />
            <Route path="/admin" exact render={props => <AdminPanel {...props} />} />
        </Switch>
    )
}

export default Routes

/* <Route path="/admin" render={() => loggedUser ? <AdminPanel loggedUser={loggedUser} /> : <Redirect to="/inicio-sesion" />} /> */