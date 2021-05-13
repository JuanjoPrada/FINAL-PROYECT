import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/index/Index-page'
import PlacesDetails from '../pages/placesDetails/PlacesDetails'
import Places from './../pages/places/Places'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/:city/lugares-de-interes" exact render={props => <Places {...props} />} />
            <Route path="/:city/lugares-de-interes/detalles/:place_id" render={props => <PlacesDetails {...props}/>} />
 
        </Switch>
    )
}

export default Routes