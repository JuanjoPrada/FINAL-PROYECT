import { ListGroup, Button } from 'react-bootstrap'

const AdminPlacelist = ({ name, _id, city, deletePlace, openEditPlace }) => {

    return (
        <>
            <ListGroup>
                <ListGroup.Item variant="info">{name} {city}
                    <Button onClick={() => openEditPlace(_id)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Editar</Button>
                    <Button onClick={() => deletePlace(_id)}>Eliminar</Button></ListGroup.Item>
            </ListGroup>
        </>

    )
}

export default AdminPlacelist


