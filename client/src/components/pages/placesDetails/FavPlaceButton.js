import ProfileService from "../../../service/profile.service"


const profileService = new ProfileService()

const FavPlaceButton = (palabra, id) => {
  //button onclick http://localhost:5000/api/profile//favPlaces/609db1bee5d0344fbd2b4fff

  const field = 'favourite' + {palabra}

  getStatus = (id) => {
      profileService
      .getFavs()
      .then((response) => response.data.favourite
  }

  profileService.favPlaces(id);
  return (
    
      <Link to={`/${city}/lugares-de-interes/detalles/${_id}`}>
       
  );
};

export default FavouriteEventsCard;
