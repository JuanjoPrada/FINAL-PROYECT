import ProfileService from "../../../service/profile.service"
import { Component } from "react";
import noFavPic from './noFavPic.png'
import favPic from './favPic.png'

class FavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: this.props.added,
      favIcon: favPic,
      noFavIcon: noFavPic
    };

    this.profileService = new ProfileService();
  }


  onClick() {
      
      let favService;
      switch (this.props.palabra) {
          case "places":
        favService = this.profileService.favPlaces(this.props.id);
        break;
      case "restaurants":
          favService = this.profileService.favRestaurants(this.props.id);
        break;
        case "events":
        favService = this.profileService.favEvents(this.props.id);
        break;
        
    }
    favService
    .then(() => {
        this.props.fetchUser();
        this.props.handleAlert("Gestionado en tus Favoritos");
        this.setState({ added: !this.state.added });
      })
      .catch((err) => console.log("ERROR AL GESTIONAR FAVORITOS", err));
  }

  render() {
    return (
        <img onClick={() => this.onClick()} src={this.state.added ? this.state.favIcon : this.state.noFavIcon} alt={'Fav Icon'} />
    );
  }
}

export default FavButton;
