import { ListGroup, Button } from 'react-bootstrap'

const AdminRestaurantlist = ({ name, _id, city, deleteRestaurant, openEditRestaurant }) => {
    return (
        <>
            <ListGroup>
                <ListGroup.Item variant="warning">{name} | {city} 
                    <Button className='edit-btn' onClick={() => openEditRestaurant(_id)} variant="outline-secondary" size="sm" style={{ marginBottom: '20px' }}>Editar</Button>
                    <Button onClick={() => deleteRestaurant(_id)} variant="outline-danger" >Eliminar</Button></ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default AdminRestaurantlist

