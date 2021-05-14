import axios from 'axios'

class PlacesService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/places'
        })
    }

    getAllPlaces = (city) => this.app.get(`/getAllPlaces/${city}`)
    getOnePlace = (place_id) => this.app.get(`/getOnePlace/${place_id}`)
    
}

export default PlacesService