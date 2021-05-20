import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import RestaurantsService from "../../../service/restaurants.service";
import PlacesService from "../../../service/places.service";
import './Map.css'

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: undefined,
      place: undefined,
      myMarkers: [{ latitude: undefined, longitude: undefined }],
    };
    this.restaurantService = new RestaurantsService();
    this.placeService = new PlacesService();
  }

  componentDidMount() {
    this.loadRestaurant()
    this.loadPlace();
  }

  loadPlace() {
    const placeID = this.props.match.params.place_id;

    this.placeService
      .getOnePlace(placeID)
      .then(async (response) => {
        await this.setState({ place: response.data });
        this.handlePlaceMark();
      });
  }

  loadRestaurant() {
    const restaurantId = this.props.match.params.restaurant_id;

    this.restaurantService
      .getOneRestaurant(restaurantId)
      .then(async (response) => {
        await this.setState({ restaurant: response.data });
        this.handleRestMark();
      });
  }

  handleRestMark() {
    this.setState({
      myMarkers: [
        {
          latitude: this.state.restaurant.location.coordinates[0],
          longitude: this.state.restaurant.location.coordinates[1],
        },
      ],
    });
  }

  handlePlaceMark() {
    this.setState({
      myMarkers: [
        {
          latitude: this.state.place.location.coordinates[0],
          longitude: this.state.place.location.coordinates[1],
        },
      ],
    });
  }

  displayMarkers = () => {
    return this.state.myMarkers.map((mark, index) => {
      return (
        <Marker
          position={{ lat: mark.latitude, lng: mark.longitude }}
        />
      );
    });
  };

  render() {

    const longitude = this.state.myMarkers[0].longitude
    const latitude = this.state.myMarkers[0].latitude

    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        height: "300px",
        margin: "0 auto",
      }}>
        {longitude &&
          <Map
          style={{
            width: "80%",
            height: "300px",
            margin: "0 auto",
            borderRadius: "10px"
          }}
          google={this.props.google}
          zoom={12}
          initialCenter={{ lat: latitude, lng: longitude }}
          disableDefaultUI={true}
          >
          {this.displayMarkers()}
          </Map>}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAr9ipwI-lyXYSq3UH8SZk23md2Wt6t77M",
})(MapContainer);
