import { Container } from 'react-bootstrap'
import RestaurantsList from './Restaurants-list'
import './Restaurants.css'

const Restaurants = (props) => {
    return (
      <Container className="restaurant-page">
        <RestaurantsList {...props} />
      </Container>
    );
}

export default Restaurants