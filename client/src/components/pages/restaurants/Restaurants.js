import RestaurantsList from './Restaurants-list'
import './Restaurants.css'

const Restaurants = (props) => {
    return (
      <div className="restaurants-page">
        <RestaurantsList {...props} />
      </div>
    );
}

export default Restaurants