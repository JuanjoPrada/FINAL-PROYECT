import axios from 'axios'

class PlacesService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/places'
        })
    }

    getAllPlaces = (city) => this.app.get(`/getAllPlaces/${city}`)
    getOnePlace = (place_id) => this.app.get(`/getOnePlace/${place_id}`)
    createPlace = (PlacesDetails) => this.app.post(`/newPlace`, PlacesDetails)
    editPlace = (place) => this.app.put(`/editPlace/${place._id}`, {place})

}

export default PlacesService