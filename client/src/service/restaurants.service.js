import axios from 'axios'

class RestaurantsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/restaurants',
            withCredentials: true
        })
    }

    getAllRestaurants = (city) => this.app.get(`/getAllRestaurants/${city}`)
    getOneRestaurant = restaurant_id => this.app.get(`/getOneRestaurant/${restaurant_id}`)
    newRestaurant = (restaurantDetails) => this.app.post(`/newRestaurant`, restaurantDetails)
    editRestaurant = (restaurant) => this.app.put(`/editRestaurant/${restaurant._id}`, restaurant)
    // deleteRestaurant = restaurant_id => this.app.get(`/deleteRestaurant/${restaurant_id}`)
}

export default RestaurantsService