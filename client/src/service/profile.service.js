import axios from "axios";

class ProfileService {
  
  constructor() {
    
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/profile",
    });
  }

  getFavs = () => this.app.get("/getFavs");
  
}

export default ProfileService;


