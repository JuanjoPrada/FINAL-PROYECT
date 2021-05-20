import ProfileService from "../../../service/profile.service"


const profileService = new ProfileService()

const FavButton = ( palabra, id) => {
  
  const onClick = () => {
    
    if(palabra === 'places'){
    
      profileService
      .favPlaces(id)
      .then(() => console.log(id)
      .catch((err) => console.log("ERROR AL GESTIONAR FAVORITOS", err))
    } else if(palabra === 'restaurant')
      
      
      profileService
      .favRestaurants(id)
      .then(() => console.log(id)
      .catch((err) => console.log("ERROR AL GESTIONAR FAVORITOS", err))
      
      profileService
      .favEvents(id)
      .then(() => console.log(id)
      .catch((err) => console.log("ERROR AL GESTIONAR FAVORITOS", err))

    }
    
  

  
  
  return (
    
    <Button onClick={onClick} to={`/${city}/lugares-de-interes/detalles/${_id}`}>Añadir fav</Button>
       
  );
};

export default FavButton;
