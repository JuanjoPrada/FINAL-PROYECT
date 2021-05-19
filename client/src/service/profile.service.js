import axios from "axios";

class ProfileService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/profile`,
      withCredentials: true,
    });
  }

  getFavs = () => this.app.get("/getFavs");
  favPlaces = (id) => this.app.post(`/favPlaces/${id}`);
  favRestaurants = (id) => this.app.post(`/favRestaurants/${id}`);
}

export default ProfileService;
