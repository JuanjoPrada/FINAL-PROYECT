import { Component } from "react";
import { Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import ProfileService from "../../../service/profile.service";
import ShowFavourites from "./ShowFavourites";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      places: [],
      restaurants: [],
      events: [],
    };
    this.profileService = new ProfileService();
  }

  componentDidMount() {
    this.getAllFavourites();
  }

  getAllFavourites() {
    this.profileService
      .getFavs()
      .then((response) => {
        console.log(response.data);
        this.setState({
          places: response.data.favouritePlaces,
          restaurants: response.data.favouriteRestaurants,
          events: response.data.favouriteEvents,
        });
      })
      .catch((err) => console.log("ERROR AL CARGAR LOS DATOS", err));
  }

  render() {
    return (
      <>
        <h1>Perfilaco</h1>
        <Container className="profile-page">
          <ProfileCard {...this.props.loggedUser} />
          <hr />
          <ShowFavourites {...this.state} />
        </Container>
      </>
    );
  }
}
export default Profile;
