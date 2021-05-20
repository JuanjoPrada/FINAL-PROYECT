import { ListGroup, Button } from 'react-bootstrap'

const AdminPlacelist = ({ name, _id, city, deletePlace, openEditPlace }) => {

    return (
        <>
            <ListGroup>
                <ListGroup.Item variant="info">{name} {city}
                    <Button className='edit-btn' edit-btn onClick={() => openEditPlace(_id)} variant="outline-secondary" size="sm" style={{ marginBottom: '20px' }}>Editar</Button>
                    <Button onClick={() => deletePlace(_id)} variant="outline-danger" >Eliminar</Button></ListGroup.Item>
            </ListGroup>
        </>

    )
}

export default AdminPlacelist


