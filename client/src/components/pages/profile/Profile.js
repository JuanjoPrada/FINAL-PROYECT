import { Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
// import FavouriteCard from "./FavouriteCard"

const Profile = ({ loggedUser }) => {
  return (
    <>
      <h1>Perfilaco</h1>
      <Container className="profile-page">
        <ProfileCard {...loggedUser} />
        {console.log('-----------', loggedUser)}
        {/* <FavouriteCard {...loggedUser}/> */}
      </Container>
    </>
  );
};

export default Profile;
