import axios from "axios";
class PlacesService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/places",
    });
  }
  getAllPlaces = () => this.app.get("/getAllPlaces/");
  getByCity = (city) => this.app.get(`/getAllPlaces/${city}`);
  editPlace = (place) => this.app.put(`/editPlace/${place._id}`, place);
  getOnePlace = (place_id) => this.app.get(`/getOnePlace/${place_id}`);
  createPlace = (PlacesDetails) => this.app.post(`/newPlace`, PlacesDetails);
}
export default PlacesService;
