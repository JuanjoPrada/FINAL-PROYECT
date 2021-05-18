import { Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const Profile = ({ loggedUser }) => {
  console.log('datos del usuario', { ...loggedUser })
  return (
    <>
      <h1>Perfilaco</h1>
      <Container className="profile-page">
        <ProfileCard {...loggedUser} />
      </Container>
    </>
  );
};

export default Profile;
