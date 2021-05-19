import axios from "axios";

class PlacesService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/places`,
      withCredentials: true,
    });
  }

  getAllPlaces = () => this.app.get("/getAllPlaces/");
  getByCity = (city) => this.app.get(`/getAllPlaces/${city}`);
  editPlace = (place) => this.app.put(`/editPlace/${place._id}`, place);
  getOnePlace = (place_id) => this.app.get(`/getOnePlace/${place_id}`);
  createPlace = (PlacesDetails) => this.app.post(`/newPlace`, PlacesDetails);
  deletePlace = (place_id) => this.app.delete(`/deletePlace/${place_id}`);
}

export default PlacesService;
