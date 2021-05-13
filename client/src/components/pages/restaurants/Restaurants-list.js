import { Component } from 'react'
import RestaurantsService from './../../../service/restaurants.service'
import RestaurantCard from './Restaurant-card'

import { Row } from 'react-bootstrap'



class RestaurantsList extends Component {

    constructor() {
        super()
        this.state = {
            restaurants: undefined           
        }
        this.restaurantsService = new RestaurantsService()
    }


    componentDidMount() {

        const {city} = this.props.match.params

        this.restaurantsService
            .getAllRestaurants(city)
            .then(response => this.setState({ restaurants: response.data }))
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

  

    render() {

        const  {restaurants}  = this.state

        return (
            
           
            !restaurants
                ?
                <h1>CARGANDO</h1>
                :
                <Row>
                    {restaurants.map(elm => <RestaurantCard key={elm._id}{...elm} />)}  
                </Row>     
        )
    }
}

export default RestaurantsList