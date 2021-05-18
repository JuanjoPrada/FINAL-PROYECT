import { Container } from 'react-bootstrap'
import RestaurantsList from './Restaurants-list'

import './Restaurants.css'

const Restaurants = (props) => {
    

    return (
      <Container className="restaurant-page">
        <h1>← Atrás</h1>
        <hr />
        <RestaurantsList {...props} />
       { console.log('asfafqeff',props)}
      </Container>
    );
}

export default Restaurants