import { ListGroup, Button } from 'react-bootstrap'

const AdminRestaurantlist = ({ name, _id, city, deleteRestaurant, openEditRestaurant }) => {
    return (
        <>
            <ListGroup>
                <ListGroup.Item variant="warning">{name} | {city} 
                    <Button onClick={() => openEditRestaurant(_id)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Editar</Button>
                    <Button onClick={() => deleteRestaurant(_id)}>Eliminar</Button></ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default AdminRestaurantlist

