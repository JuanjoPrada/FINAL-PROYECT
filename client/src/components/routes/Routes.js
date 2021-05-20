import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/index/Index-page'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Profile from '../pages/profile/Profile'
import Restaurants from '../pages/restaurants/Restaurants'
import RestaurantDetails from '../pages/restaurantDetails/Restaurant-details'
import PlacesDetails from '../pages/placesDetails/PlacesDetails'
import Places from '../pages/places/Places'
import AdminPanel from '../pages/admin/AdminPanel'
import Events from '../pages/events-view/Events'
import ContactPage from '../pages/contact/ContactPage'
import CityList from '../pages/cities/CityList'
import Categories from '../pages/categories/Categories'

const Routes = ({ storeUser, loggedUser, handleAlert, adminUser, fetchUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/ciudades" exact render={props => <CityList {...props} />} />
            <Route path="/:city/categorias" exact render={props => <Categories {...props} />} />
            <Route path="/contacto" exact render={() => <ContactPage />} />
            <Route path="/:city/lugares-de-interes" exact render={props => <Places {...props} />} />
            <Route path="/:city/lugares-de-interes/detalles/:place_id" render={props => <PlacesDetails {...props} />} />
            <Route path="/:city/restaurantes" exact render={props => <Restaurants {...props} />} />
            <Route path="/:city/restaurantes/detalles/:restaurant_id" render={props => <RestaurantDetails {...props} />} />
            <Route path="/registro" render={props => <Signup history={props.history} handleAlert={handleAlert} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/inicio-sesion" />} />
            <Route path="/:city/eventos" exact render={props => <Events loggedUser={loggedUser} handleAlert={handleAlert} fetchUser={fetchUser} {...props} />} />
            <Redirect to="/404" />
            <Route path="/contacto" exact render={() => <ContactPage/>} />
            <Route path="/admin" render={props => loggedUser.role === "ADMIN" ? <AdminPanel {...props} adminUser={adminUser} /> : <Redirect to="/inicio-sesion" />} />

        </Switch>
    )
}

export default Routes