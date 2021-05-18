import { ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const AdminRestaurantlist = ({ name, _id, city, deleteRestaurant }) => {
    return (
        <>
            <ListGroup>
                <ListGroup.Item variant="warning">{name} | {city} < Link to={`/editar/${_id}`}>Editar</Link>
                    <Button onClick={() => deleteRestaurant(_id)}>Eliminar</Button></ListGroup.Item>
            </ListGroup>
        </>

    )
}

export default AdminRestaurantlist

