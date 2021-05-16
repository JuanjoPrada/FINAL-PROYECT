import { Card, Col } from "react-bootstrap";



const ProfileCard = ({ name, surname, username, address }) => {

  return (
    
    <Col lg={6}>
      <Card className="profile-card">
        <Card.Body>
          <Card.Title>
            Perfil de {name} {surname}{" "}
          </Card.Title>{" "}
          <Card.Text> Nombre de usuario: {username} </Card.Text>{" "}
          <Card.Text> Dirección: {address} </Card.Text>{" "}
        </Card.Body>
      </Card>{" "}
    </Col>
  );
};

export default ProfileCard;


