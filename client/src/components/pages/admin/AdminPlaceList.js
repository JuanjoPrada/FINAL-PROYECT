import { ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminPlacelist = ({ name, _id, city, deletePlace}) => {
    return (
        <>
            <ListGroup>
                <ListGroup.Item variant="info">{name} {city} < Link to={`/editar/${_id}`}>Editar</Link> <Button onClick={()=>deletePlace(_id)}>Eliminar</Button></ListGroup.Item>
            </ListGroup>                                                            
        </>                         
    
    )
}

export default AdminPlacelist

    
